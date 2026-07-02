import { PDFDocument, PDFPage, PDFFont, RGB, StandardFonts, rgb } from "pdf-lib";
import { hasPassedRequiredAssessment } from "@/lib/assessment/certificates";

type SupabaseClientLike = {
  from: (table: string) => any;
};

export type CertificateCourse = {
  id: string;
  title: string;
  slug?: string | null;
};

export type CertificateDetails = {
  studentName: string;
  courseTitle: string;
  issuedAt: Date;
};

export async function verifyCompletion(
  supabase: SupabaseClientLike,
  userId: string,
  courseId: string,
) {
  const { data: course } = await supabase
    .from("courses")
    .select("id, title, slug")
    .eq("id", courseId)
    .maybeSingle();

  if (!course) {
    return { complete: false, course: null as CertificateCourse | null };
  }

  const { data: purchase } = await supabase
    .from("course_purchases")
    .select("id")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .maybeSingle();

  if (!purchase) {
    return { complete: false, course };
  }

  const { data: modules } = await supabase
    .from("modules")
    .select("id")
    .eq("course_id", courseId);

  const moduleIds = modules?.map((module: { id: string }) => module.id) ?? [];

  if (moduleIds.length === 0) {
    return { complete: false, course };
  }

  const { data: lessons } = await supabase
    .from("lessons")
    .select("id")
    .in("module_id", moduleIds);

  const lessonIds = lessons?.map((lesson: { id: string }) => lesson.id) ?? [];

  if (lessonIds.length === 0) {
    return { complete: false, course };
  }

  const { data: progress } = await supabase
    .from("lesson_progress")
    .select("lesson_id, completed")
    .eq("user_id", userId)
    .in("lesson_id", lessonIds);

  const completedLessonIds = new Set(
    progress
      ?.filter((item: { completed: boolean }) => item.completed)
      .map((item: { lesson_id: string }) => item.lesson_id) ?? [],
  );

  const lessonsComplete = lessonIds.every((lessonId: string) =>
    completedLessonIds.has(lessonId),
  );

  if (!lessonsComplete) {
    return { complete: false, course };
  }

  const assessmentPassed = await hasPassedRequiredAssessment(
    supabase,
    userId,
    courseId,
  );

  return {
    complete: assessmentPassed,
    course,
  };
}

export function getStudentCertificateName(user: {
  user_metadata?: Record<string, unknown> | null;
}) {
  const metadata = user.user_metadata ?? {};
  const firstName = getMetadataString(metadata.first_name);
  const lastName = getMetadataString(metadata.last_name);
  const fullName = [firstName, lastName].filter(Boolean).join(" ").trim();

  return (
    fullName ||
    getMetadataString(metadata.full_name) ||
    getMetadataString(metadata.name) ||
    "Anexra Student"
  );
}

export function generateCertificate({
  studentName,
  courseTitle,
  issuedAt = new Date(),
}: CertificateDetails) {
  return {
    studentName: studentName || "Anexra Student",
    courseTitle,
    issuedAt,
    certificateId:
      "ANX-" +
      issuedAt.getFullYear() +
      "-" +
      Math.random().toString(36).slice(2, 10).toUpperCase(),
  };
}

export async function generatePDF(
  details: CertificateDetails,
  templateBytes: Uint8Array,
) {
  const certificate = generateCertificate(details);
  const pdfDoc = await PDFDocument.load(templateBytes);
  const page = pdfDoc.getPage(0);
  const font = await pdfDoc.embedFont(StandardFonts.TimesRomanBoldItalic);

  drawCenteredText(
    page,
    certificate.studentName,
    315,
    34,
    font,
    rgb(0.298, 0.09, 0.067),
  );

  return pdfDoc.save();
}

function getMetadataString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function drawCenteredText(
  page: PDFPage,
  text: string,
  y: number,
  size: number,
  font: PDFFont,
  color: RGB,
) {
  const { width } = page.getSize();
  const maxWidth = width * 0.58;
  let fontSize = size;
  let textWidth = font.widthOfTextAtSize(text, fontSize);

  while (textWidth > maxWidth && fontSize > 18) {
    fontSize -= 1;
    textWidth = font.widthOfTextAtSize(text, fontSize);
  }

  page.drawText(text, {
    x: (width - textWidth) / 2,
    y,
    size: fontSize,
    font,
    color,
  });
}

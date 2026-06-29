import { PDFDocument, PDFPage, PDFFont, RGB, StandardFonts, rgb } from "pdf-lib";

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

  return {
    complete: lessonIds.every((lessonId: string) =>
      completedLessonIds.has(lessonId),
    ),
    course,
  };
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
    certificateId: `ANX-${issuedAt.getFullYear()}-${Math.random()
      .toString(36)
      .slice(2, 10)
      .toUpperCase()}`,
  };
}

export async function generatePDF(details: CertificateDetails) {
  const certificate = generateCertificate(details);
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([842, 595]);
  const serifBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const sans = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const sansBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const { width, height } = page.getSize();
  const burgundy = rgb(0.298, 0.09, 0.067);
  const rose = rgb(0.529, 0.337, 0.357);
  const warm = rgb(0.957, 0.937, 0.933);

  page.drawRectangle({ x: 0, y: 0, width, height, color: warm });

  page.drawRectangle({
    x: 42,
    y: 42,
    width: width - 84,
    height: height - 84,
    borderColor: burgundy,
    borderWidth: 3,
  });

  page.drawRectangle({
    x: 58,
    y: 58,
    width: width - 116,
    height: height - 116,
    borderColor: rose,
    borderWidth: 1,
  });

  drawCenteredText(page, "ANEXRA", 505, 28, sansBold, burgundy);
  drawCenteredText(page, "Certificate of Completion", 438, 42, serifBold, burgundy);
  drawCenteredText(page, "This certificate is proudly presented to", 382, 15, sans, rose);
  drawCenteredText(page, certificate.studentName, 322, 36, serifBold, burgundy);
  drawCenteredText(page, "for successfully completing", 270, 15, sans, rose);
  drawCenteredText(page, certificate.courseTitle, 222, 28, serifBold, burgundy);

  drawCenteredText(
    page,
    `Issued on ${certificate.issuedAt.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`,
    150,
    14,
    sans,
    rose,
  );

  drawCenteredText(page, certificate.certificateId, 98, 11, sans, rose);

  page.drawLine({
    start: { x: 590, y: 128 },
    end: { x: 718, y: 128 },
    thickness: 1,
    color: burgundy,
  });

  page.drawText("Authorized Signatory", {
    x: 602,
    y: 105,
    size: 12,
    font: sans,
    color: rose,
  });

  return pdfDoc.save();
}

function drawCenteredText(
  page: PDFPage,
  text: string,
  y: number,
  size: number,
  font: PDFFont,
  color: RGB,
) {
  const textWidth = font.widthOfTextAtSize(text, size);
  const { width } = page.getSize();

  page.drawText(text, {
    x: (width - textWidth) / 2,
    y,
    size,
    font,
    color,
  });
}
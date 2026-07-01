import { readFile } from "fs/promises";
import path from "path";
import { NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import {
  generatePDF,
  getStudentCertificateName,
  verifyCompletion,
} from "@/lib/certificate";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  console.log("=== CERTIFICATE API HIT ===");
  const courseId = request.nextUrl.searchParams.get("courseId");
  const shouldDownload = request.nextUrl.searchParams.get("download") === "1";

  if (!courseId) {
    return Response.json({ error: "Course ID is required." }, { status: 400 });
  }

  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { complete, course } = await verifyCompletion(
    supabase,
    user.id,
    courseId,
  );

  if (!course) {
    return Response.json({ error: "Course not found." }, { status: 404 });
  }

  if (!complete) {
    return Response.json(
      { error: "Complete the course before downloading the certificate." },
      { status: 403 },
    );
  }

  const templateBytes = await readFile(
    path.join(
      process.cwd(),
      "public",
      "certificate",
      "cmtmp-certificate-template.pdf",
    ),
  );

  const pdfBytes = await generatePDF(
    {
      studentName: getStudentCertificateName(user),
      courseTitle: course.title,
      issuedAt: new Date(),
    },
    templateBytes,
  );

  const fileName =
    course.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") + "-certificate.pdf";

  const pdfArrayBuffer = pdfBytes.buffer.slice(
    pdfBytes.byteOffset,
    pdfBytes.byteOffset + pdfBytes.byteLength,
  ) as ArrayBuffer;

  console.log("PDF bytes length:", pdfBytes.length);
  console.log("First 10 bytes:", Array.from(pdfBytes.slice(0, 10)));

  return new Response(pdfArrayBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        (shouldDownload ? "attachment" : "inline") + '; filename="' + fileName + '"',
      "Cache-Control": "no-store",
    },
  });
}

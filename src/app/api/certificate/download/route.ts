import { NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { generatePDF, verifyCompletion } from "@/lib/certificate";

export async function GET(request: NextRequest) {
  const courseId = request.nextUrl.searchParams.get("courseId");

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

  const pdfBytes = await generatePDF({
    studentName:
      user.user_metadata?.full_name ??
      user.user_metadata?.name ??
      user.email ??
      "Anexra Student",
    courseTitle: course.title,
    issuedAt: new Date(),
  });

  const fileName = `${course.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}-certificate.pdf`;

 const pdfArrayBuffer = pdfBytes.buffer.slice(
    pdfBytes.byteOffset,
    pdfBytes.byteOffset + pdfBytes.byteLength,
  ) as ArrayBuffer;

  return new Response(pdfArrayBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Cache-Control": "no-store",
    },
  });
}
import { notFound, redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import PdfViewer from "@/components/PdfViewer";

interface PageProps {
  params: Promise<{
    year: string;
    subject: string;
    chapter: string;
  }>;
}

export default async function ChapterPage({
  params,
}: PageProps) {
  const today = new Date().toLocaleDateString();

  const { year, subject, chapter } =
    await params;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/student/login");
  }

  // Find subject
  const {
    data: currentSubject,
    error: subjectError,
  } = await supabase
    .from("subjects")
    .select("*")
    .eq("degree", "bpharm")
    .eq("year", year)
    .eq("slug", subject)
    .single();

  if (subjectError || !currentSubject) {
    notFound();
  }

  // Find chapter
  const {
    data: chapterData,
    error: chapterError,
  } = await supabase
    .from("chapters")
    .select("*")
    .eq("subject_id", currentSubject.id)
    .eq("slug", chapter)
    .single();

  if (chapterError || !chapterData) {
    notFound();
  }

  // Generate signed URL
  const {
    data,
    error,
  } = await supabase.storage
    .from("education-resources")
    .createSignedUrl(
      chapterData.storage_path,
      60 * 60
    );

  if (error || !data?.signedUrl) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#f4efee] px-6">
        <div className="rounded-2xl bg-white p-8 shadow-lg text-center">
          <h1 className="text-2xl font-bold text-red-600">
            Unable to load PDF
          </h1>

          <p className="mt-3 text-[#87565b]">
            {error?.message ??
              "Something went wrong while loading this file."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="
        min-h-screen
        bg-[#f4efee]
        px-4
        pt-32
        pb-10
      "
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold text-[#4c1711]">
          {chapterData.title}
        </h1>

        <p className="mb-6 text-[#87565b]">
          PDF Notes Viewer
        </p>

        <div className="relative overflow-hidden rounded-2xl border bg-white shadow-lg">
          {/* Watermark */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[9999]
              overflow-hidden
            "
          >
            {Array.from({ length: 20 }).map(
              (_, i) => (
                <div
                  key={i}
                  className="
                    absolute
                    rotate-[-30deg]
                    text-black/15
                    font-bold
                    text-xl
                    whitespace-nowrap
                  "
                  style={{
                    top: `${(i % 5) * 20}%`,
                    left: `${Math.floor(i / 5) * 25}%`,
                  }}
                >
                  ANEXRA • {user.email}
                </div>
              )
            )}
          </div>

          <PdfViewer
            pdfUrl={data.signedUrl}
            watermark={`ANEXRA • ${user.email} • ${today}`}
          />
        </div>
      </div>
    </section>
  );
}
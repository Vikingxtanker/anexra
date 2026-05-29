import { notFound, redirect } from "next/navigation";

import { subjectResources } from "@/data/subject-resources";
import { createClient } from "@/lib/supabase/server";

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
  const { subject, chapter } = await params;

  const subjectData =
    subjectResources[
      subject as keyof typeof subjectResources
    ];

  if (!subjectData) {
    notFound();
  }

  const chapterData = subjectData.notes.find(
    (note) => note.slug === chapter
  );

  if (!chapterData) {
    notFound();
  }

  const supabase = await createClient();

  // Optional: require login
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/student/login");
  }

  const { data, error } = await supabase.storage
    .from("education-resources")
    .createSignedUrl(
      chapterData.storagePath,
      60 * 60 // 1 hour
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
        relative
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

        <div className="overflow-hidden rounded-2xl border bg-white shadow-lg">
          <iframe
            src={data.signedUrl}
            className="h-[85vh] w-full"
            title={chapterData.title}
          />
        </div>
      </div>
    </section>
  );
}
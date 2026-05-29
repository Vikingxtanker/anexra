import { notFound } from "next/navigation";

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

  const { data } = supabase.storage
    .from("education-resources")
    .getPublicUrl(chapterData.storagePath);

  return (
    <section className="
            relative 
            min-h-screen 
            justify-center 
            bg-[#f4efee] 
            p-6 
            px-4
            pt-32
            pb-10 ">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold text-[#4c1711]">
          {chapterData.title}
        </h1>

        <p className="mb-6 text-[#87565b]">
          PDF Notes Viewer
        </p>

        <div className="overflow-hidden rounded-2xl border bg-white shadow-lg">
          <iframe
            src={data.publicUrl}
            className="h-[85vh] w-full"
            title={chapterData.title}
          />
        </div>
      </div>
    </section>
  );
}
import { FileText } from "lucide-react";

import Link from "next/link";

import { createClient } from "@/lib/supabase/server";

interface PageProps {
  params: Promise<{
    year: string;
    subject: string;
  }>;
}

export default async function SubjectPage({
  params,
}: PageProps) {
  const supabase = await createClient();

  const { year, subject } = await params;

  console.log("SUBJECT PAGE HIT");
  console.log("semester =", year);
  console.log("subject =", subject);

  const semesterMap: Record<string, string> = {
    "1st-semester": "1st Semester",
    "2nd-semester": "2nd Semester",
    "3rd-semester": "3rd Semester",
    "4th-semester": "4th Semester",
    "5th-semester": "5th Semester",
    "6th-semester": "6th Semester",
    "7th-semester": "7th Semester",
    "8th-semester": "8th Semester",
  };

  const semesterName = semesterMap[year];

  const { data: currentSubject, error: subjectError } =
    await supabase
      .from("subjects")
      .select("*")
      .eq("degree", "bpharm")
      .eq("year", year)
      .eq("slug", subject)
      .single();

  if (subjectError || !currentSubject) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-[#4c1711]">
          Subject Not Found
        </h1>
      </div>
    );
  }

  const { data: chapters } = await supabase
    .from("chapters")
    .select("*")
    .eq("subject_id", currentSubject.id)
    .order("created_at");

  const chapterList = chapters ?? [];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f4efee] via-white to-[#f4efee] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Subject Header */}
        <div className="mb-12">
          <div className="inline-flex items-center rounded-full bg-[#4c1711]/10 px-4 py-2 text-sm font-medium text-[#4c1711]">
            B.Pharm • {semesterName}
          </div>

          <h1 className="mt-4 text-4xl font-bold text-[#4c1711]">
            {currentSubject.name}
          </h1>

          <p className="mt-2 text-lg text-[#87565b]">
            Access notes, videos, question banks and learning
            resources.
          </p>
        </div>

        {/* Notes */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-[#4c1711]">
            Notes
          </h2>

          <p className="mb-6 text-[#87565b]">
            {chapterList.length} chapter
            {chapterList.length !== 1 ? "s" : ""} available
          </p>

          <div className="grid gap-6">
            {chapterList.length === 0 && (
              <div className="rounded-2xl border border-dashed p-8 text-center">
                <p className="text-[#87565b]">
                  Notes will be added soon.
                </p>
              </div>
            )}

            {chapterList.map((chapter) => (
              <Link
                key={chapter.title}
                href={`/student/dashboard/bpharm/${year}/${subject}/${chapter.slug}`}
              >
                <div
                  className="
                    flex items-center justify-between
                    rounded-2xl
                    border border-white/40
                    bg-white/50
                    p-6
                    backdrop-blur-xl
                    shadow-[0_8px_32px_rgba(76,23,17,0.08)]
                    transition-all duration-300
                    hover:-translate-y-1
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4c1711]/10">
                      <FileText className="h-6 w-6 text-[#4c1711]" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#4c1711]">
                        {chapter.title}
                      </h3>

                      <p className="text-sm text-[#87565b]">
                        PDF Notes
                      </p>
                    </div>
                  </div>

                  <span className="font-medium text-[#4c1711]">
                    Open →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-16 rounded-3xl border border-dashed border-[#87565b]/30 bg-white/30 p-8 text-center backdrop-blur-md">
          <h3 className="text-xl font-semibold text-[#4c1711]">
            More Resources Coming Soon
          </h3>

          <p className="mt-2 text-[#87565b]">
            Premium notes, full video courses, question banks,
            and chapter-wise study materials will be available
            here.
          </p>
        </div>
      </div>
    </section>
  );
}
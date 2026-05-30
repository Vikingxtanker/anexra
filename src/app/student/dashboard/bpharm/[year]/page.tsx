import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { pharmacyPrograms } from "@/data/pharmacy-programs";

interface PageProps {
  params: Promise<{
    year: string;
  }>;
}

export default async function BPharmSemesterPage({
  params,
}: PageProps) {
  const { year } = await params;

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

  const program = pharmacyPrograms["B.Pharm"];

  if (!semesterName) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-[#4c1711]">
          Semester Not Found
        </h1>
      </div>
    );
  }

  const subjects =
    program.semesters[
      semesterName as keyof typeof program.semesters
    ].subjects;

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f4efee] via-white to-[#f4efee] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center rounded-full bg-[#4c1711]/10 px-4 py-2 text-sm font-medium text-[#4c1711]">
            B.Pharm
          </div>

          <h1 className="mt-4 text-4xl font-bold text-[#4c1711]">
            {semesterName}
          </h1>

          <p className="mt-2 text-lg text-[#87565b]">
            {subjects.length} Subjects Available
          </p>
        </div>

        {/* Subject Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject) => (
            <Link
              key={subject.slug}
              href={`/student/dashboard/bpharm/${year}/${subject.slug}`}
            >
              <div
                className="
                  group cursor-pointer
                  rounded-3xl
                  border border-white/40
                  bg-white/50
                  p-8
                  backdrop-blur-xl
                  shadow-[0_8px_32px_rgba(76,23,17,0.08)]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_20px_40px_rgba(76,23,17,0.12)]
                "
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4c1711]/10">
                  <BookOpen className="h-7 w-7 text-[#4c1711]" />
                </div>

                <h2 className="mb-3 text-xl font-semibold text-[#4c1711]">
                  {subject.name}
                </h2>

                <p className="mb-4 text-sm text-[#87565b]">
                  Access notes, videos and study resources.
                </p>

                <div className="flex items-center font-medium text-[#4c1711]">
                  View Resources
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
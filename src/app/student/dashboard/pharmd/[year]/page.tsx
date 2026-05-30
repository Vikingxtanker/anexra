import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { pharmacyPrograms } from "@/data/pharmacy-programs";

interface PageProps {
  params: Promise<{
    year: string;
  }>;
}

export default async function PharmDYearPage({
  params,
}: PageProps) {
  const { year } = await params;

  const yearMap: Record<string, string> = {
    "1st-year": "1st Year",
    "2nd-year": "2nd Year",
    "3rd-year": "3rd Year",
    "4th-year": "4th Year",
    "5th-year": "5th Year",
  };

  const yearName = yearMap[year];

  const program = pharmacyPrograms["Pharm.D"];

  if (!yearName) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-[#4c1711]">
          Year Not Found
        </h1>
      </div>
    );
  }

  const subjects =
    program.years[
      yearName as keyof typeof program.years
    ].subjects;

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f4efee] via-white to-[#f4efee] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center rounded-full bg-[#4c1711]/10 px-4 py-2 text-sm font-medium text-[#4c1711]">
            Pharm.D
          </div>

          <h1 className="mt-4 text-4xl font-bold text-[#4c1711]">
            {yearName}
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
              href={`/student/dashboard/pharmd/${year}/${subject.slug}`}
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
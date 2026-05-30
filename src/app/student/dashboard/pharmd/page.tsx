import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { pharmacyPrograms } from "@/data/pharmacy-programs";

export default function PharmDPage() {
  const program = pharmacyPrograms["Pharm.D"];

  const years = Object.keys(program.years);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f4efee] via-white to-[#f4efee] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center rounded-full bg-[#4c1711]/10 px-4 py-2 text-sm font-medium text-[#4c1711]">
            Doctor of Pharmacy
          </div>

          <h1 className="mt-4 text-4xl font-bold text-[#4c1711]">
            Pharm.D
          </h1>

          <p className="mt-2 text-lg text-[#87565b]">
            Duration: {program.duration}
          </p>
        </div>

        {/* Year Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {years.map((year) => {
            const subjectCount =
              program.years[
                year as keyof typeof program.years
              ].subjects.length;

            return (
              <Link
                key={year}
                href={`/student/dashboard/pharmd/${year
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
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

                  <h2 className="mb-3 text-2xl font-semibold text-[#4c1711]">
                    {year}
                  </h2>

                  <p className="mb-6 text-[#87565b]">
                    {subjectCount} Subjects Available
                  </p>

                  <div className="flex items-center font-medium text-[#4c1711]">
                    View Subjects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
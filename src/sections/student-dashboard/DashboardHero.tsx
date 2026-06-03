"use client";

interface DashboardHeroProps {
  totalCourses: number;
  completedCourses: number;
  inProgressCourses: number;
  totalCompletedLessons: number;

  continueCourse?: any;

  continueProgress: number;
}

import { useState, useEffect } from "react";

import Link from "next/link";
import { GraduationCap, Search } from "lucide-react";
import { pharmacyPrograms } from "@/data/pharmacy-programs";

export default function DashboardHero({
    totalCourses,
    completedCourses,
    inProgressCourses,
    totalCompletedLessons,
    continueCourse,
    continueProgress,
  }: DashboardHeroProps) {
  const programs = Object.entries(pharmacyPrograms);

  const degreeSlugs: Record<string, string> = {
    "D.Pharm": "dpharm",
    "B.Pharm": "bpharm",
    "Pharm.D": "pharmd",
  };

  const [searchTerm, setSearchTerm] =
    useState("");

  type SearchResults = {
    subjects: {
      id: string;
      title: string;
    }[];

    chapters: {
      id: string;
      title: string;
    }[];
  };

  const [results, setResults] =
    useState<SearchResults | null>(null);

  useEffect(() => {
    const timeout = setTimeout(
      async () => {
        if (!searchTerm.trim()) {
          setResults(null);
          return;
        }

        const res = await fetch(
          `/api/search?q=${encodeURIComponent(
            searchTerm
          )}`
        );

        const data = await res.json();

        setResults(data);
      },
      300
    );

    return () =>
      clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 px-6 pb-16 bg-[#f4efee]">
      {/* Background Blur Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#c79da1]/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#87565b]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Hero Content */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#4c1711] md:text-6xl">
            Welcome to Anexra Education
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-[#87565b]">
            Explore pharmacy programs, access study resources,
            watch lectures, and enhance your learning journey.
          </p>
        </div>

        {/* Search Box */}
        <div className="mx-auto mb-16 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#87565b] z-10 pointer-events-none" />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search subjects or chapters..."
              className="w-full rounded-2xl border border-white/40 bg-white/60 py-4 pl-12 pr-4 text-[#4c1711] shadow-lg backdrop-blur-xl outline-none transition focus:ring-2 focus:ring-[#87565b]/30"
            />

            {results && (
              <div
                className="
                  absolute
                  top-full
                  left-0
                  right-0
                  mt-3
                  rounded-2xl
                  bg-white
                  shadow-xl
                  z-50
                  overflow-hidden
                "
              >
                {results.subjects?.map((subject) => (
                  <Link
                    key={subject.id}
                    href={`/student/subject/${subject.id}`}
                    className="
                      block
                      px-4
                      py-3

                      text-[#4c1711]

                      hover:bg-[#4c1711]/5
                    "
                  >
                    📚 {subject.title}
                  </Link>
                ))}

                {results.chapters?.map((chapter) => (
                  <Link
                    key={chapter.id}
                    href={`/student/chapter/${chapter.id}`}
                    className="
                      block
                      px-4
                      py-3

                      text-[#4c1711]

                      hover:bg-[#4c1711]/5
                    "
                  >
                    📖 {chapter.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Degree Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {programs.map(([degree, details]) => (
            <Link
              key={degree}
              href={`/student/dashboard/${degreeSlugs[degree]}`}
            >
              <div
                className="
                  group h-full rounded-3xl border border-white/40
                  bg-white/50 p-8 backdrop-blur-xl
                  shadow-[0_8px_32px_rgba(76,23,17,0.08)]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_20px_40px_rgba(76,23,17,0.12)]
                "
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4c1711]/10">
                  <GraduationCap className="h-8 w-8 text-[#4c1711]" />
                </div>

                <h2 className="mb-3 text-2xl font-bold text-[#4c1711]">
                  {degree}
                </h2>

                <p className="mb-6 text-[#87565b]">
                  Pharmacy education program designed to
                  provide comprehensive academic and
                  professional training.
                </p>

                <div className="mb-6 inline-flex rounded-full bg-[#4c1711]/10 px-4 py-2 text-sm font-medium text-[#4c1711]">
                  {details.duration}
                </div>

                <div className="flex items-center font-medium text-[#4c1711]">
                  Explore Program
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Student Progress */}
        <div className="mt-16 mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-[#4c1711]">
            Learning Progress
          </h3>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white/60 p-6 backdrop-blur-xl">
              <p className="text-sm text-[#87565b]">
                Enrolled Courses
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#4c1711]">
                {totalCourses}
              </h3>
            </div>

            <div className="rounded-2xl bg-white/60 p-6 backdrop-blur-xl">
              <p className="text-sm text-[#87565b]">
                Completed Courses
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#4c1711]">
                {completedCourses}
              </h3>
            </div>

            <div className="rounded-2xl bg-white/60 p-6 backdrop-blur-xl">
              <p className="text-sm text-[#87565b]">
                In Progress
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#4c1711]">
                {inProgressCourses}
              </h3>
            </div>

            <div className="rounded-2xl bg-white/60 p-6 backdrop-blur-xl">
              <p className="text-sm text-[#87565b]">
                Lessons Completed
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#4c1711]">
                {totalCompletedLessons}
              </h3>
            </div>
          </div>
        </div>

        {/* Continue Learning */}
        {continueCourse && (
          <div className="mb-16 overflow-hidden rounded-3xl bg-[#4c1711] text-white shadow-xl">
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm uppercase tracking-widest text-white/70">
                  Continue Learning
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {continueCourse.title}
                </h2>

                <p className="mt-3 text-white/80">
                  Pick up where you left off.
                </p>

                <div className="mt-6 max-w-md">
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{continueProgress}%</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-white/20">
                    <div
                      className="h-full rounded-full bg-white"
                      style={{
                        width: `${continueProgress}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <Link
                href={`/student/continue/${continueCourse.id}`}
                className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-medium text-[#4c1711] transition hover:bg-[#f4efee]"
              >
                Resume Course →
              </Link>
            </div>
          </div>
        )}

        {/* Future Features */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-[#4c1711]">
            Coming Soon
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Premium Notes",
              "Video Courses",
              "MCQ Question Banks",
            ].map((feature) => (
              <div
                key={feature}
                className="
                  rounded-2xl border border-white/40
                  bg-white/40 p-6 text-center
                  backdrop-blur-lg
                "
              >
                <div className="mb-2 text-2xl">🔒</div>

                <p className="font-medium text-[#4c1711]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
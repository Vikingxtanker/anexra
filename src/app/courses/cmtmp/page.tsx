"use client";

import Link from "next/link";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { X } from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  module_id: string;
}

interface Module {
  id: string;
  title: string;
  position: number;
  lessons: Lesson[];
}

interface Course {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  thumbnail_url: string;
  instructor: string;
  duration_hours: number;
  price: number;

  modules: Module[];
}

const outcomes = [
  "Perform structured medication reviews",
  "Identify drug therapy problems",
  "Improve patient counseling confidence",
  "Document pharmacist-led interventions",
];

const highlights = [
  {
    icon: Clock3,
    label: "Self-paced",
    value: "Learn anytime",
  },
  {
    icon: BookOpen,
    label: "Structured",
    value: "Practical modules",
  },
  {
    icon: Award,
    label: "Certificate",
    value: "After completion",
  },
  {
    icon: Users,
    label: "For students",
    value: "Pharm.D, B.Pharm, D.Pharm",
  },
];

const audiences = [
  {
    icon: Stethoscope,
    title: "Pharm.D Students",
  },
  {
    icon: ShieldCheck,
    title: "B.Pharm Students",
  },
  {
    icon: BookOpen,
    title: "D.Pharm Students",
  },
];

export default function CmtmpCoursePage() {

  const supabase = createClient();

  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    fetchCourse();
  }, []);

  async function fetchCourse() {
    const { data } = await supabase
      .from("courses")
      .select(`
        id,
        title,
        slug,
        short_description,
        thumbnail_url,
        instructor,
        duration_hours,
        price,

        modules (
          id,
          title,
          position,

          lessons (
            id,
            title,
            module_id
          )
        )
      `)
      .eq("slug", "cmtmp")
      .single();

    setCourse(data);
  }

  const moduleCount = course?.modules?.length ?? 0;

  const lessonCount =
    course?.modules?.reduce(
      (total, module) => total + (module.lessons?.length ?? 0),
      0
    ) ?? 0;

  if (!course) {
    return (
      <>
        <Navbar />
        <main className="pt-40 text-center">
          Loading...
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#f4efee] text-[#4c1711]">
        <section className="relative overflow-hidden px-6 pt-36 pb-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-[#aa6f73]/30 bg-white/40 px-4 py-2 text-sm font-semibold text-[#87565b]">
                Certificate Program
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                Clinical Medication Therapy Management Program
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#564740]">
                Build practical clinical pharmacy skills for medication review,
                therapy optimization, patient counseling, documentation, and
                pharmacist-led care planning.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/student/courses/cmtmp"
                  className="rounded-full bg-[#4c1711] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#aa6f73]"
                >
                  Enroll Now
                </Link>

                <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="
                              cursor-pointer
                              rounded-full
                              border
                              border-[#4c1711]/20
                              px-4
                              py-3
                              text-sm
                              text-[#4c1711]
                            "
                          >
                            Curriculum
                          </button>
                        </DialogTrigger>

                        <DialogContent
                          data-lenis-prevent
                          className="
                            !w-[95vw]
                            !max-w-6xl
                            h-[90vh]
                            overflow-hidden

                            border border-white/30
                            bg-white/15
                            backdrop-blur-3xl

                            shadow-[0_20px_60px_rgba(76,23,17,0.18)]
                            ring-1 ring-white/20

                            p-0
                            flex
                            flex-col
                          "
                        >

                          <DialogHeader
                            className="
                              relative
                              sticky top-0 z-30
                              flex-none
                              border-b
                              border-white/25

                              bg-white/10
                              backdrop-blur-2xl

                              px-8
                              py-6
                            "
                          >

                            <DialogClose asChild>
                              <button
                                className="
                                  absolute
                                  top-6
                                  right-6
                                  z-50

                                  flex
                                  items-center
                                  justify-center

                                  h-10
                                  w-10

                                  cursor-pointer

                                  rounded-full

                                  bg-white/10
                                  backdrop-blur-xl

                                  border
                                  border-white/20

                                  hover:bg-white/25
                                  hover:scale-105
                                  active:scale-95

                                  transition
                                "
                              >
                                <X size={18} />
                              </button>
                            </DialogClose>

                            <DialogTitle
                              className="
                                text-3xl
                                font-bold
                                text-[#4c1711]
                              "
                            >
                              {course.title}
                            </DialogTitle>

                            <DialogDescription className="text-[#564740]">
                              {course.short_description}
                            </DialogDescription>

                            <div className="grid grid-cols-3 gap-4 mt-6">
                              <div
                                className="
                                  rounded-2xl
                                  border border-white/20
                                  bg-white/10
                                  backdrop-blur-xl
                                  shadow-lg
                                  p-3
                                  text-center
                                "
                              >
                                <p className="text-xl font-semibold text-[#4c1711]">
                                  {moduleCount}
                                </p>
                                <p className="text-xs text-[#87565b]">
                                  Modules
                                </p>
                              </div>

                              <div
                                className="
                                  rounded-2xl
                                  border border-white/20
                                  bg-white/20
                                  backdrop-blur-xl
                                  p-3
                                  text-center
                                "
                              >
                                <p className="text-xl font-semibold text-[#4c1711]">
                                  {lessonCount}
                                </p>
                                <p className="text-xs text-[#87565b]">
                                  Lessons
                                </p>
                              </div>

                              <div
                                className="
                                  rounded-2xl
                                  border border-white/20
                                  bg-white/20
                                  backdrop-blur-xl
                                  p-3
                                  text-center
                                "
                              >
                                <p className="text-xl font-semibold text-[#4c1711]">
                                  {course.duration_hours}
                                </p>
                                <p className="text-xs text-[#87565b]">
                                  Hours
                                </p>
                              </div>
                            </div>
                          </DialogHeader>

                          <div
                            className="
                              flex-1
                              min-h-0
                              overflow-y-auto

                              px-8
                              py-6

                              space-y-4
                            "
                          >
                            {course.modules?.map((module) => (
                              <div
                                key={module.id}
                                className="
                                  rounded-3xl
                                  border
                                  border-white/25
                                  bg-white/10
                                  shadow-sm
                                  overflow-hidden
                                "
                              >
                                <div
                                  className="
                                    px-5
                                    py-4
                                    border-b
                                    border-white/20
                                    bg-white/40
                                  "
                                >
                                  <h3
                                    className="
                                      font-semibold
                                      text-lg
                                      text-[#4c1711]
                                    "
                                  >
                                    Module {module.position}: {module.title}
                                  </h3>

                                  <p className="text-sm text-[#87565b] mt-1">
                                    {module.lessons.length} lessons
                                  </p>
                                </div>

                                <div className="p-4">
                                  <div className="space-y-2">
                                    {module.lessons?.map((lesson) => (
                                      <div
                                        key={lesson.id}
                                        className="
                                          flex
                                          items-center
                                          gap-3
                                          rounded-lg
                                          px-3
                                          py-2
                                          hover:bg-[#f7f3f2]
                                        "
                                      >
                                        <div
                                          className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-[#aa6f73]
                                          "
                                        />

                                        <span className="text-[#564740]">
                                          {lesson.title}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    <div
                  className="
                    flex
                    items-center
                    rounded-full
                    border
                    border-[#aa6f73]/30
                    bg-white/60
                    px-6
                    py-3
                    backdrop-blur-md
                  "
                >
                  <span className="text-sm text-[#87565b] mr-2">
                    Price
                  </span>

                  <span className="text-xl font-bold text-[#4c1711]">
                    ₹{Number(course.price).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/30 bg-white/35 p-6 shadow-xl backdrop-blur-xl">
              <div className="rounded-2xl bg-[#4c1711] p-8 text-white">
                <GraduationCap className="h-12 w-12 text-[#f4efee]" />
                <h2 className="mt-8 text-3xl font-semibold">
                  CMTMP by Anexra
                </h2>
                <p className="mt-4 leading-relaxed text-white/75">
                  A focused learning path for pharmacy students who want to
                  develop real-world medication therapy management confidence.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/15 bg-white/10 p-4"
                      >
                        <Icon className="h-5 w-5 text-[#f4efee]" />
                        <p className="mt-3 text-sm text-white/60">
                          {item.label}
                        </p>
                        <p className="mt-1 font-semibold">{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-2xl border border-[#d8c7c9] bg-white p-6 shadow-sm"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#aa6f73]" />
                  <p className="mt-4 font-semibold text-[#4c1711]">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#aa6f73]">
                Who It Is For
              </span>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Designed for pharmacy learners preparing for clinical roles
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:col-span-2">
              {audiences.map((audience) => {
                const Icon = audience.icon;

                return (
                  <div
                    key={audience.title}
                    className="rounded-2xl border border-[#d8c7c9] bg-white p-6 shadow-sm"
                  >
                    <Icon className="h-7 w-7 text-[#aa6f73]" />
                    <p className="mt-5 text-lg font-semibold">
                      {audience.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#564740]">
                      Learn clinical pharmacy workflows with practical,
                      case-oriented examples.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-[#4c1711] p-8 text-white md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="text-3xl font-semibold">
                Ready to start CMTMP?
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                Create your student account, enroll in the program, complete
                the lessons, and unlock your certificate after completion.
              </p>
            </div>

            <Link
              href="/student/courses/cmtmp"
              className="shrink-0 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#4c1711] transition hover:bg-[#f4efee]"
            >
              Enroll Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

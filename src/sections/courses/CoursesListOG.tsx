"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Clock3, User } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  is_published: boolean;

  modules: Module[];
}

export default function CoursesList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    const { data, error } = await supabase
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
        is_published,

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
      .eq("is_published", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setCourses(data || []);
    }

    setLoading(false);
  }

  return (
    <section
      id="courses"
      className="relative py-24 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.25em] text-sm text-[#aa6f73]">
            Available Courses
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#4c1711]">
            Explore Our Learning Programs
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-[#564740] leading-relaxed">
            Gain practical pharmacy and healthcare skills through
            structured certificate programs designed to enhance
            clinical knowledge, professional growth, and career
            opportunities.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-[#564740]">
            Loading courses...
          </div>
        )}

        {/* Empty State */}
        {!loading && courses.length === 0 && (
          <div
            className="
              text-center
              rounded-3xl
              border border-white/20
              bg-white/10
              backdrop-blur-xl
              p-12
            "
          >
            <h3 className="text-2xl font-semibold text-[#4c1711]">
              No Courses Available
            </h3>

            <p className="mt-3 text-[#564740]">
              New courses will be published soon.
            </p>
          </div>
        )}

        {/* Course Grid */}
        {!loading && courses.length > 0 && (
          <div
            className="
              grid
              gap-8
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {courses.map((course) => {
              const moduleCount =
                course.modules?.length ?? 0;

              const lessonCount =
                course.modules?.reduce(
                  (total, module) =>
                    total + (module.lessons?.length ?? 0),
                  0
                ) ?? 0;

              return (

              <div
                key={course.id}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border border-white/20
                  bg-white/10
                  backdrop-blur-xl
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                {/* Thumbnail */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={course.thumbnail_url}
                    alt={course.title}
                    className="
                    h-full
                    w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      text-[#4c1711]
                      line-clamp-2
                    "
                  >
                    {course.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[#564740]
                      leading-relaxed
                      line-clamp-3
                    "
                  >
                    {course.short_description}
                  </p>

                  {/* Info */}
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <User
                        size={18}
                        className="text-[#aa6f73]"
                      />

                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#564740]/60">
                          Instructor
                        </p>

                        <p className="font-medium text-[#4c1711]">
                          {course.instructor}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock3
                        size={18}
                        className="text-[#aa6f73]"
                      />

                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#564740]/60">
                          Duration
                        </p>

                        <p className="font-medium text-[#4c1711]">
                          {course.duration_hours} Hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="rounded-xl bg-white/20 p-3 text-center">
                      <p className="text-xl font-semibold text-[#4c1711]">
                        {moduleCount}
                      </p>

                      <p className="text-xs text-[#564740]">
                        Modules
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/20 p-3 text-center">
                      <p className="text-xl font-semibold text-[#4c1711]">
                        {lessonCount}
                      </p>

                      <p className="text-xs text-[#564740]">
                        Lessons
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/20 p-3 text-center">
                      <p className="text-xl font-semibold text-[#4c1711]">
                        {course.duration_hours}
                      </p>

                      <p className="text-xs text-[#564740]">
                        Hours
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div
                    className="
                      mt-8
                      pt-6
                      border-t border-[#4c1711]/10
                    "
                  >
                    <div className="flex gap-2">
                      <Link
                        href={`/student/courses/${course.slug}`}
                        className="
                          flex-1
                          text-center
                          rounded-full
                          bg-[#4c1711]
                          px-6
                          py-3
                          text-sm
                          font-medium
                          text-white
                          hover:bg-[#aa6f73]
                          transition
                        "
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
                            max-h-[90vh]
                            overflow-hidden
                            border-none
                            bg-[#f4efee]
                            p-8
                          "
                        >

                          <DialogHeader className="pb-6 border-b">
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
                              <div className="rounded-xl bg-white p-3 text-center">
                                <p className="text-xl font-semibold text-[#4c1711]">
                                  {moduleCount}
                                </p>
                                <p className="text-xs text-[#87565b]">
                                  Modules
                                </p>
                              </div>

                              <div className="rounded-xl bg-white p-3 text-center">
                                <p className="text-xl font-semibold text-[#4c1711]">
                                  {lessonCount}
                                </p>
                                <p className="text-xs text-[#87565b]">
                                  Lessons
                                </p>
                              </div>

                              <div className="rounded-xl bg-white p-3 text-center">
                                <p className="text-xl font-semibold text-[#4c1711]">
                                  {course.duration_hours}
                                </p>
                                <p className="text-xs text-[#87565b]">
                                  Hours
                                </p>
                              </div>
                            </div>
                          </DialogHeader>

                          <div className="mt-6 max-h-[65vh] overflow-y-auto pr-2 space-y-4">
                            {course.modules?.map((module) => (
                              <div
                                key={module.id}
                                className="
                                  rounded-2xl
                                  border
                                  border-[#d8c7c9]
                                  bg-white
                                  overflow-hidden
                                "
                              >
                                <div
                                  className="
                                    px-5
                                    py-4
                                    bg-[#4c1711]/5
                                    border-b
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        )}
      </div>
    </section>
  );
}
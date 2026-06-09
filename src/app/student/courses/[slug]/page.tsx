import Link from "next/link";

import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { redirect } from "next/navigation";

import CoursePurchaseButton
from "@/components/course-purchase-button";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CoursePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const supabase = await createClient();

  const { data: course, error: courseError } =
    await supabase
      .from("courses")
      .select("*")
      .eq("slug", slug)
      .single();

  if (courseError || !course) {
    notFound();
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  let hasPurchased = false;

  if (user) {
    const { data: purchase } = await supabase
      .from("course_purchases")
      .select("id")
      .eq("user_id", user.id)
      .eq("course_id", course.id)
      .maybeSingle();

    hasPurchased = !!purchase;
  }

  const { data: modules } = await supabase
    .from("modules")
    .select("*")
    .eq("course_id", course.id)
    .order("position");

  const moduleIds =
    modules?.map((m) => m.id) ?? [];

  const { data: lessons } = await supabase
    .from("lessons")
    .select("*")
    .in("module_id", moduleIds)
    .order("position");

  const totalModules =
    modules?.length ?? 0;

  const totalLessons =
    lessons?.length ?? 0;

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 px-6 pb-16 bg-[#f4efee]">
      <div className="mx-auto max-w-7xl">

        {/* HERO */}
        <div className="grid gap-10 lg:grid-cols-2 items-center mb-16">
          <div>

            <h1 className="mt-5 text-5xl font-bold text-[#4c1711] leading-tight">
              {course.title}
            </h1>

            <p className="mt-5 text-lg text-[#87565b]">
              {course.short_description ||
                course.description ||
                "Build practical clinical knowledge through structured lessons, case studies, and pharmacist-led training."}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-[#4c1711]">
              <div>
                <p className="text-2xl font-bold">
                  {totalModules}
                </p>
                <p className="text-sm text-[#87565b]">
                  Modules
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  {totalLessons}
                </p>
                <p className="text-sm text-[#87565b]">
                  Lessons
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#4c1711]">
                  ₹{course.price}
                </span>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-[#4c1711] hover:bg-[#5f1d16]"
              >
                {hasPurchased ? (
                  <Link
                    href={`/student/continue/${course.id}`}
                  >
                    Continue Learning
                  </Link>
                ) : (
                  <CoursePurchaseButton
                    courseId={course.id}
                    amount={course.price}
                  />
                )}
              </Button>
            </div>
          </div>

          {/* THUMBNAIL */}
          <div>
            <div className="overflow-hidden rounded-3xl border border-[#d8c7c9] bg-white shadow-xl">
              <img
                src={
                  course.thumbnail_url ||
                  "https://placehold.co/1200x675/png?text=Anexra+Course"
                }
                alt={course.title}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CURRICULUM */}
        <div>
          <h2 className="mb-8 text-3xl font-bold text-[#4c1711]">
            Course Curriculum
          </h2>

          <div className="space-y-4">
            {modules?.map((module) => {
              const moduleLessons =
                lessons?.filter(
                  (lesson) =>
                    lesson.module_id === module.id
                ) ?? [];

              return (
                <Card
                  key={module.id}
                  className="border-[#d8c7c9]"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#4c1711]">
                      Module {module.position}:{" "}
                      {module.title}
                    </h3>

                    <ul className="mt-5 space-y-3">
                      {moduleLessons.map(
                        (lesson) => (
                          <li
                            key={lesson.id}
                            className="flex items-center justify-between rounded-lg border border-[#d8c7c9] bg-white px-4 py-3"
                          >
                            {hasPurchased ? (
                              <Link
                                href={`/student/courses/${slug}/lesson/${lesson.id}`}
                                className="text-[#4c1711] hover:underline"
                              >
                                {lesson.title}
                              </Link>
                            ) : (
                              <span className="text-[#4c1711]">
                                🔒 {lesson.title}
                              </span>
                            )}

                            <span className="text-sm text-[#87565b]">
                              {hasPurchased
                                ? "Available"
                                : "Preview Locked"}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-white border border-[#d8c7c9] p-10 text-center">
          <h2 className="text-3xl font-bold text-[#4c1711]">
            Start Learning Today
          </h2>

          <p className="mt-3 text-[#87565b]">
            Get instant access to all modules,
            lessons, future updates, and course
            materials.
          </p>

          <Button
            asChild
            size="lg"
          >
            {hasPurchased ? (
              <Link
                href={`/student/continue/${course.id}`}
              >
                Continue Learning
              </Link>
            ) : (
              <CoursePurchaseButton
                courseId={course.id}
                amount={course.price}
              />
            )}
          </Button>
        </div>

      </div>
    </section>
  );
}
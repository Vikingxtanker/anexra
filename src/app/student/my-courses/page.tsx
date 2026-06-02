import Link from "next/link";

import { createClient } from "@/lib/supabase/server";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Progress } from "@/components/ui/progress";

export default async function MyCoursesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // Get purchases
  const { data: purchases } = await supabase
    .from("course_purchases")
    .select(`
      course_id
    `)
    .eq("user_id", user.id);

  const courseIds =
    purchases?.map((p) => p.course_id) ?? [];

    const { data: userProgress } =
    await supabase
      .from("lesson_progress")
      .select("lesson_id, completed")
      .eq("user_id", user.id);

  const { data: modules } =
    await supabase
      .from("modules")
      .select("id, course_id");

  const { data: lessons } =
    await supabase
      .from("lessons")
      .select("id, module_id");

  // No purchases
  if (courseIds.length === 0) {
    return (
      <section className="relative min-h-screen overflow-hidden pt-32 px-6 pb-16 bg-[#f4efee]">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-[#4c1711]">
            My Courses
          </h1>

          <p className="mt-4 text-[#87565b]">
            You haven't enrolled in any courses yet.
          </p>

          <Button
            asChild
            className="mt-8 bg-[#4c1711] hover:bg-[#5f1d16]"
          >
            <Link href="/student/courses">
              Browse Courses
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  // Fetch purchased courses
  const { data: courses } = await supabase
    .from("courses")
    .select("*")
    .in("id", courseIds);
  
  const courseProgressMap = new Map<
    string,
    {
      percentage: number;
      completedLessons: number;
      totalLessons: number;
    }
  >();

  courses?.forEach((course) => {
    const courseModules =
      modules?.filter(
        (m) => m.course_id === course.id
      ) ?? [];

    const moduleIds =
      courseModules.map((m) => m.id);

    const courseLessons =
      lessons?.filter((l) =>
        moduleIds.includes(l.module_id)
      ) ?? [];

    const totalLessons =
      courseLessons.length;

    const completedLessons =
      courseLessons.filter((lesson) =>
        userProgress?.some(
          (p) =>
            p.lesson_id === lesson.id &&
            p.completed
        )
      ).length;

    const percentage =
      totalLessons > 0
        ? Math.round(
            (completedLessons /
              totalLessons) *
              100
          )
        : 0;

    courseProgressMap.set(
      course.id,
      {
        percentage,
        completedLessons,
        totalLessons,
      }
    );
  });

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 px-6 pb-16 bg-[#f4efee]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#4c1711]">
            My Courses
          </h1>

          <p className="mt-3 text-[#87565b]">
            Continue your learning journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses?.map((course) => {
            const progressData =
              courseProgressMap.get(course.id);

            const progress =
              progressData?.percentage ?? 0;

            return (
            <Card
              key={course.id}
              className="overflow-hidden border-[#d8c7c9] bg-white shadow-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={
                    course.thumbnail_url ||
                    "https://placehold.co/1200x675/png?text=Anexra+Course"
                  }
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <CardHeader>
                <h2 className="text-xl font-semibold text-[#4c1711]">
                  {course.title}
                </h2>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-[#87565b] line-clamp-3">
                  {course.short_description ||
                    course.description}
                </p>
                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-xs text-[#87565b]">
                    <span>Course Progress</span>
                    <span>{progress}%</span>
                  </div>

                  <Progress
                    value={progress}
                    className="h-2"
                  />

                  <p className="mt-2 text-xs text-[#87565b]">
                    {progressData?.completedLessons ?? 0}
                    {" / "}
                    {progressData?.totalLessons ?? 0}
                    {" "}lessons completed
                  </p>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-[#4c1711] hover:bg-[#5f1d16]"
                >
                  <Link
                    href={`/student/continue/${course.id}`}
                    >
                    {progress === 100
                      ? "Review Course"
                      : progress > 0
                      ? "Continue Learning"
                      : "Start Course"}
                    </Link>
                </Button>
              </CardFooter>
            </Card>
            );
            })}
        </div>
      </div>
    </section>
  );
}
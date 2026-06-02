import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import DashboardHero from "@/sections/student-dashboard/DashboardHero";

export default async function StudentDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/student/login");
  }

  // =========================
  // Purchased Courses
  // =========================

  const { data: purchases } = await supabase
    .from("course_purchases")
    .select("course_id")
    .eq("user_id", user.id);

  const courseIds =
    purchases?.map(
      (purchase) => purchase.course_id
    ) ?? [];

  // No courses purchased
  if (courseIds.length === 0) {
    return (
      <main className="min-h-screen bg-[#0F0F0F] text-white">
        <DashboardHero
          totalCourses={0}
          completedCourses={0}
          inProgressCourses={0}
          totalCompletedLessons={0}
          continueProgress={0}
        />
      </main>
    );
  }

  // =========================
  // Fetch Data
  // =========================

  const { data: courses } = await supabase
    .from("courses")
    .select("*")
    .in("id", courseIds);

  const { data: userProgress } =
    await supabase
      .from("lesson_progress")
      .select(
        "lesson_id, completed"
      )
      .eq("user_id", user.id);

  const { data: modules } =
    await supabase
      .from("modules")
      .select(
        "id, course_id"
      );

  const { data: lessons } =
    await supabase
      .from("lessons")
      .select(
        "id, module_id"
      );

  // =========================
  // Course Progress Map
  // =========================

  const courseProgressMap =
    new Map<
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
        (module) =>
          module.course_id ===
          course.id
      ) ?? [];

    const moduleIds =
      courseModules.map(
        (module) => module.id
      );

    const courseLessons =
      lessons?.filter(
        (lesson) =>
          moduleIds.includes(
            lesson.module_id
          )
      ) ?? [];

    const totalLessons =
      courseLessons.length;

    const completedLessons =
      courseLessons.filter(
        (lesson) =>
          userProgress?.some(
            (progress) =>
              progress.lesson_id ===
                lesson.id &&
              progress.completed
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

  // =========================
  // Dashboard Stats
  // =========================

  const totalCourses =
    courses?.length ?? 0;

  const completedCourses =
    courses?.filter((course) => {
      const progress =
        courseProgressMap.get(
          course.id
        );

      return (
        progress?.percentage ===
        100
      );
    }).length ?? 0;

  const inProgressCourses =
    courses?.filter((course) => {
      const progress =
        courseProgressMap.get(
          course.id
        );

      return (
        progress &&
        progress.percentage > 0 &&
        progress.percentage < 100
      );
    }).length ?? 0;

  const totalCompletedLessons =
    userProgress?.filter(
      (progress) =>
        progress.completed
    ).length ?? 0;

  // =========================
  // Continue Learning Course
  // =========================

  const continueCourse =
    courses
      ?.map((course) => ({
        course,
        progress:
          courseProgressMap.get(
            course.id
          ),
      }))
      .sort(
        (a, b) =>
          (b.progress
            ?.percentage ?? 0) -
          (a.progress
            ?.percentage ?? 0)
      )
      .at(0);

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <DashboardHero
        totalCourses={totalCourses}
        completedCourses={
          completedCourses
        }
        inProgressCourses={
          inProgressCourses
        }
        totalCompletedLessons={
          totalCompletedLessons
        }
        continueCourse={
          continueCourse?.course
        }
        continueProgress={
          continueCourse?.progress
            ?.percentage ?? 0
        }
      />
    </main>
  );
}
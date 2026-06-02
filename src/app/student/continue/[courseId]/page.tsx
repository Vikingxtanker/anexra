import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

interface PageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function ContinuePage({
  params,
}: PageProps) {
  const { courseId } = await params;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/student/login");
  }

  // Get course slug
  const { data: course } = await supabase
    .from("courses")
    .select("id, slug")
    .eq("id", courseId)
    .single();

  if (!course) {
    redirect("/student/my-courses");
  }

  // Get modules in proper order
  const { data: modules } = await supabase
    .from("modules")
    .select("*")
    .eq("course_id", courseId)
    .order("position", {
      ascending: true,
    });

  if (!modules?.length) {
    redirect("/student/my-courses");
  }

  const moduleIds =
    modules.map((m) => m.id);

  // Get all lessons
  const { data: lessons } = await supabase
    .from("lessons")
    .select("*")
    .in("module_id", moduleIds);

  if (!lessons?.length) {
    redirect("/student/my-courses");
  }

  // Build proper course order:
  // Module 1 Lesson 1
  // Module 1 Lesson 2
  // Module 2 Lesson 1
  // etc.
  const orderedLessons =
    modules.flatMap((module) =>
      lessons
        .filter(
          (lesson) =>
            lesson.module_id === module.id
        )
        .sort(
          (a, b) =>
            a.position - b.position
        )
    );

  // Get completed lessons
  const { data: progress } = await supabase
    .from("lesson_progress")
    .select("lesson_id")
    .eq("user_id", user.id)
    .eq("completed", true);

  const completedLessonIds =
    progress?.map(
      (p) => p.lesson_id
    ) ?? [];

  // Find first incomplete lesson
  const nextLesson =
    orderedLessons.find(
      (lesson) =>
        !completedLessonIds.includes(
          lesson.id
        )
    ) ?? orderedLessons[0];

  if (!nextLesson) {
    redirect(
      `/student/courses/${course.slug}`
    );
  }

  console.log(
    "ORDERED LESSONS:",
    orderedLessons.slice(0, 15).map((l) => ({
        title: l.title,
        module_id: l.module_id,
        position: l.position,
    }))
    );

    console.log("NEXT LESSON:", nextLesson);

  redirect(
    `/student/courses/${course.slug}/lesson/${nextLesson.id}`
  );
}
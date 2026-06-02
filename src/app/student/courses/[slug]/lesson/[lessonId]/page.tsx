import Link from "next/link";

import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

import CourseVideoPlayer from "@/components/course-video-player";

interface PageProps {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
}

export default async function LessonPage({
  params,
}: PageProps) {
  const { slug, lessonId } = await params;

  const supabase = await createClient();

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/student/login");
  }

  // Get lesson
  const { data: lesson, error: lessonError } =
    await supabase
      .from("lessons")
      .select("*")
      .eq("id", lessonId)
      .single();

  if (lessonError || !lesson) {
    notFound();
  }

  // Get module
  const { data: module } = await supabase
    .from("modules")
    .select("*")
    .eq("id", lesson.module_id)
    .single();

  if (!module) {
    notFound();
  }

  // Get course
  const { data: course } = await supabase
    .from("courses")
    .select("*")
    .eq("id", module.course_id)
    .single();
  
  // Get all modules in order
  const { data: modules } = await supabase
    .from("modules")
    .select("*")
    .eq("course_id", course.id)
    .order("position");

  // Get all lessons
  const moduleIds =
    modules?.map((m) => m.id) ?? [];

  const { data: allLessons } = await supabase
    .from("lessons")
    .select("*")
    .in("module_id", moduleIds);

  // Build proper course order
  const orderedLessons =
    modules?.flatMap((module) =>
      allLessons
        ?.filter(
          (lesson) =>
            lesson.module_id === module.id
        )
        .sort(
          (a, b) =>
            a.position - b.position
        ) ?? []
    ) ?? [];

  const currentIndex =
    orderedLessons.findIndex(
      (l) => l.id === lesson.id
    );

  const previousLesson =
    currentIndex > 0
      ? orderedLessons[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex <
    orderedLessons.length - 1
      ? orderedLessons[currentIndex + 1]
      : null;

  if (!course) {
    notFound();
  }

  // Safety check:
  // URL slug must match actual course slug
  if (course.slug !== slug) {
    redirect(`/student/courses/${course.slug}`);
  }

  // Check purchase
  const { data: purchase } = await supabase
    .from("course_purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_id", course.id)
    .maybeSingle();

  if (!purchase) {
    redirect(`/student/courses/${course.slug}`);
  }

  // Convert YouTube URL to embed URL
  const videoId =
    lesson.youtube_url
      ?.match(
        /(?:youtu\.be\/|youtube\.com\/watch\?v=)([^?&]+)/
      )?.[1] ?? "";

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 px-6 pb-16 bg-[#f4efee]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          {lesson.title}
        </h1>

        <CourseVideoPlayer
          lessonId={lesson.id}
          videoId={videoId}
        />

        <div className="mt-6">
          <Link
            href={`/student/courses/${slug}`}
            className="text-[#87565b] hover:underline"
          >
            ← Back to Course
          </Link>
        </div>

        <div className="mt-8 flex justify-between gap-4">
          {previousLesson ? (
            <Link
              href={`/student/courses/${slug}/lesson/${previousLesson.id}`}
              className="rounded-lg border border-[#d8c7c9] bg-white px-5 py-3 hover:bg-gray-50"
            >
              ← {previousLesson.title}
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              href={`/student/courses/${slug}/lesson/${nextLesson.id}`}
              className="rounded-lg border border-[#d8c7c9] bg-white px-5 py-3 hover:bg-gray-50"
            >
              {nextLesson.title} →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
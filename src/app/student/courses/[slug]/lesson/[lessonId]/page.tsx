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
  
  const moduleNumber =
    (modules?.findIndex(
      (m) => m.id === module.id
    ) ?? 0) + 1;

  const lessonsInModule =
    allLessons
      ?.filter(
        (l) => l.module_id === module.id
      )
      .sort(
        (a, b) => a.position - b.position
      ) ?? [];

  const lessonNumber =
    lessonsInModule.findIndex(
      (l) => l.id === lesson.id
    ) + 1;

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

  // Get lesson progress
  const { data: progress } = await supabase
    .from("lesson_progress")
    .select("watch_percentage")
    .eq("user_id", user.id)
    .eq("lesson_id", lesson.id)
    .maybeSingle();

  const watchPercentage = Number(
    progress?.watch_percentage ?? 0
  );

  // Convert YouTube URL to embed URL
  const videoId =
    lesson.youtube_url
      ?.match(
        /(?:youtu\.be\/|youtube\.com\/watch\?v=)([^?&]+)/
      )?.[1] ?? "";

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 px-6 pb-16 bg-[#f4efee]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex justify-between items-start gap-8">
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#87565b] uppercase">
              Module {moduleNumber} • Lesson {lessonNumber}
            </p>

            <h1 className="mt-2 text-4xl font-bold text-[#4c1711]">
              {lesson.title}
            </h1>

            <p className="mt-3 text-lg text-gray-600">
              {module.title}
            </p>
          </div>

          <div className="w-80 flex-shrink-0">
            <div className="flex justify-between mb-2 text-sm">
              <span>Progress</span>

              <span>
                {watchPercentage.toFixed(0)}%
              </span>
            </div>

            <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-[#87565b]"
                style={{
                  width: `${watchPercentage}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            {previousLesson ? (
              <Link
                href={`/student/courses/${slug}/lesson/${previousLesson.id}`}
                className="inline-flex items-center rounded-xl border border-[#d8c7c9] bg-white px-4 py-2 text-sm font-medium text-[#4c1711] shadow-sm hover:bg-gray-50"
              >
                ← Previous Lesson
              </Link>
            ) : (
              <div />
            )}
          </div>

          <Link
            href={`/student/courses/${slug}`}
            className="text-sm font-medium text-[#87565b] hover:underline"
          >
            Back to Course
          </Link>

          <div>
            {nextLesson ? (
              <Link
                href={`/student/courses/${slug}/lesson/${nextLesson.id}`}
                className="inline-flex items-center rounded-xl border border-[#d8c7c9] bg-white px-4 py-2 text-sm font-medium text-[#4c1711] shadow-sm hover:bg-gray-50"
              >
                Next Lesson →
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        <CourseVideoPlayer
          lessonId={lesson.id}
          videoId={videoId}
        />

      </div>
    </section>
  );
}
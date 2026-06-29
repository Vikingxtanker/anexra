import Link from "next/link";

import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

import CourseVideoPlayer from "@/components/course-video-player";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Progress } from "@/components/ui/progress";

import {
  CheckCircle2,
  PlayCircle,
  Circle,
} from "lucide-react";

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
  
  const lessonIds =
  allLessons?.map((l) => l.id) ?? [];

  const { data: progressRows } =
    await supabase
      .from("lesson_progress")
      .select("lesson_id, completed")
      .eq("user_id", user.id)
      .in("lesson_id", lessonIds);
  
  const progressMap = new Map(
    progressRows?.map((p) => [
      p.lesson_id,
      p,
    ]) ?? []
  );

  const totalLessons = allLessons?.length ?? 0;

  const completedLessons =
    progressRows?.filter((p) => p.completed).length ?? 0;

  const courseCompleted =
    totalLessons > 0 &&
    completedLessons === totalLessons;

  const courseProgress =
    totalLessons === 0
      ? 0
      : Math.round(
          (completedLessons / totalLessons) * 100
        );
    
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-8">
        <aside className="hidden lg:block">
          <div className="sticky top-32">
            <div className="rounded-2xl border border-[#d8c7c9] bg-white shadow-sm">
              <div className="border-b border-[#d8c7c9] p-5">
                <h2 className="text-lg font-semibold text-[#4c1711]">
                  Curriculum
                </h2>

                <div className="mt-4">
                  <div className="mb-2 flex justify-between text-sm text-gray-600">
                    <span>Course Progress</span>
                    <span>{courseProgress}%</span>
                  </div>

                  <Progress
                    value={courseProgress}
                    className="h-2"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    {completedLessons} / {totalLessons} lessons completed
                  </p>

                  {courseCompleted && (
                    <Link
                        href="/student/certificate"
                        className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#4c1711] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#38100d]"
                    >
                      🎓 Get Certificate
                    </Link>
                    
                  )}
                </div>
              </div>

              <ScrollArea className="h-[calc(100vh-20rem)]">
                <div className="p-3">
                  {modules?.map(
                    (moduleItem, moduleIndex) => {
                      const moduleLessons =
                        allLessons
                          ?.filter(
                            (lesson) =>
                              lesson.module_id ===
                              moduleItem.id
                          )
                          .sort(
                            (a, b) =>
                              a.position - b.position
                          ) ?? [];

                      return (
                        <div
                          key={moduleItem.id}
                          className="mb-6"
                        >
                          <h3 className="mb-2 text-xs font-semibold uppercase text-[#87565b]">
                            Module {moduleIndex + 1}
                          </h3>

                          <p className="mb-3 text-sm text-gray-600">
                            {moduleItem.title}
                          </p>

                          <div className="space-y-1">
                            {moduleLessons.map(
                              (
                                lessonItem,
                                lessonIndex
                              ) => {
                                const progress =
                                  progressMap.get(
                                    lessonItem.id
                                  );

                                const completed =
                                  progress?.completed;

                                const current =
                                  lessonItem.id ===
                                  lesson.id;

                                return (
                                  <Link
                                    key={lessonItem.id}
                                    href={`/student/courses/${slug}/lesson/${lessonItem.id}`}
                                    className={`flex items-start gap-2 rounded-lg px-3 py-2 text-sm transition ${
                                      current
                                        ? "bg-[#87565b] text-white"
                                        : "hover:bg-gray-100"
                                    }`}
                                  >
                                    <div className="flex-shrink-0">
                                      {completed ? (
                                        <CheckCircle2
                                          className={`h-4 w-4 ${
                                            current
                                              ? "text-white"
                                              : "text-green-600"
                                          }`}
                                        />
                                      ) : current ? (
                                        <PlayCircle className="h-4 w-4" />
                                      ) : (
                                        <Circle className="h-4 w-4 text-gray-400" />
                                      )}
                                    </div>

                                    <span className="flex-1 break-words whitespace-normal leading-5">
                                      {moduleIndex + 1}.
                                      {lessonIndex + 1}{" "}
                                      {lessonItem.title}
                                    </span>
                                  </Link>
                                );
                              }
                            )}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </ScrollArea>
            </div>
          </div>
        </aside>
        <div>
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
            <div className="mb-2 flex justify-between text-sm">
              <span>Progress</span>

              <span>
                {watchPercentage.toFixed(0)}%
              </span>
            </div>

            <Progress
              value={watchPercentage}
              className="h-3"
            />
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
            className="inline-flex items-center rounded-xl border border-[#d8c7c9] bg-white px-4 py-2 text-sm font-medium text-[#4c1711] shadow-sm hover:bg-gray-50"
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
      </div>
    </section>
  );
}
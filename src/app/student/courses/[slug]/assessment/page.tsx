import { notFound, redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import AssessmentForm from "@/components/assessment-form";
import {
  attachOptionsToQuestions,
  getAssessmentForCourse,
  getAssessmentQuestions,
  getOptionsForQuestions,
} from "@/lib/assessment/questions";
import { getLatestAssessmentAttempt } from "@/lib/assessment/attempts";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AssessmentPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const supabase = await createClient();

  // -------------------------
  // Authentication
  // -------------------------

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/student/login");
  }

  // -------------------------
  // Course
  // -------------------------

  const { data: course, error: courseError } =
    await supabase
      .from("courses")
      .select("*")
      .eq("slug", slug)
      .single();

  if (courseError || !course) {
    notFound();
  }

  // -------------------------
  // Purchase Check
  // -------------------------

  const { data: purchase } =
    await supabase
      .from("course_purchases")
      .select("id")
      .eq("user_id", user.id)
      .eq("course_id", course.id)
      .maybeSingle();

  if (!purchase) {
    redirect(`/student/courses/${slug}`);
  }

  // -------------------------
  // Modules
  // -------------------------

  const { data: modules } =
    await supabase
      .from("modules")
      .select("id")
      .eq("course_id", course.id);

  const moduleIds =
    modules?.map((m) => m.id) ?? [];

  // -------------------------
  // Lessons
  // -------------------------

  const { data: lessons } =
    await supabase
      .from("lessons")
      .select("id")
      .in("module_id", moduleIds);

  const lessonIds =
    lessons?.map((l) => l.id) ?? [];

  // -------------------------
  // Lesson Progress
  // -------------------------

  const { data: progress } =
    await supabase
      .from("lesson_progress")
      .select("lesson_id, completed")
      .eq("user_id", user.id)
      .in("lesson_id", lessonIds);

  const completedLessons =
    progress?.filter(
      (p) => p.completed
    ).length ?? 0;

  const totalLessons =
    lessonIds.length;

  // Student must complete
  // every lesson before exam

  if (
    totalLessons === 0 ||
    completedLessons !== totalLessons
  ) {
    redirect(
      `/student/courses/${slug}`
    );
  }

  // -------------------------
  // Assessment
  // -------------------------

  const assessment = await getAssessmentForCourse(supabase, course.id);

  if (!assessment) {
    notFound();
  }

  // -------------------------
  // Previous Attempt
  // -------------------------

  const previousAttempt =
    await getLatestAssessmentAttempt(
      supabase,
      assessment.id,
      user.id
    );

  // If max attempts reached

  if (previousAttempt?.passed) {
    redirect(
      `/student/courses/${slug}/assessment/result?attempt=${previousAttempt.id}`
    );
  }

  if (
    previousAttempt &&
    Number(previousAttempt.attempt_number) >=
      Number(assessment.max_attempts ?? 1)
  ) {
    redirect(
      `/student/courses/${slug}/assessment/result?attempt=${previousAttempt.id}`
    );
  }

  // -------------------------
  // Questions
  // -------------------------

  const questions =
    await getAssessmentQuestions(
      supabase,
      assessment.id
    );

  if (questions.length === 0) {
    notFound();
  }

  // -------------------------
  // Options
  // -------------------------

  const questionIds: string[] =
    questions.map(
      (q: { id: string }) => q.id
    );

  const options =
    await getOptionsForQuestions(
      supabase,
      questionIds
    );

  if (options.length === 0) {
    notFound();
  }

  // -------------------------
  // Group options
  // -------------------------

  const questionsWithOptions =
    attachOptionsToQuestions(
      questions,
      options
    );

  return (
    <section className="relative min-h-screen bg-[#f4efee] px-6 pb-20 pt-32">

      <div className="mx-auto max-w-5xl">

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-[#4c1711]">
            {assessment.title}
          </h1>

          <p className="mt-3 text-[#87565b]">
            {assessment.description}
          </p>

        </div>

        <AssessmentForm
          userId={user.id}
          course={course}
          assessment={assessment}
          questions={
            questionsWithOptions
          }
        />

      </div>

    </section>
  );
}

import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Award, RotateCcw, XCircle } from "lucide-react";

import { createClient } from "@/lib/supabase/server";
import { getAssessmentForCourse } from "@/lib/assessment/questions";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    attempt?: string;
  }>;
}

export default async function AssessmentResultPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const { attempt } = await searchParams;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/student/login");
  }

  const { data: course } = await supabase
    .from("courses")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (!course) {
    notFound();
  }

  const assessment = await getAssessmentForCourse(supabase, course.id);

  if (!assessment) {
    notFound();
  }

  let attemptQuery = supabase
    .from("assessment_attempts")
    .select("*")
    .eq("assessment_id", assessment.id)
    .eq("user_id", user.id);

  if (attempt) {
    attemptQuery = attemptQuery.eq("id", attempt);
  } else {
    attemptQuery = attemptQuery
      .order("submitted_at", { ascending: false })
      .limit(1);
  }

  const { data: result } = await attemptQuery.maybeSingle();

  if (!result) {
    redirect(`/student/courses/${slug}/assessment`);
  }

  const passed = Boolean(result.passed);
  const maxAttemptsReached =
    Number(result.attempt_number) >= Number(assessment.max_attempts ?? 1);

  return (
    <section className="min-h-screen bg-[#f4efee] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/student/courses/${slug}`}
          className="mb-8 inline-flex text-sm font-semibold text-[#4c1711] hover:underline"
        >
          Back to Course
        </Link>

        <div className="rounded-2xl border border-[#d8c7c9] bg-white p-8 text-center shadow-sm">
          <div className="flex justify-center">
            {passed ? (
              <Award className="h-16 w-16 text-green-700" />
            ) : (
              <XCircle className="h-16 w-16 text-red-600" />
            )}
          </div>

          <h1 className="mt-6 text-4xl font-bold text-[#4c1711]">
            {passed ? "Assessment Passed" : "Assessment Failed"}
          </h1>

          <p className="mt-3 text-[#87565b]">
            {course.title}
          </p>

          <div className="mt-8 text-6xl font-bold text-[#4c1711]">
            {Number(result.percentage ?? 0)}%
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[#d8c7c9] bg-[#faf7f6] p-4">
              <p className="text-sm text-[#87565b]">Correct</p>
              <p className="mt-1 text-2xl font-bold text-[#4c1711]">
                {Number(result.correct_answers ?? 0)}
              </p>
            </div>

            <div className="rounded-xl border border-[#d8c7c9] bg-[#faf7f6] p-4">
              <p className="text-sm text-[#87565b]">Wrong</p>
              <p className="mt-1 text-2xl font-bold text-[#4c1711]">
                {Number(result.wrong_answers ?? 0)}
              </p>
            </div>

            <div className="rounded-xl border border-[#d8c7c9] bg-[#faf7f6] p-4">
              <p className="text-sm text-[#87565b]">Score</p>
              <p className="mt-1 text-2xl font-bold text-[#4c1711]">
                {Number(result.obtained_marks ?? 0)} / {Number(result.total_marks ?? 0)}
              </p>
            </div>
          </div>

          <div className="mt-10">
            {passed ? (
              <Link
                href="/student/certificate"
                className="inline-flex items-center justify-center rounded-xl bg-[#4c1711] px-8 py-4 font-semibold text-white transition hover:bg-[#38100d]"
              >
                Download Certificate
              </Link>
            ) : maxAttemptsReached ? (
              <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                You have used all available attempts for this assessment.
              </p>
            ) : (
              <Link
                href={`/student/courses/${slug}/assessment`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4c1711] px-8 py-4 font-semibold text-white transition hover:bg-[#38100d]"
              >
                <RotateCcw className="h-5 w-5" />
                Retry Assessment
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

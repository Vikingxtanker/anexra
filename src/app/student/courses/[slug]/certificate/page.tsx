import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Award, ArrowLeft, Download } from "lucide-react";
import { getPassedAssessmentAttemptForCourse } from "@/lib/assessment/attempts";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CertificatePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const supabase = await createClient();

  // Get logged in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/student/login");
  }

  // Get course
  const { data: course } = await supabase
    .from("courses")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!course) {
    notFound();
  }

  // Verify purchase
  const { data: purchase } = await supabase
    .from("course_purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_id", course.id)
    .maybeSingle();

  if (!purchase) {
    redirect(`/student/courses/${slug}`);
  }

  // Get modules
  const { data: modules } = await supabase
    .from("modules")
    .select("id")
    .eq("course_id", course.id);

  const moduleIds = modules?.map((m) => m.id) ?? [];

  // Get lessons
  const { data: lessons } = await supabase
    .from("lessons")
    .select("id")
    .in("module_id", moduleIds);

  const lessonIds = lessons?.map((l) => l.id) ?? [];

  // Get lesson progress
  const { data: progress } = await supabase
    .from("lesson_progress")
    .select("completed")
    .eq("user_id", user.id)
    .in("lesson_id", lessonIds);

  const totalLessons = lessonIds.length;

  const completedLessons =
    progress?.filter((p) => p.completed).length ?? 0;

  const courseCompleted =
    totalLessons > 0 &&
    completedLessons === totalLessons;

  if (!courseCompleted) {
    redirect(`/student/courses/${slug}`);
  }

  const assessmentPassed = Boolean(
    await getPassedAssessmentAttemptForCourse(supabase, user.id, course.id),
  );

  if (!assessmentPassed) {
    redirect(`/student/courses/${slug}/assessment`);
  }

  return (
    <section className="min-h-screen bg-[#f4efee] pt-32 pb-20 px-6">
      <div className="mx-auto max-w-3xl">

        <Link
          href={`/student/courses/${slug}`}
          className="mb-8 inline-flex items-center gap-2 text-[#4c1711] hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Course
        </Link>

        <div className="rounded-3xl border border-[#d8c7c9] bg-white p-10 shadow-sm">

          <div className="flex justify-center">
            <Award className="h-16 w-16 text-[#4c1711]" />
          </div>

          <h1 className="mt-6 text-center text-4xl font-bold text-[#4c1711]">
            Congratulations!
          </h1>

          <p className="mt-4 text-center text-lg text-gray-600">
            You have successfully completed
          </p>

          <h2 className="mt-3 text-center text-2xl font-semibold text-[#87565b]">
            {course.title}
          </h2>

          <p className="mt-8 text-center text-gray-600">
            Your certificate is now ready.
          </p>

          <div className="mt-10 flex justify-center">
            <button
              className="inline-flex items-center gap-2 rounded-xl bg-[#4c1711] px-8 py-4 font-semibold text-white hover:bg-[#38100d]"
            >
              <Download className="h-5 w-5" />
              Download Certificate
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

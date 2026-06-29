import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

import CertificateRequestCard from "@/components/certificate-request-card";

export default async function CertificatesPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/student/login");
  }

  const { data: courses } = await supabase
    .from("courses")
    .select("*")
    .eq("is_published", true);

  const { data: purchases } = await supabase
    .from("course_purchases")
    .select("course_id")
    .eq("user_id", user.id);

  const { data: modules } = await supabase
    .from("modules")
    .select("id, course_id");

  const { data: lessons } = await supabase
    .from("lessons")
    .select("id, module_id");

  const { data: progress } = await supabase
    .from("lesson_progress")
    .select("lesson_id, completed")
    .eq("user_id", user.id);

  const { data: certificateRequests } = await supabase
    .from("certificate_requests")
    .select("*")
    .eq("user_id", user.id)
    .eq("physical_required", true);

  const purchasedCourses =
    courses?.filter((course) =>
      purchases?.some((purchase) => purchase.course_id === course.id),
    ) ?? [];

  const eligibleCourses: any[] = [];
  const incompleteCourses: any[] = [];

  for (const course of purchasedCourses) {
    const courseModules =
      modules?.filter((module) => module.course_id === course.id) ?? [];

    const moduleIds = courseModules.map((module) => module.id);

    const courseLessons =
      lessons?.filter((lesson) => moduleIds.includes(lesson.module_id)) ?? [];

    const totalLessons = courseLessons.length;

    const completedLessons = courseLessons.filter((lesson) =>
      progress?.some(
        (item) => item.lesson_id === lesson.id && item.completed,
      ),
    ).length;

    const percentage =
      totalLessons === 0
        ? 0
        : Math.round((completedLessons / totalLessons) * 100);

    const existingRequest =
      certificateRequests?.find((request) => request.course_id === course.id) ??
      null;

    const courseData = {
      ...course,
      percentage,
      completedLessons,
      totalLessons,
      request: existingRequest,
    };

    if (percentage === 100) {
      eligibleCourses.push(courseData);
    } else {
      incompleteCourses.push(courseData);
    }
  }

  return (
    <section className="min-h-screen bg-[#f4efee] px-6 pt-32 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#4c1711]">
            Certificates
          </h1>

          <p className="mt-3 max-w-3xl text-[#87565b]">
            Download digital certificates instantly after completing your course,
            or order a printed certificate for delivery.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-[#4c1711]">
              Eligible Certificates
            </h2>

            {eligibleCourses.length === 0 ? (
              <div className="rounded-2xl border border-[#d8c7c9] bg-white p-8">
                <h3 className="text-lg font-semibold text-[#4c1711]">
                  No certificates available
                </h3>

                <p className="mt-2 text-[#87565b]">
                  Complete your enrolled courses to unlock your certificates.
                </p>
              </div>
            ) : (
              <div className="grid gap-8 lg:grid-cols-2">
                {eligibleCourses.map((course) => (
                  <CertificateRequestCard key={course.id} course={course} />
                ))}
              </div>
            )}
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold text-[#4c1711]">
              Continue Learning
            </h2>

            {incompleteCourses.length === 0 ? (
              <div className="rounded-2xl border border-[#d8c7c9] bg-white p-8">
                <p className="text-[#87565b]">
                  Amazing! You've completed all of your enrolled courses.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {incompleteCourses.map((course) => (
                  <div
                    key={course.id}
                    className="overflow-hidden rounded-2xl border border-[#d8c7c9] bg-white shadow-sm"
                  >
                    <img
                      src={
                        course.thumbnail_url ||
                        "https://placehold.co/1200x675/png?text=Course"
                      }
                      alt={course.title}
                      className="aspect-video w-full object-cover"
                    />

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#4c1711]">
                        {course.title}
                      </h3>

                      <div className="mt-5">
                        <div className="mb-2 flex items-center justify-between text-sm text-[#87565b]">
                          <span>Progress</span>
                          <span>{course.percentage}%</span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-[#e8ddde]">
                          <div
                            className="h-full bg-[#4c1711]"
                            style={{ width: `${course.percentage}%` }}
                          />
                        </div>

                        <p className="mt-3 text-sm text-[#87565b]">
                          {course.completedLessons} / {course.totalLessons}{" "}
                          Lessons Completed
                        </p>
                      </div>

                      <a
                        href={`/student/courses/${course.slug}`}
                        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#4c1711] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#38100d]"
                      >
                        Continue Course
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}
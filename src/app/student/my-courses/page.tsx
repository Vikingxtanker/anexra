import Link from "next/link";

import { createClient } from "@/lib/supabase/server";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

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
          {courses?.map((course) => (
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
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-[#4c1711] hover:bg-[#5f1d16]"
                >
                  <Link
                    href={`/student/continue/${course.id}`}
                    >
                    Continue Learning
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default async function CoursesPage() {
  const supabase = await createClient();

  const { data: courses } = await supabase
    .from("courses")
    .select("*")
    .eq("is_published", true);

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 px-6 pb-16 bg-[#f4efee]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#4c1711]">
            Courses
          </h1>

          <p className="mt-3 text-[#87565b] max-w-2xl">
            Advance your pharmacy career with
            professional certification programs,
            clinical practice training, and
            industry-focused learning.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses?.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden border-[#d8c7c9] bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Thumbnail */}
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
                <h2 className="text-xl font-semibold text-[#4c1711] line-clamp-2">
                  {course.title}
                </h2>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-[#87565b] line-clamp-3">
                  {course.short_description ||
                    course.description ||
                    "Professional certification course designed to build practical knowledge and clinical expertise."}
                </p>

                <div className="mt-6">
                  <span className="text-2xl font-bold text-[#4c1711]">
                    ₹{course.price}
                  </span>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-[#4c1711] hover:bg-[#5f1d16]"
                >
                  <Link
                    href={`/student/courses/${course.slug}`}
                  >
                    View Course
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {(!courses || courses.length === 0) && (
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-semibold text-[#4c1711]">
              No Courses Available
            </h2>

            <p className="mt-2 text-[#87565b]">
              Courses will appear here once they
              are published.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
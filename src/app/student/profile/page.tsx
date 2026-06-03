import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/student/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select(
        `
        first_name,
        last_name,
        email,
        mobile_number,
        college_name,
        degree,
        semester
    `
    )
    .eq("id", user.id)
    .single();

  const { count: purchasedCourses } =
    await supabase
      .from("course_purchases")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("user_id", user.id);

  const { count: completedLessons } =
    await supabase
      .from("lesson_progress")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("user_id", user.id)
      .eq("completed", true);

  return (
    <main
    className="
        min-h-screen
        pt-36
        px-4
        bg-[#F6F1EC]
        text-[#4c1711]
    "
    >
      <div className="max-w-7xl mx-auto">
        <h1
            className="
            text-5xl
            md:text-6xl
            font-bold
            text-[#4c1711]
            mb-8
            "
        >
            Profile
        </h1>
        <div
            className="
                w-full
                rounded-3xl
                border
                border-[#d8c7b8]
                bg-white/70
                backdrop-blur-xl
                shadow-xl
                p-10
                lg:p-12
            "
            >
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            {/* Avatar */}
            <div className="w-40 h-40 rounded-full bg-[#aa6f73] flex items-center justify-center text-6xl font-bold">
              {profile?.first_name?.charAt(0).toUpperCase()}
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-[#4c1711]">
                {profile
                    ? `${profile.first_name} ${profile.last_name}`
                    : "Student"}
                </h1>

              <p className="text-[#6b5b53] mt-2">
                {user.email}
              </p>

              <p className="text-[#8d7d74] text-sm mt-2">
                Joined{" "}
                {new Date(
                  user.created_at
                ).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="rounded-2xl bg-white p-6 border border-[#d8c7b8]">
              <h3 className="text-[#7d6c63] text-sm">
                Purchased Courses
              </h3>

              <p className="text-4xl font-bold mt-2">
                {purchasedCourses ?? 0}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-[#d8c7b8]">
              <h3 className="text-[#7d6c63] text-sm">
                Completed Lessons
              </h3>

              <p className="text-4xl font-bold mt-2">
                {completedLessons ?? 0}
              </p>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div>
                <p className="text-sm text-[#7d6c63]">
                Mobile Number
                </p>

                <p className="font-semibold">
                {profile?.mobile_number}
                </p>
            </div>

            <div>
                <p className="text-sm text-[#7d6c63]">
                College
                </p>

                <p className="font-semibold">
                {profile?.college_name}
                </p>
            </div>

            <div>
                <p className="text-sm text-[#7d6c63]">
                Degree
                </p>

                <p className="font-semibold">
                {profile?.degree}
                </p>
            </div>

            <div>
                <p className="text-sm text-[#7d6c63]">
                Semester
                </p>

                <p className="font-semibold">
                {profile?.semester}
                </p>
            </div>
            </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/student/my-courses"
              className="
                px-6
                py-3
                rounded-full
                bg-[#aa6f73]
                hover:bg-[#4c1711]
                transition
              "
            >
              My Courses
            </a>

            <a
              href="/student/dashboard"
              className="
                px-6
                py-3
                rounded-full
                border
                border-white/20
                hover:bg-white/10
                transition
              "
            >
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
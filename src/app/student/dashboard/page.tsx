import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export default async function StudentDashboardPage() {
const supabase = await createClient();

const {
data: { user },
} = await supabase.auth.getUser();

// SERVER-SIDE PROTECTION
if (!user) {
redirect("/student/login");
}

return ( <div className="min-h-screen bg-[#0F172A] text-white"> <div className="mx-auto max-w-7xl px-6 py-10"> <div className="flex items-center justify-between"> <div> <h1 className="text-4xl font-bold">
Student Dashboard </h1>

        <p className="mt-2 text-gray-400">
          Welcome to ANEXRA Education Portal.
        </p>
      </div>

      <form
        action="/auth/signout"
        method="post"
      >
        <button
          className="rounded-xl bg-red-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
          Logout
        </button>
      </form>
    </div>

    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <p className="text-sm text-gray-400">
        Logged in as
      </p>

      <p className="mt-2 text-lg font-semibold text-white">
        {user.email}
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
        <h2 className="text-xl font-semibold">
          Courses
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Access your enrolled courses.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
        <h2 className="text-xl font-semibold">
          Notes
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          View study materials and PDFs.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
        <h2 className="text-xl font-semibold">
          Profile
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Manage your student profile.
        </p>
      </div>
    </div>
  </div>
</div>

);
}

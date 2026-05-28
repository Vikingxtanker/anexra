import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function StudentDashboardPage() {
  try {
    const supabase = await createClient();

    const { data, error } =
      await supabase.auth.getClaims();

    if (error || !data?.claims) {
      redirect("/student/login");
    }

    return (
      <div className="min-h-screen bg-[#0F172A] text-white">
        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">
                Student Dashboard
              </h1>

              <p className="mt-2 text-gray-400">
                Welcome to ANEXRA Education Portal.
              </p>
            </div>

            <form action="/auth/signout" method="post">
              <button className="rounded-xl bg-red-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-600">
                Logout
              </button>
            </form>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm text-gray-400">
              Logged in as
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              {data.claims.email}
            </p>
          </div>

        </div>
      </div>
    );
  } catch (err) {
    console.error("DASHBOARD ERROR:", err);

    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-red-500">
        Dashboard crashed.
      </div>
    );
  }
}
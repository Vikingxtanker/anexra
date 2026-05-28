import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export default async function StudentDashboardPage() {
  try {
    const supabase =
      await createClient();

    const {
      data: { user },
      error,
    } =
      await supabase.auth.getUser();

    console.log(
      "DASHBOARD USER:",
      user
    );

    console.log(
      "DASHBOARD ERROR:",
      error
    );

    if (!user) {
      redirect(
        "/student/login"
      );
    }

    return (
      <div className="min-h-screen bg-black text-white p-10">
        <h1 className="text-4xl font-bold">
          Dashboard Working
        </h1>

        <p className="mt-4">
          Logged in as:
        </p>

        <p className="text-green-400">
          {user.email}
        </p>
      </div>
    );
  } catch (err) {
    console.error(
      "DASHBOARD CRASH:",
      err
    );

    return (
      <div className="p-10 text-red-500">
        Dashboard crashed.
      </div>
    );
  }
}
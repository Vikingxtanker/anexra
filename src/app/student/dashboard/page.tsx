import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export default async function StudentDashboardPage() {
  const supabase =
    await createClient();

  const { data, error } =
    await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/student/login");
  }

  return (
    <div className="text-white text-4xl">
      Dashboard Works
    </div>
  );
}
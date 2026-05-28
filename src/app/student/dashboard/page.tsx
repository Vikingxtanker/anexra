import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import DashboardHero from "@/sections/student-dashboard/DashboardHero";

// import QuickStats from "@/sections/student-dashboard/QuickStats";

// import ContinueLearning from "@/sections/student-dashboard/ContinueLearning";

// import RecentNotes from "@/sections/student-dashboard/RecentNotes";

// import UpcomingClasses from "@/sections/student-dashboard/UpcomingClasses";

// import DashboardCTA from "@/sections/student-dashboard/DashboardCTA";

export default async function StudentDashboardPage() {
  const supabase =
    await createClient();

  const { data, error } =
    await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/student/login");
  }

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <DashboardHero />

      {/* <QuickStats />

      <ContinueLearning />

      <RecentNotes />

      <UpcomingClasses />

      <DashboardCTA /> */}
    </main>
  );
}
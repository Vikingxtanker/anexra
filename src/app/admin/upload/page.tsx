import { redirect } from "next/navigation";

import UploadChapterForm from "@/components/admin/UploadChapterForm";
import { createClient } from "@/lib/supabase/server";

export default async function UploadPage() {
  const supabase = await createClient();

  const {
    data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
    redirect("/student/login");
    }

    const currentUser = user;

    const { data: profile, error: profileError } =
    await supabase
        .from("profiles")
        .select("role")
        .eq("id", currentUser.id)
        .single();

    if (
    profileError ||
    !profile ||
    profile.role !== "admin"
    ) {
    redirect("/notallowed");
    }

  return (
    <section className="min-h-screen bg-[#f4efee] px-4 pt-32 pb-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#4c1711]">
            Upload Chapter
          </h1>

          <p className="mt-2 text-[#87565b]">
            Upload PDF notes and automatically create chapter entries.
          </p>
        </div>

        <UploadChapterForm />
      </div>
    </section>
  );
}
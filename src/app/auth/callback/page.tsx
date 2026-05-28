"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // IMPORTANT:
        // This exchanges the auth code
        // and restores session properly
        await supabase.auth.getSession();

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        // NO USER FOUND
        if (userError || !user) {
          router.replace("/student/login");
          return;
        }

        // CHECK IF PROFILE EXISTS
        const {
          data: existingProfile,
          error: profileFetchError,
        } = await supabase
          .from("profiles")
          .select("id")
          .eq("id", user.id)
          .maybeSingle();

        if (profileFetchError) {
          console.error(
            "PROFILE FETCH ERROR:",
            profileFetchError
          );
        }

        // CREATE PROFILE ONLY IF MISSING
        if (!existingProfile) {
          const {
            error: insertError,
          } = await supabase
            .from("profiles")
            .insert({
              id: user.id,

              first_name:
                user.user_metadata.first_name,

              last_name:
                user.user_metadata.last_name,

              email: user.email,

              mobile_number:
                user.user_metadata.mobile_number,

              college_name:
                user.user_metadata.college_name,

              degree:
                user.user_metadata.degree,

              semester:
                user.user_metadata.semester,

              role:
                user.user_metadata.role ||
                "student",
            });

          if (insertError) {
            console.error(
              "PROFILE INSERT ERROR:",
              insertError
            );

            router.replace(
              "/student/login"
            );

            return;
          }
        }

        // SUCCESS
        router.replace(
          "/student/dashboard"
        );

      } catch (error) {
        console.error(
          "AUTH CALLBACK ERROR:",
          error
        );

        router.replace("/student/login");
      }
    };

    handleAuth();
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0F0F0F] text-white">
      <p className="text-lg font-medium">
        Verifying your email...
      </p>
    </div>
  );
}
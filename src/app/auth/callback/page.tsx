"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback =
      async () => {
        try {
          // IMPORTANT:
          // waits for supabase to recover session
          const {
            data: {
              session,
            },
            error: sessionError,
          } =
            await supabase.auth.getSession();

          console.log(
            "SESSION:",
            session
          );

          console.log(
            "SESSION ERROR:",
            sessionError
          );

          // NO SESSION
          if (
            sessionError ||
            !session?.user
          ) {
            router.replace(
              "/student/login"
            );

            return;
          }

          const user =
            session.user;

          // CHECK EXISTING PROFILE
          const {
            data:
              existingProfile,
          } = await supabase
            .from("profiles")
            .select("id")
            .eq("id", user.id)
            .maybeSingle();

          // CREATE PROFILE
          if (!existingProfile) {
            const {
              error:
                insertError,
            } = await supabase
              .from("profiles")
              .insert({
                id: user.id,

                first_name:
                  user.user_metadata
                    .first_name,

                last_name:
                  user.user_metadata
                    .last_name,

                email: user.email,

                mobile_number:
                  user.user_metadata
                    .mobile_number,

                college_name:
                  user.user_metadata
                    .college_name,

                degree:
                  user.user_metadata
                    .degree,

                semester:
                  user.user_metadata
                    .semester,

                role:
                  user.user_metadata
                    .role ||
                  "student",
              });

            console.log(
              "INSERT ERROR:",
              insertError
            );

            if (insertError) {
              router.replace(
                "/student/login"
              );

              return;
            }
          }

          router.replace(
            "/student/dashboard"
          );

        } catch (error) {
          console.error(
            "CALLBACK ERROR:",
            error
          );

          router.replace(
            "/student/login"
          );
        }
      };

    // slight delay lets supabase
    // restore hash session
    setTimeout(() => {
      handleAuthCallback();
    }, 1000);

  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0F0F0F] text-white">
      <p className="text-lg font-medium">
        Verifying your email...
      </p>
    </div>
  );
}
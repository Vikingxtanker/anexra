"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
const router = useRouter();

useEffect(() => {
const handleAuth = async () => {
await supabase.auth.getSession();

  router.push("/student/dashboard");
};

handleAuth();

}, [router]);

return ( <div className="flex min-h-screen items-center justify-center"> <p className="text-lg font-medium">
Verifying your email... </p> </div>
);
}

"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { Eye, EyeOff } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import {
Field,
FieldError,
FieldLabel,
} from "@/components/ui/field";

import {
AlertDialog,
AlertDialogAction,
AlertDialogContent,
AlertDialogDescription,
AlertDialogFooter,
AlertDialogHeader,
AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const loginSchema = z.object({
email: z
.string()
.min(1, "Email is required")
.email("Please enter a valid email address"),

password: z
.string()
.min(1, "Password is required"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function StudentLoginPage() {
const router = useRouter();

const supabase = createClient();

const [showPassword, setShowPassword] =
useState(false);

const [loading, setLoading] =
useState(false);

const [errorDialogOpen, setErrorDialogOpen] =
useState(false);

const [errorTitle, setErrorTitle] =
useState("");

const [errorMessage, setErrorMessage] =
useState("");

const form = useForm<LoginSchema>({
resolver: zodResolver(loginSchema),

mode: "onChange",

defaultValues: {
  email: "",
  password: "",
},

});

async function onSubmit(
values: LoginSchema
) {
try {
setLoading(true);

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email: values.email.trim(),
      password: values.password,
    });

    
    console.log("LOGIN DATA:", data);
    console.log("LOGIN ERROR:", error);

  if (error) {
    // INVALID CREDENTIALS
    if (
      error.message.includes(
        "Invalid login credentials"
      )
    ) {
      setErrorTitle(
        "Invalid Credentials / Not Registered"
      );

      setErrorMessage(
        "Invalid email or password. If you don't have an account yet, please register first."
      );

      setErrorDialogOpen(true);

      setLoading(false);

      return;
    }

    // EMAIL NOT CONFIRMED
    if (
      error.message.includes(
        "Email not confirmed"
      )
    ) {
      setErrorTitle(
        "Email Not Verified"
      );

      setErrorMessage(
        "Please verify your email address before logging in."
      );

      setErrorDialogOpen(true);

      setLoading(false);

      return;
    }

    // DEFAULT ERROR
    setErrorTitle(
      "Login Failed"
    );

    setErrorMessage(
      error.message
    );

    setErrorDialogOpen(true);

    setLoading(false);

    return;
  }

  setLoading(false);

  console.log("LOGIN SUCCESS");

  router.replace(
    "/student/dashboard"
  )

} catch (error) {
  setErrorTitle(
    "Unexpected Error"
  );

  setErrorMessage(
    "Something went wrong. Please try again later."
  );

  setErrorDialogOpen(true);

  setLoading(false);
}

}

return (
<div
className="relative min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center bg-no-repeat"
style={{
backgroundImage:
"url('/backgrounds/registration_gradient.webp')",
}}
> <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

  <AlertDialog open={errorDialogOpen}>
    <AlertDialogContent className="border border-red-500/20 bg-[#1A1A1A]/95 text-white backdrop-blur-2xl">
      <AlertDialogHeader>
        <AlertDialogTitle className="text-2xl font-bold text-red-400">
          {errorTitle}
        </AlertDialogTitle>

        <AlertDialogDescription className="pt-4 text-gray-300">
          {errorMessage}
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogAction
          onClick={() =>
            setErrorDialogOpen(false)
          }
          className="bg-red-500 hover:bg-red-600"
        >
          Close
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>

  <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-2xl">

    <div className="bg-[#4c1711]/80 backdrop-blur-xl px-8 py-8 text-white border-b border-white/10">
      <h1 className="text-3xl font-bold tracking-tight">
        Student Login
      </h1>

      <p className="mt-2 text-sm text-gray-300">
        Login to access your student dashboard.
      </p>
    </div>

    <div className="p-8">

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="text-[#f4efee] font-medium tracking-wide">
                Email Address
                <span className="text-red-500">
                  {" "}*
                </span>
              </FieldLabel>

              <Input
                {...field}
                onChange={(e) =>
                field.onChange(
                    e.target.value.trim()
                )
                }
                type="email"
                placeholder="Enter email address"
                className="h-11 rounded-xl border-white/20 bg-white/80 backdrop-blur-md"
              />

              {fieldState.invalid && (
                <FieldError
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="text-[#f4efee] font-medium tracking-wide">
                Password
                <span className="text-red-500">
                  {" "}*
                </span>
              </FieldLabel>

              <div className="relative">
                <Input
                  {...field}
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter password"
                  className="h-11 rounded-xl border-white/20 bg-white/80 backdrop-blur-md pr-12"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {fieldState.invalid && (
                <FieldError
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        <Button
          type="submit"
          disabled={loading}
          className="h-12 w-full rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-50"
        >
          {loading
            ? "Logging In..."
            : "Login"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-400">
        Don’t have an account?{" "}

        <span
          onClick={() =>
            router.push(
              "/student/register"
            )
          }
          className="cursor-pointer font-medium text-[#c79da1] hover:underline"
        >
          Register
        </span>
      </p>
    </div>
  </div>
</div>

);
}

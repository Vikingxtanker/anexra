"use client";

import { supabase } from "@/lib/supabase";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  studentRegisterSchema,
  type StudentRegisterSchema,
} from "@/lib/validations/student-register-schema";

import {
  Field,
  FieldError,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import {
AlertDialog,
AlertDialogAction,
AlertDialogContent,
AlertDialogDescription,
AlertDialogFooter,
AlertDialogHeader,
AlertDialogTitle,
} from "@/components/ui/alert-dialog";


export default function StudentRegisterPage() {
  const degrees = ["D.Pharm", "B.Pharm", "Pharm.D", "M.Pharm"];

  const dPharmYears = ["1st Year", "2nd Year"];

  const bPharmSemesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
  ];

  const pharmDYears = [
    "1st Year",
    "2nd Year",
    "3rd Year",
    "4th Year",
    "5th Year",
    "6th Year",
  ];

  const mPharmSemesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
  ];

  const form = useForm<StudentRegisterSchema>({
    resolver: zodResolver(studentRegisterSchema),

    mode: "onChange",
    reValidateMode: "onChange",

    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNumber: "",
      collegeName: "",
      degree: "",
      semester: "",
    },
  });

  const selectedDegree = form.watch("degree");

  const yearOptions =
    selectedDegree === "D.Pharm"
      ? dPharmYears
      : selectedDegree === "B.Pharm"
      ? bPharmSemesters
      : selectedDegree === "Pharm.D"
      ? pharmDYears
      : selectedDegree === "M.Pharm"
      ? mPharmSemesters
      : [];

  const password = form.watch("password");

  const getPasswordStrength = (value: string) => {
    if (!value) return { label: "", color: "" };

    const checks = [
      value.length >= 8,
      /[A-Z]/.test(value),
      /[a-z]/.test(value),
      /[0-9]/.test(value),
      /[^A-Za-z0-9]/.test(value),
    ];

    const score = checks.filter(Boolean).length;

    if (score <= 2)
      return {
        label: "Weak",
        color: "text-red-500",
      };

    if (score <= 4)
      return {
        label: "Medium",
        color: "text-yellow-500",
      };

    return {
      label: "Strong",
      color: "text-green-600",
    };
  };

  const passwordStrength = getPasswordStrength(password);
  
  const [showPassword, setShowPassword] = useState(false);

  const [emailSent, setEmailSent] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");

  const [errorDialogOpen, setErrorDialogOpen] = useState(false);

  const [errorTitle, setErrorTitle] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);


  async function onSubmit(values: StudentRegisterSchema) {
    setLoading(true);
  try {
  // STEP 1 — CREATE AUTH USER
  const { data, error } = await supabase.auth.signUp({
  email: values.email,
  password: values.password,

  options: {
  emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
  },
  });


  if (error) {
  // RATE LIMIT
  if (
  error.message.includes("rate limit") ||
  error.message.includes("over_email_send_rate_limit")
  ) {
  setErrorTitle("Too Many Requests");

  setErrorMessage(
    "Too many verification emails were sent recently. Please wait a few minutes before trying again."
  );

  setErrorDialogOpen(true);

  setLoading(false);

  return;

  }

  // USER ALREADY EXISTS
  if (
  error.message.includes("User already registered")
  ) {
  setErrorTitle("Account Already Exists");

  setErrorMessage(
    "An account with this email address already exists. Please login instead."
  );

  setErrorDialogOpen(true);

  setLoading(false);

  return;

  }

  // INVALID EMAIL
  if (
  error.message.includes("Invalid email")
  ) {
  setErrorTitle("Invalid Email");

  setErrorMessage(
    "Please enter a valid email address."
  );

  setErrorDialogOpen(true);

  setLoading(false);

  return;

  }

  // WEAK PASSWORD
  if (
  error.message.includes("Password")
  ) {
  setErrorTitle("Weak Password");

  setErrorMessage(
    "Your password does not meet security requirements."
  );

  setErrorDialogOpen(true);

  setLoading(false);

  return;

  }

  // DEFAULT ERROR
  setErrorTitle("Registration Failed");

  setErrorMessage(error.message);

  setErrorDialogOpen(true);

  setLoading(false);

  return;
  }



  const user = data.user;

  if (!user) {
    console.error("User creation failed");
    setLoading(false);
    return;
  }

  // STEP 2 — INSERT PROFILE DATA
  const { error: profileError } = await supabase
    .from("profiles")
    .insert({
      id: user.id,

      first_name: values.firstName,
      last_name: values.lastName,

      email: values.email,

      mobile_number: values.mobileNumber,

      college_name: values.collegeName,

      degree: values.degree,

      semester: values.semester,

      role: "student",
    });

  if (profileError) {
  setErrorTitle("Profile Creation Failed");

  setErrorMessage(
  "Your account was created, but we could not save your profile details. Please contact support."
  );

  setErrorDialogOpen(true);

  setLoading(false);

  return;
  }



  setRegisteredEmail(values.email);
  setEmailSent(true);

  setLoading(false);

  form.reset();


  } catch (error) {
  setErrorTitle("Unexpected Error");

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
            backgroundImage: "url('/backgrounds/registration_gradient.webp')",
        }}
        >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        <AlertDialog
        open={errorDialogOpen}

        >

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


        <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-2xl">

        <div className="bg-[#4c1711]/80 backdrop-blur-xl px-8 py-8 text-white border-b border-white/10">
          <h1 className="text-3xl font-bold tracking-tight">
            Student Registration
          </h1>

          <p className="mt-2 text-sm text-gray-300">
            Create your account to access courses, notes, and student
            resources.
          </p>
        </div>

        <div className="p-8">
          <AlertDialog open={emailSent}>
            <AlertDialogContent className="border border-white/20 bg-[#1A1A1A]/95 text-white backdrop-blur-2xl">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl font-bold text-green-400">
                  Verification Email Sent
                </AlertDialogTitle>

            <AlertDialogDescription className="space-y-4 pt-4 text-gray-300">
              <p>
                We’ve sent a verification link to:
              </p>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white">
                {registeredEmail}
              </div>

              <p>
                Please check your inbox and click the verification
                link to activate your ANEXRA student account.
              </p>

              <p className="text-sm text-gray-500">
                If you don’t see the email, check your spam folder.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setEmailSent(false)}
              className="bg-[#4c1711] hover:bg-[#2a0d09]"
            >
              Okay
            </AlertDialogAction>
          </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialog>


          <p className="text-sm text-red-500 mb-6">
            * Indicates required fields
          </p>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Controller
              name="firstName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-[#f4efee] font-medium tracking-wide">
                    First Name <span className="text-red-500">*</span>
                  </FieldLabel>

                  <Input
                    {...field}
                    placeholder="Enter first name"
                    className="h-11 rounded-xl border-white/20 bg-white/80 backdrop-blur-md"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="lastName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-[#f4efee] font-medium tracking-wide">
                    Last Name <span className="text-red-500">*</span>
                  </FieldLabel>

                  <Input
                    {...field}
                    placeholder="Enter last name"
                    className="h-11 rounded-xl border-white/20 bg-white/80 backdrop-blur-md"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  className="md:col-span-2"
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel className="text-[#f4efee] font-medium tracking-wide">
                    Email Address <span className="text-red-500">*</span>
                  </FieldLabel>

                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter email address"
                    className="h-11 rounded-xl border-white/20 bg-white/80 backdrop-blur-md"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  className="md:col-span-2"
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel className="text-[#f4efee] font-medium tracking-wide">
                    Password <span className="text-red-500">*</span>
                  </FieldLabel>

                  <div className="relative">
                    <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Create password"
                        className="h-11 rounded-xl border-white/20 bg-white/80 backdrop-blur-md pr-12"
                        onKeyDown={(e) => {
                          if (e.key === " ") {
                            e.preventDefault();
                          }
                        }}
                    />

                    <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700"

                    >

                    {showPassword ? (

                    <EyeOff className="h-5 w-5" />
                    ) : (
                    <Eye className="h-5 w-5" />
                    )}

                    </button>
                    </div>


                  {password.length > 0 && (

                    <div className="space-y-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <div className="flex items-center justify-between">
                            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                            <div
                                className={`h-full rounded-full transition-all duration-500 ${
                                passwordStrength.label === "Weak"
                                    ? "w-1/3 bg-red-500"
                                    : passwordStrength.label === "Medium"
                                    ? "w-2/3 bg-yellow-500"
                                    : "w-full bg-green-500"
                                }`}
                            />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-700">
                            Password Strength
                        </p>
                    <span
                        className={`text-sm font-semibold ${passwordStrength.color}`}
                    >
                        {passwordStrength.label}
                    </span>
                    </div>

                    <div className="space-y-2 text-sm">
                    <div
                        className={`flex items-center gap-2 ${
                        password.length >= 8
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                    >
                        <span>
                        {password.length >= 8 ? "✓" : "•"}
                        </span>

                        <span>Minimum 8 characters</span>
                    </div>

                    <div
                        className={`flex items-center gap-2 ${
                        /[A-Z]/.test(password)
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                    >
                        <span>
                        {/[A-Z]/.test(password) ? "✓" : "•"}
                        </span>

                        <span>One uppercase letter</span>
                    </div>

                    <div
                        className={`flex items-center gap-2 ${
                        /[a-z]/.test(password)
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                    >
                        <span>
                        {/[a-z]/.test(password) ? "✓" : "•"}
                        </span>

                        <span>One lowercase letter</span>
                    </div>

                    <div
                        className={`flex items-center gap-2 ${
                        /[0-9]/.test(password)
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                    >
                        <span>
                        {/[0-9]/.test(password) ? "✓" : "•"}
                        </span>

                        <span>One number</span>
                    </div>

                    <div
                        className={`flex items-center gap-2 ${
                        /[^A-Za-z0-9]/.test(password)
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                    >
                        <span>
                        {/[^A-Za-z0-9]/.test(password)
                            ? "✓"
                            : "•"}
                        </span>

                        <span>One special character</span>
                    </div>
                    </div>

                    </div>
                    )}


                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="mobileNumber"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  className="md:col-span-2"
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel className="text-[#f4efee] font-medium tracking-wide">
                    Mobile Number <span className="text-red-500">*</span>
                  </FieldLabel>

                  <Input
                    {...field}
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Enter mobile number"
                    className="h-11 rounded-xl border-white/20 bg-white/80 backdrop-blur-md"
                    onChange={(e) => {
                      const digitsOnly = e.target.value.replace(/\\D/g, "");
                      field.onChange(digitsOnly);
                    }}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="collegeName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  className="md:col-span-2"
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel className="text-[#f4efee] font-medium tracking-wide">
                    College / Institution Name{" "}
                    <span className="text-red-500">*</span>
                  </FieldLabel>

                  <Input
                    {...field}
                    placeholder="Enter college or institution name"
                    className="h-11 rounded-xl border-white/20 bg-white/80 backdrop-blur-md"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="degree"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-[#f4efee] font-medium tracking-wide">
                    Current Course / Degree{" "}
                    <span className="text-red-500">*</span>
                  </FieldLabel>

                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      form.setValue("semester", "");
                    }}
                    value={field.value}
                  >
                    <SelectTrigger className="h-11 rounded-xl border-white/20 bg-white/80 backdrop-blur-md">
                      <SelectValue placeholder="Select Degree" />
                    </SelectTrigger>

                    <SelectContent>
                      {degrees.map((degree) => (
                        <SelectItem key={degree} value={degree}>
                          {degree}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="semester"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-[#f4efee] font-medium tracking-wide">
                    Year / Semester{" "}
                    <span className="text-red-500">*</span>
                  </FieldLabel>

                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={!selectedDegree}
                  >
                    <SelectTrigger className="h-11 rounded-xl border-white/20 bg-white/80 backdrop-blur-md">
                      <SelectValue
                        placeholder={
                          selectedDegree
                            ? "Select Year / Semester"
                            : "Select degree first"
                        }
                      />
                    </SelectTrigger>

                    <SelectContent>
                      {yearOptions.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <div className="md:col-span-2 pt-2">
              <Button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-50"

              >

              {loading
              ? "Creating Account..."
              : "Create Student Account"} </Button>

            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <span className="font-medium text-[#2563EB] cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
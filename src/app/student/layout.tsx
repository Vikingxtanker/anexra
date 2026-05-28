"use client";

import { usePathname } from "next/navigation";

import StudentNavbar from "@/components/student-navbar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage =
    pathname === "/student/login" ||
    pathname === "/student/register";

  return (
    <>
      <StudentNavbar />

      <main
        className={
          isAuthPage
            ? ""
            : "pt-32"
        }
      >
        {children}
      </main>
    </>
  );
}
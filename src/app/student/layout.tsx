"use client";

import StudentNavbar from "@/components/student-navbar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StudentNavbar />

      <main>
        {children}
      </main>
    </>
  );
}
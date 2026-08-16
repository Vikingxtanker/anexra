import { connection } from "next/server";

import StudentNavbar from "@/components/student-navbar";

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await connection();

  return (
    <>
      <StudentNavbar />

      <main>
        {children}
      </main>
    </>
  );
}
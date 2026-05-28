import Link from "next/link";

export default function StudentNavbar() {
  return (
    <nav className="flex items-center justify-between bg-black px-6 py-4 text-white">
      <div className="flex gap-6">
        <Link href="/student/dashboard">
          Dashboard
        </Link>

        <Link href="/student/courses">
          Courses
        </Link>

        <Link href="/student/notes">
          Notes
        </Link>
      </div>

      <form
        action="/auth/signout"
        method="post"
      >
        <button className="rounded-lg bg-red-500 px-4 py-2">
          Logout
        </button>
      </form>
    </nav>
  );
}
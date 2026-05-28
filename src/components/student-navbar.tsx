"use client";

import { useState } from "react";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

const navLinks = [
  {
    label: "Dashboard",
    href: "/student/dashboard",
  },
  {
    label: "Courses",
    href: "/student/courses",
  },
  {
    label: "Notes",
    href: "/student/notes",
  },
  {
    label: "Profile",
    href: "/student/profile",
  },
];

export default function StudentNavbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

    const router = useRouter();

    const handleLogout = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/student/login");
    };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 isolate">

      <div className="max-w-7xl mx-auto">
        <nav
          className="
            rounded-full
            px-6
            lg:px-8
            h-20
            flex
            items-center
            justify-between
            transition-all
            duration-500
            relative
            overflow-hidden
            border
            border-white/20
            bg-white/20
            backdrop-blur-2xl
            shadow-[0_8px_32px_rgba(76,23,17,0.10)]
          "
        >

          {/* Logo */}
          <Link
            href="/student/dashboard"
            className="flex items-center"
          >
            <img
              src="/anexra-wordmark.svg"
              alt="Anexra"
              className="hidden lg:block h-11 w-auto"
            />

            <img
              src="/anexra-logomark.svg"
              alt="Anexra"
              className="block lg:hidden h-10 w-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                  text-base
                  font-semibold
                  tracking-tight
                  text-[#564740]
                  hover:text-[#aa6f73]
                  transition-all
                  duration-300
                "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Logout */}
          <div className="hidden lg:flex items-center gap-4">

            <button
            onClick={handleLogout}
            className="
                px-6
                py-3
                rounded-full
                bg-[#aa6f73]
                text-white
                text-sm
                font-semibold
                hover:bg-[#4c1711]
                hover:scale-105
                transition-all
                duration-300
            "
            >
            Logout
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="
              lg:hidden
              text-[#564740]
            "
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="
              rounded-3xl
              p-6
              flex
              flex-col
              gap-5
              bg-white/20
              backdrop-blur-2xl
              border
              border-white/20
              shadow-[0_8px_30px_rgba(76,23,17,0.08)]
            "
          >

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  text-lg
                  font-semibold
                  tracking-tight
                  text-[#564740]
                  hover:text-[#aa6f73]
                  transition-all
                  duration-300
                "
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4">

              <button
                    onClick={handleLogout}
                    className="
                        w-full
                        text-center
                        px-6
                        py-3
                        rounded-full
                        bg-[#aa6f73]
                        text-white
                        text-sm
                        font-semibold
                        hover:bg-[#4c1711]
                        transition-all
                        duration-300
                    "
                    >
                    Logout
                </button>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
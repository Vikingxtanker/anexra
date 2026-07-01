"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import { usePathname } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

import type {
  AuthChangeEvent,
  Session,
} from "@supabase/supabase-js";

import {
  Search,
  Bell,
  User,
} from "lucide-react";

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
    label: "Certificate",
    href: "/student/certificate",
  },
  {
    label: "My Learning",
    href: "/student/my-courses",
  },
];

export default function StudentNavbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);
  
  const [darkMode, setDarkMode] = useState(false);

  const [loggedIn, setLoggedIn] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [userEmail, setUserEmail] =
    useState("");

  const [userInitial, setUserInitial] =
    useState("U");

  const [profileOpen, setProfileOpen] =
    useState(false);

  const pathname = usePathname();

  const [supabase] = useState(() =>
    createClient()
  );

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setLoggedIn(!!user);

      if (user) {
        setUserEmail(user.email ?? "");

        const initial =
          user.user_metadata.full_name
            ?.charAt(0)
            .toUpperCase() ?? "U";

        setUserInitial(initial);
      }

      setLoading(false);
    };

    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (
        _: AuthChangeEvent,
        session: Session | null
      ) => {
        setLoggedIn(!!session?.user);

        if (session?.user) {
          setUserEmail(
            session.user.email ?? ""
          );

          setUserInitial(
            session.user.email
              ?.charAt(0)
              .toUpperCase() ?? "U"
          );
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase]);

  useEffect(() => {
    const handleScroll = () => {
      const darkSections = document.querySelectorAll(
        "[data-theme='dark']"
      );

      let isDark = false;

      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 100 && rect.bottom >= 100) {
          isDark = true;
        }
      });

      setDarkMode(isDark);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      setProfileOpen(false);
    };

    if (profileOpen) {
      document.addEventListener(
        "click",
        handleClick
      );
    }

    return () => {
      document.removeEventListener(
        "click",
        handleClick
      );
    };
  }, [profileOpen]);

  const handleLogout = () => {
    console.log("LOGOUT CLICKED");
    setMenuOpen(false);

    void supabase.auth.signOut();

    setLoggedIn(false);

    window.location.assign(
      "/student/login"
    );
  };

  const handleAuthButton = () => {
    if (loggedIn) {
      handleLogout();
    } else {
      window.location.assign("/student/login");
    }
  };

  const isAuthPage =
    pathname === "/student/login" ||
    pathname === "/student/register";

  console.log("LOGGED IN:", loggedIn);
  console.log("LOADING:", loading);
  console.log("PATHNAME:", pathname);


  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 isolate">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`
            isolate
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
            shadow-[0_8px_30px_rgba(76,23,17,0.08)]
            glass-navbar
            isolate

            ${
              darkMode
                ? `
                    bg-black/30
                    border border-white/25
                    shadow-[0_8px_32px_rgba(0,0,0,0.45)]
                  `
                : `
                    bg-white/20
                    border border-white/20
                    shadow-[0_8px_32px_rgba(76,23,17,0.10)]
                  `
            }
          `}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
          >
            <img
              src={
                darkMode
                  ? "/anexra-wordmark-white.svg"
                  : "/anexra-wordmark.svg"
              }
              alt="Anexra"
              className="hidden lg:block h-11 w-auto"
            />

            <img
              src={
                darkMode
                  ? "/anexra-logomark-white.svg"
                  : "/anexra-logomark.svg"
              }
              alt="Anexra"
              className="block lg:hidden h-10 w-10"
            />
          </Link>

          {/* Desktop Navigation */}
          {!isAuthPage && loggedIn && (
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`
                    text-base
                    font-semibold
                    tracking-tight
                    transition-all
                    duration-300

                    ${
                      darkMode
                        ? "text-white/80 hover:text-white"
                        : "text-[#564740] hover:text-[#aa6f73]"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Desktop Auth Button */}
          {!loading && (
            <div className="hidden lg:flex items-center gap-4">

              {loggedIn ? (
                <div className="relative">

                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      setProfileOpen(
                        !profileOpen
                      );
                    }}
                    className="
                      h-10
                      w-10
                      rounded-full
                      bg-[#aa6f73]
                      text-white
                      font-semibold
                      flex
                      items-center
                      justify-center
                      hover:scale-105
                      transition-all
                      cursor-pointer
                    "
                  >
                    {userInitial}
                  </button>

                  {profileOpen && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="
                        absolute
                        right-0
                        top-14
                        z-[9999]

                        rounded-3xl
                        p-2

                        glass-navbar

                        bg-[#f4efee]/90
                        backdrop-blur-2xl

                        border border-white/20

                        flex
                        flex-col

                        shadow-[0_8px_30px_rgba(76,23,17,0.08)]
                        isolate

                        min-w-[240px]
                      "
                    >
                      <div className="px-4 py-3 border-b border-white/10 mb-2">
                        <p className="font-semibold truncate">
                          {userEmail}
                        </p>
                      </div>

                      <Link
                        href="/student/profile"
                        className="
                          px-4
                          py-3
                          rounded-xl
                          transition-all
                          duration-300
                          cursor-pointer

                          hover:bg-black/10
                        "
                      >
                        Profile
                      </Link>

                      <Link
                        href="/student/my-courses"
                        className="
                          px-4
                          py-3
                          rounded-xl
                          transition-all
                          duration-300

                          hover:bg-black/10
                        "
                      >
                        My Courses
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="
                          w-full
                          text-left
                          px-4
                          py-3
                          rounded-xl
                          text-red-600
                          hover:bg-red-500/10
                          transition-all
                          duration-300
                          cursor-pointer
                        "
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() =>
                    window.location.assign(
                      "/student/login"
                    )
                  }
                  className="
                    px-6
                    py-3
                    rounded-full
                    bg-[#aa6f73]
                    text-white
                    text-sm
                    font-semibold
                  "
                >
                  Login
                </button>
              )}

            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className={`
              lg:hidden
              transition-all
              duration-300

              ${
                darkMode
                  ? "text-white"
                  : "text-[#564740]"
              }
            `}
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
              glass-navbar
              isolate
              shadow-[0_8px_30px_rgba(76,23,17,0.08)]
            "
          >
            {!isAuthPage &&
              loggedIn &&
              navLinks.map((link) => (
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
                    transition-all
                    duration-300
                  "
                  style={{
                    color: darkMode
                      ? "#f4efee"
                      : "#564740",
                  }}
                >
                  {link.label}
                </Link>
              ))}

            {!loading && (
              <div className="pt-4">
                <button
                  onClick={handleAuthButton}
                  className="
                    relative
                    z-[9999]
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
                  {loggedIn
                    ? "Logout"
                    : "Login"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
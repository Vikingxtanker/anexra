"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Education", href: "/education" },
  // { label: "Healthcare Services", href: "/healthcare-services" },
  { label: "Career Connect", href: "/career-connect" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const darkSections = document.querySelectorAll(
        "[data-theme='dark']"
      );

      let isDark = false;

      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // Detect navbar overlap area
        if (rect.top <= 100 && rect.bottom >= 100) {
          isDark = true;
        }
      });

      setDarkMode(isDark);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 isolate">
      
      {/* Main Navbar Container */}
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
    overflow-hidden

    shadow-[0_8px_30px_rgba(76,23,17,0.08)]

    bg-[#f4efee]/15

    glass-navbar
    isolate

    ${
      // darkMode
      //   ? "bg-black/30 backdrop-blur-2xl border border-white/25"
      //   : "bg-[#f4efee]/10 backdrop-blur border border-[#aa6f73]/20"
      
          darkMode
        ? `
            bg-black/30
            border border-white/25            shadow-[0_8px_32px_rgba(0,0,0,0.45)]
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
          <Link href="/" className="flex items-center">
            
            {/* Desktop Logo */}
            <img
              src={
                darkMode
                ? "/anexra-wordmark-white.svg"
                : "/anexra-wordmark.svg"
              }
              alt="Anexra"
              className="hidden lg:block h-11 w-auto"
            />

            {/* Mobile Logo */}
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
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`
  text-base
  md:text-[1rem]
  lg:text-[1rem]
  xl:text-[1rem]
  font-semibold
  tracking-tight
  transition-all
  duration-300

  ${darkMode ? "text-white/80" : "text-[#564740]"}
  ${darkMode ? "hover:text-white" : "hover:text-[#aa6f73]"}
`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            

            <Link
              href="/portal"
              className="px-6 py-3 rounded-full bg-[#aa6f73] text-white text-sm font-semibold hover:bg-[#4c1711] hover:scale-105 transition-all duration-300"
            >
              Select Portal
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
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
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
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
          <div className="

          rounded-3xl 
          p-6 
          flex 
          flex-col 
          gap-5 
          shadow-[0_8px_30px_rgba(76,23,17,0.08)]
          glass-navbar
          isolate

          ">
            
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className='
                  text-lg
                  md:text-x1
                  font-semibold
                  tracking-tight 
                  transition-all
                  duration-300
                '
                style={{
                   color: darkMode ? "#f4efee" : "#564740",
                }}

              >
                {link.label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 pt-4">

              <Link
                href="#contact"
                className="w-full text-center px-6 py-3 rounded-full bg-[#aa6f73] text-white text-sm font-semibold hover:bg-[#4c1711] transition-all duration-300"
              >
                Partner With Us
              </Link>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
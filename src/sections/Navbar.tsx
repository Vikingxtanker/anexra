"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      
      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto">
        <nav className="bg-[#f4efee]/10 backdrop-blur border border-[#aa6f73]/10 rounded-full px-6 lg:px-8 h-20 flex items-center justify-between shadow-[0_8px_30px_rgba(76,23,17,0.08)]">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            
            {/* Desktop Logo */}
            <img
              src="/anexra-wordmark.svg"
              alt="Anexra"
              className="hidden md:block h-11 w-auto"
            />

            {/* Mobile Logo */}
            <img
              src="/anexra-logomark.svg"
              alt="Anexra"
              className="block md:hidden h-10 w-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#564740] text-sm font-medium hover:text-[#aa6f73] transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            

            <Link
              href="#contact"
              className="px-6 py-3 rounded-full bg-[#aa6f73] text-white text-sm font-semibold hover:bg-[#4c1711] hover:scale-105 transition-all duration-300"
            >
              Partner With Us
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#564740] transition-all duration-300"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#f4efee]/30 backdrop-blur-xl border border-[#aa6f73]/10 rounded-3xl p-6 flex flex-col gap-5 shadow-[0_8px_30px_rgba(76,23,17,0.08)]">
            
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#564740] text-base font-medium hover:text-[#aa6f73] transition-all"
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
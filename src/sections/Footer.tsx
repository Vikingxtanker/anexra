import Image from "next/image";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer
    className="
        relative
        overflow-hidden
        z-30
    "
>
    {/* Rounded Footer Background */}
    <div
    className="
        relative
        overflow-hidden

        pt-20
        pb-16
        md:pb-20
    "
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#120c0b]/95 via-[#1a120f]/90 to-[#120c0b]/95" />

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#aa6f73]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute bottom-[-140px] right-[-120px] w-[320px] h-[320px] bg-[#f7d9dd]/5 blur-3xl rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div
          className="
            flex
            flex-col
            md:flex-row

            items-center
            md:items-center

            justify-between

            gap-10

            border-b
            border-white/10

            pb-10
          "
        >
          {/* Logo + Description */}
          <div className="max-w-md text-center md:text-left">
            <div className="relative inline-block">

            <Image
                src="/anexra-wordmark-white.svg"
                alt="Anexra Logo"
                width={180}
                height={50}
                className="
                relative
                z-10

                h-12
                w-auto

                mx-auto
                md:mx-0

                opacity-95
                "
            />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  text-white/60
                  text-sm

                  hover:text-white

                  transition-all
                  duration-300
                "
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div
          className="
            pt-8

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-6
          "
        >
          <p
            className="
              text-white/40
              text-sm
              text-center
              md:text-left
            "
          >
            © 2026 Anexra. Designed for connected healthcare.
          </p>

<div className="flex items-center gap-4">

  <a
    href="#"
    className="
      w-10
      h-10

      rounded-full

      border
      border-white/10

      bg-white/5
      backdrop-blur-xl

      flex
      items-center
      justify-center

      text-white/60

      hover:text-white
      hover:bg-white/10
      hover:scale-105

      transition-all
      duration-300
    "
  >
    <FaLinkedinIn size={18} />
  </a>

  <a
    href="#"
    className="
      w-10
      h-10

      rounded-full

      border
      border-white/10

      bg-white/5
      backdrop-blur-xl

      flex
      items-center
      justify-center

      text-white/60

      hover:text-white
      hover:bg-white/10
      hover:scale-105

      transition-all
      duration-300
    "
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="#"
    className="
      w-10
      h-10

      rounded-full

      border
      border-white/10

      bg-white/5
      backdrop-blur-xl

      flex
      items-center
      justify-center

      text-white/60

      hover:text-white
      hover:bg-white/10
      hover:scale-105

      transition-all
      duration-300
    "
  >
    <FaFacebookF size={18} />
  </a>

</div>
        </div>
      </div>
      </div>
    </footer>
  );
}
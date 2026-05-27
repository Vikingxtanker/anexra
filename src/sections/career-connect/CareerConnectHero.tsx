"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe,
  GraduationCap,
  BriefcaseBusiness,
  Microscope,
} from "lucide-react";

export default function CareerHero() {
  return (
    <section
      data-theme="dark"
      className="
        relative
        overflow-hidden
        min-h-screen
        flex items-center
        px-4 sm:px-6
      "
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            w-full h-full
            object-cover
            scale-110
            brightness-[0.35]
            opacity-[0.75]
          "
        >
          <source src="/career_connect.webm" type="video/webm" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(122,74,78,0.25),transparent_30%),linear-gradient(135deg,#070506_0%,#140909_30%,#2a0f10_60%,#120809_100%)]" />

        {/* Blur */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto py-24 sm:py-28 md:py-32">

        <div className="flex items-center justify-center text-center min-h-[80vh]">

          {/* LEFT CONTENT */}
          <div className="max-w-5xl mx-auto flex flex-col items-center">

            {/* Heading */}
            <h1
              className="
                text-white
                font-semibold
                tracking-tight
                leading-[0.92]

                text-[3.2rem]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl

                max-w-4xl
              "
            >
              Build Your Future
              <br />

              <span className="text-[#d6a3a7]">
                in Healthcare
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="
                mt-8
                text-base sm:text-lg md:text-xl
                leading-relaxed
                text-white/70
                max-w-2xl
              "
            >
              Career guidance, hospital placement preparation,
              professional networking, research mentorship,
              and global healthcare opportunities for pharmacy
              students and healthcare professionals.
            </p>

            {/* CTA */}
            <div
              className="
                mt-10
                flex flex-col sm:flex-row
                items-center justify-center
                gap-4
              "
            >
              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center gap-2

                  h-14 px-8

                  rounded-full

                  bg-white
                  text-[#140909]

                  font-semibold

                  shadow-xl

                  hover:bg-[#f4efee]
                  hover:scale-[1.03]

                  transition-all duration-300
                "
              >
                Join Career Connect

                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="
                  inline-flex items-center justify-center

                  h-14 px-8

                  rounded-full

                  border border-white/15

                  bg-white/10 backdrop-blur-md

                  text-white
                  font-semibold

                  hover:bg-white/15
                  hover:border-white/25

                  transition-all duration-300
                "
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5000+",
    label: "Students",
  },
  {
    icon: BookOpen,
    value: "20+",
    label: "Courses",
  },
  {
    icon: Award,
    value: "100%",
    label: "Certified",
  },
  {
    icon: GraduationCap,
    value: "Self",
    label: "Paced",
  },
];

export default function CoursesHero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center px-4 sm:px-6">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            w-full
            h-full
            object-cover
            scale-110
            opacity-60
          "
        >
          <source
            src="/videos/courses/courses-bg.webm"
            type="video/webm"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#f4efee]/20 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto py-24">
        <div
          className="
            rounded-3xl
            border border-white/20
            bg-white/10
            backdrop-blur-xl
            shadow-xl
            p-8 md:p-12 lg:p-16
          "
        >
          <h1
            className="
              mt-5
              max-w-4xl
              text-4xl
              md:text-6xl
              font-semibold
              text-[#4c1711]
              leading-tight
            "
          >
            Learn Industry-Relevant Pharmacy &
            <span className="block text-[#aa6f73]">
              Clinical Skills
            </span>
          </h1>

          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              md:text-xl
              leading-relaxed
              text-[#564740]
            "
          >
            Advance your career with expert-led certificate programs
            designed for Pharm.D, B.Pharm, and D.Pharm students.
            Build practical clinical knowledge, strengthen
            patient-care skills, earn recognized certifications,
            and enhance your CV with job-ready competencies.
            Every course includes structured learning modules,
            assessments, and completion certification.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/student/courses"
              className="
                px-7 py-3
                rounded-full
                bg-[#4c1711]
                text-white
                font-medium
                hover:bg-[#aa6f73]
                transition-all
                duration-300
              "
            >
              Explore Courses
            </Link>

            {/* <Link
              href="#certificates"
              className="
                px-7 py-3
                rounded-full
                border border-[#4c1711]/15
                bg-white/20
                backdrop-blur-md
                text-[#4c1711]
                font-medium
                hover:bg-white/30
                transition-all
                duration-300
              "
            >
              View Certifications
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
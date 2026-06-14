"use client";

import Link from "next/link";

import {
  Compass,
  Network,
  FileText,
  Building2,
  MessageSquareText,
  Globe,
  Microscope,
  ArrowUpRight,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const services = [
  {
    title: "Career Explore",
    description:
      "Personalized guidance to help students identify the right healthcare and pharmacy career path.",
    icon: Compass,
    href: "/career-connect/career-explore",
    size: "large",
    // image: "/images/career-connect/CE.webp",
  },
  {
    title: "Pharmacy Ecosystem",
    description:
      "Explore opportunities across clinical pharmacy, hospitals, industry, research, academics, and global healthcare.",
    icon: Network,
    href: "/career-connect/pharmacy-ecosystem",
    size: "large",
    // image: "/images/career-connect/PE.webp",
  },
  {
    title: "Resume Building",
    description:
      "Professional resume support designed for healthcare students, interns, and freshers.",
    icon: FileText,
    href: "/career-connect/resume-building",
    size: "medium",
    // image: "/images/career-connect/RB.webp",
  },
  {
    title: "LinkedIn Optimization",
    description:
      "Build a strong professional healthcare profile and improve networking visibility.",
    icon: FaLinkedinIn,
    href: "/career-connect/linkedin-optimization",
    size: "medium",
    // image: "/images/career-connect/LIO.webp",
  },
  {
    title: "Hospital Placement",
    description:
      "Clinical pharmacy and hospital career preparation with practical industry-focused guidance.",
    icon: Building2,
    href: "/career-connect/hospital-placement",
    size: "wide",
    // image: "/images/career-connect/HP.webp",
  },
  {
    title: "Interview Preparation",
    description:
      "Mock interviews, technical preparation, communication support, and confidence-building.",
    icon: MessageSquareText,
    href: "/career-connect/interview-preparation",
    size: "medium",
    // image: "/images/career-connect/IP.webp",
  },
  {
    title: "Abroad Opportunities",
    description:
      "Global healthcare pathways, licensing guidance, higher education, and international career support.",
    icon: Globe,
    href: "/career-connect/abroad-opportunities",
    size: "medium",
    // image: "/images/career-connect/AO.webp",
  },
  {
    title: "Research Club",
    description:
      "Research mentorship, publication guidance, journal clubs, and academic development support.",
    icon: Microscope,
    href: "/career-connect/research-club",
    size: "wide",
    // image: "/images/career-connect/RC.webp",
  },
];

export default function CareerServices() {
  return (
    <section
      data-theme="dark"
      className="
        relative
        overflow-hidden

        py-24
        sm:py-28
        lg:py-36

        px-4
        sm:px-6

        bg-[#050304]
      "
    >

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <h2
            className="
              text-white

              font-semibold
              tracking-tight

              leading-tight

              text-4xl
              sm:text-5xl
              lg:text-6xl
            "
          >
            Explore Career Growth
            <br />

            <span className="text-[#d6a3a7]">
              Opportunities
            </span>
          </h2>

          <p
            className="
              mt-6

              text-lg
              leading-relaxed

              text-white/65
            "
          >
            Structured support designed to help pharmacy students
            and healthcare professionals build stronger careers,
            industry readiness, and professional confidence.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4

            auto-rows-[420px]

            gap-6
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={index}
                href={service.href}
                className={`
                  group

                  ${
                    service.size === "large"
                      ? "lg:col-span-2 lg:row-span-1"
                      : ""
                  }

                  ${
                    service.size === "wide"
                      ? "lg:col-span-2"
                      : ""
                  }
                `}
              >
                <Card
                  className="
                    relative

                    h-full

                    overflow-hidden

                    border border-white/10

                    bg-white/5
                    hover:bg-white/10

                    backdrop-blur-2xl

                    rounded-[32px]

                    transition-all duration-500

                    hover:-translate-y-2
                    hover:border-[#d6a3a7]/20

                    shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  "
                >
                  {/* Background Image */}
                  <div
                    className="
                      absolute inset-0
                      bg-cover bg-center
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                    // style={{
                    //   backgroundImage: `url(${service.image})`,
                    // }}
                  />

                  {/* Dark Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-b
                      from-black/40
                      via-black/55
                      to-black/90
                    "
                  />
                  
                  <CardContent className="relative h-full p-8 flex flex-col">

                    {/* Glow */}
                    <div
                      className="
                        absolute
                        inset-0

                        opacity-0
                        group-hover:opacity-100

                        transition-opacity duration-500

                        bg-[radial-gradient(circle_at_top,rgba(214,163,167,0.12),transparent_60%)]
                      "
                    />

                    {/* Top */}
                    <div className="relative z-10 flex-1 pb-8">

                      <div
                        className="
                          w-14 h-14

                          rounded-2xl

                          bg-white/10

                          border border-white/10

                          flex items-center justify-center
                        "
                      >
                        <Icon className="text-[#d6a3a7] text-[26px]" />
                      </div>

                      <h3
                        className="
                          mt-6

                          text-2xl
                          font-semibold

                          tracking-tight

                          text-white
                        "
                      >
                        {service.title}
                      </h3>

                      <p
                        className="
                          mt-3

                          text-sm
                          leading-relaxed

                          text-white/60

                          max-w-md
                        "
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div
                      className="
                        relative z-10

                        mt-6

                        flex items-center justify-between
                      "
                    >
                      <span
                        className="
                          text-sm
                          font-medium

                          text-white/70
                        "
                      >
                        Learn More
                      </span>

                      <div
                        className="
                          w-10 h-10

                          rounded-full

                          bg-white/10

                          flex items-center justify-center

                          transition-transform duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      >
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
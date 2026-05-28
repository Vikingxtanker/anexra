"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import {
  GraduationCap,
  UserRound,
  Stethoscope,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const portals = [
  {
    title: "Student Portal",
    description: "Courses, learning resources, and academic tools.",
    icon: GraduationCap,
    href: "/student/dashboard",
  },
  {
    title: "Patient Portal",
    description: "Appointments, reports, and healthcare tracking.",
    icon: UserRound,
    href: "/patient",
  },
  {
    title: "Doctor Portal",
    description: "Consultations, patient records, and workflows.",
    icon: Stethoscope,
    href: "/doctor",
  },
  {
    title: "Employee Portal",
    description: "Internal operations, tasks, and communication.",
    icon: Briefcase,
    href: "/employee",
  },
  {
    title: "Admin Portal",
    description: "Platform management and system controls.",
    icon: ShieldCheck,
    href: "/admin",
  },
];

export default function PortalHero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 py-28">

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <h1
            className="
              mt-6
              font-semibold tracking-tight
              text-[#4c1711]
              leading-[0.95]
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              max-w-5xl mx-auto
            "
          >
            Access Your
            <br />
            Portal
          </h1>
        </motion.div>

        {/* Portal Cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="
            mt-16
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {portals.map((portal, index) => {
            const Icon = portal.icon;

            return (
              <motion.div
                key={portal.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <Card
                  className="
                    relative overflow-hidden
                    border border-[#aa6f73]/10
                    bg-white/70 backdrop-blur-xl
                    shadow-xl shadow-[#87565b]/5
                    rounded-3xl
                    p-7
                    h-full
                    transition-all duration-300
                    hover:border-[#aa6f73]/30
                    hover:shadow-2xl
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      absolute top-0 right-0
                      w-32 h-32
                      bg-[#c79da1]/10
                      blur-3xl
                    "
                  />

                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-[#4c1711]">
                      {portal.title}
                    </h3>

                    {/* Button */}
                    <Button
                      asChild
                      className="
                        mt-8
                        rounded-full
                        bg-[#aa6f73]
                        hover:bg-[#4c1711]
                        text-white
                        px-6
                        h-11
                      "
                    >
                      <Link href={portal.href}>
                        Enter Portal
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
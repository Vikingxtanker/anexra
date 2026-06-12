"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const leadership = [
  {
    name: "Shubham Chormale",
    role: "Chief Executive Officer (CEO)",
    qualification: "Doctor of Pharmacy & MBA",
    image: "/leaders/shubham.webp",
    description:
      "Leading Anexra\’s vision, healthcare strategy, partnerships, and long-term innovation.",
  },
  {
    name: "Gaurav Gaikwad",
    role: "Chief Technology Officer (CTO)",
    qualification: "Doctor of Pharmacy",
    image: "/leaders/gaurav.webp",
    description:
      "Building digital healthcare systems focused on patient care, monitoring, and accessibility.",
  },
  {
    name: "Kumkum Bhenwal",
    role: "Chief Operating Officer (COO)",
    qualification: "Doctor of Pharmacy",
    image: "/leaders/kumkum.webp",
    description:
      "Managing healthcare operations, workflows, and patient-centered service coordination.",
  },
  {
    name: "Akanksha Khandale",
    role: "Chief Financial Officer (CFO)",
    qualification: "Doctor of Pharmacy",
    image: "/leaders/akanksha.webp",
    description:
      "Driving financial planning, sustainability, and long-term healthcare growth strategies.",
  },
];

export default function LeadershipSection() {
  return (
    <section 
    data-theme="dark"
    className="relative overflow-hidden py-24 sm:py-28 lg:py-36 px-4 sm:px-6">

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
            opacity-[0.75]
            brightness-[0.45]
          "
        >
          <source src="/leadership_bg.webm" type="video/webm" />
        </video>

        {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-[#4c1711]/15 to-black/60" />


      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

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
            Meet the Leadership Team
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-white/70
            "
          >
            Driven by healthcare professionals committed to innovation,
            patient care, and long-term healthcare transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {leadership.map((leader, index) => (
            <Card
              key={index}
              className="
                group
                relative
                overflow-hidden
                h-auto
                border border-white/10
                bg-black/25
                backdrop-blur-xl
                rounded-[28px]
                shadow-[0_10px_40px_rgba(76,23,17,0.05)]
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(76,23,17,0.12)]
                hover:border-[#aa6f73]/20
                hover:bg-black/35
                p-0
              "
            >
              <CardContent className="p-0 h-full flex flex-col">

                {/* Large Profile Image */}
                <div className="relative aspect-[1200/1320] w-full overflow-hidden rounded-t-[28px]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="
                      object-cover
                      object-top
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Bottom Content */}
                <div className="p-6 text-center flex-1 flex flex-col justify-between">

                  <div>

                    {/* Name */}
                    <h3 className="text-2xl font-semibold text-white">
                      {leader.name}
                    </h3>

                    {/* Designation */}
                    <p className="mt-1 text-[#d6a3a7] font-medium">
                      {leader.role}
                    </p>

                    {/* Qualification */}
                    <p className="mt-1 text-sm text-white/60">
                      {leader.qualification}
                    </p>

                  </div>

                  {/* Short Description */}
                  <p className="mt-4 text-sm text-white/70 leading-relaxed">
                    {leader.description}
                  </p>

                </div>

              </CardContent>

              {/* Hover Glow */}
              <div
                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  bg-[radial-gradient(circle_at_top,rgba(199,157,161,0.12),transparent_60%)]
                  pointer-events-none
                "
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
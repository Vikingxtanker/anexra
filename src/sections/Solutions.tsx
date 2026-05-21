"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const solutions = [
  {
    title: "Clinical Pharmacist-Led Care",
    description:
      "Personalized medication management and patient-centered pharmaceutical care.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
    large: true,
  },
  {
    title: "Chronic Care Management",
    description:
      "Continuous healthcare coordination for long-term patient outcomes.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Clinical Education",
    description:
      "Healthcare awareness programs and professional education initiatives.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Remote Monitoring",
    description:
      "Digital patient monitoring for proactive healthcare interventions.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    large: true,
  },
  {
    title: "Medication Therapy",
    description:
      "Optimized medication therapy management for safer treatment plans.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Insurance Support",
    description:
      "Care navigation and insurance assistance for better accessibility.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Pharmaceutical Company",
    description:
      "Strategic healthcare and pharmaceutical industry collaboration.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1581091012184-5c8b1e5802d2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Medication Adherence",
    description:
      "Improving patient adherence through reminders and care tracking.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Medical Tourism",
    description:
      "Global healthcare coordination and international patient assistance.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Preventive Wellness",
    description:
      "Annual wellness programs focused on prevention and early intervention.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Solutions() {
  return (
    <section className="relative py-16 md:py-20 px-6">
      {/* Background Glow */}
      <div className="absolute top-20 left-[-100px] w-[260px] h-[260px] bg-[#f7d9dd] rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="absolute bottom-0 right-[-120px] w-[300px] h-[300px] bg-[#aa6f73] rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#aa6f73]/15 border border-[#aa6f73]/20 mb-8">
            <span className="text-sm font-medium tracking-widest text-[#aa6f73] uppercase">
              Our Solutions
            </span>
          </div> */}

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-[#4c1711] max-w-5xl mx-auto">
            Our Solutions
          </h2>
        </div>

        {/* Desktop Bento Grid */}
        <div className="hidden lg:grid grid-cols-4 auto-rows-[260px] gap-6">
          {solutions.map((solution, index) => {

            return (
              <Link
                key={index}
                href={solution.href}
                className={`group relative overflow-hidden rounded-[32px] border border-white/20 bg-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(76,23,17,0.08)] ${
                  solution.large
                    ? "col-span-2 row-span-2"
                    : "col-span-1 row-span-1"
                }`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: `url(${solution.image})`,
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f4efee]/70 via-[#f4efee]/40 to-[#4c1711]/50 group-hover:from-[#4c1711]/70 group-hover:to-[#aa6f73]/70 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-7">

                  <div>
                    <h3 className="text-2xl font-semibold text-[#4c1711] group-hover:text-white transition-colors duration-300 leading-tight">
                      {solution.title}
                    </h3>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm leading-relaxed text-white/90 max-w-sm">
                        {solution.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-sm font-medium text-white">
                        Explore Solution
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Tablet + Mobile Horizontal Scroll */}
        {/* Tablet Layout */}
<div className="hidden md:grid lg:hidden grid-cols-2 gap-5">
  {solutions.map((solution, index) => {
    return (
      <Link
        key={index}
        href={solution.href}
        className="group relative h-[420px] overflow-hidden rounded-[32px] border border-white/20 bg-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(76,23,17,0.08)]"
      >
        {/* Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
          style={{
            backgroundImage: `url(${solution.image})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4efee]/20 via-[#4c1711]/20 to-[#4c1711]/80" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-7">
          <h3 className="text-3xl font-semibold text-white leading-tight">
            {solution.title}
          </h3>

          <p className="mt-4 text-white/80 text-sm leading-relaxed">
            {solution.description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white">
            Explore Solution
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    );
  })}
</div>

{/* Mobile Horizontal Bento Scroll */}
<div className="md:hidden overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth">
  <div className="flex gap-4 pr-6">
    {solutions.map((solution, index) => {
      return (
        <Link
          key={index}
          href={solution.href}
          className={`group relative overflow-hidden rounded-[32px] border border-white/20 bg-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(76,23,17,0.08)] shrink-0 ${
            solution.large
              ? "w-[85vw] h-[420px]"
              : "w-[70vw] h-[320px]"
          }`}
        >
          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
            style={{
              backgroundImage: `url(${solution.image})`,
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f4efee]/20 via-[#4c1711]/20 to-[#4c1711]/80" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <h3 className="text-2xl font-semibold text-white leading-tight">
              {solution.title}
            </h3>

            <p className="mt-3 text-white/80 text-sm leading-relaxed">
              {solution.description}
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-white">
              Explore Solution
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      );
    })}
  </div>
</div>

      </div>
    </section>
  );
}
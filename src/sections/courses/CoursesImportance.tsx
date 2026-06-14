"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Resume Enhancement",
    description:
      "Stand out during placements with recognized certifications and practical healthcare skills.",
    image: "/images/courses/importance/RE.webp",
    large: true,
  },
  {
    title: "Clinical Knowledge",
    description:
      "Develop patient counselling, medication management, and real-world pharmacy practice skills.",
    image: "/images/courses/importance/CK.webp",
    large: true,
  },
  {
    title: "Higher Education",
    description:
      "Strengthen postgraduate applications and build a competitive academic profile.",
    image: "/images/courses/importance/CK2.webp",
  },
  {
    title: "Job Opportunities",
    description:
      "Prepare for careers in Clinical Pharmacy, Pharmacovigilance, Regulatory Affairs, and Medical Writing.",
    image: "/images/courses/importance/JO.webp",
  },
  {
    title: "Industry Ready Skills",
    description:
      "Gain practical healthcare knowledge that employers actively look for in graduates.",
    image: "/images/courses/importance/IRS.webp",
    large: true,
  },
  {
    title: "Certificate Value",
    description:
      "Earn professional certificates that showcase your commitment to continuous learning.",
    image: "/images/courses/importance/CERT.webp",
  },
];

const stats = [
  {
    value: "20+",
    label: "Professional Courses",
  },
  {
    value: "100%",
    label: "Self-Paced Learning",
  },
  {
    value: "5+",
    label: "Career Domains",
  },
  {
    value: "∞",
    label: "Growth Opportunities",
  },
];

export default function CoursesImportance() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">

          <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-[#4c1711] max-w-5xl mx-auto">
            Why These Courses Matter
          </h2>

          <p className="mt-6 text-lg md:text-xl text-[#4c1711]/70 max-w-3xl mx-auto leading-relaxed">
            Build clinical expertise, strengthen your resume, and unlock
            opportunities across healthcare, industry, and higher education.
          </p>
        </div>

        {/* Desktop Bento Grid */}
        <div className="hidden lg:grid grid-cols-4 auto-rows-[260px] gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className={`group relative overflow-hidden rounded-[32px]
              border border-white/20
              bg-white/30
              backdrop-blur-xl
              shadow-[0_8px_30px_rgba(76,23,17,0.08)]
              ${
                item.large
                  ? "col-span-2 row-span-2"
                  : "col-span-1 row-span-1"
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4efee]/80 via-[#f4efee]/40 to-[#4c1711]/60 group-hover:from-[#4c1711]/70 group-hover:to-[#aa6f73]/70 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-7">
                <h3 className="text-2xl font-semibold text-[#4c1711] group-hover:text-white transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#4c1711]/80 group-hover:text-white/90 transition-colors duration-300 max-w-md">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-5">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group relative h-[420px] overflow-hidden rounded-[32px] border border-white/20 bg-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(76,23,17,0.08)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#f4efee]/20 via-[#4c1711]/20 to-[#4c1711]/80" />

              <div className="relative z-10 h-full flex flex-col justify-end p-7">
                <h3 className="text-3xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-white/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="grid md:hidden gap-5">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group relative h-[420px] overflow-hidden rounded-[28px] border border-white/20 bg-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(76,23,17,0.08)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#f4efee]/20 via-[#4c1711]/20 to-[#4c1711]/80" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl md:text-5xl font-semibold text-[#4c1711]">
            Skills You'll Gain
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              "Patient Counselling",
              "Clinical Documentation",
              "ADR Reporting",
              "Medication Review",
              "Pharmacovigilance",
              "Medical Writing",
              "Literature Evaluation",
              "Drug Information Services",
              "Hospital Pharmacy Practice",
              "Medication Management",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#4c1711]/10 bg-white/60 backdrop-blur-md px-5 py-3 text-sm font-medium text-[#4c1711]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
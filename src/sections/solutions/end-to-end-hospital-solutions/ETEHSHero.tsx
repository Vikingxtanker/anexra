"use client";

import Link from "next/link";
import {
  Database,
  Pill,
  HeartPulse,
  Activity,
  Users,
  BarChart3,
  Network,
  GraduationCap,
  ShieldCheck,
  Globe2,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Electronic Health Records",
    description:
      "Comprehensive EHR platform supporting patient records, appointments, prescriptions, billing, analytics, and healthcare workflows.",
  },
  {
    icon: Pill,
    title: "Clinical Pharmacist Integration",
    description:
      "Medication therapy management, medication reviews, reconciliation, adherence monitoring, and patient counselling.",
  },
  {
    icon: HeartPulse,
    title: "Chronic Care Management",
    description:
      "Continuous healthcare support for patients living with long-term medical conditions.",
  },
  {
    icon: Activity,
    title: "Remote Patient Monitoring",
    description:
      "Real-time monitoring of blood pressure, blood glucose, oxygen saturation, heart rate, and wellness indicators.",
  },
  {
    icon: Users,
    title: "Population Health Management",
    description:
      "Risk stratification, predictive analytics, disease management, and preventive healthcare programs.",
  },
  {
    icon: BarChart3,
    title: "Healthcare Analytics",
    description:
      "Clinical dashboards, medication analytics, operational intelligence, and outcome measurement.",
  },
  {
    icon: Network,
    title: "Care Coordination",
    description:
      "Seamless communication between patients, physicians, specialists, hospitals, caregivers, and insurers.",
  },
  {
    icon: GraduationCap,
    title: "Healthcare Education",
    description:
      "Training programs, workforce development, medication safety education, and patient awareness initiatives.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Support",
    description:
      "Coverage guidance, claims assistance, healthcare navigation, and patient support programs.",
  },
  {
    icon: Globe2,
    title: "Medical Tourism",
    description:
      "Treatment coordination, hospital selection, medical travel planning, and post-treatment follow-up.",
  },
];

const advantages = [
  "Clinical Pharmacist-Led Healthcare",
  "Technology-Driven Care Delivery",
  "End-to-End Healthcare Ecosystem",
  "Patient-Centered Solutions",
  "Continuous Care Management",
  "Intelligent EHR Platform",
  "Remote Monitoring Integration",
  "Medication Safety Focus",
  "Healthcare Analytics & Reporting",
  "Long-Term Care Coordination",
];

const industries = [
  "Hospitals & Health Systems",
  "Clinics & Medical Centers",
  "Physicians & Specialists",
  "Healthcare Networks",
  "Insurance Companies",
  "Pharmaceutical Companies",
  "Healthcare Training Institutes",
  "Post-Acute Care Centers",
  "Healthcare Technology Partners",
];

export default function ETEHSHero() {
  return (
    <main className="bg-[#f4efee] text-[#4c1711] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center px-6">

        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#c79da1]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#87565b]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <p
            className="
              uppercase tracking-[0.25em]
              text-[#87565b]
              text-sm md:text-base
              font-medium
              mb-6
            "
          >
            ANEXRA Solutions
          </p>

          <h1
            className="
              text-[#4c1711]
              font-semibold
              tracking-tight
              leading-[0.92]
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            End-to-End
            <br />
            Healthcare Solutions
          </h1>

          <p
            className="
              mt-8
              text-[#564740]/85
              text-base sm:text-lg md:text-xl
              leading-relaxed
              max-w-4xl mx-auto
            "
          >
            Connecting patients, healthcare providers, clinical pharmacists,
            hospitals, insurers, and digital health technologies into one
            integrated healthcare ecosystem designed to improve outcomes,
            efficiency, and long-term wellness.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-[#87565b] text-sm font-medium mb-4">
              About This Solution
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Transforming Healthcare Through Connected Care
            </h2>
          </div>

          <div className="space-y-8 text-[#564740] text-lg leading-[1.9]">

            <p>
              At ANEXRA, healthcare does not end when a patient leaves the
              hospital. Modern healthcare requires continuous monitoring,
              coordinated care, medication safety, patient engagement,
              healthcare analytics, and seamless communication across every
              stage of the patient journey.
            </p>

            <p>
              Our End-to-End Healthcare Solutions combine clinical expertise,
              digital innovation, healthcare coordination, and intelligent
              technology platforms into a unified ecosystem that supports both
              healthcare providers and patients.
            </p>

            <p>
              Through Electronic Health Records, Remote Patient Monitoring,
              Clinical Pharmacist Integration, Chronic Care Management,
              Population Health Management, Healthcare Analytics, and Care
              Coordination Services, ANEXRA helps organizations improve
              healthcare delivery while supporting long-term patient wellness.
            </p>

            <p>
              Our mission is to create a connected healthcare ecosystem where
              healthcare professionals, hospitals, insurers, caregivers,
              pharmacists, and patients work together using technology-enabled
              care pathways that improve outcomes and operational efficiency.
            </p>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-[#87565b] text-sm font-medium mb-4">
              Healthcare Services
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Comprehensive Healthcare Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white/80
                    backdrop-blur-sm
                    border border-[#e5d8da]
                    rounded-[2rem]
                    p-8
                    hover:-translate-y-2
                    hover:shadow-xl
                    transition-all duration-500
                  "
                >
                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-[#4c1711]
                      flex items-center justify-center
                      mb-6
                    "
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-[#564740]/85 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Industries We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="
                  bg-white
                  border border-[#e5d8da]
                  rounded-3xl
                  p-8
                  text-center
                  font-medium
                "
              >
                {industry}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY ANEXRA */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Why Choose ANEXRA
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-4
                  bg-white
                  border border-[#e5d8da]
                  rounded-2xl
                  p-6
                "
              >
                <CheckCircle2 className="w-6 h-6 text-[#87565b]" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto">

          <div
            className="
              relative overflow-hidden
              rounded-[3rem]
              bg-[#4c1711]
              px-8 md:px-16
              py-16 md:py-20
            "
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c79da1]/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">

              <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                Connected Healthcare.
                <br />
                Better Outcomes.
              </h2>

              <p
                className="
                  mt-6
                  text-[#f4efee]/80
                  text-lg
                  max-w-3xl mx-auto
                  leading-relaxed
                "
              >
                ANEXRA combines clinical expertise, digital innovation, and
                coordinated healthcare services to improve patient outcomes,
                operational efficiency, and long-term wellness.
              </p>

              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  mt-10
                  px-8 py-4
                  rounded-full
                  bg-[#c79da1]
                  text-[#4c1711]
                  font-semibold
                  hover:bg-white
                  transition-all duration-300
                "
              >
                Contact ANEXRA
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
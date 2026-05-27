"use client";

import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  HeartHandshake,
  ClipboardList,
  Wallet,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Insurance Guidance",
    description:
      "Clear support to help patients understand policy coverage, claims, approvals, and healthcare benefits.",
  },
  {
    icon: FileText,
    title: "Documentation Assistance",
    description:
      "Professional guidance for organizing medical records, discharge summaries, bills, and claim-related paperwork.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care Support",
    description:
      "Compassionate healthcare guidance focused on smoother treatment coordination and patient convenience.",
  },
  {
    icon: ClipboardList,
    title: "Hospital Coordination",
    description:
      "Support in navigating hospital procedures, insurance desks, billing departments, and follow-up planning.",
  },
  {
    icon: Wallet,
    title: "Financial Care Planning",
    description:
      "Guidance that helps patients understand healthcare costs, available support options, and treatment planning.",
  },
  {
    icon: Users,
    title: "Family & Caregiver Support",
    description:
      "Reliable assistance for families managing healthcare decisions, long-term care, and post-discharge planning.",
  },
];

export default function InsuranceSupportPage() {
  return (
    <main className="bg-[#f4efee] text-[#4c1711] overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center px-6 overflow-hidden">
        
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="
              w-full h-full object-cover
              scale-110
              opacity-[0.45]
            "
          >
            <source
              src="/insurance-support.webm"
              type="video/webm"
            />
          </video>

          {/* Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-[#f4efee]/35
              via-[#f4efee]/55
              to-[#f4efee]
              backdrop-blur-[1px]
            "
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          
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
            Insurance Support
            <br />
            & Care Guidance
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
            Helping patients and families navigate healthcare, insurance
            processes, treatment coordination, and care planning with clarity
            and confidence.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-[#87565b] text-sm font-medium mb-4">
              About This Solution
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Simplifying Healthcare & Insurance Navigation
            </h2>
          </div>

          <div
            className="
              space-y-8
              text-[#564740]
              text-lg
              leading-[1.9]
            "
          >
            <p>
              Insurance support and care guidance is an important healthcare
              solution offered by ANEXRA to help patients and families navigate
              complex healthcare and insurance processes with professional
              support and practical guidance. Healthcare decisions often
              involve not only treatment but also financial planning,
              documentation, approvals, and coordination between multiple
              healthcare systems.
            </p>

            <p>
              ANEXRA’s insurance support and care guidance solution is designed
              to simplify this journey by helping patients understand insurance
              procedures, organize necessary documents, communicate effectively
              with healthcare providers, and make informed decisions regarding
              treatment and care planning.
            </p>

            <p>
              Many patients are unfamiliar with important aspects of their
              insurance policies such as coverage limits, exclusions, waiting
              periods, reimbursement procedures, pre-authorization
              requirements, and cashless hospitalization processes. Lack of
              awareness can lead to confusion, claim delays, unexpected
              expenses, or denial of benefits. ANEXRA provides simplified and
              patient-friendly guidance to help individuals better understand
              these healthcare processes.
            </p>

            <p>
              During hospitalization, insurance-related coordination can become
              stressful for patients and families. Individuals may need to
              communicate with hospital billing departments, insurance desks,
              diagnostic centers, physicians, and insurance providers
              simultaneously. ANEXRA helps patients understand the general
              process, organize documents, and prepare for reimbursement or
              cashless claim procedures in a structured manner.
            </p>

            <p>
              Care guidance is another important aspect of this service.
              Patients may require support in selecting healthcare services,
              understanding treatment pathways, arranging follow-up care,
              managing medicines after discharge, or coordinating with
              specialists and healthcare providers. ANEXRA helps simplify these
              decisions and improve continuity of care.
            </p>

            <p>
              This solution is valuable before, during, and after treatment.
              Before treatment, patients may need guidance regarding insurance
              coverage for consultations, procedures, diagnostic tests, or
              therapies. After treatment, support may be required for
              collecting bills, discharge summaries, prescriptions,
              investigation reports, and claim-related documentation.
            </p>

            <p>
              Insurance support and care guidance can also help reduce
              financial stress. Healthcare costs are often unpredictable, and
              patients may feel anxious about affordability and claim
              procedures. By providing practical guidance and healthcare
              coordination support, ANEXRA helps patients approach treatment
              decisions with greater confidence and preparation.
            </p>

            <p>
              Post-discharge planning is another important component of this
              service. Patients may require medicines, physiotherapy,
              diagnostic follow-up, home monitoring, dietary modifications, or
              specialist consultations after hospitalization. ANEXRA helps
              patients organize these requirements to support safer recovery
              and reduce the risk of missed follow-up care.
            </p>

            <p>
              This service is particularly valuable for elderly patients,
              families living away from the patient, individuals unfamiliar
              with healthcare systems, and patients requiring long-term care
              support. ANEXRA helps create a more transparent, organized, and
              supportive healthcare experience during challenging situations.
            </p>

            <p>
              ANEXRA’s insurance support and care guidance service is built on
              trust, transparency, and patient-centered assistance. While final
              insurance decisions remain with the insurer according to policy
              terms and documentation, proper guidance can help patients avoid
              common mistakes and navigate healthcare processes more smoothly.
              Through this solution, ANEXRA strengthens its commitment to
              supporting patients beyond clinical treatment alone.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-[#87565b] text-sm font-medium mb-4">
              Key Benefits
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              What ANEXRA Provides
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;

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
                    {feature.title}
                  </h3>

                  <p className="text-[#564740]/85 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
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
                Guidance Beyond Clinical Care
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
                ANEXRA supports patients and families with healthcare
                coordination, insurance guidance, documentation assistance,
                and organized care planning for smoother healthcare journeys.
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
"use client";

import Link from "next/link";
import {
  Pill,
  BellRing,
  ClipboardCheck,
  HeartPulse,
  Users,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Pill,
    title: "Consistent Medication Use",
    description:
      "Helping patients take medicines correctly, regularly, and safely according to prescribed treatment plans.",
  },
  {
    icon: BellRing,
    title: "Reminder & Schedule Support",
    description:
      "Personalized medication schedules, reminder systems, and routines designed to improve adherence.",
  },
  {
    icon: ClipboardCheck,
    title: "Patient Education",
    description:
      "Simple and practical counselling that helps patients understand medicine purpose, timing, and precautions.",
  },
  {
    icon: HeartPulse,
    title: "Long-Term Disease Management",
    description:
      "Support for chronic conditions where regular medication use is essential for disease control and prevention.",
  },
  {
    icon: Users,
    title: "Caregiver & Family Involvement",
    description:
      "Guidance for caregivers and families to support safer medication routines and improved patient care.",
  },
  {
    icon: ShieldCheck,
    title: "Medication Safety & Follow-Up",
    description:
      "Continuous support to address side effects, adherence barriers, and medication-related concerns early.",
  },
];

export default function MedicationAdherencePage() {
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
              src="/medication-adherence.webm"
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
            Medication
            <br />
            Adherence Program
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
            Personalized healthcare support focused on helping patients take
            medicines correctly, consistently, and confidently for better
            treatment outcomes.
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
              Supporting Patients Through Better Medication Consistency
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
              The medication adherence program offered by ANEXRA is a focused
              healthcare solution designed to help patients take their
              medicines correctly, consistently, and confidently as prescribed.
              Medication adherence means following the treatment plan
              recommended by healthcare professionals, including taking the
              right medicine, at the right dose, at the right time, and for
              the prescribed duration.
            </p>

            <p>
              Poor medication adherence is one of the most common reasons for
              treatment failure, worsening disease, avoidable hospitalization,
              and increased healthcare costs. Many patients do not intentionally
              avoid treatment but face practical challenges such as
              forgetfulness, complex schedules, fear of side effects, lack of
              understanding, cost concerns, or confusion related to multiple
              medicines.
            </p>

            <p>
              ANEXRA’s medication adherence program identifies these barriers
              and provides personalized support to help patients remain
              consistent with therapy. This solution is especially important
              for chronic conditions such as diabetes, hypertension, heart
              disease, asthma, epilepsy, thyroid disorders, psychiatric
              conditions, kidney disease, HIV, tuberculosis, and organ
              transplantation where long-term medicine use is critical.
            </p>

            <p>
              Patient education is a major part of the adherence program.
              Patients are more likely to follow treatment when they understand
              why medicines are necessary. ANEXRA explains medication purpose,
              dosage, timing, precautions, and disease-related benefits in
              clear and practical language to improve patient confidence and
              reduce unnecessary fear.
            </p>

            <p>
              Medication schedule planning is another important component.
              Patients taking multiple medicines may struggle to remember
              dosing times and instructions. ANEXRA helps simplify routines
              through medication charts, reminder systems, daily schedules,
              and caregiver-supported medication planning to improve
              consistency and reduce confusion.
            </p>

            <p>
              Continuous follow-up support is essential for maintaining
              adherence over time. ANEXRA provides ongoing guidance to monitor
              whether patients are taking medicines properly, facing side
              effects, or experiencing barriers that may interrupt therapy.
              This continuous relationship encourages accountability,
              motivation, and trust.
            </p>

            <p>
              Side effects are a common reason patients stop medicines without
              professional consultation. ANEXRA educates patients about common
              side effects, manageable symptoms, warning signs, and the
              importance of seeking medical advice before discontinuing therapy.
              This helps improve medication safety and reduces avoidable
              treatment interruption.
            </p>

            <p>
              Cost-related non-adherence is another important concern. Some
              patients skip doses or delay refilling medicines due to financial
              burden. ANEXRA can guide patients toward discussing cost-effective
              options with healthcare providers, understanding available support
              systems, and planning medicine refills in advance.
            </p>

            <p>
              The program is also highly valuable after hospital discharge,
              where patients may receive new prescriptions or dose changes.
              ANEXRA helps patients understand updated treatment regimens and
              avoid errors such as continuing discontinued medicines or missing
              newly prescribed therapies.
            </p>

            <p>
              Elderly patients especially benefit from medication adherence
              support due to memory challenges, multiple prescriptions, vision
              difficulties, and dependence on caregivers. ANEXRA supports
              geriatric patients through simplified schedules, family
              counselling, and regular follow-up guidance.
            </p>

            <p>
              ANEXRA’s medication adherence program is compassionate,
              patient-centered, and non-judgmental. Instead of blaming
              patients for non-adherence, the program focuses on understanding
              real-life barriers and creating practical solutions that fit the
              patient’s lifestyle. Through this service, ANEXRA promotes safer
              medicine use, stronger patient engagement, improved treatment
              outcomes, and better long-term healthcare success.
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
                Helping Patients Stay On Track
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
                ANEXRA supports patients through medication education,
                adherence planning, continuous follow-up, and compassionate
                healthcare guidance for better long-term outcomes.
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
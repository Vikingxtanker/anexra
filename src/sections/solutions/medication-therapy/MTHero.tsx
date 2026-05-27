"use client";

import Link from "next/link";
import {
  Pill,
  ClipboardCheck,
  ShieldCheck,
  BellRing,
  HeartPulse,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Pill,
    title: "Medication Optimization",
    description:
      "Professional medication review to ensure safe, effective, and appropriate therapy for every patient.",
  },
  {
    icon: ClipboardCheck,
    title: "Comprehensive Medication Review",
    description:
      "Evaluation of prescriptions, supplements, and self-medicated products to identify therapy-related concerns.",
  },
  {
    icon: ShieldCheck,
    title: "Medication Safety",
    description:
      "Identification of drug interactions, duplicate therapy, contraindications, and adverse drug risks.",
  },
  {
    icon: BellRing,
    title: "Adherence Support",
    description:
      "Personalized reminders, counselling, and medication planning to improve long-term treatment adherence.",
  },
  {
    icon: HeartPulse,
    title: "Therapeutic Monitoring",
    description:
      "Continuous monitoring of treatment effectiveness, side effects, and patient response to therapy.",
  },
  {
    icon: Users,
    title: "Collaborative Pharmaceutical Care",
    description:
      "Improved communication between patients, caregivers, pharmacists, and healthcare professionals.",
  },
];

export default function MedicationTherapyProgramPage() {
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
              src="/medication-therapy.webm"
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
            Therapy Program
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
            Structured pharmaceutical care focused on medication safety,
            therapy optimization, adherence support, and better treatment
            outcomes.
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
              Smarter Medication Use For Better Outcomes
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
              The medication therapy program offered by ANEXRA is a structured
              healthcare service designed to optimize medication use, improve
              treatment outcomes, and reduce medication-related problems.
              Medicines are essential tools in disease prevention and
              treatment, but they must be used correctly to provide maximum
              benefit and safety.
            </p>

            <p>
              ANEXRA’s medication therapy program ensures that every patient
              receives the right medicine, at the right dose, at the right
              time, and for the right reason. This service is especially
              valuable for patients taking multiple medicines, individuals with
              chronic diseases, elderly patients, patients recently discharged
              from hospitals, and those experiencing medication-related
              concerns or side effects.
            </p>

            <p>
              One of the core components of this program is comprehensive
              medication review. ANEXRA evaluates the patient’s complete
              medication profile, including prescription medicines,
              over-the-counter products, supplements, herbal preparations, and
              self-medicated drugs. This helps identify duplicate therapy,
              unnecessary medicines, incorrect dosing, potential interactions,
              and medications that may require monitoring.
            </p>

            <p>
              Medication therapy management also focuses on helping patients
              understand the purpose and importance of each medicine. Patients
              are educated about treatment goals, expected outcomes, and how
              medicines contribute to disease control and overall health. This
              understanding improves cooperation, confidence, and long-term
              adherence.
            </p>

            <p>
              Patient counselling is another essential part of the program.
              Many medication-related problems occur because patients do not
              receive clear guidance regarding medicine use. ANEXRA provides
              practical counselling about medicine timing, food interactions,
              missed doses, side effects, warning symptoms, and precautions to
              support safer and more effective therapy.
            </p>

            <p>
              The program also addresses medication adherence challenges.
              Patients may skip doses due to forgetfulness, complex schedules,
              fear of side effects, financial concerns, or lack of
              understanding. ANEXRA identifies these barriers and provides
              personalized support through medication schedules, reminders,
              caregiver involvement, and follow-up care.
            </p>

            <p>
              Monitoring for adverse drug reactions is another important
              feature of medication therapy management. Patients are educated
              about common side effects, serious warning signs, and the
              importance of reporting unusual symptoms promptly. This promotes
              early intervention and improves overall medication safety.
            </p>

            <p>
              The medication therapy program is especially valuable during care
              transitions such as hospital discharge. Patients may receive new
              prescriptions, dose adjustments, or discontinued therapies after
              hospitalization. ANEXRA helps reconcile medications and guides
              patients regarding which medicines should be continued, stopped,
              or clarified with their physician.
            </p>

            <p>
              Elderly patients benefit significantly from medication therapy
              support because they are more vulnerable to polypharmacy,
              kidney-related dose concerns, altered drug metabolism, and
              sensitivity to high-risk medicines. ANEXRA promotes safer
              medication practices through geriatric-focused medication review
              and counselling.
            </p>

            <p>
              ANEXRA’s medication therapy program is professional, ethical, and
              patient-centered. It complements medical treatment by focusing on
              safe and effective medicine use while encouraging collaboration
              between patients, caregivers, pharmacists, and healthcare
              providers. Through this service, ANEXRA promotes medication
              safety, responsible medicine use, and better healthcare outcomes.
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
                Better Medication Management Starts Here
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
                ANEXRA combines pharmaceutical expertise, medication safety,
                and patient-centered support to help individuals achieve safer
                therapy and improved health outcomes.
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
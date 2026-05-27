"use client";

import Link from "next/link";
import {
  Activity,
  ShieldCheck,
  Pill,
  HeartPulse,
  Users,
  ClipboardCheck,
} from "lucide-react";

const features = [
  {
    icon: Pill,
    title: "Medication Management",
    description:
      "Comprehensive medication review to ensure safe, effective, and appropriate therapy for every patient.",
  },
  {
    icon: ShieldCheck,
    title: "Medication Safety",
    description:
      "Identification of drug interactions, duplicate therapies, and medication-related risks before complications occur.",
  },
  {
    icon: HeartPulse,
    title: "Therapeutic Monitoring",
    description:
      "Continuous monitoring of treatment response, side effects, and therapy outcomes for better disease control.",
  },
  {
    icon: ClipboardCheck,
    title: "Patient Counselling",
    description:
      "Clear medication education helping patients understand usage, precautions, adherence, and treatment goals.",
  },
  {
    icon: Users,
    title: "Collaborative Care",
    description:
      "Coordination between pharmacists, physicians, caregivers, and patients for optimized healthcare delivery.",
  },
  {
    icon: Activity,
    title: "Chronic Disease Support",
    description:
      "Specialized care support for patients managing diabetes, hypertension, cardiovascular diseases, and more.",
  },
];

export default function ClinicalPharmacistLedCarePage() {
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
              src="/clinical-pharmacist-care.webm"
              type="video/webm"
            />
          </video>

          {/* Gradient Overlay */}
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
            Clinical Pharmacist-
            <br />
            Led Care
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
            Personalized pharmacist-led healthcare focused on medication
            safety, therapeutic optimization, patient counselling, and
            improved clinical outcomes.
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
              Patient-Centered Pharmaceutical Care
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
              Clinical pharmacist-led care is one of the most important
              healthcare solutions offered by ANEXRA, designed to improve
              patient outcomes through expert medication management,
              personalized counselling, and continuous therapeutic support.
              Clinical pharmacists help bridge the gap between prescriptions
              and real patient outcomes by ensuring medicines are safe,
              effective, appropriate, and clearly understood.
            </p>

            <p>
              At ANEXRA, this service focuses on structured, evidence-based,
              and patient-centered pharmaceutical care. Beyond dispensing
              medicines, clinical pharmacists review prescriptions, identify
              drug interactions, monitor side effects, assess medication
              appropriateness, improve adherence, and educate patients about
              their therapy. This proactive approach helps reduce medication
              errors and prevent avoidable complications.
            </p>

            <p>
              Patients with chronic conditions often receive medicines from
              multiple healthcare providers, increasing the risk of
              polypharmacy and inappropriate medication use. ANEXRA’s
              pharmacist-led care carefully evaluates complete medication
              profiles to ensure therapies remain compatible, necessary, and
              aligned with treatment goals.
            </p>

            <p>
              Personalized patient counselling is another essential part of
              this solution. Many patients struggle to understand why medicines
              are prescribed, how they should be taken, or which precautions
              are necessary. Through clear and professional counselling,
              ANEXRA empowers patients with the knowledge and confidence needed
              to manage their medications correctly.
            </p>

            <p>
              ANEXRA also supports therapeutic monitoring for medicines that
              require close follow-up, including anticoagulants, insulin,
              antihypertensives, antibiotics, and other high-risk therapies.
              Pharmacists help monitor treatment response, laboratory values,
              and medication safety while guiding patients toward timely
              physician consultation when needed.
            </p>

            <p>
              This solution is especially valuable for elderly patients who are
              more vulnerable to medication-related complications. By focusing
              on geriatric medication review, simplified medication schedules,
              and high-alert drug monitoring, ANEXRA improves medication safety
              and quality of life.
            </p>

            <p>
              Through collaborative care between pharmacists, physicians,
              caregivers, and patients, ANEXRA strengthens healthcare
              coordination and promotes rational medicine use. This approach
              transforms medication therapy into a guided healthcare process
              built around safety, clinical excellence, and long-term wellness.
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
                Smarter Medication Care Starts Here
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
                ANEXRA combines clinical expertise with patient-centered care
                to improve medication safety, therapeutic outcomes, and overall
                healthcare quality.
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
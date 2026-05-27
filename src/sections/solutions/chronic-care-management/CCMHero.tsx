"use client";

import Link from "next/link";
import {
  HeartPulse,
  Activity,
  ClipboardCheck,
  BellRing,
  Users,
  ShieldPlus,
} from "lucide-react";

const features = [
  {
    icon: HeartPulse,
    title: "Continuous Health Support",
    description:
      "Ongoing healthcare guidance and monitoring for patients living with long-term medical conditions.",
  },
  {
    icon: ClipboardCheck,
    title: "Medication Management",
    description:
      "Structured medication review and adherence support to reduce complications and improve treatment outcomes.",
  },
  {
    icon: BellRing,
    title: "Regular Follow-Up",
    description:
      "Consistent reminders, follow-up care, and health tracking to ensure continuity of treatment.",
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description:
      "Support for monitoring blood pressure, blood glucose, oxygen levels, and other important clinical parameters.",
  },
  {
    icon: Users,
    title: "Care Coordination",
    description:
      "Improved communication and coordination between patients, physicians, caregivers, and healthcare providers.",
  },
  {
    icon: ShieldPlus,
    title: "Preventive Care",
    description:
      "Early identification of risks and proactive support to prevent complications and hospital admissions.",
  },
];

export default function ChronicCareManagementPage() {
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
              src="/chronic-care-management.webm"
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
            Chronic Care
            <br />
            Management
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
            Long-term healthcare support focused on continuous monitoring,
            medication adherence, patient education, and improved quality of
            life.
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
              Supporting Patients Beyond Treatment
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
              Chronic care management is a comprehensive healthcare solution
              offered by ANEXRA to support individuals living with long-term
              medical conditions requiring continuous attention, monitoring,
              and coordinated care. Chronic diseases such as diabetes,
              hypertension, cardiovascular disorders, asthma, kidney disease,
              arthritis, thyroid disorders, and neurological conditions can
              significantly impact a patient’s quality of life if not managed
              properly.
            </p>

            <p>
              ANEXRA’s chronic care management solution focuses on helping
              patients manage their conditions more effectively through
              structured guidance, continuous support, and professional care
              coordination. The objective is not only to manage symptoms but
              also to prevent complications, improve treatment adherence,
              reduce hospital admissions, and enhance overall well-being.
            </p>

            <p>
              One of the major challenges in chronic disease management is poor
              continuity of care. Many patients discontinue medicines, skip
              follow-ups, or ignore early warning signs once symptoms improve.
              ANEXRA addresses these gaps through regular monitoring,
              medication review, counselling, reminders, and personalized care
              planning to help patients remain engaged with their treatment.
            </p>

            <p>
              Patient education is a key component of this service. Patients
              need to understand their condition, treatment goals, lifestyle
              modifications, and the importance of medication adherence.
              ANEXRA provides practical and easy-to-understand guidance to help
              patients make informed decisions about their health every day.
            </p>

            <p>
              Medication management is another essential part of chronic care.
              Patients with chronic illnesses often require multiple medicines,
              increasing the risk of confusion, missed doses, interactions, and
              side effects. ANEXRA helps patients organize medications,
              understand dosing schedules, and identify medication-related
              concerns before complications occur.
            </p>

            <p>
              Chronic care management also includes regular monitoring of
              clinical parameters such as blood pressure, blood glucose, oxygen
              saturation, body weight, kidney function, and lipid levels.
              ANEXRA supports patients in maintaining health records,
              understanding investigations, and recognizing when medical
              attention is necessary.
            </p>

            <p>
              Another important aspect of this solution is coordination between
              healthcare providers. Patients with long-term conditions often
              consult physicians, specialists, pharmacists, dietitians,
              diagnostic centers, and insurance providers. ANEXRA helps improve
              communication and continuity of care, making healthcare journeys
              smoother, more organized, and more patient-friendly.
            </p>

            <p>
              Through compassionate and professional support, ANEXRA promotes
              long-term wellness, preventive healthcare, and better disease
              control. By encouraging early intervention and consistent care,
              complications such as stroke, kidney failure, uncontrolled
              diabetes, severe asthma attacks, and repeated hospitalizations
              can be reduced significantly.
            </p>

            <p>
              Chronic care management at ANEXRA represents a modern,
              patient-centered approach to lifelong healthcare support. The
              focus remains on empowering patients, improving treatment
              outcomes, and building long-term partnerships that support better
              health and quality of life.
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
                Long-Term Care With Continuous Support
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
                ANEXRA helps patients manage chronic conditions through
                structured monitoring, medication guidance, preventive care,
                and compassionate healthcare support.
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
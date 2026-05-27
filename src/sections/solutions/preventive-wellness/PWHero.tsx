"use client";

import Link from "next/link";
import {
  HeartPulse,
  Activity,
  ShieldCheck,
  ClipboardCheck,
  Apple,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: HeartPulse,
    title: "Preventive Health Screening",
    description:
      "Regular health evaluations and risk assessments to support early detection and proactive healthcare management.",
  },
  {
    icon: Activity,
    title: "Lifestyle & Wellness Guidance",
    description:
      "Practical support for healthier habits including exercise, stress management, sleep, and daily wellness routines.",
  },
  {
    icon: ShieldCheck,
    title: "Early Risk Identification",
    description:
      "Monitoring and identification of chronic disease risks before serious complications develop.",
  },
  {
    icon: ClipboardCheck,
    title: "Medication & Health Review",
    description:
      "Structured review of medicines, supplements, and health records to encourage safer healthcare decisions.",
  },
  {
    icon: Apple,
    title: "Nutrition & Preventive Care",
    description:
      "Education and counselling focused on balanced nutrition, healthy lifestyle choices, and disease prevention.",
  },
  {
    icon: Brain,
    title: "Mental Wellness Awareness",
    description:
      "Supportive wellness education addressing stress, burnout, sleep health, and emotional well-being.",
  },
];

export default function PreventiveWellnessPage() {
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
              src="/preventive-wellness.webm"
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
            Annual Wellness
            <br />
            & Preventive Care
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
            Proactive healthcare focused on prevention, early detection,
            lifestyle improvement, and long-term wellness support for healthier
            living.
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
              Preventive Healthcare For A Healthier Future
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
              Annual wellness and preventive care is a proactive healthcare
              solution offered by ANEXRA to help individuals maintain good
              health, identify risks early, prevent disease progression, and
              improve long-term quality of life. Preventive healthcare focuses
              on recognizing health risks before serious complications occur,
              allowing timely intervention and better healthcare outcomes.
            </p>

            <p>
              ANEXRA’s annual wellness and preventive care program encourages
              individuals to take an active role in their health through
              regular assessment, education, monitoring, and lifestyle
              guidance. The program is built on the principle that prevention
              is better than cure and that early action can significantly
              reduce the burden of chronic disease.
            </p>

            <p>
              Many conditions such as diabetes, hypertension, heart disease,
              obesity, kidney disease, thyroid disorders, liver disease, and
              certain cancers can be identified early through routine health
              evaluation and preventive screening. Early detection allows
              better disease control, reduced healthcare costs, and improved
              long-term quality of life.
            </p>

            <p>
              ANEXRA’s wellness and preventive care program may include health
              risk assessment, medication review, lifestyle evaluation,
              screening guidance, vaccination awareness, nutrition counselling,
              chronic disease risk identification, physical activity guidance,
              mental wellness awareness, and follow-up planning. The goal is
              to provide a complete understanding of an individual’s health
              status while promoting preventive action.
            </p>

            <p>
              Annual health screening is one of the most important components
              of preventive care. Depending on age, gender, family history,
              lifestyle, and existing medical conditions, individuals may
              require blood pressure monitoring, blood glucose testing, lipid
              profile assessment, liver and kidney function tests, thyroid
              screening, ECG evaluation, cancer screening, eye examination,
              dental check-ups, and other physician-recommended investigations.
            </p>

            <p>
              Lifestyle assessment also plays a major role in wellness care.
              Many chronic illnesses are strongly associated with unhealthy
              habits such as poor diet, physical inactivity, smoking, alcohol
              use, stress, obesity, and irregular sleep. ANEXRA provides
              practical and patient-friendly guidance to help individuals make
              healthier lifestyle choices and reduce long-term health risks.
            </p>

            <p>
              Medication review is another valuable aspect of preventive care.
              Some individuals may continue long-term medicines, supplements,
              or over-the-counter products without regular evaluation. ANEXRA
              helps patients understand their medicines, identify possible
              concerns, and encourage safe and rational medicine use through
              professional healthcare guidance.
            </p>

            <p>
              Preventive care also includes vaccination awareness. Vaccines are
              important not only for children but also for adults, elderly
              individuals, travelers, healthcare workers, and patients with
              chronic diseases. ANEXRA educates individuals regarding the
              importance of recommended immunization and preventive protection.
            </p>

            <p>
              Annual wellness programs are particularly valuable for
              individuals with a family history of chronic illness, corporate
              professionals with stressful lifestyles, and elderly individuals
              who require regular health monitoring. ANEXRA’s wellness support
              helps encourage timely screening, healthy lifestyle changes,
              stress management, medication safety, and long-term health
              awareness.
            </p>

            <p>
              Mental wellness is also an important part of preventive
              healthcare. Stress, anxiety, burnout, depression, and sleep
              disturbances can significantly affect physical health and daily
              functioning. ANEXRA promotes mental wellness awareness and
              encourages individuals to seek appropriate professional support
              whenever needed.
            </p>

            <p>
              Through annual wellness and preventive care, ANEXRA strengthens
              its commitment to proactive healthcare, early detection, disease
              prevention, and healthier living. This solution encourages
              individuals to move beyond reactive treatment and adopt a more
              informed, preventive, and wellness-focused approach to long-term
              health management.
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
                Prevention Today For Better Health Tomorrow
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
                ANEXRA promotes preventive healthcare through wellness
                screening, lifestyle guidance, early risk detection, and
                patient education to support healthier long-term living.
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
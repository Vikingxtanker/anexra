"use client";

import Link from "next/link";
import {
  Activity,
  Smartphone,
  HeartPulse,
  BellRing,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Continuous Health Tracking",
    description:
      "Regular monitoring of vital health parameters to support proactive and informed healthcare decisions.",
  },
  {
    icon: Smartphone,
    title: "Connected Digital Care",
    description:
      "Technology-enabled monitoring solutions that keep patients connected with healthcare support from home.",
  },
  {
    icon: HeartPulse,
    title: "Early Risk Detection",
    description:
      "Identification of warning signs and health changes before complications become severe or life-threatening.",
  },
  {
    icon: BellRing,
    title: "Medication & Care Reminders",
    description:
      "Structured reminders and support to improve medication adherence and follow-up consistency.",
  },
  {
    icon: ShieldCheck,
    title: "Safer Home-Based Monitoring",
    description:
      "Reliable remote supervision for chronic disease management, elderly care, and post-treatment recovery.",
  },
  {
    icon: Wifi,
    title: "Better Healthcare Communication",
    description:
      "Improved coordination between patients, caregivers, pharmacists, and healthcare professionals.",
  },
];

export default function RemotePatientMonitoringPage() {
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
              src="/remote-monitoring.webm"
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
            Remote Patient
            <br />
            Monitoring
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
            Technology-enabled healthcare support designed to help patients
            monitor their health continuously while staying connected to
            professional care guidance.
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
              Modern Healthcare Beyond Hospital Walls
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
              Remote patient monitoring is a modern healthcare solution offered
              by ANEXRA to support patients outside traditional clinical
              settings through continuous health tracking, digital
              communication, and timely care guidance. With the increasing
              burden of chronic diseases and the growing need for convenient
              healthcare support, remote monitoring has become an essential
              part of patient-centered care.
            </p>

            <p>
              ANEXRA’s remote patient monitoring solution helps patients manage
              their health from home while remaining connected to professional
              healthcare support. This service is especially beneficial for
              individuals living with chronic conditions such as diabetes,
              hypertension, cardiovascular disease, respiratory disorders,
              kidney disease, and patients requiring long-term medication
              therapy or post-surgical recovery support.
            </p>

            <p>
              Remote monitoring may include tracking health parameters such as
              blood pressure, blood glucose, pulse rate, oxygen saturation,
              body temperature, body weight, medication adherence, symptoms,
              and physical activity. These indicators provide valuable insights
              into the patient’s health status and treatment response.
            </p>

            <p>
              One of the major advantages of remote patient monitoring is early
              detection of warning signs. Many health complications develop
              gradually and may go unnoticed between routine doctor visits.
              Through regular monitoring, patients and healthcare providers can
              recognize abnormal trends early and take appropriate action
              before complications become severe.
            </p>

            <p>
              ANEXRA supports patients through education, monitoring guidance,
              medication reminders, symptom review, and care coordination.
              Patients are guided on the correct use of monitoring devices,
              accurate recording of health readings, and understanding when
              professional medical attention may be necessary.
            </p>

            <p>
              Remote monitoring also helps improve treatment adherence. Patients
              who actively track their health are often more likely to follow
              medication schedules, maintain lifestyle modifications, and stay
              engaged with their treatment plans. This is especially important
              for chronic disease management where long-term consistency plays
              a critical role in treatment outcomes.
            </p>

            <p>
              For elderly patients and caregivers, remote monitoring provides
              an added sense of reassurance and safety. Families can stay
              informed about important health changes while ensuring that
              patients receive timely attention and support when needed.
            </p>

            <p>
              Another important advantage of this solution is reduced
              dependency on frequent hospital visits. While remote monitoring
              does not replace direct medical consultation, it helps identify
              when a visit is truly necessary, improving convenience and
              reducing travel difficulties, healthcare costs, and unnecessary
              clinic visits.
            </p>

            <p>
              Health data collected through remote monitoring also improves
              communication between patients and healthcare professionals.
              Doctors and pharmacists can evaluate trends over time rather than
              relying only on occasional readings, enabling better clinical
              decision-making and treatment optimization.
            </p>

            <p>
              ANEXRA’s remote patient monitoring solution combines technology
              with compassionate healthcare support to ensure patients do not
              feel isolated while managing their health at home. Through
              continuous guidance, proactive monitoring, and connected care,
              ANEXRA promotes better disease control, improved quality of life,
              and a more efficient healthcare experience.
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
                Smarter Monitoring For Better Health
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
                ANEXRA combines digital healthcare tools with professional
                support to help patients stay informed, connected, and in
                control of their health every day.
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
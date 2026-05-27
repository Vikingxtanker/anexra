"use client";

import Link from "next/link";
import {
  Globe,
  Plane,
  ClipboardList,
  Hospital,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Healthcare Access",
    description:
      "Helping patients connect with healthcare services, specialists, and treatment options across regions and countries.",
  },
  {
    icon: Plane,
    title: "Medical Travel Coordination",
    description:
      "Structured guidance for travel planning, treatment scheduling, accommodation, and healthcare logistics.",
  },
  {
    icon: ClipboardList,
    title: "Medical Documentation Support",
    description:
      "Professional assistance in organizing medical records, reports, prescriptions, and treatment documents.",
  },
  {
    icon: Hospital,
    title: "Hospital & Specialist Coordination",
    description:
      "Support in identifying appropriate healthcare facilities and specialist consultations based on patient needs.",
  },
  {
    icon: HeartHandshake,
    title: "Continuity Of Care",
    description:
      "Ongoing support before, during, and after treatment to ensure smoother recovery and follow-up care.",
  },
  {
    icon: ShieldCheck,
    title: "Patient-Centered Guidance",
    description:
      "Compassionate healthcare coordination focused on safety, transparency, communication, and patient comfort.",
  },
];

export default function MedicalTourismPage() {
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
              src="/medical-tourism.webm"
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
            Medical Tourism
            <br />
            & Global Care Coordination
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
            Structured healthcare coordination designed to support patients
            seeking treatment across cities, states, and international
            healthcare destinations.
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
              Connecting Patients With Global Healthcare Opportunities
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
              Medical tourism and global care coordination is a specialized
              healthcare solution offered by ANEXRA to support patients seeking
              healthcare services across cities, states, or international
              borders. In today’s healthcare environment, many patients travel
              for advanced procedures, specialist consultation, affordable
              treatment options, shorter waiting times, and access to globally
              recognized healthcare facilities.
            </p>

            <p>
              ANEXRA’s medical tourism and global care coordination service is
              designed to simplify the patient journey through structured
              guidance, communication support, healthcare coordination, and
              continuity of care. The goal is to help patients and families
              make informed healthcare decisions while reducing confusion and
              logistical burden during treatment planning and travel.
            </p>

            <p>
              Patients seeking medical care away from home often face
              challenges such as selecting the right hospital or specialist,
              understanding treatment options, estimating costs, organizing
              medical records, scheduling appointments, arranging travel,
              managing accommodation, and planning follow-up care after
              returning home. ANEXRA helps organize these aspects in a
              professional and patient-friendly manner.
            </p>

            <p>
              Pre-treatment coordination is one of the most important parts of
              this solution. Before traveling, patients require clarity
              regarding diagnosis, treatment pathways, estimated hospital stay,
              financial planning, procedure expectations, and recovery time.
              ANEXRA helps patients organize medical documents, communicate
              with healthcare providers, and better understand the overall care
              process before treatment begins.
            </p>

            <p>
              Hospital and specialist coordination is another essential
              component. Patients may not always know which healthcare facility
              is most suitable for their condition. ANEXRA can assist patients
              in connecting with appropriate healthcare providers based on the
              type of treatment required, patient preferences, location, and
              care availability while encouraging qualified medical
              consultation and informed decision-making.
            </p>

            <p>
              Medical documentation plays a major role in global healthcare
              coordination. Prescriptions, investigation reports, imaging,
              allergy history, discharge summaries, medication lists, and
              insurance documents often need to be organized properly before
              treatment. ANEXRA supports patients in preparing and presenting
              these records efficiently to improve communication with
              healthcare teams and reduce delays.
            </p>

            <p>
              During treatment, patients and families may require support in
              understanding hospital procedures, appointment schedules,
              medication instructions, discharge planning, and follow-up care
              requirements. ANEXRA’s coordination approach helps reduce stress
              by providing organized guidance and communication support
              throughout the treatment journey.
            </p>

            <p>
              Post-treatment care is equally important. Patients returning home
              after surgery, specialist consultation, rehabilitation, or
              advanced treatment may require ongoing monitoring, medication
              management, physiotherapy, wound care, dietary guidance, or
              repeat investigations. ANEXRA supports continuity of care by
              helping patients understand discharge instructions and maintain
              follow-up schedules effectively.
            </p>

            <p>
              This solution can support patients seeking services such as
              cardiac care, orthopedic procedures, oncology consultation,
              fertility treatment, organ transplant evaluation, neurological
              consultation, rehabilitation, cosmetic procedures, dental care,
              chronic disease management, and wellness services. All medical
              decisions remain dependent on qualified healthcare professionals
              and appropriate medical consultation.
            </p>

            <p>
              ANEXRA’s medical tourism and global care coordination service is
              built on professionalism, transparency, patient safety, and
              ethical healthcare support. By combining healthcare coordination
              with compassionate guidance, ANEXRA helps patients access broader
              healthcare opportunities while experiencing smoother, safer, and
              better-organized treatment journeys.
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
                Coordinating Care Beyond Borders
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
                ANEXRA supports patients with healthcare coordination,
                treatment planning, medical travel guidance, and continuity of
                care for safer and more organized treatment experiences.
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
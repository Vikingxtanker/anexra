"use client";

import Link from "next/link";
import {
  BookOpen,
  Presentation,
  Megaphone,
  ShieldCheck,
  Users,
  MonitorSmartphone,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Health Education",
    description:
      "Scientifically accurate and easy-to-understand health education designed for patients, caregivers, and communities.",
  },
  {
    icon: Presentation,
    title: "Training Programs",
    description:
      "Professional learning sessions, seminars, webinars, and workshops for healthcare students and professionals.",
  },
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    description:
      "Community and digital awareness initiatives focused on preventive healthcare and responsible medicine use.",
  },
  {
    icon: ShieldCheck,
    title: "Medication Awareness",
    description:
      "Education on safe medicine use, antibiotic resistance, medication adherence, and avoiding self-medication risks.",
  },
  {
    icon: Users,
    title: "Community Outreach",
    description:
      "Patient-centered public health programs promoting wellness, prevention, and healthcare literacy.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Education",
    description:
      "Accessible healthcare learning through digital content, videos, infographics, blogs, and online sessions.",
  },
];

export default function ClinicalEducationPage() {
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
              src="/clinical-education.webm"
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
            Clinical Education
            <br />
            & Awareness
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
            Empowering patients, healthcare professionals, and communities
            through reliable clinical education, awareness programs, and
            evidence-based healthcare knowledge.
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
              Education That Strengthens Healthcare
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
              Clinical education and awareness programs are essential
              healthcare solutions offered by ANEXRA to educate patients,
              caregivers, healthcare students, professionals, and communities
              about important health topics in a clear, practical, and
              reliable manner. In today’s healthcare environment, access to
              information is widespread, but the accuracy and quality of that
              information are not always guaranteed.
            </p>

            <p>
              ANEXRA’s clinical education and awareness program focuses on
              delivering scientifically accurate, professionally structured,
              and easy-to-understand healthcare information. The goal is to
              improve awareness, promote rational medicine use, encourage early
              diagnosis, and empower individuals to make informed healthcare
              decisions.
            </p>

            <p>
              This solution includes awareness sessions, patient education
              materials, webinars, seminars, digital campaigns, health camps,
              counselling sessions, and disease-specific educational programs.
              ANEXRA can design educational initiatives for topics such as
              diabetes awareness, hypertension management, medication safety,
              vaccination awareness, lifestyle diseases, women’s health,
              nutrition, mental health, and preventive healthcare.
            </p>

            <p>
              One of the major strengths of ANEXRA’s clinical education program
              is its ability to simplify complex medical concepts into practical
              and patient-friendly information. Many individuals feel confused
              by medical terminology, laboratory reports, diagnoses, and
              medication instructions. ANEXRA presents healthcare information
              in a simple and understandable format without compromising
              scientific accuracy.
            </p>

            <p>
              Medication awareness is a key focus area. Many people misuse
              medicines due to lack of knowledge, including incomplete
              antibiotic courses, self-medication, incorrect dosing schedules,
              overuse of painkillers, and ignoring side effects. Through
              structured education, ANEXRA promotes safe medicine use and
              encourages consultation with qualified healthcare professionals.
            </p>

            <p>
              ANEXRA’s education and awareness programs also support preventive
              healthcare. By encouraging lifestyle modifications, regular
              screening, exercise, nutrition awareness, smoking cessation, and
              early health monitoring, these initiatives help reduce the risk
              of chronic diseases and serious health complications.
            </p>

            <p>
              For healthcare students and professionals, ANEXRA can provide
              academic and practical learning opportunities including clinical
              pharmacy training, case discussions, pharmacotherapy education,
              patient counselling development, pharmacovigilance awareness, and
              healthcare communication skills. These programs help strengthen
              professional competence and real-world clinical understanding.
            </p>

            <p>
              Community awareness remains another important component of this
              solution. Many communities lack adequate awareness regarding
              preventive care, maternal health, child health, elderly care, and
              responsible medicine use. ANEXRA’s community-based awareness
              programs help improve healthcare literacy and promote healthier
              lifestyles.
            </p>

            <p>
              Through digital platforms such as websites, blogs, videos,
              newsletters, infographics, social media, and online sessions,
              ANEXRA expands healthcare education to a wider audience. This
              modern and accessible approach allows individuals to learn
              healthcare information conveniently and responsibly.
            </p>

            <p>
              ANEXRA’s clinical education and awareness program reflects a
              strong commitment to ethical healthcare communication,
              professional responsibility, prevention, and empowerment. By
              improving awareness and promoting informed decision-making,
              ANEXRA contributes to better patient outcomes, stronger
              communities, and safer healthcare practices.
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
                Building Awareness Through Better Education
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
                ANEXRA combines clinical knowledge, professional education,
                and public awareness to support safer healthcare practices,
                informed decision-making, and healthier communities.
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
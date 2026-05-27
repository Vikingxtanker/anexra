"use client";

import Link from "next/link";
import {
  Pill,
  ShieldCheck,
  Truck,
  HeartHandshake,
  Building2,
  MonitorSmartphone,
} from "lucide-react";

const features = [
  {
    icon: Pill,
    title: "Quality Pharmaceutical Products",
    description:
      "Reliable healthcare products and medicines supported by quality assurance and professional standards.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Ethical Healthcare",
    description:
      "A patient-centered pharmaceutical approach focused on safety, transparency, and responsible healthcare practices.",
  },
  {
    icon: Truck,
    title: "Supply & Distribution Support",
    description:
      "Efficient pharmaceutical supply systems and healthcare product distribution for better accessibility.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Focused Services",
    description:
      "Integrated pharmaceutical care combined with counselling, adherence support, and healthcare guidance.",
  },
  {
    icon: Building2,
    title: "Healthcare Partnerships",
    description:
      "Collaboration with hospitals, clinics, pharmacies, and healthcare organizations to strengthen care delivery.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Healthcare Integration",
    description:
      "Modern technology solutions supporting pharmaceutical coordination, education, and patient engagement.",
  },
];

export default function PharmaceuticalCompanyPage() {
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
              src="/pharmaceutical-company.webm"
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
            Pharmaceutical
            <br />
            Company
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
            Advancing healthcare through quality pharmaceutical products,
            ethical practices, reliable supply systems, and patient-centered
            healthcare innovation.
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
              Building Trust Through Pharmaceutical Excellence
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
              ANEXRA’s pharmaceutical company solution reflects a professional
              commitment to improving healthcare access through quality
              pharmaceutical products, ethical business practices, reliable
              supply systems, and patient-centered healthcare innovation. The
              pharmaceutical industry plays a critical role in disease
              prevention, treatment, symptom control, and overall health
              improvement.
            </p>

            <p>
              ANEXRA aims to contribute to this healthcare ecosystem with a
              strong focus on quality, affordability, accessibility, trust, and
              responsible pharmaceutical care. Beyond providing products,
              ANEXRA recognizes the importance of patient safety, professional
              responsibility, healthcare education, and ethical healthcare
              support.
            </p>

            <p>
              One of the primary goals of ANEXRA as a pharmaceutical company is
              to support access to reliable and quality-assured medicines.
              Patients and healthcare professionals must have confidence that
              medicines are manufactured, stored, transported, and supplied
              according to appropriate standards. Quality assurance and safe
              medicine access remain central to ANEXRA’s pharmaceutical vision.
            </p>

            <p>
              The pharmaceutical company solution may include medicine supply,
              healthcare product distribution, dealership partnerships,
              institutional supply support, pharmacy collaboration, and
              patient-focused pharmaceutical services. ANEXRA can collaborate
              with hospitals, clinics, pharmacies, diagnostic centers, and
              healthcare organizations to strengthen healthcare accessibility
              and continuity of care.
            </p>

            <p>
              ANEXRA’s foundation in clinical pharmacy and patient care creates
              a meaningful advantage in the pharmaceutical sector. Instead of
              focusing only on product distribution, ANEXRA can integrate
              pharmaceutical services with patient counselling, medication
              therapy management, adherence support, chronic care programs, and
              healthcare education. This helps connect medicine supply directly
              with patient outcomes and therapeutic success.
            </p>

            <p>
              Ethical communication and professional healthcare engagement are
              important values within ANEXRA’s pharmaceutical approach.
              Accurate, balanced, and scientifically appropriate information is
              essential for responsible healthcare practices. ANEXRA aims to
              promote transparent communication and evidence-based professional
              relationships with healthcare providers and patients.
            </p>

            <p>
              Collaboration also plays a vital role in pharmaceutical
              operations. Healthcare systems depend on strong partnerships
              between manufacturers, distributors, hospitals, pharmacies,
              healthcare professionals, and service providers. ANEXRA seeks to
              build collaborations that improve medicine availability, support
              patient care, and strengthen healthcare delivery systems.
            </p>

            <p>
              Affordability remains a major healthcare challenge, especially
              for patients requiring long-term treatment. ANEXRA’s
              pharmaceutical vision includes supporting cost-effective access
              to medicines and healthcare products through coordinated care
              services, strategic partnerships, patient support initiatives,
              and awareness regarding responsible medicine use.
            </p>

            <p>
              Technology can further enhance pharmaceutical services through
              digital healthcare integration. ANEXRA can utilize digital
              platforms to support healthcare coordination, medicine reminders,
              inventory management, patient education, remote care support, and
              communication with healthcare professionals. This modern approach
              reflects the growing importance of technology-enabled healthcare.
            </p>

            <p>
              ANEXRA’s pharmaceutical company solution is built on principles
              of professionalism, compliance, ethics, and patient-centered
              healthcare support. By combining pharmaceutical quality with
              service excellence and healthcare innovation, ANEXRA aims to
              create a trusted healthcare brand focused on improving access,
              supporting safe medicine use, and contributing to better health
              outcomes.
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
                Pharmaceutical Care With Purpose
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
                ANEXRA combines pharmaceutical quality, healthcare innovation,
                ethical practices, and patient-centered support to strengthen
                access to safer and more reliable healthcare solutions.
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
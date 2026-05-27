"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/menu";

const syllabus = {
  "Part 1": [
    {
      subject: "Pharmaceutics",
      chapters: [
        "Introduction to Pharmaceutics",
        "Prescription Handling",
        "Dosage Forms",
        "Posology",
        "Dispensing Pharmacy",
      ],
    },
    {
      subject: "Pharmaceutical Chemistry",
      chapters: [
        "Acids & Bases",
        "Electrolytes",
        "Inorganic Compounds",
        "Volumetric Analysis",
      ],
    },
    {
      subject: "Pharmacognosy",
      chapters: [
        "Crude Drugs",
        "Plant Fibers",
        "Herbal Medicines",
      ],
    },
    {
      subject: "Human Anatomy & Physiology",
      chapters: [
        "Digestive System",
        "Cardiovascular System",
        "Respiratory System",
      ],
    },
    {
      subject: "Social Pharmacy",
      chapters: [
        "Health Education",
        "Public Health",
        "Pharmacy Ethics",
      ],
    },
  ],

  "Part 2": [
    {
      subject: "Pharmacology",
      chapters: [
        "Autonomic Nervous System",
        "CNS Drugs",
        "Antibiotics",
      ],
    },
    {
      subject: "Hospital & Clinical Pharmacy",
      chapters: [
        "Hospital Organization",
        "Drug Distribution",
        "Patient Counseling",
      ],
    },
    {
      subject: "Biochemistry",
      chapters: [
        "Proteins",
        "Carbohydrates",
        "Enzymes",
      ],
    },
    {
      subject: "Pharmaceutical Jurisprudence",
      chapters: [
        "Drugs & Cosmetics Act",
        "Pharmacy Act",
        "Schedules",
      ],
    },
    {
      subject: "Drug Store & Business Management",
      chapters: [
        "Inventory Control",
        "Accounting",
        "Sales Management",
      ],
    },
    {
      subject: "Clinical Pathology",
      chapters: [
        "Blood Tests",
        "Urine Analysis",
        "Diagnostic Methods",
      ],
    },
    {
      subject: "Health Education & Community Pharmacy",
      chapters: [
        "Community Healthcare",
        "Disease Prevention",
        "Patient Awareness",
      ],
    },
  ],
};

export default function DPharmPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4efee]">

      {/* HERO */}
      <section className="relative overflow-hidden px-4 sm:px-6 py-28">

        {/* Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(43, 11, 8, 1) 0%, rgba(135, 86, 91, 1) 30%, rgba(168, 118, 122, 1) 82%, rgba(221, 197, 199, 1) 100%)",
          }}
        />

        {/* Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">

          <p
            className="
              uppercase tracking-[0.3em]
              text-white/70
              text-sm
              font-medium
            "
          >
            Anexra Education
          </p>

          <h1
            className="
              mt-6
              text-white
              font-semibold
              tracking-tight
              leading-[0.9]

              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Diploma in
            <br />
            Pharmacy
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              mx-auto

              text-white/80
              text-lg
              leading-relaxed
            "
          >
            Structured semester-wise academic resources,
            subjects, notes, and chapter navigation
            for D.Pharm students.
          </p>
        </div>
      </section>

      {/* NAVIGATOR */}
      <section className="relative px-4 sm:px-6 py-24">

        {/* Glow Effects */}
        <div className="absolute top-10 right-[-100px] w-[260px] h-[260px] bg-[#aa6f73]/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center">

            <h2
              className="
                text-[#4c1711]
                font-semibold
                tracking-tight

                text-4xl
                sm:text-5xl
              "
            >
              Academic Navigator
            </h2>

            <p
              className="
                mt-5
                text-[#564740]/80
                text-lg
              "
            >
              Browse subjects and chapters semester-wise.
            </p>
          </div>

          {/* MENUS */}
          <div
            className="
              mt-20

              flex
              flex-wrap
              items-center
              justify-center

              gap-8
            "
          >

            {Object.entries(syllabus).map(([partName, subjects]) => (
              <DropdownMenu key={partName}>

                {/* PART BUTTON */}
                <DropdownMenuTrigger
                className="
                    rounded-full

                    bg-[#f4efee]/10
                    backdrop-blur-xl
                    border border-[#aa6f73]/10

                    px-8
                    py-4

                    text-[#4c1711]
                    text-lg
                    font-medium

                    shadow-[0_8px_30px_rgba(76,23,17,0.05)]

                    transition-all duration-300

                    hover:-translate-y-1
                    hover:border-[#aa6f73]/30
                "
                >
                {partName}
                </DropdownMenuTrigger>

                {/* SUBJECT MENU */}
                <DropdownMenuContent
                  className="
                    min-w-[280px]

                    rounded-3xl

                    bg-[#f4efee]/80
                    backdrop-blur-2xl

                    border border-[#aa6f73]/10

                    p-3

                    shadow-2xl
                  "
                >
                  {subjects.map((subject) => (
                    <DropdownMenuSub key={subject.subject}>

                      {/* SUBJECT */}
                      <DropdownMenuSubTrigger
                        className="
                          rounded-2xl

                          px-4
                          py-3

                          text-[#4c1711]
                          text-base
                          font-medium

                          hover:bg-[#aa6f73]/10
                          transition-all
                        "
                      >
                        {subject.subject}
                      </DropdownMenuSubTrigger>

                      {/* CHAPTERS */}
                      <DropdownMenuSubContent
                        className="
                          min-w-[260px]

                          rounded-3xl

                          bg-[#f4efee]/80
                          backdrop-blur-2xl

                          border border-[#aa6f73]/10

                          p-3

                          shadow-2xl
                        "
                      >
                        {subject.chapters.map((chapter) => (
                          <DropdownMenuItem
                            key={chapter}
                            className="
                              rounded-2xl

                              px-4
                              py-3

                              text-[#564740]

                              hover:bg-[#aa6f73]/10

                              transition-all
                            "
                          >
                            <Link href="#">
                              {chapter}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
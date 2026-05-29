import Link from "next/link";

import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from "@/components/ui/menu";

import { pharmacyPrograms } from "@/data/pharmacy-programs";

const degrees = [
  {
    title: "D.Pharm",
    description:
      "Foundational pharmacy education focused on practical and community healthcare.",
    semesters: "2 Years",
    href: "#",
  },
  {
    title: "B.Pharm",
    description:
      "Comprehensive pharmaceutical sciences with industry and research exposure.",
    semesters: "8 Semesters",
    href: "#",
  },
  {
    title: "Pharm.D",
    description:
      "Advanced clinical pharmacy education centered around patient care and hospitals.",
    semesters: "6 Years",
    href: "#",
  },
];

export default function DegreeCards() {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 py-24 overflow-hidden">
{/* Background Video */}
<div className="absolute inset-0 overflow-hidden">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="
      w-full h-full object-cover
      object-[25%_center]
      md:object-center
      lg:object-center
      scale-105
      opacity-[0.45]
    "
  >
    <source src="/girl_studying.webm" type="video/webm" />
  </video>

</div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#f8f5f4]/30 backdrop-blur-[2px]" />

      {/* Section Heading */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <h2
          className="
            text-4xl sm:text-5xl md:text-6xl
            font-semibold tracking-tight
            text-[#4c1711]
          "
        >
          Choose Your Program
        </h2>

        <p
          className="
            mt-6
            text-base sm:text-lg
            text-[#564740]/80
            max-w-2xl mx-auto
            leading-relaxed
          "
        >
          Structured academic resources designed specifically
          for pharmacy students.
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          relative z-10
          mt-16
          max-w-6xl mx-auto
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          items-center
        "
      >
        {degrees.map((degree) => (
            <div
            key={degree.title}
              className="
                h-full
                rounded-[32px]
                p-8
                bg-[#f4efee]/10
                backdrop-blur
                border border-[#aa6f73]/10
                shadow-xl shadow-[#aa6f73]/5
              "
            >

              {/* Title */}
              <h3
                className="
                  mt-8
                  text-3xl
                  font-semibold
                  text-[#4c1711]
                "
              >
                {degree.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-4
                  text-[#564740]/80
                  leading-relaxed
                  text-base
                "
              >
                {degree.description}
              </p>

              {/* Bottom Row */}
              <div className="mt-8 flex items-center justify-between">

                {/* Duration */}
                <span
                  className="
                    text-sm
                    px-4 py-2
                    rounded-full
                    bg-white/40
                    border border-white/20
                    text-[#4c1711]
                    backdrop-blur-md
                  "
                >
                  {degree.semesters}
                </span>

                <Menu>
  <MenuTrigger
    className="
      px-4 py-2
      rounded-full
      bg-[#a15e63]
      text-[#f4efee]
      border border-white/20

      flex items-center gap-2

      font-medium

      hover:gap-3
      hover:-translate-y-1
      hover:bg-[#8c4f54]

      transition-all duration-300
    "
  >
    Click for More
    <span>→</span>
  </MenuTrigger>

  <MenuPopup
    className="
      backdrop-blur-2xl
      bg-[#8c4f54]/50
      border border-white/10
      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    "
  >
    {(() => {
      const program =
        pharmacyPrograms[
          degree.title as keyof typeof pharmacyPrograms
        ];

      if (!program) return null;

      const sections =
        "years" in program
          ? program.years
          : "semesters" in program
          ? program.semesters
          : {};

      return Object.entries(sections).map(
        ([sectionName, sectionData]: any) => (
          <MenuSub key={sectionName}>

            {/* Year / Semester */}
            <MenuSubTrigger
              className="
                text-white
                hover:bg-white/10
                focus:bg-white/10
              "
            >
              {sectionName}
            </MenuSubTrigger>

            {/* Subjects Popup */}
            <MenuSubPopup
              className="
                backdrop-blur-2xl
                bg-[#8c4f54]/50
                border border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              "
            >
              {"subjects" in sectionData &&
              sectionData.subjects.length > 0 ? (
                sectionData.subjects.map((subject: any) => (
                  <MenuItem
                    key={subject.slug}
                    className="
                      text-white
                      hover:bg-white/10
                      focus:bg-white/10
                    "
                  >
                    <Link
                      href={`/student/dashboard?degree=${encodeURIComponent(
                        degree.title
                      )}&section=${encodeURIComponent(
                        sectionName
                      )}&subject=${subject.slug}`}
                      className="block w-full"
                    >
                      {subject.name}
                    </Link>
                  </MenuItem>
                ))
              ) : (
                <MenuItem
                  className="
                    text-white/50
                    cursor-default
                  "
                >
                  Content Coming Soon
                </MenuItem>
              )}
            </MenuSubPopup>

          </MenuSub>
        )
      );
    })()}
  </MenuPopup>
</Menu>
              </div>
            </div>
        ))}
      </div>

    </section>
  );
}
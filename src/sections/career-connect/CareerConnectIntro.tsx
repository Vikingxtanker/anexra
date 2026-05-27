export default function CareerIntro() {
  return (
    <section
      data-theme="dark"
      className="
        relative
        overflow-hidden

        py-24
        sm:py-28
        lg:py-36

        px-4
        sm:px-6

        bg-[#080506]
      "
    >

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Heading */}
            <h2
              className="
                text-white

                font-semibold
                tracking-tight

                leading-[0.95]

                text-4xl
                sm:text-5xl
                lg:text-6xl

                max-w-2xl
              "
            >
              Turning Career Confusion
              <br />

              <span className="text-[#d6a3a7]">
                into Clear Direction
              </span>
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">

            <p
              className="
                text-white/75

                text-lg
                leading-relaxed
              "
            >
              Many pharmacy students and healthcare professionals
              possess strong academic knowledge but often lack
              structured career guidance, industry exposure,
              professional networking, and practical direction
              for long-term growth.
            </p>

            <p
              className="
                text-white/65

                text-lg
                leading-relaxed
              "
            >
              Career Connect was created by ANEXRA to bridge
              the gap between education and real-world healthcare
              opportunities through mentorship, placement guidance,
              professional profile development, research support,
              and career-focused learning.
            </p>

            <p
              className="
                text-white/65

                text-lg
                leading-relaxed
              "
            >
              Our goal is to help students, interns, freshers,
              and healthcare professionals become industry-ready
              with the confidence, skills, and guidance needed
              to build meaningful careers in healthcare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
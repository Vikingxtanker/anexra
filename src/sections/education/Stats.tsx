"use client";

const stats = [
  {
    value: "500+",
    label: "Academic Resources",
  },
  {
    value: "1000+",
    label: "Student Learners",
  },
  {
    value: "50+",
    label: "Pharmacy Subjects",
  },
  {
    value: "Weekly",
    label: "Content Updates",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-28 px-4 sm:px-6">

    {/* Gradient Background */}
    <div
    className="absolute inset-0 opacity-[0.45]"
    style={{
        background:
        "linear-gradient(0deg, rgba(43, 11, 8, 1) 0%, rgba(135, 86, 91, 1) 30%, rgba(168, 118, 122, 1) 82%, rgba(221, 197, 199, 1) 100%)",
    }}
    />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <h2
            className="
              mt-5
              text-[#4c1711]
              font-semibold
              tracking-tight
              leading-[0.95]

              text-4xl
              sm:text-5xl
              md:text-6xl

              max-w-4xl
              mx-auto
            "
          >
            Current Stats
          </h2>
        </div>

        {/* Stats Grid */}
        <div
          className="
            mt-20
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden

                rounded-[32px]

                bg-[#f4efee]/10
                backdrop-blur
                border border-[#aa6f73]/10

                px-8
                py-10

                shadow-[0_8px_30px_rgba(76,23,17,0.05)]

                transition-all duration-500

                hover:-translate-y-2
                hover:border-[#aa6f73]/20
                hover:shadow-[0_12px_40px_rgba(76,23,17,0.08)]
              "
            >

              {/* Card Glow */}
              <div className="absolute top-[-40px] right-[-40px] w-[120px] h-[120px] bg-[#aa6f73]/10 blur-3xl rounded-full pointer-events-none" />

              {/* Number */}
              <h3
                className="
                  relative z-10

                  text-[#4c1711]
                  font-semibold
                  tracking-tight
                  leading-none

                  text-5xl
                  md:text-6xl
                "
              >
                {stat.value}
              </h3>

              {/* Label */}
              <p
                className="
                  relative z-10

                  mt-5

                  text-[#564740]/80
                  text-base
                  leading-relaxed
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
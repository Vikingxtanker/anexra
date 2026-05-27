export default function SolutionsHero() {
  return (
    <section
      className="
        relative overflow-hidden
        min-h-screen
        flex items-center justify-center
        px-4 sm:px-6
      "
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            w-full h-full
            object-cover

            /* Mobile */
            object-[65%_center]
            scale-125

            /* Tablet */
            sm:object-center
            sm:scale-115

            /* Desktop */
            lg:scale-105

            opacity-[0.45]
          "
        >
          <source src="/solutions_hero.webm" type="video/webm" />
        </video>

        {/* Gradient Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#f4efee]/35
            via-[#f4efee]/55
            to-[#f4efee]/75
            backdrop-blur-[1px]
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10
          w-full max-w-6xl mx-auto
          text-center
          py-24 sm:py-28 md:py-32
        "
      >
        {/* Heading */}
        <h1
          className="
            font-semibold
            tracking-tight
            text-[#4c1711]
            leading-[0.9]

            text-[3.2rem]
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          Anexra Solutions
        </h1>

        {/* Subtext */}
        <p
          className="
            mt-6 sm:mt-8
            text-base sm:text-lg md:text-xl
            text-[#564740]/85
            max-w-4xl mx-auto
            leading-relaxed
            px-2
          "
        >
          Empowering modern healthcare through intelligent clinical solutions,
            digital innovation, and patient-centered care.
        </p>
      </div>
    </section>
  );
}
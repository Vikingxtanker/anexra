export default function DashboardHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
        px-4
        sm:px-6
        bg-[#0F0F0F]
      "
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4c1711]/20 via-transparent to-[#aa6f73]/10" />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          py-24
          sm:py-28
          md:py-32
        "
      >
        <h1
          className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            font-semibold
            tracking-tight
            text-white
            leading-[0.95]
          "
        >
          Welcome Back
        </h1>

        <p
          className="
            mt-6
            text-lg
            md:text-xl
            text-gray-400
            max-w-2xl
            leading-relaxed
          "
        >
          Continue your learning journey and
          access your courses, notes, and
          educational resources.
        </p>
      </div>
    </section>
  );
}
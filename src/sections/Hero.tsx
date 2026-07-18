import HeroBackground from "./HeroBackground";
import HeroCTA from "./HeroCTA";

export default function Hero() {

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-start md:items-center pt-24 md:pt-0 px-4 sm:px-6">
      
      <HeroBackground />

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto text-center py-16 sm:py-24 md:py-32">

        {/* Heading */}
        <h1
          className="
            font-semibold tracking-tight text-[#4c1711]
            leading-none
            sm:leading-[0.9]
            text-[clamp(2.5rem,8vw,6rem)]
            max-w-5xl mx-auto
          "
        >
          Next-Gen Assistance
          <br />
          for Modern Healthcare
        </h1>

        {/* Subtext */}
        <p
          className="
            mt-6 sm:mt-8
            text-[0.95rem]
            sm:text-lg
            md:text-xl
            text-[#564740]/80
            max-w-md
            sm:max-w-2xl
            md:max-w-3xl
            mx-auto
            leading-relaxed
            px-2
          "
        >
          Anexra bridges clinical pharmacy, patient care, and digital
          healthcare solutions to support hospitals, chronic care management,
          medication safety, and healthcare education through innovative
          technology-driven services.
        </p>

        <HeroCTA />

      </div>
    </section>
  );
}
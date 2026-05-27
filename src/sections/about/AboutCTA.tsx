import Link from "next/link";

export default function AboutCTA() {
  return (
    <section 
    data-theme="dark"
    className="relative overflow-hidden py-24 sm:py-28 lg:py-36 px-4 sm:px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#090607_0%,#1a0b0b_25%,#341312_55%,#4c1711_75%,#2a0d0f_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2
          className="
            text-white
            font-semibold
            tracking-tight
            leading-[0.95]
            text-4xl
            sm:text-5xl
            lg:text-7xl
            max-w-4xl
            mx-auto
          "
        >
          Building Smarter
          <br />
          Healthcare Starts Here
        </h2>

        {/* Subheading */}
        <p
          className="
            mt-8
            text-base
            sm:text-lg
            md:text-xl
            leading-relaxed
            text-[#f4efee]/75
            max-w-3xl
            mx-auto
          "
        >
          Anexra is creating a connected healthcare ecosystem focused on
          preventive care, continuous patient support, medication safety,
          and technology-driven healthcare coordination for the future.
        </p>

        {/* CTA Buttons */}
        <div
          className="
            mt-12
            flex flex-col sm:flex-row
            items-center justify-center
            gap-4
          "
        >
          <Link
            href="/solutions"
            className="
              inline-flex items-center justify-center
              h-14 px-8
              rounded-full
              bg-white
              text-[#4c1711]
              font-semibold
              shadow-xl
              hover:bg-[#f4efee]
              hover:scale-[1.03]
              transition-all duration-300
            "
          >
            Explore Solutions
          </Link>

          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              h-14 px-8
              rounded-full
              border border-white/20
              bg-white/10 backdrop-blur-md
              text-white
              font-semibold
              hover:bg-white/15
              hover:border-white/30
              transition-all duration-300
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
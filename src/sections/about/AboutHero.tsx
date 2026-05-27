export default function AboutHero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center px-4 sm:px-6">

      {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto py-24 sm:py-28 md:py-32">
        
        <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">

            {/* Heading */}
            <h1
            className="
                font-semibold tracking-tight text-[#4c1711]
                leading-[0.92]
                text-[3.5rem]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                max-w-5xl
            "
            >
            Next-Gen Assistance
            <br />
                for Modern Healthcare
            </h1>

            {/* Subtext */}
            <p
            className="
                mt-8
                text-base sm:text-lg md:text-xl
                text-[#564740]/85
                max-w-3xl
                leading-relaxed
            "
            >
            Anexra combines technology, diagnostics, preventive wellness,
            and patient-centered care to create a smarter healthcare
            ecosystem for the future.
            </p>

            {/* CTA Buttons */}
            <div
            className="
                mt-10
                flex flex-col sm:flex-row
                items-center
                justify-center
                gap-4
            "
            >
            <button
                className="
                h-14 px-8
                rounded-full
                bg-[#aa6f73]
                text-white font-semibold
                shadow-lg shadow-[#aa6f73]/20
                hover:bg-[#4c1711]
                hover:scale-[1.03]
                transition-all duration-300
                "
            >
                Explore Services
            </button>

            <button
                className="
                h-14 px-8
                rounded-full
                border border-[#87565b]/20
                bg-white/60 backdrop-blur-md
                text-[#4c1711] font-semibold
                hover:bg-white/80
                hover:border-[#87565b]/40
                transition-all duration-300
                "
            >
                Contact Us
            </button>
            </div>

        </div>
        </div>
    </section>
  );
}
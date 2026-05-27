export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#f4efee] py-24 sm:py-28 lg:py-36 px-4 sm:px-6">

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Main Statement */}
            <h2
              className="
                text-[#4c1711]
                font-semibold
                tracking-tight
                leading-[0.95]
                text-4xl
                sm:text-5xl
                lg:text-6xl
                max-w-xl
              "
            >
              Healthcare Should Continue Beyond the Prescription.
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">

            <p
              className="
                text-[#564740]/85
                text-lg
                leading-relaxed
              "
            >
              ANEXRA is a healthcare innovation platform focused on making
              healthcare more connected, continuous, and patient-centered
              through technology-enabled support systems.
            </p>

            <p
              className="
                text-[#564740]/80
                text-lg
                leading-relaxed
              "
            >
              We combine clinical pharmacy expertise, preventive wellness,
              remote patient monitoring, medication management, and chronic
              care support to improve healthcare outcomes beyond traditional
              consultations.
            </p>

            <p
              className="
                text-[#564740]/80
                text-lg
                leading-relaxed
              "
            >
              Our goal is to bridge patients, healthcare professionals, and
              digital care solutions through a smarter healthcare ecosystem
              built around safety, accessibility, education, and long-term
              support.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
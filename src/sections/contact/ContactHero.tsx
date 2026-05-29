import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center px-4 sm:px-6">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            w-full h-full object-cover
            scale-110
            opacity-60
          "
        >
          <source
            src="/videos/contact/contact-bg.webm"
            type="video/webm"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#f4efee]/20 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Box */}
          <div
            className="
              rounded-3xl
              border border-white/20
              bg-white/10
              backdrop-blur-xl
              p-8 md:p-10
              shadow-xl
            "
          >
            <span className="text-sm uppercase tracking-[0.2em] text-[#4c1711]/70">
              Anexra
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-[#4c1711]">
              Let's Build Better Healthcare.
            </h1>

            <p className="mt-6 text-lg text-[#564740] leading-relaxed">
              Contact us to partner and create the future of healthcare together.
            </p>
          </div>

          {/* Right Box */}
          <div
            className="
              rounded-3xl
              border border-white/20
              bg-white/10
              backdrop-blur-xl
              p-8 md:p-10
              shadow-xl
            "
          >
            <span className="text-sm uppercase tracking-[0.2em] text-[#4c1711]/70">
              Contact Us
            </span>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm text-[#564740]/70">Email</p>
                <a
                  href="mailto:contact@anexra.com"
                  className="text-xl font-medium text-[#4c1711] hover:text-[#aa6f73] transition"
                >
                  contact@anexra.com
                </a>
              </div>

              <div>
                <p className="text-sm text-[#564740]/70">Phone</p>
                <a
                  href="tel:+919145645566"
                  className="text-xl font-medium text-[#4c1711] hover:text-[#aa6f73] transition"
                >
                  +91 91456 45566
                </a>
              </div>

              <div>
                <p className="text-sm text-[#564740]/70 mb-4">
                  Follow Us
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="
                      w-12 h-12
                      rounded-full
                      bg-white/20
                      backdrop-blur-md
                      flex items-center justify-center
                      text-[#4c1711]
                      hover:bg-[#aa6f73]
                      hover:text-white
                      transition-all
                    "
                  >
                    <FaLinkedinIn size={18} />
                  </a>

                  <a
                    href="#"
                    className="
                      w-12 h-12
                      rounded-full
                      bg-white/20
                      backdrop-blur-md
                      flex items-center justify-center
                      text-[#4c1711]
                      hover:bg-[#aa6f73]
                      hover:text-white
                      transition-all
                    "
                  >
                    <FaInstagram size={18} />
                  </a>

                  <a
                    href="#"
                    className="
                      w-12 h-12
                      rounded-full
                      bg-white/20
                      backdrop-blur-md
                      flex items-center justify-center
                      text-[#4c1711]
                      hover:bg-[#aa6f73]
                      hover:text-white
                      transition-all
                    "
                  >
                    <FaFacebookF size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
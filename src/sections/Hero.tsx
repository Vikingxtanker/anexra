export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-6 px-2">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-[80%_center] md:object-center md:scale-110 scale-150 opacity-[0.45]"
        >
          <source src="/hero_background.mp4" type="video/mp4" />
        </video>

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-[#f4efee]/20 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#aa6f73]/15 border border-[#aa6f73]/20 mb-8">
          <span className="text-sm font-medium text-[#aa6f73]">
            Empowering Clinical Pharmacists
          </span>
        </div> */}

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.9] sm:leading-[0.95] text-[#4c1711] max-w-5xl mx-auto">
          Next-Gen Assistance
          <br />
          for Modern Healthcare
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-lg md:text-xl text-[#564740]/80 max-w-3xl mx-auto leading-relaxed">
          Anexra bridges clinical pharmacy, patient care, and digital
          healthcare solutions to support hospitals, chronic care management,
          medication safety, and healthcare education through innovative
          technology-driven services.
        </p>

        {/* CTA Section */}
        <div className="mt-12 w-full max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
  
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full h-14 px-5 rounded-full border border-[#aa6f73]/20 bg-white/60 backdrop-blur-md outline-none text-[#4c1711] placeholder:text-[#564740]/50 focus:border-[#aa6f73] transition-all"
  />

  <button className="w-full sm:w-auto h-14 px-7 rounded-full bg-[#aa6f73] text-white font-semibold hover:bg-[#4c1711] transition-all duration-300">
    Partner With Us
  </button>

</div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-[-120px] w-[300px] h-[300px] bg-[#fcdfe4] rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="absolute bottom-10 right-[-120px] w-[300px] h-[300px] bg-[#aa6f73] rounded-full blur-3xl opacity-20 pointer-events-none"></div>
    </section>
  );
}
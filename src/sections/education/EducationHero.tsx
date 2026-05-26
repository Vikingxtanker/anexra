export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center px-4 sm:px-6">
      
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            w-full h-full object-cover
            object-[78%_center] 
            md:object-center
            scale-125 md:scale-110
            opacity-[0.45]
          "
        >
          <source src="/education_hero.webm" type="video/webm" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#f4efee]/30 backdrop-blur-[1px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center py-24 sm:py-28 md:py-32">

        {/* Heading */}
        <h1
          className="
            font-semibold tracking-tight text-[#4c1711]
            leading-[0.9]
            text-[3rem]
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            max-w-5xl mx-auto
          "
        >
          Welcome To
          <br />
          Anexra Education
        </h1>

        {/* Subtext */}
        <p
          className="
            mt-6 sm:mt-8
            text-base sm:text-lg md:text-xl
            text-[#564740]/80
            max-w-3xl mx-auto
            leading-relaxed
            px-2
          "
        >
          Modern pharmacy learning designed for future healthcare professionals.
        </p>

      </div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-[-120px] w-[300px] h-[300px] bg-[#fcdfe4] rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="absolute bottom-10 right-[-120px] w-[300px] h-[300px] bg-[#aa6f73] rounded-full blur-3xl opacity-20 pointer-events-none" />
    </section>
  );
}
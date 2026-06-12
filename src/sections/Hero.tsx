"use client";

import { useState } from "react";

import PharmaConnectModal from "@/components/pharma-connect-modal";

export default function Hero() {

  const [isNetworkOpen, setIsNetworkOpen] = useState(false);

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
          <source src="/hero_background.mp4" type="video/mp4" />
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
          Next-Gen Assistance
          <br />
          for Modern Healthcare
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
          Anexra bridges clinical pharmacy, patient care, and digital
          healthcare solutions to support hospitals, chronic care management,
          medication safety, and healthcare education through innovative
          technology-driven services.
        </p>

        {/* Pharma Connect CTA */}
        <div className="mt-12 flex flex-col items-center">
          <button
            onClick={() => setIsNetworkOpen(true)}
            className="
              h-14 px-8
              rounded-full
              bg-[#aa6f73]
              text-white
              font-semibold
              text-lg
              hover:bg-[#4c1711]
              transition-all duration-300
              hover:scale-105
              shadow-lg
            "
          >
            Join Pharma Connect Network
          </button>

          <p
            className="
              mt-4
              text-sm sm:text-base
              text-[#564740]/70
              max-w-xl
              text-center
            "
          >
            Connect with pharmacy students, graduates, educators, and healthcare
            professionals across India.
          </p>
        </div>

        <PharmaConnectModal
          open={isNetworkOpen}
          onOpenChange={setIsNetworkOpen}
        />

      </div>
    </section>
  );
}
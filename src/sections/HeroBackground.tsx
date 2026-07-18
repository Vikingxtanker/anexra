"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Image
        src="/hero_background.webp"
        alt=""
        fill
        priority
        aria-hidden
        className={`
          object-cover
          object-[78%_center]
          md:object-center
          scale-125 md:scale-110
          transition-opacity duration-700
          ${videoLoaded ? "opacity-0" : "opacity-100"}
        `}
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        onLoadedData={() => setVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover object-[78%_center] md:object-center scale-125 md:scale-110"
      >
        <source src="/hero_background.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-[#f4efee]/55" />
    </div>
  );
}
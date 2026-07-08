"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const visionMission = document.getElementById("vision-mission");

      if (!visionMission) {
        setVisible(true);
        return;
      }

      const rect = visionMission.getBoundingClientRect();

      // Hide once VisionMission reaches the middle of the screen
      setVisible(rect.top > window.innerHeight * 0.5);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        pointer-events-none
        fixed
        bottom-8
        left-1/2
        -translate-x-1/2
        z-30
        transition-all
        duration-300
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }
      `}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-20 w-auto select-none"
      >
        <source
          src="/videos/scroll-indicator.webm"
          type="video/webm"
        />
        <source
          src="/videos/scroll-indicator.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
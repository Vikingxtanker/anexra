"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollIndicator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const dot = dotRef.current;

    const show = () =>
      gsap.to(container, {
        autoAlpha: 1,
        y: 0,
        duration: 0.3,
      });

    const hide = () =>
      gsap.to(container, {
        autoAlpha: 0,
        y: 20,
        duration: 0.3,
      });

    if (!container || !dot) return;

    gsap.set(container, {
      autoAlpha: 1,
      y: 0,
    });

    // Dot animation
    gsap.fromTo(
      dot,
      {
        y: -2,
        opacity: 0,
      },
      {
        y: 36,
        opacity: 1,
        duration: 1.25,
        ease: "power1.inOut",
        repeat: -1,
        repeatDelay: 0.15,
        keyframes: [
          { opacity: 0.2, duration: 0 },
          { opacity: 1, duration: 0.25 },
          { opacity: 1, duration: 0.6 },
          { opacity: 0, duration: 0.4 },
        ],
      }
    );

    // Gentle floating
    gsap.to(container, {
      y: 8,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const sections = [
      "#hero",
      "#introduction",
      "#solutions",
      "#who-we-serve",
      "#why-anexra",
      "#healthcare-partners",
    ];

    sections.forEach((selector) => {
      const element = document.querySelector(selector);

      if (!element) {
        console.warn(`Missing element: ${selector}`);
        return;
      }

      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onEnter: show,
        onEnterBack: show,
      });
    });

    ["#vision-mission", "#footer"].forEach((selector) => {
      ScrollTrigger.create({
        trigger: selector,
        start: "top center",

        onEnter: hide,
        onEnterBack: hide,
      });
    });
  }, 
  {
    scope: containerRef,
  }
);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center"
    >
      <div className="relative h-14 w-[2px] overflow-hidden rounded-full bg-neutral-300/40 dark:bg-neutral-700/40">
        <div
          ref={dotRef}
          className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#6D3C3C]"
        />
      </div>

      <p className="mt-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
        Scroll
      </p>
    </div>
  );
}
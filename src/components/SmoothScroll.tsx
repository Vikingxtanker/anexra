"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Desktop only
    if (window.innerWidth < 1024) return;

    const lenis = new Lenis({
      duration: 0.6,
      smoothWheel: true,
      wheelMultiplier: 1.2,

      easing: (t) => 1 - Math.pow(1 - t, 6),

      prevent: (node) =>
        Boolean(node.closest("[data-slot='dialog-content']")),
    });

    // function raf(time: number) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
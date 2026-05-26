"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  "Concise and exam-focused pharmacy notes.",
  "Structured practical records and laboratory resources.",
  "Important viva questions and oral exam guidance.",
  "Previous year questions and practice assessments.",
  "Patient-centered learning for clinical understanding.",
  "Literature reviews, projects, and research assistance.",
];

export default function EducationFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (
        !sectionRef.current ||
        !headingRef.current ||
        !cardsWrapperRef.current
      )
        return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const cards = cardsRef.current.filter(Boolean);

        // Initial states
        gsap.set(cardsWrapperRef.current, {
          opacity: 0,
          x: 120,
        });

        gsap.set(cards, {
          opacity: 0,
          y: 40,
        });

        // Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2500",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Heading animation
        tl.to(headingRef.current, {
          x: "-30vw",
          scale: 0.5,
          ease: "none",
          duration: 1,
        });

        // Cards wrapper reveal
        tl.to(
          cardsWrapperRef.current,
          {
            opacity: 1,
            x: 0,
            ease: "none",
            duration: 0.5,
          },
          "-=0.2"
        );

        // Cards stagger reveal
        cards.forEach((card) => {
          tl.to(
            card,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "none",
            },
            "-=0.1"
          );
        });

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f4efee] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#aa6f73]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[340px] h-[340px] bg-[#f7d9dd]/40 blur-3xl rounded-full pointer-events-none" />

      {/* DESKTOP */}
      <div className="hidden md:block relative h-[100svh] w-full">

        <div className="relative mx-auto h-full w-full max-w-7xl">

          {/* Heading */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2
              ref={headingRef}
              className="
                text-[#4c1711]
                font-semibold
                tracking-tight
                leading-[0.85]
                text-center
                will-change-transform

                text-7xl
                lg:text-[9rem]
                xl:text-[11rem]
              "
            >
              What
              <br />
              We Provide
            </h2>
          </div>

          {/* Cards */}
          <div
            ref={cardsWrapperRef}
            className="
              absolute
              top-1/2
              right-0
              -translate-y-1/2

              w-[42vw]
              max-w-[620px]

              flex
              flex-col
              gap-6
            "
          >
            {points.map((point, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="
                  rounded-[32px]
                  bg-[#f4efee]/10
                  backdrop-blur
                  border border-[#aa6f73]/10

                  px-8
                  py-7

                  shadow-[0_8px_30px_rgba(76,23,17,0.05)]
                "
              >
                <p
                  className="
                    text-[#4c1711]
                    text-2xl
                    font-medium
                    tracking-tight
                    leading-snug
                  "
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden min-h-screen px-6 py-24">

        <h2
          className="
            text-[#4c1711]
            font-semibold
            tracking-tight
            leading-[0.9]

            text-5xl
            mb-12
          "
        >
          What
          <br />
          We Provide
        </h2>

        <div className="flex flex-col gap-5">
          {points.map((point, index) => (
            <div
              key={index}
              className="
                rounded-[28px]
                bg-[#f4efee]/10
                backdrop-blur
                border border-[#aa6f73]/10

                px-6
                py-5

                shadow-[0_8px_30px_rgba(76,23,17,0.05)]
              "
            >
              <p
                className="
                  text-[#4c1711]
                  text-lg
                  font-medium
                  tracking-tight
                  leading-snug
                "
              >
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
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
        // tl.to(headingRef.current, {
        //   x: "-30vw",
        //   scale: 0.5,
        //   ease: "none",
        //   duration: 1,
        // });
        tl.to(headingRef.current, {
        x: window.innerWidth >= 768 && window.innerWidth < 1024
          ? "-22vw"
          : "-30vw",

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

      {/* DESKTOP */}
      <div className="
            hidden md:block 
            relative
            min-h-screen 
            h-[100dvh] 
            w-full
          "
          
          style={{
            minHeight: "max(800px, 100dvh)",
          }}

          >

        <div className="
              relative 
              mx-auto 
              h-full 
              w-full 
              max-w-7xl
              
              px-6
              lg:px-10
            ">

          {/* Heading */}
          <div className="
                absolute 
                inset-0 
                flex 
                items-center 
                justify-center pointer-events-none
              ">
            <h2
              ref={headingRef}
              className="
                text-[#4c1711]
                font-semibold
                tracking-tight
                leading-[0.85]
                text-center
                will-change-transform

                text-6xl
                md:text-[6.5rem]
                lg:text-[7rem]
                xl:text-[9rem]
                2xl:text-[11rem]
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
              md:right-10
              lg:right-0
              -translate-y-1/2

              w-[42vw]
              max-w-[620px]

              flex
              flex-col
              gap-3
              lg:gap-4
              xl:gap-6
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

                  px-5
                  py-4

                  lg:px-6
                  lg:py-5

                  xl:px-8
                  xl:py-7

                  shadow-[0_8px_30px_rgba(76,23,17,0.05)]
                "
              >
                <p
                  className="
                    text-[#4c1711]

                    text-lg
                    lg:text-x1
                    xl:text-2x1

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
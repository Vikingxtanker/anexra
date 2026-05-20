"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const text = `Smarter chronic care, seamless patient follow-ups, and connected long-term healthcare support.`;

const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);

  const wordIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, words.length]
  );

  useEffect(() => {
    return wordIndex.on("change", (latest) => {
      setCurrentWord(Math.floor(latest));
    });
  }, [wordIndex]);

  return (
    <section ref={scrollTarget} className="relative h-[300vh]">
      <div className="sticky top-0 flex min-h-screen items-center py-24">
        <div className="container">
          <div className="flex justify-center">
            <div className="border border-white/15 px-4 py-1.5 rounded-full text-sm uppercase tracking-widest text-[#4c1711]">
              Introducing Anexra
            </div>
          </div>

          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 leading-[0.95] tracking-tight max-w-6xl mx-auto">
            <span className="block mb-8 text-[#4c1711]">
              Healthcare deserves connected long-term care.
            </span>

            <span>
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  animate={{
                    color:
                      index < currentWord
                        ? "#4c1711"
                        : "rgba(76, 23, 17,0.18)",
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </span>

            <span className="text-[#4c1711] block mt-8">
              That&apos;s why we built Anexra.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
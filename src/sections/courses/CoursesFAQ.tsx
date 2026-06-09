"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";

const faqs = [
  {
    question: "Are certificates provided after course completion?",
    answer:
      "Yes. Upon successfully completing a course, you will receive a professional certificate of completion that can be added to your resume, LinkedIn profile, and academic portfolio.",
  },
  {
    question: "Do I get lifetime access to purchased courses?",
    answer:
      "Yes. All purchased courses include lifetime access, allowing you to revisit lessons, resources, and updates whenever needed.",
  },
  {
    question: "Are the courses mobile-friendly?",
    answer:
      "Absolutely. Courses are fully optimized for mobile phones, tablets, laptops, and desktop devices, enabling learning from anywhere.",
  },
  {
    question: "Are assessments and quizzes included?",
    answer:
      "Yes. Many courses include quizzes, assignments, case studies, and assessments designed to reinforce practical understanding and measure progress.",
  },
  {
    question: "How can I download my certificate?",
    answer:
      "After completing all required course components, your certificate becomes available in your student dashboard. You can download it instantly as a PDF.",
  },
];

export default function CoursesFAQ() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] text-[#4c1711]">
            Got Questions?
          </h2>

          <p className="mt-5 text-lg text-[#4c1711]/70 max-w-2xl mx-auto">
            Everything you need to know about our courses,
            certificates, access, and learning experience.
          </p>
        </div>

        {/* FAQ Card */}
        <div className="rounded-[32px] border border-white/20 bg-white/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(76,23,17,0.08)] p-2 md:p-4">
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#4c1711]/10 last:border-none"
              >
                <AccordionTrigger
                  className="
                    py-6
                    px-4
                    text-left
                    text-lg
                    font-semibold
                    text-[#4c1711]
                    hover:no-underline
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    px-4
                    pb-6
                    text-base
                    leading-relaxed
                    text-[#4c1711]/70
                  "
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#4c1711]/70">
            Still have questions?
          </p>

          <Link
            href="/contact"
            className="
                inline-flex
                mt-4
                rounded-full
                bg-[#4c1711]
                text-white
                px-6
                py-3
                font-medium
                transition-all
                hover:scale-105
            "
            >
            Contact Us
            </Link>
        </div>
      </div>
    </section>
  );
}
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import MAHero from "@/sections/solutions/medication-adherence/MAHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medication Adherence & Patient Compliance Solutions | Anexra",

  description:
    "Improve treatment outcomes through Anexra's Medication Adherence solutions. We help patients stay on track with prescribed therapies through personalized support, medication reminders, education, and pharmacist-led interventions.",

  keywords: [
    "Medication Adherence",
    "Patient Compliance",
    "Medication Management",
    "Medication Reminders",
    "Treatment Adherence",
    "Medication Persistence",
    "Clinical Pharmacy",
    "Patient Engagement",
    "Chronic Disease Management",
    "Medication Support",
    "Healthcare Outcomes",
    "Pharmacist Intervention",
    "Patient Care",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/solutions/medication-adherence",
  },

  openGraph: {
    title: "Medication Adherence & Patient Compliance Solutions | Anexra",

    description:
      "Empowering patients to follow prescribed therapies through education, reminders, pharmacist support, and adherence-focused healthcare solutions.",

    url: "https://anexra.com/solutions/medication-adherence",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-medication-adherence.png",
        width: 1200,
        height: 630,
        alt: "Anexra Medication Adherence Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Medication Adherence & Patient Compliance Solutions | Anexra",

    description:
      "Helping patients achieve better health outcomes through medication adherence, education, and pharmacist-led support.",

    images: ["/og-medication-adherence.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function Home() {
    return <>
        <Navbar/>
        <MAHero/>

        <Footer/>
      </>;
}

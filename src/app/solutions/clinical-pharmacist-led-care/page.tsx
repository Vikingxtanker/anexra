import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import CPLCHero from "@/sections/solutions/clinical-pharmacist-led-care/CPLCHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Pharmacist-Led Care | Anexra",

  description:
    "Improve patient outcomes with Anexra's Clinical Pharmacist-Led Care services. Our clinical pharmacists optimize medication therapy, enhance patient safety, support healthcare teams, and provide evidence-based pharmaceutical care.",

  keywords: [
    "Clinical Pharmacist",
    "Clinical Pharmacist Led Care",
    "Medication Therapy Management",
    "MTM",
    "Clinical Pharmacy",
    "Pharmaceutical Care",
    "Medication Optimization",
    "Drug Therapy Monitoring",
    "Patient Safety",
    "Medication Review",
    "Healthcare Outcomes",
    "Pharmacist Consultation",
    "Healthcare Services",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/solutions/clinical-pharmacist-led-care",
  },

  openGraph: {
    title: "Clinical Pharmacist-Led Care | Anexra",

    description:
      "Expert pharmacist-led healthcare services focused on medication optimization, patient safety, therapy management, and improved clinical outcomes.",

    url: "https://anexra.com/solutions/clinical-pharmacist-led-care",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-clinical-pharmacist-led-care.png",
        width: 1200,
        height: 630,
        alt: "Anexra Clinical Pharmacist-Led Care",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Clinical Pharmacist-Led Care | Anexra",

    description:
      "Enhancing patient care through medication optimization, therapy management, and pharmacist-led healthcare services.",

    images: ["/og-clinical-pharmacist-led-care.png"],
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
        <CPLCHero/>

        <Footer/>
      </>;
}

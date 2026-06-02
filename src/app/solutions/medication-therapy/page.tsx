import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import MTHero from "@/sections/solutions/medication-therapy/MTHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medication Therapy Management (MTM) Services | Anexra",

  description:
    "Optimize medication use with Anexra's Medication Therapy Management services. Our clinical pharmacists provide comprehensive medication reviews, therapy optimization, adverse drug event prevention, and personalized patient care.",

  keywords: [
    "Medication Therapy Management",
    "MTM",
    "Medication Therapy",
    "Medication Review",
    "Clinical Pharmacist",
    "Clinical Pharmacy",
    "Drug Therapy Optimization",
    "Medication Management",
    "Pharmaceutical Care",
    "Medication Safety",
    "Adverse Drug Reactions",
    "Medication Reconciliation",
    "Patient Care",
    "Healthcare Services",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/solutions/medication-therapy",
  },

  openGraph: {
    title: "Medication Therapy Management (MTM) Services | Anexra",

    description:
      "Comprehensive medication therapy management services focused on medication optimization, patient safety, pharmacist-led care, and improved healthcare outcomes.",

    url: "https://anexra.com/solutions/medication-therapy",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-medication-therapy.png",
        width: 1200,
        height: 630,
        alt: "Anexra Medication Therapy Management",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Medication Therapy Management (MTM) Services | Anexra",

    description:
      "Helping patients achieve safer and more effective medication use through pharmacist-led therapy management and medication reviews.",

    images: ["/og-medication-therapy.png"],
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
        <MTHero/>

        <Footer/>
      </>;
}

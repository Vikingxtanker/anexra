import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import ETEHSHero from "@/sections/solutions/end-to-end-hospital-solutions/ETEHSHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "End-to-End Healthcare Solutions | Anexra",

  description:
    "Comprehensive healthcare solutions connecting patients, hospitals, physicians, clinical pharmacists, insurers, and digital health technologies through integrated care coordination, EHR systems, analytics, and long-term healthcare management.",

  keywords: [
    "End-to-End Healthcare Solutions",
    "Healthcare Solutions",
    "Integrated Healthcare",
    "Electronic Health Records",
    "EHR",
    "Clinical Pharmacist",
    "Clinical Pharmacy Services",
    "Remote Patient Monitoring",
    "Population Health Management",
    "Healthcare Analytics",
    "Care Coordination",
    "Chronic Care Management",
    "Digital Health",
    "Healthcare Technology",
    "Hospital Solutions",
    "Patient Care",
    "Healthcare Ecosystem",
    "Medical Tourism",
    "Insurance Support",
    "Anexra",
  ],

  alternates: {
    canonical:
      "https://anexra.com/solutions/end-to-end-healthcare-solutions",
  },

  openGraph: {
    title: "End-to-End Healthcare Solutions | Anexra",

    description:
      "Transforming healthcare through connected care, clinical expertise, digital innovation, healthcare analytics, remote monitoring, and intelligent healthcare coordination.",

    url:
      "https://anexra.com/solutions/end-to-end-healthcare-solutions",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-end-to-end-healthcare-solutions.png",
        width: 1200,
        height: 630,
        alt: "Anexra End-to-End Healthcare Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "End-to-End Healthcare Solutions | Anexra",

    description:
      "Connected healthcare solutions combining clinical expertise, EHR technology, remote monitoring, analytics, and coordinated care.",

    images: ["/og-end-to-end-healthcare-solutions.png"],
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
  return (
    <>
      <Navbar />
      <ETEHSHero />
      <Footer />
    </>
  );
}
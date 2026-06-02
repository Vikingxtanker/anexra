import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import SolutionsHero from "@/sections/solutions/SolutionsHero";
import Solutions from "@/sections/Solutions";
import SolutionsService from "@/sections/solutions/SolutionsService";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Solutions & Clinical Pharmacy Services | Anexra",

  description:
    "Discover Anexra's comprehensive healthcare solutions including Clinical Pharmacist-Led Care, Chronic Care Management (CCM), Medication Therapy Management (MTM), Remote Patient Monitoring (RPM), Medication Adherence, Preventive Wellness, Medical Tourism, Insurance Support, and Clinical Education.",

  keywords: [
    "Healthcare Solutions",
    "Clinical Pharmacy",
    "Clinical Pharmacist",
    "Chronic Care Management",
    "CCM",
    "Medication Therapy Management",
    "MTM",
    "Remote Patient Monitoring",
    "RPM",
    "Medication Adherence",
    "Preventive Wellness",
    "Healthcare Technology",
    "Medical Tourism",
    "Insurance Support",
    "Clinical Education",
    "Patient Care",
    "Healthcare Innovation",
    "Digital Health",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/solutions",
  },

  openGraph: {
    title: "Healthcare Solutions & Clinical Pharmacy Services | Anexra",

    description:
      "Transforming healthcare through clinical pharmacy services, chronic care management, medication therapy management, remote patient monitoring, preventive wellness programs, and healthcare innovation.",

    url: "https://anexra.com/solutions",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-solutions.png",
        width: 1200,
        height: 630,
        alt: "Anexra Healthcare Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Healthcare Solutions & Clinical Pharmacy Services | Anexra",

    description:
      "Comprehensive healthcare solutions including CCM, MTM, RPM, Clinical Pharmacist-Led Care, Preventive Wellness, and more.",

    images: ["/og-solutions.png"],
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
        <SolutionsHero/>
        <Solutions/>
        <SolutionsService/>

        <Footer/>
      </>;
}

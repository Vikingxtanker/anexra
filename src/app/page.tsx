import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Introductionv2 from "@/sections/Introductionv2";
import Solutions from "@/sections/Solutions";
import WhoWeServe from "@/sections/WhoWeServe";
import WhyAnexra from "@/sections/WhyAnexra";
import HealthcarePartners from "@/sections/HealthcarePartners";
import VisionMission from "@/sections/VisionMission";
import Footer from "@/sections/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://anexra.com"),

  title: {
    default: "Anexra | Next-Gen Assistance for Modern Healthcare",
    template: "%s | Anexra",
  },

  description:
    "Anexra delivers clinical pharmacy, chronic care management, remote monitoring, medication therapy, and pharmacy education solutions.",

  keywords: [
    "Anexra",
    "Digital Healthcare",
    "Clinical Pharmacy",
    "Healthcare Technology",
    "Chronic Care Management",
    "Medication Therapy Management",
    "Remote Patient Monitoring",
    "Medication Adherence",
    "Healthcare Solutions",
    "Clinical Pharmacist",
    "Healthcare Innovation",
    "Patient Care",
    "Preventive Wellness",
    "Medical Tourism",
    "Insurance Support",
    "Pharmaceutical Companies",
    "Healthcare Education",
  ],

  authors: [
    {
      name: "Anexra",
    },
  ],

  creator: "Anexra",
  publisher: "Anexra",

  openGraph: {
    type: "website",
    url: "https://anexra.com",
    siteName: "Anexra",

    title: "Anexra | Next-Gen Assistance for Modern Healthcare",

    description:
      "Transforming healthcare through clinical pharmacy services, chronic care management, medication safety, remote monitoring, and technology-driven healthcare solutions.",

    locale: "en_US",

    images: [
      {
        url: "/images/og.webp",
        width: 1200,
        height: 630,
        alt: "Anexra Healthcare Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Anexra | Next-Gen Assistance for Modern Healthcare",

    description:
      "Healthcare technology, clinical pharmacy, chronic care management, medication therapy management, and patient-centered healthcare solutions.",

    creator: "@anexra",

    images: ["/images/og.webp"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://anexra.com",
  },

  category: "Healthcare",
};

export default function Home() {
    return <>
        <Navbar/>
        <Hero/>
        <Introductionv2/>
        <Solutions/>
        <WhoWeServe/>
        <WhyAnexra/>
        <HealthcarePartners/>
        <VisionMission/>
        <Footer/>
    </>;
}

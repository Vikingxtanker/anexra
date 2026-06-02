import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import CCMHero from "@/sections/solutions/chronic-care-management/CCMHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chronic Care Management (CCM) | Anexra",

  description:
    "Anexra's Chronic Care Management program helps patients with long-term conditions through continuous monitoring, medication management, care coordination, and pharmacist-led healthcare support.",

  keywords: [
    "Chronic Care Management",
    "CCM",
    "Disease Management",
    "Chronic Disease Care",
    "Medication Management",
    "Medication Adherence",
    "Remote Patient Monitoring",
    "Clinical Pharmacy",
    "Clinical Pharmacist",
    "Healthcare Coordination",
    "Patient Monitoring",
    "Long-Term Care",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/solutions/chronic-care-management",
  },

  openGraph: {
    title: "Chronic Care Management (CCM) | Anexra",
    description:
      "Comprehensive chronic disease management through pharmacist-led care, medication optimization, remote monitoring, and continuous patient support.",

    url: "https://anexra.com/solutions/chronic-care-management",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-chronic-care-management.png",
        width: 1200,
        height: 630,
        alt: "Anexra Chronic Care Management",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Chronic Care Management (CCM) | Anexra",

    description:
      "Empowering patients with chronic conditions through pharmacist-led care, medication management, and remote monitoring.",

    images: ["/og-chronic-care-management.png"],
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
        <CCMHero/>

        <Footer/>
      </>;
}

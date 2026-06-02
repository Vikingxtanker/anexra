import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import PWHero from "@/sections/solutions/preventive-wellness/PWHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preventive Wellness & Health Screening Services | Anexra",

  description:
    "Promote healthier lives through Anexra's Preventive Wellness solutions. We support disease prevention, health screenings, risk assessment, lifestyle management, and early intervention to improve long-term health outcomes.",

  keywords: [
    "Preventive Wellness",
    "Preventive Healthcare",
    "Health Screening",
    "Wellness Programs",
    "Disease Prevention",
    "Lifestyle Management",
    "Preventive Care",
    "Health Risk Assessment",
    "Wellness Services",
    "Early Detection",
    "Population Health",
    "Patient Wellness",
    "Healthcare Prevention",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/solutions/preventive-wellness",
  },

  openGraph: {
    title: "Preventive Wellness & Health Screening Services | Anexra",

    description:
      "Comprehensive preventive healthcare solutions including wellness programs, health screenings, risk assessments, and disease prevention strategies.",

    url: "https://anexra.com/solutions/preventive-wellness",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-preventive-wellness.png",
        width: 1200,
        height: 630,
        alt: "Anexra Preventive Wellness Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Preventive Wellness & Health Screening Services | Anexra",

    description:
      "Empowering individuals and organizations through preventive healthcare, wellness programs, and early disease detection.",

    images: ["/og-preventive-wellness.png"],
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
        <PWHero/>

        <Footer/>
      </>;
}

import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import MTHero from "@/sections/solutions/medical-tourism/MTHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Tourism & International Patient Services | Anexra",

  description:
    "Anexra simplifies medical tourism by connecting international patients with quality healthcare providers, treatment planning, travel coordination, accommodation support, and end-to-end healthcare assistance.",

  keywords: [
    "Medical Tourism",
    "Healthcare Travel",
    "International Patient Services",
    "Treatment Abroad",
    "Medical Travel",
    "Cross Border Healthcare",
    "Hospital Coordination",
    "International Healthcare",
    "Medical Treatment India",
    "Patient Travel Assistance",
    "Healthcare Concierge",
    "Global Healthcare",
    "Medical Tourism India",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/solutions/medical-tourism",
  },

  openGraph: {
    title: "Medical Tourism & International Patient Services | Anexra",

    description:
      "Comprehensive medical tourism solutions including hospital selection, treatment coordination, travel planning, accommodation support, and patient assistance.",

    url: "https://anexra.com/solutions/medical-tourism",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-medical-tourism.png",
        width: 1200,
        height: 630,
        alt: "Anexra Medical Tourism Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Medical Tourism & International Patient Services | Anexra",

    description:
      "Helping patients access world-class healthcare through seamless treatment, travel, and hospital coordination.",

    images: ["/og-medical-tourism.png"],
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

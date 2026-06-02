import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import CEHero from "@/sections/solutions/clinical-education/CEHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Education & Healthcare Training | Anexra",

  description:
    "Advance healthcare knowledge through Anexra's Clinical Education programs. Empowering students, pharmacists, healthcare professionals, and institutions with practical clinical training, evidence-based learning, and professional development.",

  keywords: [
    "Clinical Education",
    "Healthcare Education",
    "Pharmacy Education",
    "Clinical Pharmacy",
    "Pharm D Education",
    "Clinical Training",
    "Healthcare Training",
    "Continuing Medical Education",
    "Medical Education",
    "Professional Development",
    "Healthcare Professionals",
    "Evidence-Based Practice",
    "Clinical Skills",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/solutions/clinical-education",
  },

  openGraph: {
    title: "Clinical Education & Healthcare Training | Anexra",

    description:
      "Transform healthcare learning through practical clinical education, pharmacy training, professional development, and evidence-based healthcare programs.",

    url: "https://anexra.com/solutions/clinical-education",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-clinical-education.png",
        width: 1200,
        height: 630,
        alt: "Anexra Clinical Education",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Clinical Education & Healthcare Training | Anexra",

    description:
      "Empowering students and healthcare professionals through clinical education, pharmacy training, and evidence-based learning.",

    images: ["/og-clinical-education.png"],
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
        <CEHero/>

        <Footer/>
      </>;
}

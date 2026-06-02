import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import PCHero from "@/sections/solutions/pharmaceutical-company/PCHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmaceutical Company Solutions | Anexra",

  description:
    "Partner with Anexra to enhance patient outcomes through clinical pharmacy services, patient support programs, medication adherence initiatives, pharmacovigilance support, healthcare education, and real-world healthcare insights.",

  keywords: [
    "Pharmaceutical Company Solutions",
    "Pharma Partnerships",
    "Patient Support Programs",
    "Medication Adherence Programs",
    "Clinical Pharmacy Services",
    "Pharmacovigilance",
    "Drug Safety",
    "Healthcare Solutions",
    "Patient Engagement",
    "Real World Evidence",
    "RWE",
    "Healthcare Analytics",
    "Pharma Support Services",
    "Life Sciences",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/solutions/pharmaceutical-company",
  },

  openGraph: {
    title: "Pharmaceutical Company Solutions | Anexra",

    description:
      "Supporting pharmaceutical organizations through patient engagement, adherence programs, pharmacovigilance services, clinical pharmacy expertise, and healthcare innovation.",

    url: "https://anexra.com/solutions/pharmaceutical-company",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-pharmaceutical-company.png",
        width: 1200,
        height: 630,
        alt: "Anexra Pharmaceutical Company Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Pharmaceutical Company Solutions | Anexra",

    description:
      "Helping pharmaceutical companies improve patient outcomes through clinical pharmacy expertise, adherence programs, and healthcare innovation.",

    images: ["/og-pharmaceutical-company.png"],
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
        <PCHero/>

        <Footer/>
      </>;
}

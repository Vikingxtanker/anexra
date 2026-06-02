import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Hero from "@/sections/education/d-pharm/Hero"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "D.Pharm Study Resources | Notes, MCQs & Video Lectures | Anexra",

  description:
    "Access comprehensive D.Pharm study resources on Anexra. Explore semester-wise notes, video lectures, MCQs, assignments, practical learning materials, and pharmacy education resources designed for Diploma in Pharmacy students.",

  keywords: [
    "D Pharm",
    "Diploma in Pharmacy",
    "D Pharm Notes",
    "D Pharm MCQs",
    "D Pharm Video Lectures",
    "D Pharm Assignments",
    "ER 2020 Pharmacy",
    "Pharmacy Diploma",
    "Pharmacy Study Material",
    "Pharmacy Notes",
    "Pharmacology Notes",
    "Pharmaceutics Notes",
    "Community Pharmacy",
    "Hospital Pharmacy",
    "Pharmacy Education",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/education/d-pharm",
  },

  openGraph: {
    title: "D.Pharm Study Resources | Notes, MCQs & Video Lectures | Anexra",

    description:
      "A complete learning platform for D.Pharm students featuring notes, MCQs, assignments, video lectures, and pharmacy study materials.",

    url: "https://anexra.com/education/d-pharm",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-d-pharm.png",
        width: 1200,
        height: 630,
        alt: "Anexra D.Pharm Resources",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "D.Pharm Study Resources | Notes, MCQs & Video Lectures | Anexra",

    description:
      "Empowering D.Pharm students through notes, MCQs, assignments, pharmacy courses, and video lectures.",

    images: ["/og-d-pharm.png"],
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
        <Hero/>

        <Footer/>
      </>;
}


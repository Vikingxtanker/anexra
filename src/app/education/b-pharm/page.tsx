import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B.Pharm Study Resources | Notes, MCQs & Video Lectures | Anexra",

  description:
    "Access comprehensive B.Pharm study resources on Anexra. Explore semester-wise notes, video lectures, MCQs, assignments, practical resources, and pharmacy learning materials designed for Bachelor of Pharmacy students.",

  keywords: [
    "B Pharm",
    "Bachelor of Pharmacy",
    "B Pharm Notes",
    "B Pharm MCQs",
    "B Pharm Video Lectures",
    "B Pharm Assignments",
    "Pharmacy Study Material",
    "Pharmacy Notes",
    "Pharmacology Notes",
    "Pharmaceutics Notes",
    "Pharmaceutical Chemistry Notes",
    "Pharmacognosy Notes",
    "B Pharmacy Courses",
    "Semester Wise Notes",
    "Pharmacy Education",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/education/b-pharm",
  },

  openGraph: {
    title: "B.Pharm Study Resources | Notes, MCQs & Video Lectures | Anexra",

    description:
      "A complete learning platform for B.Pharm students featuring notes, MCQs, assignments, video lectures, and pharmacy study resources.",

    url: "https://anexra.com/education/b-pharm",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-b-pharm.png",
        width: 1200,
        height: 630,
        alt: "Anexra B.Pharm Resources",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "B.Pharm Study Resources | Notes, MCQs & Video Lectures | Anexra",

    description:
      "Empowering B.Pharm students with notes, MCQs, assignments, pharmacy courses, and video lectures.",

    images: ["/og-b-pharm.png"],
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

        <Footer/>
      </>;
}

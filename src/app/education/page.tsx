import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import EducationHero from "@/sections/education/EducationHero";
import DegreeCards from "@/sections/education/DegreeCards";
import EducationFeatures from "@/sections/education/EducationFeatures";
import Stats from "@/sections/education/Stats";
// import SemesterSection from "@/sections/education/SemesterSection";
// import CTA from "@/sections/education/CTA";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmacy Education Platform | Notes, MCQs, Courses & Video Lectures | Anexra",

  description:
    "Access comprehensive pharmacy education resources on Anexra. Explore B.Pharm, D.Pharm, and Pharm.D notes, video lectures, MCQs, assignments, study materials, and professional courses designed to support academic and career success.",

  keywords: [
    "Pharmacy Education",
    "Pharm D Notes",
    "B Pharm Notes",
    "D Pharm Notes",
    "Pharmacy Notes",
    "Pharmacy MCQs",
    "Pharmacy Courses",
    "Pharmacy Video Lectures",
    "Pharm D Study Material",
    "B Pharm Study Material",
    "D Pharm Study Material",
    "Pharmacy Assignments",
    "GPAT Preparation",
    "Clinical Pharmacy Education",
    "Pharmaceutical Education",
    "Pharmacy Learning Platform",
    "Online Pharmacy Courses",
    "Pharmacy Students",
    "Anexra Education",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/education",
  },

  openGraph: {
    title:
      "Pharmacy Education Platform | Notes, MCQs, Courses & Video Lectures | Anexra",

    description:
      "A complete learning platform for B.Pharm, D.Pharm, and Pharm.D students featuring notes, MCQs, assignments, video lectures, and professional pharmacy courses.",

    url: "https://anexra.com/education",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-education.png",
        width: 1200,
        height: 630,
        alt: "Anexra Pharmacy Education Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Pharmacy Education Platform | Notes, MCQs, Courses & Video Lectures | Anexra",

    description:
      "Empowering pharmacy students through notes, MCQs, assignments, video lectures, and career-focused learning resources.",

    images: ["/og-education.png"],
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
        <EducationHero/>
        <DegreeCards />
        <EducationFeatures />
        <Stats />
        {/* <SemesterSection />
        <CTA /> */}
        <Footer/>
      </>;
}

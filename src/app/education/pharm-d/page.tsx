import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pharm.D Notes, MCQs, Video Lectures & Study Material | Anexra",

  description:
    "Access the ultimate Pharm.D learning platform with semester-wise notes, clinical pharmacy resources, pharmacotherapeutics study material, MCQs, assignments, case studies, video lectures, and professional pharmacy courses. Designed for Doctor of Pharmacy students seeking academic excellence and career growth.",

  keywords: [
    "Pharm D",
    "Pharm D Notes",
    "Pharm D Notes PDF",
    "Doctor of Pharmacy",
    "Doctor of Pharmacy Notes",
    "Pharm D Study Material",
    "Pharm D MCQs",
    "Pharm D Assignments",
    "Pharm D Video Lectures",
    "Clinical Pharmacy Notes",
    "Clinical Pharmacy MCQs",
    "Pharmacotherapeutics Notes",
    "Pharmacology Notes",
    "Hospital Pharmacy Notes",
    "Clinical Research",
    "Patient Case Studies",
    "Pharmacy Education",
    "Pharm D India",
    "Pharm D Courses",
    "Clinical Pharmacist Training",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/education/pharm-d",
  },

  openGraph: {
    title:
      "Pharm.D Notes, MCQs, Video Lectures & Study Material | Anexra",

    description:
      "The complete Pharm.D learning ecosystem featuring semester-wise notes, video lectures, MCQs, assignments, case studies, clinical pharmacy resources, and career-focused learning.",

    url: "https://anexra.com/education/pharm-d",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-pharm-d.png",
        width: 1200,
        height: 630,
        alt: "Anexra Pharm.D Learning Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Pharm.D Notes, MCQs, Video Lectures & Study Material | Anexra",

    description:
      "Master Pharm.D with notes, MCQs, assignments, clinical case studies, and video lectures on Anexra.",

    images: ["/og-pharm-d.png"],
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

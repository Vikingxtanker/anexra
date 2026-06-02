import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import AboutHero from "@/sections/about/AboutHero";
import WhoWeAre from "@/sections/about/WhoWeAre";
import VisionMission from "@/sections/VisionMission";
import WhyAnexra from "@/sections/WhyAnexra";
import Leadership from "@/sections/about/Leadership";
import AboutCTA from "@/sections/about/AboutCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Anexra | Our Mission, Vision & Leadership Team",

  description:
    "Learn about Anexra, a healthcare and pharmacy innovation platform dedicated to improving patient care, healthcare education, and clinical pharmacy services. Meet our leadership team and discover our mission to transform healthcare through technology and expertise.",

  keywords: [
    "About Anexra",
    "Anexra",
    "Healthcare Innovation",
    "Clinical Pharmacy",
    "Healthcare Technology",
    "Digital Healthcare",
    "Healthcare Education",
    "Anexra Leadership",
    "Anexra Founders",
    "Shubham Chormale",
    "Gaurav Gaikwad",
    "Kumkum Bhenwal",
    "Akanksha Khandale",
    "Healthcare Startup",
    "Pharmacy Innovation",
    "Clinical Healthcare Solutions",
  ],

  authors: [
    {
      name: "Anexra Leadership Team",
    },
  ],

  alternates: {
    canonical: "https://anexra.com/about",
  },

  openGraph: {
    title: "About Anexra | Our Mission, Vision & Leadership Team",

    description:
      "Discover Anexra's mission, vision, values, and leadership team driving innovation in healthcare, clinical pharmacy, education, and patient-centered care.",

    url: "https://anexra.com/about",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
        alt: "About Anexra",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "About Anexra | Our Mission, Vision & Leadership Team",

    description:
      "Meet the team behind Anexra and learn how we are transforming healthcare through clinical pharmacy, education, and technology.",

    images: ["/og.webp"],
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
        <AboutHero/>
        <WhoWeAre/>
        <VisionMission/>
        <WhyAnexra/>
        <Leadership/>
        <AboutCTA/>

        <Footer/>
      </>;
}

import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import RMHero from "@/sections/solutions/remote-monitoring/RMHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remote Patient Monitoring (RPM) Solutions | Anexra",

  description:
    "Monitor patient health beyond clinical settings with Anexra's Remote Patient Monitoring solutions. Track vital health data, improve chronic disease management, enhance patient engagement, and enable proactive healthcare interventions.",

  keywords: [
    "Remote Patient Monitoring",
    "RPM",
    "Remote Monitoring",
    "Digital Health",
    "Telehealth",
    "Telemedicine",
    "Patient Monitoring",
    "Connected Healthcare",
    "Chronic Disease Monitoring",
    "Home Healthcare",
    "Healthcare Technology",
    "Health Tracking",
    "Patient Engagement",
    "Virtual Care",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/solutions/remote-monitoring",
  },

  openGraph: {
    title: "Remote Patient Monitoring (RPM) Solutions | Anexra",

    description:
      "Empowering healthcare providers and patients through real-time health tracking, remote patient monitoring, and technology-driven care management.",

    url: "https://anexra.com/solutions/remote-monitoring",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-remote-monitoring.png",
        width: 1200,
        height: 630,
        alt: "Anexra Remote Patient Monitoring",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Remote Patient Monitoring (RPM) Solutions | Anexra",

    description:
      "Improve patient outcomes through remote monitoring, digital health solutions, and proactive healthcare management.",

    images: ["/og-remote-monitoring.png"],
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
        <RMHero/>

        <Footer/>
      </>;
}

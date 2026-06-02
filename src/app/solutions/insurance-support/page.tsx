import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import ISHero from "@/sections/solutions/insurance-support/ISHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Insurance Support & Claims Assistance | Anexra",

  description:
    "Navigate healthcare coverage with confidence. Anexra provides insurance support services including coverage guidance, claims assistance, reimbursement support, policy navigation, and patient advocacy.",

  keywords: [
    "Health Insurance Support",
    "Insurance Claims Assistance",
    "Medical Insurance",
    "Healthcare Coverage",
    "Insurance Navigation",
    "Patient Advocacy",
    "Medical Reimbursement",
    "Insurance Guidance",
    "Healthcare Benefits",
    "Coverage Verification",
    "Claims Support",
    "Healthcare Assistance",
    "Patient Support Services",
    "Anexra",
  ],

  alternates: {
    canonical: "https://anexra.com/solutions/insurance-support",
  },

  openGraph: {
    title: "Health Insurance Support & Claims Assistance | Anexra",

    description:
      "Helping patients understand healthcare coverage, navigate insurance policies, manage claims, and access reimbursement support.",

    url: "https://anexra.com/solutions/insurance-support",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-insurance-support.png",
        width: 1200,
        height: 630,
        alt: "Anexra Insurance Support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Health Insurance Support & Claims Assistance | Anexra",

    description:
      "Expert guidance for healthcare coverage, insurance claims, reimbursements, and patient support.",

    images: ["/og-insurance-support.png"],
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
        <ISHero/>

        <Footer/>
      </>;
}

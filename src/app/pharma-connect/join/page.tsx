import type { Metadata } from "next";

import PharmaConnectJoinClient from "./PharmaConnectJoinClient";

export const metadata: Metadata = {
  title:
    "Join India's Pharmacy Network | Pharma Connect by Anexra",

  description:
    "Connect with pharmacy students, graduates, educators and healthcare professionals across India. Join Pharma Connect for free.",

  openGraph: {
    title:
      "Join India's Pharmacy Network | Pharma Connect by Anexra",

    description:
      "Connect with pharmacy students, graduates, educators and healthcare professionals across India. Join Pharma Connect for free.",

    url: "https://anexra.com/pharma-connect/join",

    siteName: "Anexra",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/og.png",

        width: 1200,

        height: 630,

        alt: "Pharma Connect by Anexra",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Join India's Pharmacy Network | Pharma Connect by Anexra",

    description:
      "Connect with pharmacy students, graduates, educators and healthcare professionals across India. Join Pharma Connect for free.",

    images: ["/images/og.png"],
  },
};

export default function Page() {
  return <PharmaConnectJoinClient />;
}
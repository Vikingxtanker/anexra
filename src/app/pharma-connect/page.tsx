import type { Metadata } from "next";

import { redirect } from "next/navigation";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

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

    url: "https://anexra.com/pharma-connect",

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

export default function PharmaConnectPage() {
  redirect("/pharma-connect/join");
}
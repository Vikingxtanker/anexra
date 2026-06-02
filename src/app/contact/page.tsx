import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import ContactHero from "@/sections/contact/ContactHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Anexra | Get in Touch With Our Team",

  description:
    "Contact Anexra for healthcare solutions, clinical pharmacy services, pharmacy education, partnerships, support, and business inquiries. Reach our team by phone, email, or online contact form.",

  keywords: [
    "Contact Anexra",
    "Anexra Contact",
    "Healthcare Support",
    "Clinical Pharmacy Support",
    "Pharmacy Education Support",
    "Healthcare Solutions Contact",
    "Business Inquiries",
    "Partnership Opportunities",
    "Customer Support",
    "Anexra Email",
    "Anexra Phone Number",
  ],

  alternates: {
    canonical: "https://anexra.com/contact",
  },

  openGraph: {
    title: "Contact Anexra | Get in Touch With Our Team",

    description:
      "Reach Anexra for healthcare services, pharmacy education, partnerships, and support.",

    url: "https://anexra.com/contact",

    siteName: "Anexra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Anexra",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Contact Anexra | Get in Touch With Our Team",

    description:
      "Reach Anexra for healthcare solutions, education, partnerships, and support.",

    images: ["/og-contact.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
    return <>
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
        __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",

        name: "Contact Anexra",
        url: "https://anexra.com/contact",

        mainEntity: {
            "@type": "Organization",

            name: "Anexra",
            url: "https://anexra.com",

            email: "contact@anexra.com",
            telephone: "+919145645566",

            contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: "+919145645566",
            email: "contact@anexra.com",
            availableLanguage: ["English", "Hindi", "Marathi"],
            },
        },
        }),
    }}
    />
        <Navbar/>
        <ContactHero/>

        <Footer/>
      </>;
}


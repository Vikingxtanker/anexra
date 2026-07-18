import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";

import { Toaster } from "sonner";

// import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import Clarity from "@/components/clarity";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anexra.com"),

  title: {
    default: "Anexra",
    template: "%s | Anexra",
  },

  description: "Next-Gen Assistance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#f4efee] text-[#4c1711]">
        <SmoothScroll />
        {children}
        <Toaster richColors position="top-right" />

        {/* <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}
        /> */}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-1FBZPWXKY1`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1FBZPWXKY1');
          `}
        </Script>

        <Clarity />
      </body>
    </html>
  );
}
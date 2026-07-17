import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";

import { Toaster } from "sonner";

import { GoogleAnalytics } from "@next/third-parties/google";
import Clarity from "@/components/clarity";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anexra",
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

        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}
        />

        <Clarity />
      </body>
    </html>
  );
}
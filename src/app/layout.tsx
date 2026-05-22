import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Belleza } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

// const belleza = Belleza({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-belleza",
// });

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

        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased bg-[#f4efee] text-[#4c1711]`}
            >
                <SmoothScroll />
                {children}
            </body>
        </html>

        // <html lang="en">
        // <body
        //     className={`${belleza.variable} font-sans antialiased bg-[#f4efee] text-[#4c1711]`}
        // >
        //     {children}
        // </body>
        // </html>
    );
}

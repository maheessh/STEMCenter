import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody"; // Ensure this path is correct based on your folder structure
import SiteHeader from "@/components/SiteHeader"; // We import the new component
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Southeastern Northshore STEM Center | LaSTEM Region 9",
  description:
    "Hands-on STEM programs across Livingston, St. Helena, St. Tammany, Tangipahoa, and Washington parishes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased min-h-screen flex flex-col">
        <ClientBody>
          <SiteHeader />
          {children}
          {/* You can also move the Footer here later to make it global */}
        </ClientBody>
      </body>
    </html>
  );
}
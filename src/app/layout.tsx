import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#004d99",
};

export const metadata: Metadata = {
  title: {
    default: "Southeastern Northshore STEM Center | LaSTEM Region 9",
    template: "%s | Southeastern Northshore STEM Center",
  },
  description:
    "Hands-on STEM programs across Livingston, St. Helena, St. Tammany, Tangipahoa, and Washington parishes. Led by Southeastern Louisiana University and NTCC as part of LaSTEM Region 9.",
  keywords: [
    "STEM education",
    "Louisiana STEM",
    "LaSTEM Region 9",
    "Southeastern Louisiana University",
    "NTCC",
    "Science Fair",
    "SeaPerch",
    "Robotics",
    "STEM programs",
    "Hammond Louisiana",
    "Northshore STEM",
  ],
  authors: [{ name: "Southeastern Northshore STEM Center" }],
  creator: "Southeastern Louisiana University",
  publisher: "Southeastern Louisiana University",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stemcenter.southeastern.edu",
    siteName: "Southeastern Northshore STEM Center",
    title: "Southeastern Northshore STEM Center | LaSTEM Region 9",
    description:
      "Hands-on STEM programs across the Northshore region of Louisiana. Science fairs, robotics, and more.",
    images: [
      {
        url: "https://i.ibb.co/mFvnwvwr/STEM-Center-Logo.png",
        width: 1200,
        height: 630,
        alt: "Southeastern Northshore STEM Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Southeastern Northshore STEM Center | LaSTEM Region 9",
    description:
      "Hands-on STEM programs across the Northshore region of Louisiana.",
    images: ["https://i.ibb.co/mFvnwvwr/STEM-Center-Logo.png"],
  },
  alternates: {
    canonical: "https://stemcenter.southeastern.edu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}

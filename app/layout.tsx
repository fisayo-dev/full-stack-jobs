import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteUrl } from "@/constants/general";

const hankenGrotesk = localFont({
  src: "../public/fonts/HankenGrotesk-Regular.ttf",
  variable: "--font-hanken-grotesk",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Full Stack Jobs - Jobs for Full Stack Developers",
      template: "%s | Full Stack Jobs",
    },
    description:
      "Find full stack developer jobs, connect with hiring teams, and explore opportunities built for developers across the stack.",
    keywords: [
      "full stack jobs",
      "full stack developer jobs",
      "software engineer jobs",
      "developer careers",
      "frontend jobs",
      "backend jobs",
      "remote developer jobs",
      "tech jobs",
      "job board",
      "engineering roles",
    ],
    authors: [{ name: "Full Stack Jobs" }],
    creator: "Full Stack Jobs",
    publisher: "Full Stack Jobs",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: "/logos/favicon.svg",
      shortcut: "/logos/favicon.svg",
      apple: "/logos/favicon.svg",
    },
    manifest: "/manifest.json",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: "Full Stack Jobs",
      title: "Full Stack Jobs - Jobs for Full Stack Developers",
      description:
        "Find full stack developer jobs, connect with hiring teams, and explore opportunities built for developers across the stack.",
      images: [
        {
          url: `${siteUrl}/logos/og-twitter-image.png`,
          width: 1200,
          height: 630,
          alt: "Full Stack Jobs - Jobs for Full Stack Developers",
          type: "image/svg+xml",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Full Stack Jobs - Jobs for Full Stack Developers",
      description:
        "Find full stack developer jobs, connect with hiring teams, and explore opportunities built for developers across the stack.",
      images: [`${siteUrl}/logos/og-twitter-image.png`],
      creator: "@fullstackjobs",
    },
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
    alternates: {
      canonical: siteUrl,
    },
    category: "jobs",
    classification: "Job Board",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

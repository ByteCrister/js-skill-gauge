import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Js SkillGauge | JavaScript Skill Assessment",
    template: "%s | Js SkillGauge",
  },
  description:
    "Js SkillGauge is an AI-powered JavaScript skill assessment built by Sadiqul Islam Shakib. Measure your JS level with curated questions and ML-based insights.",
  keywords: [
    "JavaScript quiz",
    "JavaScript assessment",
    "JS skill test",
    "frontend interview prep",
    "coding quiz",
    "Next.js project",
    "Sadiqul Islam Shakib",
    "ByteCrister",
  ],
  authors: [
    {
      name: "Sadiqul Islam Shakib",
      url: "https://github.com/ByteCrister",
    },
  ],
  creator: "Sadiqul Islam Shakib",
  publisher: "Sadiqul Islam Shakib",
  openGraph: {
    title: "Js SkillGauge | JavaScript Skill Assessment",
    description:
      "Test your JavaScript skills with 10 curated questions and get an ML-powered skill level prediction, created by Sadiqul Islam Shakib (ByteCrister).",
    type: "website",
    locale: "en_US",
    siteName: "Js SkillGauge",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "Js SkillGauge logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Js SkillGauge | JavaScript Skill Assessment",
    description:
      "AI-powered JavaScript skill assessment by Sadiqul Islam Shakib (ByteCrister). Take the quiz and discover your JS level.",
    creator: "@ByteCrister",
    images: ["/apple-touch-icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

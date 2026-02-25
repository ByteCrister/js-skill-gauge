import type { Metadata } from "next";
import Landing from "../components/Landing";

export const metadata: Metadata = {
  title: "JavaScript Skill Quiz",
  description:
    "Take a focused 10-question JavaScript quiz and get an ML-based skill level prediction crafted by Sadiqul Islam Shakib (ByteCrister).",
  keywords: [
    "JavaScript quiz",
    "JS skill gauge",
    "JavaScript level test",
    "frontend skills",
    "React and Next.js quiz",
    "Sadiqul Islam Shakib",
    "ByteCrister",
  ],
  authors: [
    {
      name: "Sadiqul Islam Shakib",
      url: "https://www.linkedin.com/in/sadiqul-islam-shakib/",
    },
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <Landing />;
}
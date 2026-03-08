import type { Metadata } from "next";
import CaseStudyContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Unisphere: Full College Management App",
  description: "All-in-one React Native app for campus operations including gatepasses, shuttles, and cafeteria at BML Munjal University.",
  alternates: { canonical: "/case-studies/unisphere-app" },
  openGraph: {
    title: "Unisphere: Full College Management App | Innodify",
    description: "All-in-one React Native app for campus operations including gatepasses, shuttles, and cafeteria at BML Munjal University.",
    url: "https://innodify.in/case-studies/unisphere-app",
  },
};

export default function CaseStudyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://innodify.in" },
        { name: "Case Studies", url: "https://innodify.in/case-studies" },
        { name: "Unisphere: Full College Management App", url: "https://innodify.in/case-studies/unisphere-app" },
      ]} />
      <CaseStudyContent />
    </>
  );
}
import type { Metadata } from "next";
import CaseStudyContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Custom Flutter App for CVD Diamond Jewellery | Salt & Glitz",
  description: "How Innodify built a custom Flutter mobile app for Salt & Glitz CVD diamond jewellery, published on both App Store and Play Store.",
  alternates: { canonical: "/case-studies/salt-and-glitz-app" },
  openGraph: {
    title: "Custom Flutter App for CVD Diamond Jewellery | Salt & Glitz | Innodify",
    description: "How Innodify built a custom Flutter mobile app for Salt & Glitz CVD diamond jewellery, published on both App Store and Play Store.",
    url: "https://innodify.in/case-studies/salt-and-glitz-app",
  },
};

export default function CaseStudyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://innodify.in" },
        { name: "Case Studies", url: "https://innodify.in/case-studies" },
        { name: "Custom Flutter App for CVD Diamond Jewellery", url: "https://innodify.in/case-studies/salt-and-glitz-app" },
      ]} />
      <CaseStudyContent />
    </>
  );
}
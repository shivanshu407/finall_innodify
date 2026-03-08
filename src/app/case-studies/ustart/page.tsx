import type { Metadata } from "next";
import CaseStudyContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Ustart: Zero-Commission Cab & Bike App",
  description: "A highly optimized ride-hailing platform with React Native and custom Native Modules for cabs and bikes.",
  alternates: { canonical: "/case-studies/ustart" },
  openGraph: {
    title: "Ustart: Zero-Commission Cab & Bike App | Innodify",
    description: "A highly optimized ride-hailing platform with React Native and custom Native Modules for cabs and bikes.",
    url: "https://innodify.in/case-studies/ustart",
  },
};

export default function CaseStudyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://innodify.in" },
        { name: "Case Studies", url: "https://innodify.in/case-studies" },
        { name: "Ustart: Zero-Commission Cab & Bike App", url: "https://innodify.in/case-studies/ustart" },
      ]} />
      <CaseStudyContent />
    </>
  );
}
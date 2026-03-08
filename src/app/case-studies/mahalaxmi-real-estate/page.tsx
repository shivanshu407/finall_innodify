import type { Metadata } from "next";
import CaseStudyContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cloud CRM for Real Estate Operations | Mahalaxmi Group",
  description: "Custom cloud-native CRM that achieved 100% data security and boosted productivity by 30% for Mahalaxmi Real Estate Group.",
  alternates: { canonical: "/case-studies/mahalaxmi-real-estate" },
  openGraph: {
    title: "Cloud CRM for Real Estate Operations | Mahalaxmi Group | Innodify",
    description: "Custom cloud-native CRM that achieved 100% data security and boosted productivity by 30% for Mahalaxmi Real Estate Group.",
    url: "https://innodify.in/case-studies/mahalaxmi-real-estate",
  },
};

export default function CaseStudyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://innodify.in" },
        { name: "Case Studies", url: "https://innodify.in/case-studies" },
        { name: "Cloud CRM for Real Estate Operations", url: "https://innodify.in/case-studies/mahalaxmi-real-estate" },
      ]} />
      <CaseStudyContent />
    </>
  );
}
import type { Metadata } from "next";
import CaseStudyContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Custom eCommerce Website for CVD Diamond Jewellery | Salt & Glitz",
  description: "Fully custom eCommerce website for Salt & Glitz to showcase and sell premium CVD lab-grown diamond jewellery.",
  alternates: { canonical: "/case-studies/salt-and-glitz-website" },
  openGraph: {
    title: "Custom eCommerce Website for CVD Diamond Jewellery | Salt & Glitz | Innodify",
    description: "Fully custom eCommerce website for Salt & Glitz to showcase and sell premium CVD lab-grown diamond jewellery.",
    url: "https://innodify.in/case-studies/salt-and-glitz-website",
  },
};

export default function CaseStudyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://innodify.in" },
        { name: "Case Studies", url: "https://innodify.in/case-studies" },
        { name: "Custom eCommerce Website for CVD Diamond Jewellery", url: "https://innodify.in/case-studies/salt-and-glitz-website" },
      ]} />
      <CaseStudyContent />
    </>
  );
}
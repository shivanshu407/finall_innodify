import type { Metadata } from "next";
import CaseStudyContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Shopify Store for Premium Jewellery Brand | D Khushalbhai Jewellers",
  description: "Complete Shopify store with payment gateway and delivery partner integrations for D Khushalbhai Jewellers.",
  alternates: { canonical: "/case-studies/dkhushalbhai-jewellers" },
  openGraph: {
    title: "Shopify Store for Premium Jewellery Brand | D Khushalbhai Jewellers | Innodify",
    description: "Complete Shopify store with payment gateway and delivery partner integrations for D Khushalbhai Jewellers.",
    url: "https://innodify.in/case-studies/dkhushalbhai-jewellers",
  },
};

export default function CaseStudyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://innodify.in" },
        { name: "Case Studies", url: "https://innodify.in/case-studies" },
        { name: "Shopify Store for Premium Jewellery Brand", url: "https://innodify.in/case-studies/dkhushalbhai-jewellers" },
      ]} />
      <CaseStudyContent />
    </>
  );
}
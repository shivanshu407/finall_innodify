import type { Metadata } from "next";
import CaseStudyContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Unisphere: Highly Secure University Exam Portal",
  description: "Massive-scale assessment portal with SafeExamBrowser security and Kubernetes microservices for BML Munjal University.",
  alternates: { canonical: "/case-studies/unisphere-exam-portal" },
  openGraph: {
    title: "Unisphere: Highly Secure University Exam Portal | Innodify",
    description: "Massive-scale assessment portal with SafeExamBrowser security and Kubernetes microservices for BML Munjal University.",
    url: "https://innodify.in/case-studies/unisphere-exam-portal",
  },
};

export default function CaseStudyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://innodify.in" },
        { name: "Case Studies", url: "https://innodify.in/case-studies" },
        { name: "Unisphere: Highly Secure University Exam Portal", url: "https://innodify.in/case-studies/unisphere-exam-portal" },
      ]} />
      <CaseStudyContent />
    </>
  );
}
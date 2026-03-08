import type { Metadata } from "next";
import EducationContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Education Solutions",
    description: "EdTech solutions by Innodify — LMS platforms, exam portals, student management systems, and e-learning applications.",
    alternates: { canonical: "/industries/education" },
    openGraph: { title: "Education Solutions | Innodify", description: "Digital solutions for education and e-learning.", url: "https://innodify.in/industries/education" },
};

export default function EducationPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ name: "Home", url: "https://innodify.in" }, { name: "Industries", url: "https://innodify.in/industries/healthcare" }, { name: "Education", url: "https://innodify.in/industries/education" }]} />
            <EducationContent />
        </>
    );
}

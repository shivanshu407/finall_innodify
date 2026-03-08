import type { Metadata } from "next";
import CaseStudiesContent from "./CaseStudiesContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Case Studies | Real Results from Innodify Projects",
    description:
        "Explore Innodify case studies — real results from real clients. See how we've built Flutter apps, Shopify stores, CRM systems, and AI solutions that drive growth.",
    alternates: { canonical: "/case-studies" },
    openGraph: {
        title: "Case Studies | Real Results from Innodify Projects",
        description: "Real results from real clients. See how we've helped brands grow their digital business.",
        url: "https://innodify.in/case-studies",
    },
};

export default function CaseStudiesPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://innodify.in" },
                    { name: "Case Studies", url: "https://innodify.in/case-studies" },
                ]}
            />
            <CaseStudiesContent />
        </>
    );
}

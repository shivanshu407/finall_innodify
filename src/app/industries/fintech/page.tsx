import type { Metadata } from "next";
import FintechContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Fintech Solutions",
    description: "Fintech solutions by Innodify — payment processing, banking apps, fraud detection, and regulatory compliance platforms.",
    alternates: { canonical: "/industries/fintech" },
    openGraph: { title: "Fintech Solutions | Innodify", description: "Digital solutions for fintech companies.", url: "https://innodify.in/industries/fintech" },
};

export default function FintechPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ name: "Home", url: "https://innodify.in" }, { name: "Industries", url: "https://innodify.in/industries/healthcare" }, { name: "Fintech", url: "https://innodify.in/industries/fintech" }]} />
            <FintechContent />
        </>
    );
}

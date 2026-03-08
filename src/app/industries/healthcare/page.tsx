import type { Metadata } from "next";
import HealthcareContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Healthcare Solutions",
    description: "Digital solutions for healthcare — patient portals, telemedicine apps, EHR integrations, and HIPAA-compliant platforms by Innodify.",
    alternates: { canonical: "/industries/healthcare" },
    openGraph: { title: "Healthcare Solutions | Innodify", description: "Digital solutions for healthcare organizations.", url: "https://innodify.in/industries/healthcare" },
};

export default function HealthcarePage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ name: "Home", url: "https://innodify.in" }, { name: "Industries", url: "https://innodify.in/industries/healthcare" }, { name: "Healthcare", url: "https://innodify.in/industries/healthcare" }]} />
            <HealthcareContent />
        </>
    );
}

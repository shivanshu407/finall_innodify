import type { Metadata } from "next";
import CRMServicesContent from "./Content";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "CRM Development | Custom CRM Solutions",
    description:
        "Custom CRM development by Innodify — tailored customer relationship management systems for sales, marketing, and support. Salesforce, HubSpot, and custom builds.",
    alternates: { canonical: "/services/crm-development" },
    openGraph: {
        title: "CRM Development | Custom CRM Solutions | Innodify",
        description: "Custom CRM solutions tailored to your sales, marketing, and customer management workflows.",
        url: "https://innodify.in/services/crm-development",
    },
};

export default function CRMServicesPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: "Home", url: "https://innodify.in" },
                { name: "Services", url: "https://innodify.in/services/ai-solutions" },
                { name: "CRM Development", url: "https://innodify.in/services/crm-development" },
            ]} />
            <ServiceJsonLd name="CRM Development" description="Custom CRM solutions for sales, marketing, and customer management" url="https://innodify.in/services/crm-development" serviceType="CRM Development" />
            <CRMServicesContent />
        </>
    );
}

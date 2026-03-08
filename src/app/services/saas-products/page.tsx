import type { Metadata } from "next";
import SaaSServicesContent from "./Content";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "SaaS Product Development",
    description:
        "End-to-end SaaS product development by Innodify — from MVP to scale. Multi-tenant architecture, cloud infrastructure, and continuous delivery.",
    alternates: { canonical: "/services/saas-products" },
    openGraph: {
        title: "SaaS Product Development | Innodify",
        description: "End-to-end SaaS product development from MVP to scale.",
        url: "https://innodify.in/services/saas-products",
    },
};

export default function SaaSServicesPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: "Home", url: "https://innodify.in" },
                { name: "Services", url: "https://innodify.in/services/ai-solutions" },
                { name: "SaaS Products", url: "https://innodify.in/services/saas-products" },
            ]} />
            <ServiceJsonLd name="SaaS Product Development" description="End-to-end SaaS product development, from MVP to enterprise scale" url="https://innodify.in/services/saas-products" serviceType="SaaS Development" />
            <SaaSServicesContent />
        </>
    );
}

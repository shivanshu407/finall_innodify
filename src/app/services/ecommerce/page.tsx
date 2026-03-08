import type { Metadata } from "next";
import EcommerceServicesContent from "./Content";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "eCommerce Development | Shopify, Magento & More",
    description:
        "eCommerce development by Innodify — Shopify, Magento, WooCommerce, BigCommerce, and headless commerce solutions. Custom stores, migrations, and CRO.",
    alternates: { canonical: "/services/ecommerce" },
    openGraph: {
        title: "eCommerce Development | Shopify, Magento & More | Innodify",
        description: "Custom eCommerce solutions with Shopify, Magento, and headless commerce.",
        url: "https://innodify.in/services/ecommerce",
    },
};

export default function EcommerceServicesPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: "Home", url: "https://innodify.in" },
                { name: "Services", url: "https://innodify.in/services/ai-solutions" },
                { name: "eCommerce", url: "https://innodify.in/services/ecommerce" },
            ]} />
            <ServiceJsonLd name="eCommerce Development" description="Custom eCommerce solutions with Shopify, Magento, and headless commerce" url="https://innodify.in/services/ecommerce" serviceType="eCommerce Development" />
            <EcommerceServicesContent />
        </>
    );
}

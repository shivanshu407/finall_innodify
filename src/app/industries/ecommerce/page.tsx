import type { Metadata } from "next";
import EcommerceIndustryContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "eCommerce Solutions",
    description: "eCommerce industry solutions by Innodify — Shopify, Magento, headless commerce, marketplace development, and conversion rate optimization.",
    alternates: { canonical: "/industries/ecommerce" },
    openGraph: { title: "eCommerce Solutions | Innodify", description: "eCommerce industry solutions and platform development.", url: "https://innodify.in/industries/ecommerce" },
};

export default function EcommerceIndustryPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ name: "Home", url: "https://innodify.in" }, { name: "Industries", url: "https://innodify.in/industries/healthcare" }, { name: "eCommerce", url: "https://innodify.in/industries/ecommerce" }]} />
            <EcommerceIndustryContent />
        </>
    );
}

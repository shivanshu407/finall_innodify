import type { Metadata } from "next";
import GuidesContent from "./GuidesContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Guides | Expert Resources",
    description:
        "Free guides, checklists, and resources from Innodify to help you grow your eCommerce business. Download PDF guides on Shopify, Magento, SEO, and more.",
    alternates: { canonical: "/guides" },
    openGraph: {
        title: "Guides | Expert Resources | Innodify",
        description: "Free guides, checklists, and resources to help you grow your eCommerce business.",
        url: "https://innodify.in/guides",
    },
};

export default function GuidesPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://innodify.in" },
                    { name: "Guides", url: "https://innodify.in/guides" },
                ]}
            />
            <GuidesContent />
        </>
    );
}

import type { Metadata } from "next";
import FaqContent from "./FaqContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "FAQ | Frequently Asked Questions",
    description:
        "Find answers to common questions about Innodify's services, pricing, process, and technologies. AI solutions, CRM development, SaaS, web, mobile, and eCommerce.",
    alternates: { canonical: "/faq" },
    openGraph: {
        title: "FAQ | Frequently Asked Questions | Innodify",
        description: "Find answers to common questions about our services, process, and pricing.",
        url: "https://innodify.in/faq",
    },
};

export default function FAQPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://innodify.in" },
                    { name: "FAQ", url: "https://innodify.in/faq" },
                ]}
            />
            <FaqContent />
        </>
    );
}

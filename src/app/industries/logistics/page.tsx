import type { Metadata } from "next";
import LogisticsContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Logistics Solutions",
    description: "Logistics technology solutions by Innodify — fleet management, route optimization, warehouse systems, and supply chain platforms.",
    alternates: { canonical: "/industries/logistics" },
    openGraph: { title: "Logistics Solutions | Innodify", description: "Digital solutions for logistics and supply chain.", url: "https://innodify.in/industries/logistics" },
};

export default function LogisticsPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ name: "Home", url: "https://innodify.in" }, { name: "Industries", url: "https://innodify.in/industries/healthcare" }, { name: "Logistics", url: "https://innodify.in/industries/logistics" }]} />
            <LogisticsContent />
        </>
    );
}

import type { Metadata } from "next";
import RealEstateContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Real Estate Solutions",
    description: "Real estate technology solutions by Innodify — property management platforms, CRM systems, virtual tours, and listing portals.",
    alternates: { canonical: "/industries/real-estate" },
    openGraph: { title: "Real Estate Solutions | Innodify", description: "Digital solutions for real estate companies.", url: "https://innodify.in/industries/real-estate" },
};

export default function RealEstatePage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ name: "Home", url: "https://innodify.in" }, { name: "Industries", url: "https://innodify.in/industries/healthcare" }, { name: "Real Estate", url: "https://innodify.in/industries/real-estate" }]} />
            <RealEstateContent />
        </>
    );
}

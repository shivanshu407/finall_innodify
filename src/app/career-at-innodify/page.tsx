import type { Metadata } from "next";
import CareerContent from "./CareerContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Careers at Innodify | Join Our Team",
    description:
        "Join Innodify — a remote-first digital agency. We're hiring developers, designers, and strategists. Flexible hours, learning budget, and the latest tech.",
    alternates: { canonical: "/career-at-innodify" },
    openGraph: {
        title: "Careers at Innodify | Join Our Team",
        description: "Build the future of commerce with us. Explore open positions at Innodify.",
        url: "https://innodify.in/career-at-innodify",
    },
};

export default function CareersPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://innodify.in" },
                    { name: "Careers", url: "https://innodify.in/career-at-innodify" },
                ]}
            />
            <CareerContent />
        </>
    );
}

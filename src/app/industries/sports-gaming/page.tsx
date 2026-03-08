import type { Metadata } from "next";
import SportsGamingContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Sports & Gaming Solutions",
    description: "Sports and gaming technology by Innodify — fantasy sports platforms, live scoring, esports apps, and betting solutions.",
    alternates: { canonical: "/industries/sports-gaming" },
    openGraph: { title: "Sports & Gaming Solutions | Innodify", description: "Digital solutions for sports and gaming.", url: "https://innodify.in/industries/sports-gaming" },
};

export default function SportsGamingPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ name: "Home", url: "https://innodify.in" }, { name: "Industries", url: "https://innodify.in/industries/healthcare" }, { name: "Sports & Gaming", url: "https://innodify.in/industries/sports-gaming" }]} />
            <SportsGamingContent />
        </>
    );
}

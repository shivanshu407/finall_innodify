import type { Metadata } from "next";
import MediaEntertainmentContent from "./Content";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Media & Entertainment Solutions",
    description: "Media and entertainment technology by Innodify — streaming platforms, content management, social media apps, and digital publishing.",
    alternates: { canonical: "/industries/media-entertainment" },
    openGraph: { title: "Media & Entertainment Solutions | Innodify", description: "Digital solutions for media and entertainment.", url: "https://innodify.in/industries/media-entertainment" },
};

export default function MediaEntertainmentPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ name: "Home", url: "https://innodify.in" }, { name: "Industries", url: "https://innodify.in/industries/healthcare" }, { name: "Media & Entertainment", url: "https://innodify.in/industries/media-entertainment" }]} />
            <MediaEntertainmentContent />
        </>
    );
}

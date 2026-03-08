import type { Metadata } from "next";
import AboutPageContent from "./AboutContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "About Innodify | Our Team, Mission & Story",
    description:
        "Learn about Innodify — a digital solutions agency in Surat, India. Meet our team, discover our mission, values, and the story behind our passion for building premium digital experiences.",
    alternates: { canonical: "/about-us" },
    openGraph: {
        title: "About Innodify | Our Team, Mission & Story",
        description:
            "Meet the team behind Innodify. We build scalable, high-performance web and mobile applications for forward-thinking brands.",
        url: "https://innodify.in/about-us",
    },
};

export default function AboutPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://innodify.in" },
                    { name: "About Us", url: "https://innodify.in/about-us" },
                ]}
            />
            <AboutPageContent />
        </>
    );
}

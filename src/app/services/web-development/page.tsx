import type { Metadata } from "next";
import WebDevServicesContent from "./Content";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Web Development Services",
    description:
        "Full-stack web development by Innodify — Next.js, React, Node.js, and custom web applications. Corporate websites, portals, and progressive web apps.",
    alternates: { canonical: "/services/web-development" },
    openGraph: {
        title: "Web Development Services | Innodify",
        description: "Full-stack web application development with Next.js, React, and Node.js.",
        url: "https://innodify.in/services/web-development",
    },
};

export default function WebDevServicesPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: "Home", url: "https://innodify.in" },
                { name: "Services", url: "https://innodify.in/services/ai-solutions" },
                { name: "Web Development", url: "https://innodify.in/services/web-development" },
            ]} />
            <ServiceJsonLd name="Web Development" description="Full-stack web application development with modern frameworks" url="https://innodify.in/services/web-development" serviceType="Web Development" />
            <WebDevServicesContent />
        </>
    );
}

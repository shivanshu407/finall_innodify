import type { Metadata } from "next";
import AIServicesContent from "./Content";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "AI Solutions | Custom AI Development",
    description:
        "Custom AI solutions from Innodify — agentic AI, intelligent chatbots, machine learning models, process automation, and predictive analytics for your business.",
    alternates: { canonical: "/services/ai-solutions" },
    openGraph: {
        title: "AI Solutions | Custom AI Development | Innodify",
        description: "From agentic AI to intelligent chatbots, we build custom AI solutions that automate, engage, and transform your operations.",
        url: "https://innodify.in/services/ai-solutions",
    },
};

export default function AIServicesPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: "Home", url: "https://innodify.in" },
                { name: "Services", url: "https://innodify.in/services/ai-solutions" },
                { name: "AI Solutions", url: "https://innodify.in/services/ai-solutions" },
            ]} />
            <ServiceJsonLd name="AI Solutions" description="Custom AI development including agentic AI, chatbots, ML models, and process automation" url="https://innodify.in/services/ai-solutions" serviceType="AI Development" />
            <AIServicesContent />
        </>
    );
}

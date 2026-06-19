import type { Metadata } from "next";
import MobileAppsServicesContent from "./Content";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Mobile App Development | iOS & Android",
    description:
        "Mobile app development by Innodify — React Native, Flutter, Swift, and Kotlin. Cross-platform and native apps for iOS and Android with app store submission.",
    alternates: { canonical: "/services/mobile-apps" },
    openGraph: {
        title: "Mobile App Development | iOS & Android | Innodify",
        description: "Cross-platform and native mobile apps for iOS and Android.",
        url: "https://innodify.in/services/mobile-apps",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Development | iOS & Android | Innodify",
        description: "Native and cross-platform apps using React Native, Flutter, Swift, and Kotlin with app store launch support.",
        images: ["/innodify-logo.svg"],
    },
};

export default function MobileAppsServicesPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: "Home", url: "https://innodify.in" },
                { name: "Services", url: "https://innodify.in/services/ai-solutions" },
                { name: "Mobile Apps", url: "https://innodify.in/services/mobile-apps" },
            ]} />
            <ServiceJsonLd name="Mobile App Development" description="Cross-platform and native mobile app development for iOS and Android" url="https://innodify.in/services/mobile-apps" serviceType="Mobile App Development" />
            <MobileAppsServicesContent />
        </>
    );
}

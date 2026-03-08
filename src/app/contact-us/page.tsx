import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Contact Innodify | Get in Touch for Your Project",
    description:
        "Contact Innodify for AI solutions, CRM development, web & mobile apps, and eCommerce projects. Located in Surat, Gujarat. Response within 24 hours.",
    alternates: { canonical: "/contact-us" },
    openGraph: {
        title: "Contact Innodify | Get in Touch for Your Project",
        description: "Have a project in mind? Drop us a message and we'll get back to you within 24 hours.",
        url: "https://innodify.in/contact-us",
    },
};

export default function ContactPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://innodify.in" },
                    { name: "Contact Us", url: "https://innodify.in/contact-us" },
                ]}
            />
            <ContactContent />
        </>
    );
}

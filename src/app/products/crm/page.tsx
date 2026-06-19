import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "CRM Platform | Innodify",
    description: "Custom CRM platform by Innodify",
    alternates: { canonical: "/products/crm" },
};

export default function CRMProductPage() {
    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center py-24 bg-gray-50 text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#0e1012]">CRM Platform <span className="italic text-[#10b981]">Coming Soon</span></h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                We’re working hard to build an innovative customer relationship management solution tailored to your business needs. Stay tuned for updates!
            </p>
            <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#10b981] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0e8e6d] transition-colors"
            >
                Get in Touch
            </Link>
        </section>
    );
}

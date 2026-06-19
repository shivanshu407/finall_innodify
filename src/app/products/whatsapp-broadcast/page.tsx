import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "WhatsApp Broadcast | Innodify",
    description: "WhatsApp broadcast platform by Innodify",
    alternates: { canonical: "/products/whatsapp-broadcast" },
};

export default function WhatsAppBroadcastPage() {
    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center py-24 bg-gray-50 text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#0e1012]">WhatsApp Broadcast <span className="italic text-[#25D366]">Coming Soon</span></h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Our upcoming WhatsApp broadcast tool will help you engage your audience at scale directly within WhatsApp. Check back soon for more details!
            </p>
            <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1DA851] transition-colors"
            >
                Get in Touch
            </Link>
        </section>
    );
}

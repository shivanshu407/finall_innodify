import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "E-Commerce App | Innodify",
    description: "E-commerce mobile app by Innodify",
    alternates: { canonical: "/products/ecommerce-app" },
};

export default function EcommerceAppPage() {
    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center py-24 bg-gray-50 text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#0e1012]">E‑Commerce App <span className="italic text-[#8B5CF6]">Coming Soon</span></h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Our upcoming e‑commerce app will deliver seamless shopping experiences with modern design and advanced features. Stay tuned for the launch!
            </p>
            <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#8B5CF6] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#7C3AED] transition-colors"
            >
                Get in Touch
            </Link>
        </section>
    );
}

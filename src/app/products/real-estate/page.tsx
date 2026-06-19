import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Real Estate Platform | Innodify",
    description: "Real estate product by Innodify",
    alternates: { canonical: "/products/real-estate" },
};

export default function RealEstateProductPage() {
    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center py-24 bg-gray-50 text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#0e1012]">Real Estate Platform <span className="italic text-[#F59E0B]">Coming Soon</span></h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                We're developing a comprehensive real estate platform with advanced property management, virtual tours, and listing features. Stay tuned!
            </p>
            <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#0e1012] px-8 py-4 rounded-full font-semibold hover:bg-[#d97706] transition-colors"
            >
                Get in Touch
            </Link>
        </section>
    );
}

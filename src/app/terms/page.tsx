import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read Innodify's website terms for visitors and project inquiries.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Innodify",
    description: "Website terms for visitors and project inquiries.",
    url: "https://innodify.in/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://innodify.in" }, { name: "Terms of Service", url: "https://innodify.in/terms" }]} />
      <main className="bg-white text-[#0e1012] pt-32 pb-24">
        <section className="container mx-auto px-6 max-w-4xl">
          <p className="text-[#00adef] font-medium mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Terms of Service</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">Last updated: June 2026.</p>
          <div className="space-y-8">
            <section><h2 className="text-2xl font-semibold mb-3">Website use</h2><p className="text-gray-600 leading-relaxed">This website is provided to share information about Innodify, our services, resources, and project inquiry process.</p></section>
            <section><h2 className="text-2xl font-semibold mb-3">Project discussions</h2><p className="text-gray-600 leading-relaxed">Website content is general information. Project scope, pricing, timelines, and deliverables are confirmed in written project documents.</p></section>
            <section><h2 className="text-2xl font-semibold mb-3">Website content</h2><p className="text-gray-600 leading-relaxed">The Innodify name, design, copy, visuals, and website materials belong to Innodify or are used with permission.</p></section>
            <section><h2 className="text-2xl font-semibold mb-3">Third-party tools</h2><p className="text-gray-600 leading-relaxed">Some projects or website features may depend on third-party platforms, hosting providers, analytics tools, APIs, or app stores.</p></section>
            <section><h2 className="text-2xl font-semibold mb-3">Updates</h2><p className="text-gray-600 leading-relaxed">We may update this page as our website and service practices evolve.</p></section>
          </div>
          <div className="mt-12 rounded-2xl bg-gray-50 p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-3">Questions</h2>
            <p className="text-gray-600 leading-relaxed">Please reach out through the <Link href="/contact-us" className="text-[#00adef] hover:underline">contact page</Link>.</p>
          </div>
        </section>
      </main>
    </>
  );
}

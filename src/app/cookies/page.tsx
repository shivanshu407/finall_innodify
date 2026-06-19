import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how Innodify uses cookies and similar technologies for website analytics and performance.",
  alternates: { canonical: "/cookies" },
  openGraph: {
    title: "Cookie Policy | Innodify",
    description: "Cookie information for the Innodify website.",
    url: "https://innodify.in/cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://innodify.in" }, { name: "Cookie Policy", url: "https://innodify.in/cookies" }]} />
      <main className="bg-white text-[#0e1012] pt-32 pb-24">
        <section className="container mx-auto px-6 max-w-4xl">
          <p className="text-[#00adef] font-medium mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Cookie Policy</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">Last updated: June 2026.</p>
          <div className="space-y-8">
            <section><h2 className="text-2xl font-semibold mb-3">What cookies are</h2><p className="text-gray-600 leading-relaxed">Cookies are small files stored by your browser to support website features and measurement.</p></section>
            <section><h2 className="text-2xl font-semibold mb-3">How we use cookies</h2><p className="text-gray-600 leading-relaxed">Innodify may use cookies for site functionality, analytics, performance measurement, and improving website experience.</p></section>
            <section><h2 className="text-2xl font-semibold mb-3">Managing cookies</h2><p className="text-gray-600 leading-relaxed">You can manage cookies in your browser settings. Some site features may work differently when cookies are disabled.</p></section>
            <section><h2 className="text-2xl font-semibold mb-3">Updates</h2><p className="text-gray-600 leading-relaxed">We may update this page as our website and tools change.</p></section>
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

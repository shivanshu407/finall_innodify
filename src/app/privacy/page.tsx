import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Innodify's privacy policy, including how we collect, use, store, and protect personal information submitted through our website and project inquiry forms.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Innodify",
    description: "How Innodify handles website visitor, lead, and client information.",
    url: "https://innodify.in/privacy",
  },
};

const sections = [
  {
    title: "Information we collect",
    body: "We may collect information you provide through contact forms, project inquiry forms, newsletter subscriptions, and direct communication. This can include your name, email address, company name, phone number, project requirements, and related business information.",
  },
  {
    title: "How we use information",
    body: "We use the information to respond to inquiries, prepare project estimates, deliver services, improve our website, send requested updates, maintain security, and comply with applicable legal obligations.",
  },
  {
    title: "Analytics and cookies",
    body: "We use analytics and similar technologies to understand website usage, improve page experience, measure marketing performance, and diagnose technical issues. You can control cookies through your browser settings.",
  },
  {
    title: "Data sharing",
    body: "We do not sell personal information. We may share limited information with trusted service providers that help us operate the website, manage communications, host infrastructure, or deliver client work, subject to confidentiality and security obligations.",
  },
  {
    title: "Data retention and security",
    body: "We keep information only as long as needed for the purposes described in this policy, unless a longer retention period is required by law. We use reasonable technical and organisational safeguards to protect information.",
  },
  {
    title: "Your choices",
    body: "You may request access, correction, deletion, or restriction of your personal information by contacting us. We will respond in line with applicable law.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://innodify.in" }, { name: "Privacy Policy", url: "https://innodify.in/privacy" }]} />
      <main className="bg-white text-[#0e1012] pt-32 pb-24">
        <section className="container mx-auto px-6 max-w-4xl">
          <p className="text-[#00adef] font-medium mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Privacy Policy</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            This policy explains how Innodify collects, uses, and protects information submitted through our website and business communications. Last updated: June 2026.
          </p>
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-gray-50 p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-3">Contact us</h2>
            <p className="text-gray-600 leading-relaxed">
              For privacy questions or requests, please contact Innodify through the <Link href="/contact-us" className="text-[#00adef] hover:underline">contact page</Link>.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import dynamic from "next/dynamic";

// Lazy load below-fold components to reduce initial JS bundle
const DarkStats = dynamic(
  () => import("@/components/DarkStats").then((mod) => mod.DarkStats),
  { ssr: true }
);
const ServicesSection = dynamic(
  () =>
    import("@/components/ServicesSection").then((mod) => mod.ServicesSection),
  { ssr: true }
);
const DarkCaseStudiesSection = dynamic(
  () =>
    import("@/components/DarkCaseStudiesSection").then(
      (mod) => mod.DarkCaseStudiesSection
    ),
  { ssr: true }
);
const PlatformsSection = dynamic(
  () =>
    import("@/components/PlatformsSection").then((mod) => mod.PlatformsSection),
  { ssr: true }
);
const CTASection = dynamic(
  () => import("@/components/CTASection").then((mod) => mod.CTASection),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Innodify | AI, Web & Mobile Development Agency in Surat",
  description:
    "Innodify is a full-service digital agency in Surat, India specializing in AI solutions, CRM development, SaaS products, web & mobile apps, and eCommerce stores. Transform your business with cutting-edge technology.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <DarkStats />
      <ServicesSection />
      <DarkCaseStudiesSection />
      <PlatformsSection />
      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PlatformsSection } from "@/components/PlatformsSection";
import { CTASection } from "@/components/CTASection";
import { DarkStats } from "@/components/DarkStats";
import { DarkCaseStudiesSection } from "@/components/DarkCaseStudiesSection";

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

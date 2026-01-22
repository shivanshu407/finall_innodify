import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PlatformsSection } from "@/components/PlatformsSection";
import { CTASection } from "@/components/CTASection";
import { DarkStats } from "@/components/DarkStats";
import { DarkCaseStudiesSection } from "@/components/DarkCaseStudiesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <DarkStats />
      <DarkCaseStudiesSection />
      <PlatformsSection />
      <ServicesSection />
      <CTASection />
    </>
  );
}


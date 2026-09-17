import { getPageContent } from "@/lib/content";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/HeroSection";
import { SocialProofStats } from "@/components/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/SocialProofStats";
import { BrandLogosCarousel } from "@/components/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/BrandLogosCarousel";
import { InfluencerAgencyShowcase } from "@/components/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/InfluencerAgencyShowcase";
import { ServicesGrid } from "@/components/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/ServicesGrid";
import { FiveStepBlueprint } from "@/components/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/FiveStepBlueprint";
import { PlatformsSection } from "@/components/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/PlatformsSection";
import { SuccessStories } from "@/components/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/SuccessStories";
import { FoundersSection } from "@/components/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/FoundersSection";
import { CTABanner } from "@/components/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/CTABanner";

export default function CollabioHome() {
  const data = getPageContent("home");
  if (!data) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <HeroSection {...data.frontmatter.hero} />
      <SocialProofStats />
      <BrandLogosCarousel />
      <InfluencerAgencyShowcase />
      <ServicesGrid />
      <FiveStepBlueprint />
      <PlatformsSection />
      <SuccessStories />
      <FoundersSection />
      <CTABanner />
    </main>
  );
}

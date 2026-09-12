import { Navbar } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/Navbar";
import { HeroSection } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/HeroSection";
import { SocialProofStats } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/SocialProofStats";
import { BrandLogosCarousel } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/BrandLogosCarousel";
import { InfluencerAgencyShowcase } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/InfluencerAgencyShowcase";
import { ServicesGrid } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/ServicesGrid";
import { FiveStepBlueprint } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/FiveStepBlueprint";
import { PlatformsSection } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/PlatformsSection";
import { SuccessStories } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/SuccessStories";
import { FoundersSection } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/FoundersSection";
import { CTABanner } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/CTABanner";
import { Footer } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/Footer";
import { ContactModal } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/ContactModal";

export default function FameKeedaClone() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SocialProofStats />
      <BrandLogosCarousel />
      <InfluencerAgencyShowcase />
      <ServicesGrid />
      <FiveStepBlueprint />
      <PlatformsSection />
      <SuccessStories />
      <FoundersSection />
      <CTABanner />
      <Footer />
      <ContactModal />
    </main>
  );
}

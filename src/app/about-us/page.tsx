import { CTABanner } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/CTABanner";
import { BrandLogosCarousel } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/BrandLogosCarousel";
import { AboutHero } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/about/AboutHero";
import { OurPhilosophy } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/about/OurPhilosophy";
import { MeetOurTeam } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/about/MeetOurTeam";
import { AboutSuccessStories } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/about/AboutSuccessStories";
import { ShowReelGrid } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/about/ShowReelGrid";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AboutHero />
      <OurPhilosophy />
      <MeetOurTeam />
      <AboutSuccessStories />
      <ShowReelGrid />
      <div className="py-12 bg-white">
        <BrandLogosCarousel />
      </div>
      <CTABanner />
    </main>
  );
}

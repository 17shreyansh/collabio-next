import { Navbar } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/Navbar";
import { CTABanner } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/CTABanner";
import { Footer } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/Footer";
import { BrandLogosCarousel } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/BrandLogosCarousel";

import { AboutHero } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/about/AboutHero";
import { OurPhilosophy } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/about/OurPhilosophy";
import { MeetOurTeam } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/about/MeetOurTeam";
import { AboutSuccessStories } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/about/AboutSuccessStories";
import { ShowReelGrid } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/about/ShowReelGrid";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 
        We pass a dummy function or handle it via a custom event for the Contact Modal.
        The layout/page structure for Modals is typically at the root layout, but we'll 
        add a global event listener inside a ContactModal component if needed.
      */}
      <Navbar />

      <div className="pt-20">
        <AboutHero />
        <OurPhilosophy />
        <MeetOurTeam />
        <AboutSuccessStories />
        <ShowReelGrid />
        
        {/* Reusing the logo carousel from the homepage */}
        <div className="py-12 bg-white">
          <BrandLogosCarousel />
        </div>

        <CTABanner />
      </div>

      <Footer />
    </main>
  );
}

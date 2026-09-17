import { ServiceHero } from "../sections/ServiceHero";
import { Offerings } from "../sections/Offerings";
import { HowItWorks } from "../sections/HowItWorks";
import { PlatformHero } from "../sections/PlatformHero";
import { Benefits } from "../sections/Benefits";
import { Formats } from "../sections/Formats";
import { BrandLogosCarousel } from "../sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/BrandLogosCarousel";
import { SuccessStories } from "../sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/SuccessStories";
import { CTABanner } from "../sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/CTABanner";

// We keep BrandLogosCarousel, SuccessStories, CTABanner from original for now until they are refactored
// We assume data has specific structure to identify which template to use.
// Usually this is done via a frontmatter field like layout: "service" or by checking for specific keys.

export function PageRenderer({ data }: { data: any }) {
  // Identify layout based on data shape.
  if (data.offerings && data.howItWorks) {
    return (
      <div className="fk-page">
        <ServiceHero {...data.hero} />
        <Offerings {...data.offerings} />
        <HowItWorks {...data.howItWorks} />
        <div className="py-12 bg-white">
          <BrandLogosCarousel />
        </div>
        <SuccessStories />
        <CTABanner />
      </div>
    );
  }

  if (data.benefits && data.formats) {
    return (
      <div className="fk-page">
        <PlatformHero {...data.hero} />
        <Benefits {...data.benefits} />
        <Formats {...data.formats} />
        <div className="py-12 bg-white">
          <BrandLogosCarousel />
        </div>
        <CTABanner />
      </div>
    );
  }

  // Generic fallback if none matched
  return (
    <div className="fk-page py-24 px-6 text-center">
      <h1 className="text-4xl font-bold text-fk-dark mb-4">{data.title}</h1>
      <p className="text-gray-600">{data.description}</p>
    </div>
  );
}

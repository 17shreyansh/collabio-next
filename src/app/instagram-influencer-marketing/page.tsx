import { PlatformPageTemplate, PlatformPageProps } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/platforms/PlatformPageTemplate";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8";

const pageData: PlatformPageProps = {
  hero: {
    title: <>Instagram <br />Influencer Marketing</>,
    desc: "Leverage the most visual and engaging social platform to build brand love, drive conversions, and tap into Gen Z and Millennial audiences.",
    gradient: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    image: `${ASSET}/images/instagram-phone-mockup.webp`, // We can use a generic asset or fallback if this doesn't exist
  },
  benefits: {
    title: "Why Instagram?",
    desc: "Instagram remains the undisputed king of influencer marketing, offering unparalleled visual storytelling capabilities.",
    cards: [
      {
        title: "High Engagement Rates",
        desc: "Instagram's visual-first nature drives higher interaction rates compared to text-heavy platforms.",
      },
      {
        title: "Visual Storytelling",
        desc: "Perfect for lifestyle, beauty, fashion, and tech brands that need to showcase products in action.",
      },
      {
        title: "Direct Commerce",
        desc: "With features like shoppable posts and links in stories, Instagram seamlessly bridges the gap between discovery and purchase.",
      },
    ],
  },
  formats: {
    title: "Content Formats",
    desc: "We utilize all of Instagram's native formats to maximize your campaign's reach and impact.",
    items: [
      { name: "Instagram Reels", desc: "Short, highly engaging viral video content favored by the algorithm for maximum organic reach." },
      { name: "Instagram Stories", desc: "Authentic, behind-the-scenes 24-hour content perfect for flash sales, swipe-ups, and daily engagement." },
      { name: "Carousel Posts", desc: "In-depth, swipeable photo/video galleries ideal for tutorials, before/afters, and detailed product showcases." },
      { name: "Static Posts", desc: "High-quality, curated images that remain permanently on the creator's grid to build long-term brand association." },
    ],
  },
};

export default function InstagramMarketingPage() {
  return <PlatformPageTemplate {...pageData} />;
}

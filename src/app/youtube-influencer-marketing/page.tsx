import { PlatformPageTemplate, PlatformPageProps } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/platforms/PlatformPageTemplate";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8";

const pageData: PlatformPageProps = {
  hero: {
    title: <>YouTube <br />Influencer Marketing</>,
    desc: "Drive deep engagement, detailed product education, and long-term SEO value with the world's largest video platform.",
    gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
    image: `${ASSET}/images/youtube-laptop-mockup.webp`, 
  },
  benefits: {
    title: "Why YouTube?",
    desc: "YouTube offers unmatched depth of content, allowing creators to fully explain and demonstrate your product's value proposition.",
    cards: [
      {
        title: "Long-Form Attention",
        desc: "Audiences come to YouTube prepared to watch longer videos, resulting in higher watch times and deeper brand recall.",
      },
      {
        title: "Search Engine Value",
        desc: "As the world's second-largest search engine, YouTube videos provide long-tail SEO benefits that drive traffic for years.",
      },
      {
        title: "High Trust & Authority",
        desc: "YouTube creators often build incredibly strong parasocial relationships with their viewers, leading to high conversion trust.",
      },
    ],
  },
  formats: {
    title: "Content Formats",
    desc: "From quick mentions to full dedicated videos, we tailor the format to your budget and goals.",
    items: [
      { name: "Dedicated Videos", desc: "A full 5-15 minute video entirely focused on your brand, product review, or tutorial." },
      { name: "Integrated Shoutouts", desc: "A 60-90 second dedicated segment seamlessly integrated into the creator's regular content." },
      { name: "YouTube Shorts", desc: "Bite-sized, vertical videos designed to capture the fast-scrolling mobile audience and drive quick awareness." },
      { name: "Live Streams", desc: "Real-time integrations during gaming or Q&A streams for immediate, interactive audience engagement." },
    ],
  },
};

export default function YouTubeMarketingPage() {
  return <PlatformPageTemplate {...pageData} />;
}

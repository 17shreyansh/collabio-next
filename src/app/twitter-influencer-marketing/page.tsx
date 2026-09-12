import { PlatformPageTemplate, PlatformPageProps } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/platforms/PlatformPageTemplate";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8";

const pageData: PlatformPageProps = {
  hero: {
    title: <>Twitter (X) <br />Influencer Marketing</>,
    desc: "Spark conversations, trend globally, and engage with crypto, tech, and news-focused audiences in real-time.",
    gradient: "linear-gradient(135deg, #000000 0%, #333333 100%)",
    image: `${ASSET}/images/twitter-mockup.webp`, 
  },
  benefits: {
    title: "Why Twitter (X)?",
    desc: "Twitter is the pulse of the internet, making it perfect for rapid awareness, product launches, and community building.",
    cards: [
      {
        title: "Real-Time Engagement",
        desc: "The fastest platform for generating immediate reactions, feedback, and viral conversations around your brand.",
      },
      {
        title: "Niche Communities",
        desc: "Incredibly strong subcultures (FinTwit, TechTwit, CryptoTwit) allow for highly targeted, specialized campaigns.",
      },
      {
        title: "Trending Potential",
        desc: "Coordinated influencer blasts can push your brand into the trending topics, securing massive organic visibility.",
      },
    ],
  },
  formats: {
    title: "Content Formats",
    desc: "Text-first formats that encourage replies, retweets, and viral spread.",
    items: [
      { name: "Twitter Threads", desc: "A series of connected tweets that tell a detailed story, educate, or break down complex products." },
      { name: "Viral Single Tweets", desc: "Punchy, meme-able, or highly controversial single tweets designed for maximum retweets." },
      { name: "X Spaces (Audio)", desc: "Live audio conversations hosted by influencers to discuss your brand or industry in real-time." },
      { name: "Polls & Q&As", desc: "Interactive formats that force audience participation and gather valuable consumer insights." },
    ],
  },
};

export default function TwitterMarketingPage() {
  return <PlatformPageTemplate {...pageData} />;
}

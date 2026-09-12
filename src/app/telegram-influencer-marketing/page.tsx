import { PlatformPageTemplate, PlatformPageProps } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/platforms/PlatformPageTemplate";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8";

const pageData: PlatformPageProps = {
  hero: {
    title: <>Telegram <br />Influencer Marketing</>,
    desc: "Drive direct clicks, app installs, and high-conversion affiliate sales through highly engaged private broadcast channels.",
    gradient: "linear-gradient(135deg, #26A5E4 0%, #1583B7 100%)",
    image: `${ASSET}/images/telegram-mockup.webp`, 
  },
  benefits: {
    title: "Why Telegram?",
    desc: "Telegram offers a direct line to consumers with incredibly high open rates and immediate click-throughs.",
    cards: [
      {
        title: "Direct Notification",
        desc: "Unlike algorithmic feeds, Telegram messages trigger push notifications directly to the user's lock screen.",
      },
      {
        title: "High Conversion Rates",
        desc: "Perfect for affiliate marketing, flash sales, coupon drops, and app install campaigns.",
      },
      {
        title: "Targeted Communities",
        desc: "Channels are highly specific (e.g., deals, crypto, gaming, sports betting), ensuring your message hits the right audience.",
      },
    ],
  },
  formats: {
    title: "Content Formats",
    desc: "Direct, action-oriented formats optimized for immediate response.",
    items: [
      { name: "Broadcast Messages", desc: "Direct text messages with images/videos and clear call-to-action buttons sent to entire channels." },
      { name: "Pinned Posts", desc: "Messages pinned to the top of a channel for 24-48 hours, ensuring maximum visibility to all members." },
      { name: "Flash Deal Alerts", desc: "Urgency-driven posts offering exclusive discounts or limited-time offers to drive immediate sales." },
      { name: "Bot Integrations", desc: "Custom interactions where users engage with an influencer's bot to receive your promo codes or links." },
    ],
  },
};

export default function TelegramMarketingPage() {
  return <PlatformPageTemplate {...pageData} />;
}

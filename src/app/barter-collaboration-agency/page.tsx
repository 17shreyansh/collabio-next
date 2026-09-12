import { ServicePageTemplate, ServicePageProps } from "@/components/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/services/ServicePageTemplate";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8";

const pageData: ServicePageProps = {
  hero: {
    title: <>Barter <br /><span>Campaigns</span></>,
    desc: "Scale your influencer marketing efficiently through mutually beneficial product-for-post collaborations.",
    image: `${ASSET}/services/hero-barter.webp`,
  },
  offerings: {
    title: <>What We <span>Offer</span></>,
    desc: "Cost-effective campaigns that generate high-volume content and widespread brand awareness.",
    cards: [
      {
        title: "Mass Scale Execution",
        desc: "We manage barter campaigns involving hundreds of micro and nano influencers simultaneously to create a massive buzz.",
      },
      {
        title: "Logistics Management",
        desc: "From address collection to product tracking, we handle the entire logistical nightmare of sending products to creators.",
      },
      {
        title: "Content Quality Control",
        desc: "Even on barter deals, we ensure creators adhere to your brand guidelines and deliver quality content as promised.",
      },
    ],
  },
  howItWorks: {
    title: <>How It <span>Works</span></>,
    desc: "A streamlined system for managing high-volume influencer seeding.",
    steps: [
      {
        num: "01",
        title: "Campaign Setup",
        desc: "We define the target creator profile, content deliverables, and the product offering.",
      },
      {
        num: "02",
        title: "Creator Outreach",
        desc: "We tap into our extensive network to invite relevant creators who are genuinely interested in your product.",
      },
      {
        num: "03",
        title: "Fulfillment & Tracking",
        desc: "Products are dispatched to approved creators, and we track deliveries to ensure timely receipt.",
      },
      {
        num: "04",
        title: "Content Delivery",
        desc: "Creators post their content, and we compile all links, metrics, and UGC assets into a comprehensive report.",
      },
    ],
  },
};

export default function BarterCampaignsPage() {
  return <ServicePageTemplate {...pageData} />;
}

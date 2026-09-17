import { siteConfig } from "./site";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8";

export const navigationConfig = {
  header: {
    main: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
    ],
    services: {
      label: "Services",
      featured: [
        { name: "Product Reviews", href: "/product-reviews-agency", img: `${ASSET}/services/product-reviews.webp` },
        { name: "Brand Integration", href: "/brand-integration-agency", img: `${ASSET}/services/brand-integration.webp` },
      ],
      col2: [
        { name: "Content Marketing", href: "/content-marketing-agency" },
        { name: "Barter Campaigns", href: "/barter-collaboration-agency" },
        { name: "Celebrity Endorsements", href: "/celebrity-endorsement-agency" },
      ],
      col3: [
        { name: "Ad Films with Influencers", href: "/ad-film-production-agency" },
        { name: "User Generated Content", href: "/user-generated-content-agency" },
        { name: "Meme Marketing", href: "/meme-marketing-agency" },
      ]
    },
    platforms: {
      label: "Platforms",
      featured: [
        { name: "Instagram", href: "/instagram-influencer-marketing", icon: `${ASSET}/images/nav-instagram.svg`, gradient: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" },
        { name: "Youtube", href: "/youtube-influencer-marketing", icon: `${ASSET}/images/nav-youtube.svg`, gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)" },
      ],
      col2: [
        { name: "Linkedin", href: "/linkedin-influencer-marketing", icon: `${ASSET}/images/nav-linkedin.svg`, color: "#0A66C2" },
        { name: "Twitter", href: "/twitter-influencer-marketing", icon: `${ASSET}/images/nav-x.svg`, color: "#000000" },
        { name: "Telegram", href: "/telegram-influencer-marketing", icon: `${ASSET}/images/nav-telegram.svg`, color: "#26A5E4" },
      ]
    }
  },
  footer: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blogs", href: "https://www.famekeeda.com/blogs/" },
        { label: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Content Marketing", href: "/content-marketing-agency" },
        { label: "Celebrity Endorsements", href: "/celebrity-endorsement-agency" },
        { label: "Ad Films", href: "/ad-film-production-agency" },
        { label: "Barter Campaigns", href: "/barter-collaboration-agency" },
        { label: "Product Reviews", href: "/product-reviews-agency" },
      ]
    }
  ]
};

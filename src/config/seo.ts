import { siteConfig } from "./site";

export const seoConfig = {
  defaultTitle: "Best Influencer Marketing Agency In India | Fame Keeda Networks",
  titleTemplate: "%s | Fame Keeda Networks",
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Best Influencer Marketing Agency In India | Fame Keeda Networks",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    handle: "@famekeeda",
    site: "@famekeeda",
    cardType: "summary_large_image",
  },
};

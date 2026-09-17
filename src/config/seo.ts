import { siteConfig } from "./site";

export const seoConfig = {
  defaultTitle: "Influencer & AI Marketing Agency | Collabio",
  titleTemplate: "%s | Collabio",
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Influencer & AI Marketing Agency | Collabio",
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
    handle: "@collabio",
    site: "@collabio",
    cardType: "summary_large_image",
  },
};

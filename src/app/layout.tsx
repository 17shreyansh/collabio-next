import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Best Influencer Marketing Agency In India | Fame Keeda Networks",
  description:
    "Discover Fame Keeda Networks, India's top influencer marketing agency, connecting brands with powerful personalities to drive engagement and growth.",
  openGraph: {
    title: "Best Influencer Marketing Agency In India | Fame Keeda Networks",
    description:
      "Boost your brand with Fame Keeda, a leading influencer marketing agency in India. Connect with top influencers to drive engagement, reach, and conversions.",
    images: ["/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/seo/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Influencer Marketing Agency In India | Fame Keeda Networks",
    description:
      "Boost your brand with Fame Keeda, a leading influencer marketing agency in India. Connect with top influencers to drive engagement, reach, and conversions.",
    images: ["/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/seo/og-image.png"],
  },
  icons: {
    icon: "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/seo/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-poppins)]">
        {children}
      </body>
    </html>
  );
}

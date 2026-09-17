import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { seoConfig } from "@/config/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/ContactModal";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.openGraph.url),
  title: seoConfig.defaultTitle,
  description: seoConfig.description,
  openGraph: seoConfig.openGraph,
  twitter: {
    card: seoConfig.twitter.cardType as any,
    site: seoConfig.twitter.site,
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    images: seoConfig.openGraph.images.map(img => img.url),
  },
  icons: {
    icon: "/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/seo/favicon.webp",
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
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        
        {/* We keep ContactModal here globally since it's triggered via CustomEvent */}
        <ContactModal />
      </body>
    </html>
  );
}

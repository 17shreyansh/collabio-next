import Image from "next/image";
import { Navbar } from "../Navbar";
import { CTABanner } from "../CTABanner";
import { Footer } from "../Footer";
import { BrandLogosCarousel } from "../BrandLogosCarousel";

export interface BenefitCard {
  title: string;
  desc: string;
}

export interface ContentFormat {
  name: string;
  desc: string;
}

export interface PlatformPageProps {
  hero: {
    title: React.ReactNode;
    desc: string;
    gradient: string;
    image: string;
  };
  benefits: {
    title: React.ReactNode;
    desc: string;
    cards: BenefitCard[];
  };
  formats: {
    title: React.ReactNode;
    desc: string;
    items: ContentFormat[];
  };
}

export function PlatformPageTemplate({ hero, benefits, formats }: PlatformPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ─── Platform Hero ─── */}
      <section className="fk-platform-hero" style={{ background: hero.gradient }}>
        <div className="fk-platform-hero-container">
          <div className="fk-platform-hero-content">
            <h1 className="fk-platform-hero-title">{hero.title}</h1>
            <p className="fk-platform-hero-desc">{hero.desc}</p>
            <button className="fk-platform-hero-cta">Start Campaign</button>
          </div>
          <div className="fk-platform-hero-image">
            <Image
              src={hero.image}
              alt="Platform Demo"
              width={400}
              height={500}
              priority
              style={{ width: "100%", maxWidth: "400px", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* ─── Why This Platform ─── */}
      <section className="fk-platform-benefits">
        <div className="fk-platform-header">
          <h2 className="fk-section-title">{benefits.title}</h2>
          <p className="fk-section-desc">{benefits.desc}</p>
        </div>
        <div className="fk-platform-benefits-grid">
          {benefits.cards.map((card, idx) => (
            <div key={idx} className="fk-benefit-card">
              <h3 className="fk-benefit-title">{card.title}</h3>
              <p className="fk-benefit-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Content Formats ─── */}
      <section className="fk-platform-formats">
        <div className="fk-platform-header">
          <h2 className="fk-section-title">{formats.title}</h2>
          <p className="fk-section-desc">{formats.desc}</p>
        </div>
        <div className="fk-platform-formats-grid">
          {formats.items.map((item, idx) => (
            <div key={idx} className="fk-format-card">
              <div className="fk-format-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#24529b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9L15 12L10 15V9Z" stroke="#24529b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="fk-format-title">{item.name}</h3>
              <p className="fk-format-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Reused Sections ─── */}
      <div className="py-12 bg-white">
        <BrandLogosCarousel />
      </div>
      <CTABanner />
      <Footer />

      <style>{`
        /* Hero */
        .fk-platform-hero {
          padding: 140px 24px 80px;
          color: white;
          overflow: hidden;
        }
        .fk-platform-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 60px;
        }
        .fk-platform-hero-content {
          flex: 1;
        }
        .fk-platform-hero-title {
          font-size: 56px;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
        }
        .fk-platform-hero-desc {
          font-size: 18px;
          opacity: 0.9;
          line-height: 1.6;
          margin-bottom: 32px;
        }
        .fk-platform-hero-cta {
          background: #fff;
          color: #1A1A1A;
          border: none;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .fk-platform-hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .fk-platform-hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        /* Section Commons */
        .fk-platform-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .fk-section-title {
          font-size: 36px;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 16px;
        }
        .fk-section-desc {
          font-size: 16px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Benefits */
        .fk-platform-benefits {
          padding: 80px 24px;
          background: #fff;
        }
        .fk-platform-benefits-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .fk-benefit-card {
          background: #fcfcfc;
          border-radius: 20px;
          padding: 40px 32px;
          border: 1px solid #eee;
          text-align: center;
        }
        .fk-benefit-title {
          font-size: 22px;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 16px;
        }
        .fk-benefit-desc {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
        }

        /* Formats */
        .fk-platform-formats {
          padding: 80px 24px;
          background: #f9f9f9;
        }
        .fk-platform-formats-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }
        .fk-format-card {
          background: #fff;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #eee;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .fk-format-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: #fef0f1;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fk-format-title {
          font-size: 18px;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 8px;
        }
        .fk-format-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .fk-platform-hero-container {
            flex-direction: column;
            text-align: center;
          }
          .fk-platform-hero-title {
            font-size: 40px;
          }
        }
      `}</style>
    </main>
  );
}

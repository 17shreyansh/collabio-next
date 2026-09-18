import Image from "next/image";
import { Navbar } from "../Navbar";
import { CTABanner } from "../CTABanner";
import { Footer } from "../Footer";
import { BrandLogosCarousel } from "../BrandLogosCarousel";
import { SuccessStories } from "../SuccessStories";

export interface FeatureCard {
  title: string;
  desc: string;
}

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export interface ServicePageProps {
  hero: {
    title: React.ReactNode;
    desc: string;
    image: string;
  };
  offerings: {
    title: React.ReactNode;
    desc: string;
    cards: FeatureCard[];
  };
  howItWorks: {
    title: React.ReactNode;
    desc: string;
    steps: Step[];
  };
}

export function ServicePageTemplate({ hero, offerings, howItWorks }: ServicePageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ─── Hero Section ─── */}
      <section className="fk-service-hero">
        <div className="fk-service-hero-container">
          <div className="fk-service-hero-content">
            <h1 className="fk-service-hero-title">{hero.title}</h1>
            <p className="fk-service-hero-desc">{hero.desc}</p>
            <button className="fk-service-hero-cta">Get Started</button>
          </div>
          <div className="fk-service-hero-image">
            <Image
              src={hero.image}
              alt="Service Hero"
              width={600}
              height={500}
              priority
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* ─── What We Offer ─── */}
      <section className="fk-service-offerings">
        <div className="fk-service-offerings-header">
          <h2 className="fk-section-title">{offerings.title}</h2>
          <p className="fk-section-desc">{offerings.desc}</p>
        </div>
        <div className="fk-service-offerings-grid">
          {offerings.cards.map((card, idx) => (
            <div key={idx} className="fk-offering-card">
              <div className="fk-offering-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#24529b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="#24529b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="#24529b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="fk-offering-title">{card.title}</h3>
              <p className="fk-offering-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="fk-service-how">
        <div className="fk-service-how-header">
          <h2 className="fk-section-title">{howItWorks.title}</h2>
          <p className="fk-section-desc">{howItWorks.desc}</p>
        </div>
        <div className="fk-service-how-grid">
          {howItWorks.steps.map((step, idx) => (
            <div key={idx} className="fk-step-card">
              <div className="fk-step-num">{step.num}</div>
              <h3 className="fk-step-title">{step.title}</h3>
              <p className="fk-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Reused Sections ─── */}
      <div className="py-12 bg-white">
        <BrandLogosCarousel />
      </div>
      <SuccessStories />
      <CTABanner />
      <Footer />

      <style>{`
        /* Hero */
        .fk-service-hero {
          background-color: #0b0c10;
          padding: 140px 24px 80px;
          color: white;
        }
        .fk-service-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 40px;
        }
        .fk-service-hero-content {
          flex: 1;
        }
        .fk-service-hero-title {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .fk-service-hero-title span {
          background: var(--fk-gradient, linear-gradient(90deg, #24529b, #159bd3));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .fk-service-hero-desc {
          font-size: 18px;
          color: #a0a0a0;
          line-height: 1.6;
          margin-bottom: 32px;
        }
        .fk-service-hero-cta {
          background: var(--fk-gradient, linear-gradient(90deg, #24529b, #159bd3));
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .fk-service-hero-cta:hover {
          transform: translateY(-2px);
        }
        .fk-service-hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        /* Section Commons */
        .fk-section-title {
          font-size: 36px;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 16px;
        }
        .fk-section-title span {
          background: var(--fk-gradient, linear-gradient(90deg, #24529b, #159bd3));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .fk-section-desc {
          font-size: 16px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Offerings */
        .fk-service-offerings {
          padding: 80px 24px;
          background: #fff;
          max-width: 1200px;
          margin: 0 auto;
        }
        .fk-service-offerings-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .fk-service-offerings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .fk-offering-card {
          background: #f9f9f9;
          border-radius: 20px;
          padding: 32px 24px;
          border: 1px solid #eee;
          transition: box-shadow 0.3s;
        }
        .fk-offering-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .fk-offering-icon {
          width: 48px;
          height: 48px;
          background: #fff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .fk-offering-title {
          font-size: 20px;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 12px;
        }
        .fk-offering-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }

        /* How It Works */
        .fk-service-how {
          padding: 80px 24px;
          background: #fcfcfc;
        }
        .fk-service-how-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .fk-service-how-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }
        .fk-step-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px 24px;
          border: 1px solid #eee;
          position: relative;
        }
        .fk-step-num {
          font-size: 48px;
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1px rgba(190, 22, 34, 0.3);
          margin-bottom: 16px;
        }
        .fk-step-title {
          font-size: 20px;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 12px;
        }
        .fk-step-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .fk-service-hero-container {
            flex-direction: column;
            text-align: center;
          }
          .fk-service-hero-title {
            font-size: 36px;
          }
        }
      `}</style>
    </main>
  );
}

import Image from "next/image";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/about";

const values = [
  {
    title: "Ownership & Epochal Thinking:",
    desc: "We act like stewards of the future, every decision is made with a centuries-forward mindset, ensuring lasting impact.",
  },
  {
    title: "Authenticity & Disruption:",
    desc: "We champion truth and bold creativity, crafting campaigns that break barriers and thrive in next-generation digital realms.",
  },
  {
    title: "Action & Quantum Results:",
    desc: "We move at hyper-speed, measuring every step with cutting-edge analytics to drive unstoppable growth and clarity.",
  },
  {
    title: "Empathy & Interconnectedness:",
    desc: "We lead with understanding, bridging diverse communities across physical and virtual spaces to spark genuine human bonds.",
  },
];

export function OurPhilosophy() {
  return (
    <section className="fk-philosophy-section">
      <div className="fk-philosophy-header">
        <h2 className="fk-section-title">
          Our <span className="fk-section-title-accent">Philosophy</span>
        </h2>
      </div>

      <div className="fk-philosophy-grid">
        {/* Left Column: Mission + Vision */}
        <div className="fk-philosophy-left">
          <div className="fk-philosophy-card">
            <div className="fk-philosophy-card-inner">
              <div className="fk-philosophy-icon-row">
                <Image src={`${ASSET}/target.gif`} alt="Mission" width={48} height={48} unoptimized />
                <span className="fk-philosophy-label">Mission</span>
              </div>
              <p className="fk-philosophy-text">
                To redefine influencer marketing by uniting brands and creators across real and virtual worlds, forging authentic connections that fuel tangible, global impact.
              </p>
            </div>
          </div>
          <div className="fk-philosophy-card">
            <div className="fk-philosophy-card-inner">
              <div className="fk-philosophy-icon-row">
                <Image src={`${ASSET}/view.gif`} alt="Vision" width={48} height={48} unoptimized />
                <span className="fk-philosophy-label">Vision</span>
              </div>
              <p className="fk-philosophy-text">
                To lead a new era of interconnected influence, where empathy, AI-driven insights, and boundary-pushing ideas spark trust, prosperity, and enduring innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Values */}
        <div className="fk-philosophy-right">
          <div className="fk-philosophy-card fk-philosophy-values-card">
            <div className="fk-philosophy-card-inner">
              <div className="fk-philosophy-icon-row">
                <Image src={`${ASSET}/value.gif`} alt="Values" width={48} height={48} unoptimized />
                <span className="fk-philosophy-label">Values</span>
              </div>
              <ul className="fk-philosophy-values-list">
                {values.map((v) => (
                  <li key={v.title}>
                    <strong>{v.title}</strong><br />
                    {v.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .fk-philosophy-section {
          padding: 80px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .fk-philosophy-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .fk-section-title {
          font-size: 36px;
          font-weight: 700;
          color: var(--fk-dark, #1A1A1A);
        }
        .fk-section-title-accent {
          background: var(--fk-gradient, linear-gradient(90deg, #BE1622, #E84E1B));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .fk-philosophy-grid {
          display: flex;
          gap: 20px;
          align-items: stretch;
        }
        .fk-philosophy-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .fk-philosophy-right {
          flex: 1;
          display: flex;
        }
        .fk-philosophy-card {
          background: #f7f7f7;
          border-radius: 20px;
          border: 1px solid #eee;
          flex: 1;
        }
        .fk-philosophy-card-inner {
          padding: 28px;
        }
        .fk-philosophy-icon-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .fk-philosophy-label {
          font-size: 20px;
          font-weight: 700;
          color: var(--fk-dark, #1A1A1A);
        }
        .fk-philosophy-text {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
        }
        .fk-philosophy-values-card {
          display: flex;
          flex-direction: column;
        }
        .fk-philosophy-values-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .fk-philosophy-values-list li {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }
        .fk-philosophy-values-list li strong {
          color: var(--fk-dark, #1A1A1A);
        }

        @media (max-width: 768px) {
          .fk-philosophy-grid {
            flex-direction: column;
          }
          .fk-philosophy-section {
            padding: 48px 16px;
          }
        }
      `}</style>
    </section>
  );
}

import Image from "next/image";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/about";

const storyCards = [
  {
    num: "01",
    title: "The Genesis",
    image: `${ASSET}/genesis.webp`,
    desc: "Amidst a global pause, our founders' drive to forge connections and create a buzz in the digital world only intensified. They reached out, uniting a constellation of influencers, each a star in their own right, to form a galaxy of potential.\n\nThe 'Keeda' of ambition and creativity was always present in our founders, Krisneil and Rahat. In the unprecedented times of 2020, Fame Keeda was born.",
  },
  {
    num: "02",
    title: "The Visionaries",
    image: `${ASSET}/visionaries.webp`,
    desc: "Picture a place where your wildest ideas can take off. That's what Kris and Rahat envisioned, and we want you to be a part of it. Fame Keeda is more than a mere brand; it's a crucible for innovation, a nexus where influencers' orbits intersect with ours. Together, we traverse the digital cosmos, our intuition our compass.",
  },
  {
    num: "03",
    title: "The Evolution",
    image: `${ASSET}/evolution.webp`,
    desc: "Rebranding for us was about gaining clarity and setting a new direction. As Fame Keeda evolved, so did our purpose.\n\nWe wanted to clear any haze around our services. We are the architects of influence, the strategists behind the screens, the creative force driving the influencer universe. Our rebranding was our proclamation: MARKETING IS WHAT WE DO!",
  },
  {
    num: "04",
    title: "The Future",
    image: `${ASSET}/future.webp`,
    desc: "Our logo is not just a symbol; it's a beacon heralding the future of Fame Keeda and you're integral to this odyssey.\n\nIt's bold, it's pioneering, it's the lens through which we perceive our influencers, as a united community, a thriving ecosystem. We're not just constructing a brand; we're leading an industry, sculpting the creator economy, our logo a silent herald of revolution.",
  },
];

export function AboutHero() {
  return (
    <section>
      {/* Team Photo Banner */}
      <div className="fk-about-team-banner">
        <Image
          src={`${ASSET}/whole-team-img.webp`}
          alt="Fame Keeda Complete Team"
          width={1400}
          height={500}
          priority
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>

      {/* About + Story Cards */}
      <div className="fk-about-story-section">
        {/* Left Column: Title + Mascot */}
        <div className="fk-about-left-col">
          <h1 className="fk-about-title">
            About <br />
            <span className="fk-about-title-accent">Fame Keeda</span>
          </h1>
          <div className="fk-about-mascot">
            <Image
              src={`${ASSET}/iconic-character.webp`}
              alt="Fame Keeda Iconic Character"
              width={280}
              height={380}
              style={{ width: "100%", maxWidth: 280, height: "auto" }}
            />
          </div>
        </div>

        {/* Vertical Line */}
        <div className="fk-about-vl" />

        {/* Right Column: Story Cards */}
        <div className="fk-about-right-col">
          {storyCards.map((card) => (
            <div key={card.num} className="fk-about-info-card">
              <div className="fk-about-info-img">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={250}
                  style={{ width: "100%", height: "auto", borderRadius: 16, objectFit: "cover" }}
                />
              </div>
              <div className="fk-about-info-content">
                <div className="fk-about-info-hr" />
                <h3 className="fk-about-info-title">{card.num}. {card.title}</h3>
                <p className="fk-about-info-desc">
                  {card.desc.split("\n\n").map((para, i) => (
                    <span key={i}>
                      {i > 0 && <><br /><br /></>}
                      {para}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .fk-about-team-banner {
          width: 100%;
          overflow: hidden;
          border-radius: 0 0 24px 24px;
        }
        .fk-about-story-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px 60px;
          display: flex;
          gap: 48px;
          position: relative;
        }
        .fk-about-left-col {
          flex: 0 0 300px;
          position: sticky;
          top: 100px;
          align-self: flex-start;
        }
        .fk-about-title {
          font-size: 48px;
          font-weight: 700;
          color: var(--fk-dark, #1A1A1A);
          line-height: 1.1;
          margin-bottom: 40px;
        }
        .fk-about-title-accent {
          background: var(--fk-gradient, linear-gradient(90deg, #BE1622, #E84E1B));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .fk-about-mascot {
          margin-top: 24px;
        }
        .fk-about-vl {
          width: 1px;
          background: #D9DBE9;
          flex-shrink: 0;
        }
        .fk-about-right-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .fk-about-info-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .fk-about-info-img {
          border-radius: 16px;
          overflow: hidden;
        }
        .fk-about-info-content {
          padding: 0 4px;
        }
        .fk-about-info-hr {
          width: 40px;
          height: 3px;
          background: var(--fk-gradient, linear-gradient(90deg, #BE1622, #E84E1B));
          border-radius: 2px;
          margin-bottom: 16px;
        }
        .fk-about-info-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--fk-dark, #1A1A1A);
          margin-bottom: 12px;
        }
        .fk-about-info-desc {
          font-size: 15px;
          color: #777;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .fk-about-story-section {
            flex-direction: column;
            padding: 40px 16px 40px;
            gap: 32px;
          }
          .fk-about-left-col {
            position: static;
            flex: none;
            text-align: center;
          }
          .fk-about-title {
            font-size: 36px;
          }
          .fk-about-vl {
            display: none;
          }
          .fk-about-mascot {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

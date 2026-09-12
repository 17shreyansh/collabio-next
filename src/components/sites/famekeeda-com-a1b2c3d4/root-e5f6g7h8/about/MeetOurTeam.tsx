import Image from "next/image";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/about";

const teamMembers = [
  { name: "Reena Rose", role: "The One Who Handles Money,\nMandates, and Memes", image: `${ASSET}/reena_rose.webp` },
  { name: "Aashish Shetty", role: "The One Who Hires, Fires,\nand Inspires", image: `${ASSET}/aashish.webp` },
  { name: "Rumana Khan", role: "The One Who Turns Followers\nInto Fans", image: `${ASSET}/rumana.webp` },
  { name: "Shraddha Gadkari", role: "The One Who Gets It Done\nBefore It's Even Asked", image: `${ASSET}/shraddha.webp` },
  { name: "Robin Ransom", role: "The One Who Plots, Plans,\nand Makes Profits", image: `${ASSET}/robin.webp` },
  { name: "Harshal Gaikwad", role: "The One Who Finds Stars\nBefore They Shine", image: `${ASSET}/harshal.webp` },
];

export function MeetOurTeam() {
  return (
    <section className="fk-team-section">
      <div className="fk-team-header">
        <h2 className="fk-section-title">
          Meet <span className="fk-section-title-accent">Our Team</span>
        </h2>
      </div>

      <div className="fk-team-grid">
        {/* Founders Card - spans 2 columns */}
        <div className="fk-team-founders">
          <Image
            src={`${ASSET}/founders-img.webp`}
            alt="Fame Keeda Founders"
            width={800}
            height={500}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 20 }}
          />
        </div>

        {/* Individual Team Members */}
        {teamMembers.map((member) => (
          <div key={member.name} className="fk-team-card">
            <div className="fk-team-card-img">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={350}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="fk-team-card-info">
              <p className="fk-team-name">{member.name}</p>
              <p className="fk-team-role">
                {member.role.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .fk-team-section {
          padding: 80px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .fk-team-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .fk-team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .fk-team-founders {
          grid-column: span 2;
          border-radius: 20px;
          overflow: hidden;
          min-height: 350px;
        }
        .fk-team-card {
          border-radius: 20px;
          overflow: hidden;
          background: #f7f7f7;
          border: 1px solid #eee;
        }
        .fk-team-card-img {
          height: 260px;
          overflow: hidden;
        }
        .fk-team-card-info {
          padding: 16px 20px 20px;
        }
        .fk-team-name {
          font-size: 16px;
          font-weight: 700;
          color: var(--fk-dark, #1A1A1A);
          margin-bottom: 4px;
        }
        .fk-team-role {
          font-size: 13px;
          color: #777;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .fk-team-grid {
            grid-template-columns: 1fr 1fr;
          }
          .fk-team-founders {
            grid-column: span 2;
          }
          .fk-team-section {
            padding: 48px 16px;
          }
        }
        @media (max-width: 480px) {
          .fk-team-grid {
            grid-template-columns: 1fr;
          }
          .fk-team-founders {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}

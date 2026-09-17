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
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-fk-dark">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fk-red to-fk-orange">Philosophy</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-5 items-stretch">
        {/* Left Column: Mission + Vision */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="bg-[#f7f7f7] rounded-[20px] border border-[#eee] flex-1 flex flex-col p-7 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Image src={`${ASSET}/target.gif`} alt="Mission" width={48} height={48} unoptimized />
              <span className="text-[20px] font-bold text-fk-dark">Mission</span>
            </div>
            <p className="text-[14px] text-[#666] leading-[1.7]">
              To redefine influencer marketing by uniting brands and creators across real and virtual worlds, forging authentic connections that fuel tangible, global impact.
            </p>
          </div>
          <div className="bg-[#f7f7f7] rounded-[20px] border border-[#eee] flex-1 flex flex-col p-7 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Image src={`${ASSET}/view.gif`} alt="Vision" width={48} height={48} unoptimized />
              <span className="text-[20px] font-bold text-fk-dark">Vision</span>
            </div>
            <p className="text-[14px] text-[#666] leading-[1.7]">
              To lead a new era of interconnected influence, where empathy, AI-driven insights, and boundary-pushing ideas spark trust, prosperity, and enduring innovation.
            </p>
          </div>
        </div>

        {/* Right Column: Values */}
        <div className="flex-1 flex">
          <div className="bg-[#f7f7f7] rounded-[20px] border border-[#eee] flex-1 flex flex-col p-7 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Image src={`${ASSET}/value.gif`} alt="Values" width={48} height={48} unoptimized />
              <span className="text-[20px] font-bold text-fk-dark">Values</span>
            </div>
            <ul className="flex flex-col gap-4">
              {values.map((v) => (
                <li key={v.title} className="text-[14px] text-[#666] leading-[1.6]">
                  <strong className="text-fk-dark">{v.title}</strong><br />
                  {v.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

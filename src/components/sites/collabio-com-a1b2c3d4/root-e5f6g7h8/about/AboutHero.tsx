import Image from "next/image";

const ASSET = "/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/about";

const storyCards = [
  {
    num: "01",
    title: "The Genesis",
    image: `${ASSET}/genesis.webp`,
    desc: "Amidst a global pause, our founders' drive to forge connections and create a buzz in the digital world only intensified. They reached out, uniting a constellation of influencers, each a star in their own right, to form a galaxy of potential.\n\nThe 'Keeda' of ambition and creativity was always present in our founders, Krisneil and Rahat. In the unprecedented times of 2020, Collabio was born.",
  },
  {
    num: "02",
    title: "The Visionaries",
    image: `${ASSET}/visionaries.webp`,
    desc: "Picture a place where your wildest ideas can take off. That's what Kris and Rahat envisioned, and we want you to be a part of it. Collabio is more than a mere brand; it's a crucible for innovation, a nexus where influencers' orbits intersect with ours. Together, we traverse the digital cosmos, our intuition our compass.",
  },
  {
    num: "03",
    title: "The Evolution",
    image: `${ASSET}/evolution.webp`,
    desc: "Rebranding for us was about gaining clarity and setting a new direction. As Collabio evolved, so did our purpose.\n\nWe wanted to clear any haze around our services. We are the architects of influence, the strategists behind the screens, the creative force driving the influencer universe. Our rebranding was our proclamation: MARKETING IS WHAT WE DO!",
  },
  {
    num: "04",
    title: "The Future",
    image: `${ASSET}/future.webp`,
    desc: "Our logo is not just a symbol; it's a beacon heralding the future of Collabio and you're integral to this odyssey.\n\nIt's bold, it's pioneering, it's the lens through which we perceive our influencers, as a united community, a thriving ecosystem. We're not just constructing a brand; we're leading an industry, sculpting the creator economy, our logo a silent herald of revolution.",
  },
];

export function AboutHero() {
  return (
    <section>
      {/* Team Photo Banner */}
      <div className="w-full overflow-hidden rounded-b-3xl shadow-sm">
        <Image
          src={`${ASSET}/whole-team-img.webp`}
          alt="Collabio Complete Team"
          width={1400}
          height={500}
          priority
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>

      {/* About + Story Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
        
        {/* Left Column: Title + Mascot */}
        <div className="lg:w-[300px] lg:sticky lg:top-28 self-start text-center lg:text-left shrink-0">
          <h1 className="text-4xl md:text-5xl font-bold text-fk-dark leading-tight mb-8 lg:mb-10">
            About <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fk-red to-fk-orange">Collabio</span>
          </h1>
          <div className="mt-6 flex justify-center lg:justify-start">
            <Image
              src={`${ASSET}/iconic-character.webp`}
              alt="Collabio Iconic Character"
              width={280}
              height={380}
              style={{ width: "100%", maxWidth: 280, height: "auto" }}
              className="drop-shadow-lg"
            />
          </div>
        </div>

        {/* Vertical Line */}
        <div className="hidden lg:block w-px bg-gray-200 shrink-0" />

        {/* Right Column: Story Cards */}
        <div className="flex-1 flex flex-col gap-16">
          {storyCards.map((card) => (
            <div key={card.num} className="flex flex-col gap-6 group">
              <div className="rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={800}
                  height={450}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-2">
                <div className="w-10 h-1 bg-gradient-to-r from-fk-red to-fk-orange rounded-full mb-4" />
                <h3 className="text-[22px] font-bold text-fk-dark mb-3">
                  {card.num}. {card.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
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
    </section>
  );
}

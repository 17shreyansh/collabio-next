import Image from "next/image";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8";

const platforms = [
  {
    name: "Instagram",
    title: "Influencer Marketing\non Instagram",
    logo: `${ASSET}/platforms/instagram-icon.svg`,
    screen: `${ASSET}/platforms/instagram-screen.webp`,
    href: "/instagram-influencer-marketing",
    number: "01",
    bgClass: "bg-gradient-to-b from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  },
  {
    name: "X (Twitter)",
    title: "Influencer Marketing\non X (Twitter)",
    logo: `${ASSET}/platforms/x-icon.svg`,
    screen: `${ASSET}/platforms/x-screen.webp`,
    href: "/twitter-influencer-marketing",
    number: "02",
    bgClass: "bg-black",
  },
  {
    name: "LinkedIn",
    title: "Influencer Marketing\non LinkedIn",
    logo: `${ASSET}/platforms/linkedin-icon.svg`,
    screen: `${ASSET}/platforms/linkedin-screen.webp`,
    href: "/linkedin-influencer-marketing",
    number: "03",
    bgClass: "bg-[#0A66C2]",
  },
  {
    name: "YouTube",
    title: "Influencer Marketing\non YouTube",
    logo: `${ASSET}/platforms/youtube-icon.svg`,
    screen: `${ASSET}/platforms/youtube-screen.webp`,
    href: "/youtube-influencer-marketing",
    number: "04",
    bgClass: "bg-[#FF0000]",
  },
  {
    name: "Telegram",
    title: "Influencer Marketing\non Telegram",
    logo: `${ASSET}/platforms/telegram-icon.svg`,
    screen: `${ASSET}/platforms/telegram-screen.webp`,
    href: "/telegram-influencer-marketing",
    number: "05",
    bgClass: "bg-[#26A5E4]",
  },
];

export function PlatformsSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-fk-dark mb-4">
            Where Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fk-red to-fk-orange">Influencers Make Waves</span>
          </h2>
        </div>

        {/* 
          Original site uses a complex masonary/staggered layout. 
          We'll implement a clean flex wrap grid that achieves the same tall card aesthetic.
        */}
        <div className="flex flex-wrap justify-center gap-6">
          {platforms.map((platform, idx) => (
            <div 
              key={idx}
              className={`${platform.bgClass} relative rounded-[2.5rem] overflow-hidden p-8 flex flex-col items-center text-white w-full max-w-[340px] h-[580px] shadow-xl transition-transform hover:-translate-y-2 group`}
            >
              <h3 className="text-2xl font-bold text-center mb-8 leading-tight h-16 whitespace-pre-line">
                {platform.title}
              </h3>

              <div className="bg-white rounded-full p-4 mb-8 shadow-lg w-20 h-20 flex items-center justify-center">
                <Image src={platform.logo} alt={`${platform.name} logo`} width={40} height={40} />
              </div>

              <div className="relative w-[220px] h-[400px] mt-auto translate-y-12 group-hover:translate-y-8 transition-transform duration-500">
                <Image 
                  src={platform.screen} 
                  alt={`${platform.name} interface`}
                  fill
                  className="object-contain object-top drop-shadow-2xl"
                />
              </div>

              <span className="absolute top-8 right-8 text-5xl font-black text-white/20 select-none">
                {platform.number}
              </span>

              <a 
                href={platform.href}
                className="absolute bottom-8 bg-white text-fk-dark px-6 py-3 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 shadow-xl hover:bg-gray-100 transition-colors z-10"
              >
                KNOW MORE
                <span>→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";

const ASSET = "/sites/collabio-com-a1b2c3d4/root-e5f6g7h8";

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
    <section className="py-32 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-gray-100 to-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fk-dark mb-6 tracking-tight">
            Where Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fk-red to-fk-orange">Influencers Make Waves</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We dominate the platforms where attention lives. From quick scrolls to deep dives, we know how to hack the algorithm.
          </p>
        </div>

        {/* Staggered Grid Layout */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 pb-16">
          {platforms.map((platform, idx) => (
            <div 
              key={idx}
              className={`${platform.bgClass} relative rounded-[2.5rem] overflow-hidden p-8 flex flex-col items-center text-white w-full max-w-[340px] h-[580px] shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl group ${
                idx % 2 === 1 ? 'lg:translate-y-16' : ''
              }`}
            >
              <h3 className="text-2xl font-bold text-center mb-8 leading-tight h-16 whitespace-pre-line relative z-20 drop-shadow-md">
                {platform.title}
              </h3>

              {/* Glassmorphic Icon Container to fix white-on-white visibility */}
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-4 mb-8 shadow-lg w-20 h-20 flex items-center justify-center relative z-20 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500">
                <Image src={platform.logo} alt={`${platform.name} logo`} width={40} height={40} className="drop-shadow-lg w-auto h-auto" />
              </div>

              {/* Mockup with enhanced 3D hover effect */}
              <div className="relative w-[220px] h-[400px] mt-auto translate-y-16 group-hover:translate-y-6 group-hover:rotate-2 group-hover:scale-105 transition-all duration-700 ease-out z-10">
                <Image 
                  src={platform.screen} 
                  alt={`${platform.name} interface`}
                  fill
                  className="object-contain object-top drop-shadow-2xl"
                />
              </div>

              {/* Watermark Number */}
              <span className="absolute top-6 right-8 text-6xl font-black text-white/10 select-none pointer-events-none group-hover:text-white/20 transition-colors duration-500">
                {platform.number}
              </span>

              {/* Premium Button */}
              <a 
                href={platform.href}
                className="absolute bottom-8 bg-white text-fk-dark px-7 py-3.5 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 z-20"
              >
                KNOW MORE
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

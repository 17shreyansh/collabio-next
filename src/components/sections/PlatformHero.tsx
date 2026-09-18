import Image from "next/image";

interface PlatformHeroProps {
  title: string;
  titleHighlight?: string;
  desc: string;
  gradient?: string;
  image: string;
}

export function PlatformHero({ title, titleHighlight, desc, gradient, image }: PlatformHeroProps) {
  const bgStyle = gradient ? { background: gradient } : {};
  const bgClass = !gradient ? "bg-fk-gradient" : "";

  return (
    <section className={`relative py-[140px] px-6 text-white pb-20 overflow-hidden ${bgClass}`} style={bgStyle}>
      {/* Animated Glowing Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-white/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[60%] bg-white/20 blur-[120px] rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-14">
        <div className="flex-1 text-center md:text-left">
          <h1 
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 drop-shadow-lg"
            dangerouslySetInnerHTML={{ __html: titleHighlight ? `${title} <span class="text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">${titleHighlight}</span>` : title }}
          />
          <p className="text-white/80 text-xl mb-10 leading-relaxed font-light">
            {desc}
          </p>
          <button className="group relative bg-white/10 backdrop-blur-md border border-white/30 text-white py-4 px-10 rounded-full text-lg font-bold cursor-pointer hover:bg-white hover:text-black hover:border-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10">Start Campaign</span>
            <div className="absolute inset-0 h-full w-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>
        <div className="flex-1 flex justify-center relative perspective-1000">
          <div className="relative w-full max-w-[500px] animate-float group">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-white/20 blur-[80px] rounded-full -z-10 group-hover:bg-white/30 transition-colors duration-500" />
            <Image
              src={image}
              alt="Platform Demo"
              width={600}
              height={600}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl rounded-[40px] border border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

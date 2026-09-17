import Image from "next/image";

interface ServiceHeroProps {
  title: string;
  titleHighlight?: string;
  desc: string;
  image: string;
}

export function ServiceHero({ title, titleHighlight, desc, image }: ServiceHeroProps) {
  return (
    <section className="bg-[#0b0c10] py-[140px] px-6 text-white pb-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 [&_span]:bg-fk-gradient [&_span]:text-transparent [&_span]:bg-clip-text"
            dangerouslySetInnerHTML={{ __html: titleHighlight ? `${title} <span>${titleHighlight}</span>` : title }}
          />
          <p className="text-[#a0a0a0] text-lg mb-8 leading-relaxed">
            {desc}
          </p>
          <button className="bg-fk-gradient text-white border-none py-3 px-8 rounded-full text-base font-semibold cursor-pointer hover:-translate-y-1 transition-transform">
            Get Started
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={image}
            alt="Service Hero"
            width={600}
            height={500}
            priority
            className="w-full h-auto object-contain max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

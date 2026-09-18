import Image from "next/image";

const ASSET = "/sites/collabio-com-a1b2c3d4/root-e5f6g7h8";

// 35 logos based on the asset download script
const LOGOS = Array.from({ length: 35 }, (_, i) => ({
  id: i + 1,
  src: `${ASSET}/logos/logo${i + 1}.svg`,
  alt: `Client Logo ${i + 1}`,
}));

export function BrandLogosCarousel() {
  return (
    <section className="py-20 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-fk-dark mb-2">
          Chosen by the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fk-red to-fk-orange">
            World's Fastest Scaling Brands
          </span>
        </h2>
      </div>

      <div className="relative w-full flex items-center">
        {/* Left/Right fading gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 hidden md:block"></div>

        {/* Carousel track */}
        <div 
          className="flex gap-16 md:gap-24 items-center w-max animate-[fk-scroll-left_40s_linear_infinite]"
          // Adjust duration (40s) based on desired speed
        >
          {/* Double the logos to create seamless infinite loop */}
          {[...LOGOS, ...LOGOS].map((logo, idx) => (
            <div 
              key={`${logo.id}-${idx}`} 
              className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="max-h-full max-w-full object-contain w-auto h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

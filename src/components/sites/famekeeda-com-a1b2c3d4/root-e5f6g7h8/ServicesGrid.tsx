import Image from "next/image";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8";

const services = [
  {
    title: "Content Marketing",
    href: "/content-marketing-agency",
    img: `${ASSET}/services/content-marketing.webp`,
    bgClass: "bg-fk-dark",
    textClass: "text-white",
    isLight: false,
    span: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Celebrity Endorsements",
    href: "/celebrity-endorsement-agency",
    img: `${ASSET}/services/celebrity-endorsements.webp`,
    bgClass: "bg-fk-red",
    textClass: "text-white",
    isLight: false,
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Ad Films with Influencers",
    href: "/ad-film-production-agency",
    img: `${ASSET}/services/ad-films.webp`,
    bgClass: "bg-fk-charcoal",
    textClass: "text-white",
    isLight: false,
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Barter Campaigns",
    href: "/barter-collaboration-agency",
    img: `${ASSET}/services/barter-campaigns.webp`,
    bgClass: "bg-white border border-gray-100",
    textClass: "text-fk-dark",
    isLight: true,
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Product Reviews",
    href: "/product-reviews-agency",
    img: `${ASSET}/services/product-reviews.webp`,
    bgClass: "bg-fk-orange",
    textClass: "text-white",
    isLight: false,
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Brand Integration",
    href: "/brand-integration-agency",
    img: `${ASSET}/services/brand-integration.webp`,
    bgClass: "bg-gradient-to-br from-fk-dark to-[#000]",
    textClass: "text-white",
    isLight: false,
    span: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "User Generated Content",
    href: "/user-generated-content-agency",
    img: `${ASSET}/services/user-generated-content.webp`,
    bgClass: "bg-white border border-gray-100",
    textClass: "text-fk-dark",
    isLight: true,
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Meme Marketing",
    href: "/meme-marketing-agency",
    img: `${ASSET}/services/meme-marketing.webp`,
    bgClass: "bg-gradient-to-br from-fk-red to-fk-orange",
    textClass: "text-white",
    isLight: false,
    span: "md:col-span-1 lg:col-span-3"
  }
];

export function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-fk-dark mb-4">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-fk-red to-fk-orange">Make Magic Happen</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[360px] md:auto-rows-[420px]">
          {services.map((service, idx) => {
            return (
              <a 
                key={idx}
                href={service.href}
                className={`relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between group transition-transform hover:-translate-y-2 shadow-sm hover:shadow-2xl ${service.span} ${service.bgClass} ${service.textClass}`}
              >
                <div className="relative z-10 max-w-[60%]">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    {service.title.split(' ').map((word, i) => (
                      <span key={i}>{word} {i === 0 && <br/>}</span>
                    ))}
                  </h3>
                  
                  <div className={`inline-flex items-center gap-2 font-semibold text-sm border-b pb-1 transition-colors ${
                    service.isLight ? "border-fk-dark hover:text-fk-red hover:border-fk-red" : "border-white/50 hover:text-white hover:border-white"
                  }`}>
                    Know more
                    <svg width="12" height="12" viewBox="0 0 11 11" fill="currentColor" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <path d="M1.36 5.9h7.524M6.59 2.968l2.866 2.938-2.938 2.938" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                    </svg>
                  </div>
                </div>

                {/* Floating Image */}
                <div className={`absolute bottom-0 right-0 transition-transform duration-700 ease-out group-hover:scale-110 origin-bottom-right ${
                  service.span.includes("col-span-2") || service.span.includes("col-span-3")
                    ? "w-1/2 h-[90%] md:w-[45%] md:h-[90%]"
                    : "w-3/4 h-3/4"
                }`}>
                  <Image 
                    src={service.img} 
                    alt={service.title}
                    fill
                    className="object-contain object-bottom-right drop-shadow-2xl"
                  />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

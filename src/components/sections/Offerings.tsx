interface FeatureCard {
  title: string;
  desc: string;
}

interface OfferingsProps {
  title: string;
  titleHighlight?: string;
  desc: string;
  cards: FeatureCard[];
}

export function Offerings({ title, titleHighlight, desc, cards }: OfferingsProps) {
  return (
    <section className="py-20 px-6 bg-white max-w-[1200px] mx-auto">
      <div className="text-center mb-12">
        <h2 
          className="text-3xl md:text-4xl font-bold text-fk-text mb-4 [&_span]:bg-fk-gradient [&_span]:text-transparent [&_span]:bg-clip-text"
          dangerouslySetInnerHTML={{ __html: titleHighlight ? `${title} <span>${titleHighlight}</span>` : title }}
        />
        <p className="text-fk-muted max-w-[600px] mx-auto text-base">
          {desc}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-fk-surface rounded-2xl p-8 border border-fk-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BE1622" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="#BE1622" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="#BE1622" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-fk-text mb-3">{card.title}</h3>
            <p className="text-fk-muted text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

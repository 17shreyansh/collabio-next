interface BenefitCard {
  title: string;
  desc: string;
}

interface BenefitsProps {
  title: string;
  titleHighlight?: string;
  desc: string;
  cards: BenefitCard[];
}

export function Benefits({ title, titleHighlight, desc, cards }: BenefitsProps) {
  return (
    <section className="py-20 px-6 bg-white max-w-[1200px] mx-auto">
      <div className="text-center mb-12">
        <h2 
          className="text-3xl md:text-4xl font-bold text-fk-text mb-4 [&_span]:text-fk-accent"
          dangerouslySetInnerHTML={{ __html: titleHighlight ? `${title} <span>${titleHighlight}</span>` : title }}
        />
        <p className="text-fk-muted max-w-[600px] mx-auto text-base">
          {desc}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white rounded-3xl p-10 border border-fk-border text-center overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(190,22,34,0.15)]"
          >
            {/* Subtle Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-fk-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Glowing background blob on hover */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-fk-accent/5 blur-[50px] rounded-full group-hover:bg-fk-accent/20 transition-colors duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-fk-text mb-4 group-hover:text-fk-primary transition-colors">{card.title}</h3>
              <p className="text-fk-muted text-base leading-relaxed">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

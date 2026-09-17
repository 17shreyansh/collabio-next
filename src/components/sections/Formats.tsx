interface ContentFormat {
  name: string;
  desc: string;
}

interface FormatsProps {
  title: string;
  titleHighlight?: string;
  desc: string;
  items: ContentFormat[];
}

export function Formats({ title, titleHighlight, desc, items }: FormatsProps) {
  return (
    <section className="py-20 px-6 bg-[#f9f9f9]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-fk-text mb-4 [&_span]:text-fk-accent"
            dangerouslySetInnerHTML={{ __html: titleHighlight ? `${title} <span>${titleHighlight}</span>` : title }}
          />
          <p className="text-fk-muted max-w-[600px] mx-auto text-base">
            {desc}
          </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="group bg-white rounded-3xl p-8 border border-fk-border flex flex-col items-start gap-5 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(190,22,34,0.1)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-fk-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-fk-surface rounded-2xl flex items-center justify-center group-hover:bg-fk-primary/10 transition-colors duration-300">
              <svg className="transform group-hover:scale-110 transition-transform duration-300" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#BE1622" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9L15 12L10 15V9Z" stroke="#BE1622" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-fk-text mb-3 group-hover:text-fk-primary transition-colors">{item.name}</h3>
              <p className="text-fk-muted text-base leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

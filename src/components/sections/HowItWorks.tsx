interface Step {
  num: string;
  title: string;
  desc: string;
}

interface HowItWorksProps {
  title: string;
  titleHighlight?: string;
  desc: string;
  steps: Step[];
}

export function HowItWorks({ title, titleHighlight, desc, steps }: HowItWorksProps) {
  return (
    <section className="py-20 px-6 bg-[#fcfcfc]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-fk-text mb-4 [&_span]:bg-fk-gradient [&_span]:text-transparent [&_span]:bg-clip-text"
            dangerouslySetInnerHTML={{ __html: titleHighlight ? `${title} <span>${titleHighlight}</span>` : title }}
          />
          <p className="text-fk-muted max-w-[600px] mx-auto text-base">
            {desc}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-fk-border relative">
              <div className="text-5xl font-extrabold text-transparent mb-4" style={{ WebkitTextStroke: "1px rgba(190, 22, 34, 0.3)" }}>
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-fk-text mb-3">{step.title}</h3>
              <p className="text-fk-muted text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8";

const steps = [
  {
    num: "01",
    title: "Crafting Raw Ideas into Scroll-Stopping Stories",
    desc: "Not all content is born viral. It takes a creative spark to make it shine. We team up with influencers who know their audience inside out, shaping raw ideas into relatable, must-watch stories that stop thumbs mid-scroll.",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2Jxa3hkcHVvN2tmdXFnZThhbzAyMHdtNDN0YjVoMmVlMDhxajdwbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QQu7ib48Qx3SUGZsTI/giphy.gif"
  },
  {
    num: "02",
    title: "Building Brand Buzz with Authentic Voices",
    desc: "Why whisper when you can echo? We connect you with influencers who vibe with your brand, turning genuine endorsements into conversations that resonate. Their followers become your fans because real recognises real.",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXl6cmh4cjB6NzBtOTYzNXMyNWhwczc3Z3N6cTMycHd2dWt6dWpvcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XcFqv8EzBiAlzeEID9/giphy.gif"
  },
  {
    num: "03",
    title: "Be the Scroll-Stopping Moment",
    desc: "In a sea of sameness, standing out is survival. We place your brand where it matters, with influencers who know how to ignite curiosity. No more blending in, just bold, buzz-worthy moments that demand attention.",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamtzbTg5dzl0MG1rMzd6c3k3NWZtamtkaGdlYXFrM3lmajByMGh2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eIm624c8nnNbiG0V3g/giphy.gif"
  },
  {
    num: "04",
    title: "Influence That Audiences Feel and Follow",
    desc: "Trust isn't bought; it's built. We match you with influencers who already love your brand, turning shout-outs into honest, personal recommendations. Authenticity always hits differently, and that's how loyalty grows.",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanl1ZDZhcTFld3EwaDVhdjlhYjhiajljYmlmcGZ5NXk5dG5wZDBoZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btNAICguyAg30S4/giphy.gif"
  },
  {
    num: "05",
    title: "Creating the Want That Drives the Click",
    desc: "We don't just create interest; we spark obsession. Our influencers spotlight your product's unique edge, turning casual glances into \"gotta-have-it\" moments. From interest to action, we fuel the desire that drives conversions.",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHBrazJ4Y291MWw3bWp6OTVtNGkybTFxemsxdzdsbDY0aWI3YWRkaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lq4zZge5wmOEFecKu8/giphy.gif"
  }
];

export function FiveStepBlueprint() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Only run on desktop/tablet where layout is split
    if (window.innerWidth < 1024) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveStep(index);
          }
        });
      },
      { 
        rootMargin: "-40% 0px -40% 0px", // Trigger when element is near center of screen
        threshold: 0 
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-fk-red/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fk-dark mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fk-red to-fk-orange">5 Step Influencer Blueprint</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From raw ideas to viral moments, this is how we craft campaigns that command attention and drive conversions.
          </p>
        </div>

        {/* Desktop Layout - Split */}
        <div className="hidden lg:flex gap-20 items-start relative">
          
          {/* Left Sticky Image Area */}
          <div className="w-[45%] sticky top-32 h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-fk-dark border-[8px] border-gray-50/50">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ease-out transform ${
                  idx === activeStep ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img 
                  src={step.gif}
                  alt={`Step ${step.num}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-10 left-10 right-10 z-20">
                   <div className="text-fk-red font-bold text-lg mb-2">Step {step.num}</div>
                   <h4 className="text-white text-2xl font-semibold leading-tight">{step.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scrolling Steps Area */}
          <div className="w-[55%] pb-[45vh] pt-12">
            <div className="relative border-l-2 border-gray-100 pl-16 ml-8">
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <div 
                    key={idx} 
                    ref={(el) => { stepRefs.current[idx] = el; }}
                    data-index={idx}
                    className={`mb-40 relative transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'}`}
                  >
                    {/* Timeline Dot/Number */}
                    <div className={`absolute -left-[5rem] top-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl border-4 transition-all duration-500 ${
                      isActive 
                        ? "bg-fk-red text-white border-fk-red shadow-xl shadow-red-500/20 scale-110" 
                        : "bg-gray-50 text-gray-400 border-white"
                    }`}>
                      {step.num}
                    </div>
                    
                    <h3 className={`text-3xl font-bold mb-6 leading-tight transition-colors duration-500 ${
                      isActive ? "text-fk-dark" : "text-gray-400"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-xl leading-relaxed transition-colors duration-500 ${
                      isActive ? "text-gray-600" : "text-gray-400"
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden flex flex-col gap-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-fk-red text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg shadow-red-500/20">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-fk-dark leading-tight">{step.title}</h3>
              </div>
              
              <div className="w-full h-[300px] rounded-[2rem] overflow-hidden shadow-xl relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img 
                  src={step.gif}
                  alt={`Step ${step.num}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed px-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

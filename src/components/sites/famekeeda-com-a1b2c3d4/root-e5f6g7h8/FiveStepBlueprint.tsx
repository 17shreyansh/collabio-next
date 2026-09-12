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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-fk-dark mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fk-red to-fk-orange">5 Step Influencer Marketing Blueprint</span>
          </h2>
        </div>

        {/* Desktop Layout - Split */}
        <div className="hidden lg:flex gap-16 items-start">
          
          {/* Left Sticky Image Area */}
          <div className="w-1/2 sticky top-32 h-[500px] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-200">
            {steps.map((step, idx) => (
              <img 
                key={idx}
                src={step.gif}
                alt={`Step ${step.num}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  idx === activeStep ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>

          {/* Right Scrolling Steps Area */}
          <div className="w-1/2 pb-[30vh]">
            <div className="relative border-l-2 border-gray-200 pl-12 ml-6">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  ref={(el) => { stepRefs.current[idx] = el; }}
                  data-index={idx}
                  className="mb-32 relative"
                >
                  {/* Timeline Dot/Number */}
                  <div className={`absolute -left-[5.5rem] top-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl border-4 transition-colors duration-300 ${
                    idx === activeStep 
                      ? "bg-fk-red text-white border-fk-red shadow-lg shadow-red-500/30" 
                      : "bg-white text-gray-400 border-gray-200"
                  }`}>
                    {step.num}
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    idx === activeStep ? "text-fk-red" : "text-fk-dark"
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden flex flex-col gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-fk-red text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-fk-dark leading-tight">{step.title}</h3>
              </div>
              
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative">
                <img 
                  src={step.gif}
                  alt={`Step ${step.num}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

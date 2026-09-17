"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8";

// Simple count up hook for the metrics
function useSimpleCountUp(end: string, isVisible: boolean) {
  const [count, setCount] = useState("0");
  
  useEffect(() => {
    if (!isVisible) return;
    
    // Parse number and suffix
    const numMatch = end.match(/[\d.]+/);
    const suffixMatch = end.match(/[^\d.]+/g);
    
    if (!numMatch) {
      setCount(end);
      return;
    }
    
    const target = parseFloat(numMatch[0]);
    const suffix = suffixMatch ? suffixMatch.join('') : '';
    const isFloat = end.includes('.');
    
    let startTime: number | null = null;
    const duration = 2000;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      const current = easeProgress * target;
      
      setCount(
        (isFloat ? current.toFixed(1) : Math.floor(current).toString()) + suffix
      );
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, isVisible]);
  
  return count;
}

const stories = [
  {
    logo: `${ASSET}/success-stories/intel.svg`,
    alt: "Intel",
    objective: "To showcase Intel processors as the most efficient processors in terms of performance and consistency.",
    metrics: [
      { value: "1B+", label: "Impressions" },
      { value: "50M+", label: "Views" },
      { value: "12%", label: "Engagement" }
    ]
  },
  {
    logo: `${ASSET}/success-stories/amazon.svg`,
    alt: "Amazon",
    objective: "To showcase the usage of Amazon Echo Dot and Echo Show Speakers in the daily routine of the Influencer and the Applications of how one can use Amazon Echo Dot in a home or office setup.",
    metrics: [
      { value: "500M+", label: "Impressions" },
      { value: "30M+", label: "Views" },
      { value: "15%", label: "Engagement" }
    ]
  },
  {
    logo: `${ASSET}/success-stories/mstock.svg`,
    alt: "m.Stock",
    objective: "The primary objective was to acquire new Users to open and fund their demat accounts on m.Stock and drive awareness of MTF Facilities.",
    metrics: [
      { value: "1B+", label: "Views" },
      { value: "500K+", label: "Account Openings" },
      { value: "25%+", label: "Traded Accounts" }
    ]
  }
];

function MetricCard({ value, label, isDark }: { value: string, label: string, isDark: boolean }) {
  const displayValue = useSimpleCountUp(value, true); // Always animate
  
  return (
    <div className="flex flex-col">
      <div className={`text-4xl md:text-5xl font-bold mb-1 ${isDark ? 'text-white' : 'text-fk-dark'}`}>
        {displayValue}
      </div>
      <div className={`font-semibold text-sm uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {label}
      </div>
    </div>
  );
}

export function SuccessStories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-fk-dark mb-4 tracking-tight">
            Our Success Stories
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Real brands, real numbers, and campaigns that actually moved the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Story 1: Intel (Square) */}
          <div className="bg-fk-charcoal text-white rounded-[2rem] p-10 lg:p-12 flex flex-col justify-between min-h-[480px] group transition-transform hover:-translate-y-1">
            <div>
              <div className="h-20 w-52 relative mb-10">
                <Image src={stories[0].logo} alt="Intel" fill className="object-contain object-left brightness-0 invert" />
              </div>
              <p className="text-xl leading-relaxed text-gray-300 font-medium mb-12">
                "{stories[0].objective}"
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-gray-700 pt-8 mt-auto">
              {stories[0].metrics.map((metric, idx) => (
                <MetricCard key={idx} value={metric.value} label={metric.label} isDark={true} />
              ))}
            </div>
          </div>

          {/* Story 2: Amazon (Square) */}
          <div className="bg-[#F5F5F7] text-fk-dark rounded-[2rem] p-10 lg:p-12 flex flex-col justify-between min-h-[480px] group transition-transform hover:-translate-y-1">
            <div>
              <div className="h-20 w-52 relative mb-10">
                <Image src={stories[1].logo} alt="Amazon" fill className="object-contain object-left mix-blend-multiply" />
              </div>
              <p className="text-xl leading-relaxed text-gray-600 font-medium mb-12">
                "{stories[1].objective}"
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-gray-300 pt-8 mt-auto">
              {stories[1].metrics.map((metric, idx) => (
                <MetricCard key={idx} value={metric.value} label={metric.label} isDark={false} />
              ))}
            </div>
          </div>

          {/* Story 3: m.Stock (Wide) */}
          <div className="lg:col-span-2 bg-fk-red text-white rounded-[2rem] p-10 lg:p-12 flex flex-col md:flex-row gap-12 group transition-transform hover:-translate-y-1">
            <div className="md:w-1/2 flex flex-col justify-between">
              <div className="h-20 w-52 relative mb-10">
                <Image src={stories[2].logo} alt="m.Stock" fill className="object-contain object-left brightness-0 invert" />
              </div>
              <p className="text-xl md:text-2xl leading-relaxed font-medium">
                "{stories[2].objective}"
              </p>
            </div>
            
            <div className="md:w-1/2 flex flex-col justify-end">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:border-l border-red-400/50 md:pl-12">
                {stories[2].metrics.map((metric, idx) => (
                  <MetricCard key={idx} value={metric.value} label={metric.label} isDark={true} />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

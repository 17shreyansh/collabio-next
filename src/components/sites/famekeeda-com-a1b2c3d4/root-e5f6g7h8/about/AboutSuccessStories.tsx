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
  },
  {
    logo: `${ASSET}/success-stories/policy.webp`,
    alt: "Policy Bazaar",
    objective: "Generate leads for their basket of insurance products and plans.",
    metrics: [
      { value: "150M+", label: "Views" },
      { value: "5%", label: "Conversion Rate" },
      { value: "2.3X", label: "ROI" }
    ]
  }
];

function MetricCard({ value, label, isVisible }: { value: string, label: string, isVisible: boolean }) {
  const displayValue = useSimpleCountUp(value, isVisible);
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center w-full hover:shadow-md transition-shadow">
      <div className="text-3xl md:text-4xl font-bold text-fk-red mb-2">{displayValue}</div>
      <div className="text-gray-600 font-medium text-sm md:text-base uppercase tracking-wide">{label}</div>
    </div>
  );
}

export function AboutSuccessStories() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col gap-8">
          {stories.map((story, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                
                {/* Left - Logo & Objective */}
                <div className="lg:w-1/3 flex flex-col justify-center">
                  <div className="mb-6 h-16 relative w-40">
                    <Image 
                      src={story.logo} 
                      alt={story.alt} 
                      fill 
                      className="object-contain object-left" 
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-fk-dark flex items-center gap-2 mb-3">
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" className="text-fk-red shrink-0">
                        <path d="M2.82349 6.11161L3.7917 6.36173L2.82349 6.11161ZM5.74 3.36657L5.92835 4.34867L5.74 3.36657ZM7.46054 10.6318L7.17841 9.67242L7.46054 10.6318ZM8.38281 11.5541L7.42344 11.2719L8.38281 11.5541ZM12.903 16.1911L13.1531 17.1594L12.903 16.1911ZM15.6481 13.2746L16.6302 13.463L16.6302 13.463L15.6481 13.2746ZM17.1102 5.6504L16.1281 5.46205L16.1281 5.46205L17.1102 5.6504ZM13.3642 1.90437L13.1759 0.922264L13.3642 1.90437ZM3.73917 13.8612C3.34865 14.2518 3.34865 14.8849 3.73917 15.2755C4.1297 15.666 4.76286 15.666 5.15338 15.2755L3.73917 13.8612ZM6.3319 14.0969C6.72242 13.7064 6.72242 13.0733 6.3319 12.6827C5.94137 12.2922 5.30821 12.2922 4.91768 12.6827L6.3319 14.0969ZM4.32843 16.8075C3.9379 17.198 3.9379 17.8312 4.32843 18.2217C4.71895 18.6123 5.35212 18.6123 5.74264 18.2217L4.32843 16.8075ZM6.92115 17.0432C7.31168 16.6527 7.31168 16.0195 6.92115 15.629C6.53063 15.2385 5.89746 15.2385 5.50694 15.629L6.92115 17.0432ZM0.792893 13.272C0.402369 13.6625 0.402369 14.2957 0.792893 14.6862C1.18342 15.0767 1.81658 15.0767 2.20711 14.6862L0.792893 13.272ZM3.38562 13.5077C3.77614 13.1172 3.77614 12.484 3.38562 12.0935C2.99509 11.703 2.36193 11.703 1.9714 12.0935L3.38562 13.5077ZM16.1281 5.46205L14.666 13.0863L16.6302 13.463L18.0923 5.83875L16.1281 5.46205ZM5.92835 4.34867L13.5526 2.88647L13.1759 0.922264L5.55164 2.38447L5.92835 4.34867ZM3.7917 6.36173C4.057 5.33472 4.89276 4.54728 5.92835 4.34867L5.55164 2.38447C3.75079 2.72984 2.31233 4.09218 1.85527 5.8615L3.7917 6.36173ZM7.17841 9.67242C5.16891 10.2634 3.26115 8.41554 3.7917 6.36173L1.85527 5.8615C0.942926 9.39327 4.21759 12.6278 7.74267 11.5912L7.17841 9.67242ZM9.34219 11.8362C9.73136 10.5128 8.50181 9.28323 7.17841 9.67242L7.74267 11.5912C7.54742 11.6486 7.36602 11.4672 7.42344 11.2719L9.34219 11.8362ZM12.6529 15.2229C10.5991 15.7535 8.75124 13.8457 9.34219 11.8362L7.42344 11.2719C6.38681 14.797 9.62133 18.0717 13.1531 17.1594L12.6529 15.2229ZM14.666 13.0863C14.4673 14.1219 13.6799 14.9576 12.6529 15.2229L13.1531 17.1594C14.9225 16.7023 16.2848 15.2638 16.6302 13.463L14.666 13.0863ZM18.0923 5.83875C18.6515 2.92294 16.0917 0.363059 13.1759 0.922264L13.5526 2.88647C15.08 2.59352 16.4211 3.93456 16.1281 5.46205L18.0923 5.83875ZM5.15338 15.2755L6.3319 14.0969L4.91768 12.6827L3.73917 13.8612L5.15338 15.2755ZM5.74264 18.2217L6.92115 17.0432L5.50694 15.629L4.32843 16.8075L5.74264 18.2217ZM2.20711 14.6862L3.38562 13.5077L1.9714 12.0935L0.792893 13.272L2.20711 14.6862Z" fill="currentColor"/>
                      </svg>
                      Objective:
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {story.objective}
                    </p>
                  </div>
                </div>

                {/* Right - Metrics Cards */}
                <div className="lg:w-2/3 flex flex-col sm:flex-row gap-4 bg-gray-50 p-6 rounded-3xl">
                  {story.metrics.map((metric, mIdx) => (
                    <MetricCard key={mIdx} value={metric.value} label={metric.label} isVisible={isVisible} />
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

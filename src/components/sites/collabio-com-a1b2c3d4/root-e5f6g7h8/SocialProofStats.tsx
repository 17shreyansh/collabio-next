"use client";

import { useEffect, useState, useRef } from "react";

function useCountUp(end: number, duration: number = 2000, suffix: string = "") {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  // Format large numbers (e.g. 1500000 -> 1.5M)
  let formatted = count.toString();
  if (count >= 1000000) {
    formatted = (count / 1000000).toFixed(count % 1000000 === 0 ? 0 : 1) + "M";
  } else if (count >= 1000) {
    formatted = (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + "K";
  }

  return { count: formatted + suffix, ref };
}

export function SocialProofStats() {
  const stat1 = useCountUp(1500000, 2000, "+"); // 1.5M+
  const stat2 = useCountUp(1000000, 2000, "+"); // 1M+
  const stat3 = useCountUp(1000, 2000, "+");    // 1K+

  return (
    <section className="bg-[#fcfcfc] py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          <div ref={stat1.ref} className="pt-8 md:pt-0 flex flex-col items-center justify-center">
            <h3 className="text-4xl md:text-5xl font-bold text-fk-red mb-2">{stat1.count}</h3>
            <p className="text-gray-600 font-medium text-lg uppercase tracking-wider">Creators Reached</p>
          </div>

          <div ref={stat2.ref} className="pt-8 md:pt-0 flex flex-col items-center justify-center">
            <h3 className="text-4xl md:text-5xl font-bold text-fk-red mb-2">{stat2.count}</h3>
            <p className="text-gray-600 font-medium text-lg uppercase tracking-wider">Campaigns Executed</p>
          </div>

          <div ref={stat3.ref} className="pt-8 md:pt-0 flex flex-col items-center justify-center">
            <h3 className="text-4xl md:text-5xl font-bold text-fk-red mb-2">{stat3.count}</h3>
            <p className="text-gray-600 font-medium text-lg uppercase tracking-wider">Happy Brands</p>
          </div>

        </div>
      </div>
    </section>
  );
}

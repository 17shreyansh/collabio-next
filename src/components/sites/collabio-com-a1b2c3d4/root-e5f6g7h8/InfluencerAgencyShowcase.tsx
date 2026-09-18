"use client";

import Image from "next/image";

const ASSET = "/sites/collabio-com-a1b2c3d4/root-e5f6g7h8";

export function InfluencerAgencyShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="explore">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 relative z-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fk-dark mb-6 tracking-tight">
            Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-fk-red to-fk-orange">Influencer Marketing</span> Agency
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            At Collabio, we specialize in helping brands connect with the right influencers to reach their target audience and drive results. From strategy to viral execution, we guide you through every step.
          </p>
        </div>

        {/* Desktop Layout - Floating Overlapping Collage */}
        <div className="hidden lg:grid grid-cols-12 gap-8 relative items-center min-h-[600px] pb-10">
          
          {/* Decorative central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-fk-red/10 to-fk-orange/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          {/* Left Column (2 Images) */}
          <div className="col-span-4 flex flex-col relative z-10">
            {/* Image 1 (Landscape) */}
            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] w-full transform hover:-translate-y-2 hover:-rotate-2 transition-all duration-500 border-[6px] border-white z-10">
              <a href="https://youtu.be/NVGtISGn1sw?si=k7zTPLA68HLbGefp" target="_blank" rel="noopener noreferrer" className="relative block w-full h-full">
                <Image 
                  src={`${ASSET}/images/agency-group-1.webp`} 
                  alt="AORUSIndia PC Build" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
              {/* Floating Label */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center gap-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-fk-red animate-pulse"></span>
                <span className="font-bold text-xs tracking-wide uppercase text-fk-dark">Efficient Management</span>
              </div>
            </div>

            {/* Image 4 (Portrait) */}
            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] w-[75%] ml-auto -mt-16 transform hover:-translate-y-2 hover:rotate-2 transition-all duration-500 border-[6px] border-white z-20">
              <a href="https://www.instagram.com/reel/DI3p-xbz9U8/" target="_blank" rel="noopener noreferrer" className="relative block w-full h-full">
                <Image 
                  src={`${ASSET}/images/agency-group-4.webp`} 
                  alt="Fitelo Reel" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center gap-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-bold text-xs tracking-wide uppercase text-fk-dark">Optimal Results</span>
                <span className="w-2 h-2 rounded-full bg-fk-orange animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Center Column (Text & CTA) */}
          <div className="col-span-4 flex flex-col items-center text-center px-4 relative z-30">
            <h3 className="text-4xl font-bold text-fk-dark mb-6 leading-tight drop-shadow-sm">
              Influencer Marketing <br /> Made <span className="relative inline-block text-fk-red">
                Easy
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-fk-orange" fill="none" viewBox="0 0 147 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13C49.7892 6.25733 96.9501 3 144 3" stroke="currentColor" strokeLinecap="round" strokeWidth="6"/>
                </svg>
              </span>
            </h3>
            <p className="text-gray-600 mb-10 text-lg">
              Unlock explosive growth with data-driven creator partnerships and expert execution.
            </p>
            <button 
              className="bg-fk-dark text-white rounded-full px-8 py-4 font-bold text-sm tracking-widest uppercase shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_40px_rgba(190,22,34,0.3)] hover:bg-fk-red hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group"
              onClick={() => document.dispatchEvent(new CustomEvent('open-contact-modal'))}
            >
              Connect With Us
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Right Column (2 Images) */}
          <div className="col-span-4 flex flex-col relative z-10">
            {/* Image 2 (Portrait) */}
            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] w-[75%] mr-auto transform hover:-translate-y-2 hover:-rotate-2 transition-all duration-500 border-[6px] border-white z-20">
              <a href="https://www.instagram.com/reel/DIRCAzaTbgY/" target="_blank" rel="noopener noreferrer" className="relative block w-full h-full">
                <Image 
                  src={`${ASSET}/images/agency-group-2.webp`} 
                  alt="Sleep Company Reel" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center gap-3 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-fk-red animate-pulse"></span>
                <span className="font-bold text-xs tracking-wide uppercase text-fk-dark">Drive Results</span>
              </div>
            </div>

            {/* Image 3 (Landscape) */}
            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] w-full -mt-16 transform hover:-translate-y-2 hover:rotate-2 transition-all duration-500 border-[6px] border-white z-10">
              <a href="https://www.youtube.com/watch?v=MPnyzJ3TmG4" target="_blank" rel="noopener noreferrer" className="relative block w-full h-full">
                <Image 
                  src={`${ASSET}/images/agency-group-3.webp`} 
                  alt="Tatum Web 3" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center gap-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-bold text-xs tracking-wide uppercase text-fk-dark">Track & Measure</span>
                <span className="w-2 h-2 rounded-full bg-fk-orange animate-pulse"></span>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col gap-12">
          {/* Top Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-3xl overflow-hidden aspect-square shadow-xl border-4 border-white">
              <Image src={`${ASSET}/images/agency-group-1.webp`} alt="" fill className="object-cover" />
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-square shadow-xl border-4 border-white translate-y-6">
              <Image src={`${ASSET}/images/agency-group-3.webp`} alt="" fill className="object-cover" />
            </div>
          </div>
          
          {/* Center CTA Box */}
          <div className="flex flex-col items-center text-center px-6 py-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2.5rem] shadow-inner mt-4 border border-white">
            <h3 className="text-3xl font-bold text-fk-dark mb-4">
              Influencer Marketing <span className="text-fk-red block mt-1">Made Easy</span>
            </h3>
            <p className="text-gray-600 mb-8 text-base">
              Unlock explosive growth with data-driven creator partnerships and expert execution.
            </p>
            <button 
              className="bg-fk-dark text-white rounded-full px-8 py-4 font-bold text-sm tracking-widest uppercase shadow-lg hover:bg-fk-red transition-all flex items-center gap-3"
              onClick={() => document.dispatchEvent(new CustomEvent('open-contact-modal'))}
            >
              Connect With Us
              <span>→</span>
            </button>
          </div>

          {/* Bottom Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl border-4 border-white">
              <Image src={`${ASSET}/images/agency-group-4.webp`} alt="" fill className="object-cover" />
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl border-4 border-white -translate-y-6">
              <Image src={`${ASSET}/images/agency-group-2.webp`} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

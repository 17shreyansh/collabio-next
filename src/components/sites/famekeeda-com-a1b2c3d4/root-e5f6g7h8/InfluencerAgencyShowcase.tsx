"use client";

import Image from "next/image";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8";

export function InfluencerAgencyShowcase() {
  return (
    <section className="py-20 bg-white" id="explore">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-fk-dark mb-6">
            Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-fk-red to-fk-orange">Influencer Marketing</span> Agency
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            At Fame Keeda, we specialise in helping brands connect with the right influencers to reach their target audience and drive results. Our team of experts will guide you through every step of the influencer marketing journey, from strategy to execution.
          </p>
        </div>

        {/* Desktop Layout - Visual Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8 relative items-center">
          
          {/* Left Column - 2 Images & Labels */}
          <div className="flex flex-col gap-12">
            <div className="relative group rounded-3xl overflow-hidden shadow-lg aspect-[4/3]">
              <a href="https://youtu.be/NVGtISGn1sw?si=k7zTPLA68HLbGefp" target="_blank" rel="noopener noreferrer">
                <Image 
                  src={`${ASSET}/images/agency-group-1.webp`} 
                  alt="AORUSIndia PC Build" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium">
                <span>Efficient Campaign Management</span>
                <Image src={`${ASSET}/images/indicator-icon.webp`} alt="" width={16} height={16} />
              </div>
              
              <div className="relative group rounded-3xl overflow-hidden shadow-lg aspect-[4/5] w-3/4 self-end">
                <a href="https://www.instagram.com/reel/DI3p-xbz9U8/" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src={`${ASSET}/images/agency-group-4.webp`} 
                    alt="Fitelo Reel" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </div>

              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium text-right self-end mt-4">
                <Image src={`${ASSET}/images/indicator-icon.webp`} alt="" width={16} height={16} />
                <span>Efficient Campaign Management for Optimal Results</span>
              </div>
            </div>
          </div>

          {/* Center Column - Text & CTA */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="text-3xl font-bold text-fk-dark mb-4">
              Influencer Marketing <br /> Made <span className="relative inline-block">
                Easy
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-fk-red" fill="none" viewBox="0 0 147 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13C49.7892 6.25733 96.9501 3 144 3" stroke="currentColor" strokeLinecap="round" strokeWidth="5"/>
                </svg>
              </span>
            </h3>
            <p className="text-gray-600 mb-8">
              Effortless Influencer Marketing with AI Insights and Expert Support.
            </p>
            <button 
              className="bg-fk-dark text-white rounded-full px-6 py-3 font-semibold hover:bg-black transition-colors flex items-center gap-2 group"
              onClick={() => document.dispatchEvent(new CustomEvent('open-contact-modal'))}
            >
              Connect with us
              <svg width="12" height="12" viewBox="0 0 11 12" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M2.01 6.005h7.524M7.24 3.068l2.866 2.938-2.938 2.938" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
              </svg>
            </button>
          </div>

          {/* Right Column - 2 Images & Labels */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium">
                <span>Influencer Partnerships that Drive Results</span>
                <Image src={`${ASSET}/images/indicator-icon.webp`} alt="" width={16} height={16} />
              </div>
              
              <div className="relative group rounded-3xl overflow-hidden shadow-lg aspect-[4/5] w-3/4 self-start">
                <a href="https://www.instagram.com/reel/DIRCAzaTbgY/" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src={`${ASSET}/images/agency-group-2.webp`} 
                    alt="Sleep Company Reel" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </div>

              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium mt-4">
                <Image src={`${ASSET}/images/indicator-icon.webp`} alt="" width={16} height={16} />
                <span>Track & Measure Performance with Precision</span>
              </div>
            </div>

            <div className="relative group rounded-3xl overflow-hidden shadow-lg aspect-[4/3]">
              <a href="https://www.youtube.com/watch?v=MPnyzJ3TmG4" target="_blank" rel="noopener noreferrer">
                <Image 
                  src={`${ASSET}/images/agency-group-3.webp`} 
                  alt="Tatum Web 3" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </div>
          </div>

        </div>

        {/* Mobile/Tablet Layout (Simplified) */}
        <div className="lg:hidden flex flex-col gap-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md">
              <Image src={`${ASSET}/images/agency-group-1.webp`} alt="" fill className="object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md">
              <Image src={`${ASSET}/images/agency-group-3.webp`} alt="" fill className="object-cover" />
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center px-4 py-8 bg-gray-50 rounded-3xl">
            <h3 className="text-2xl font-bold text-fk-dark mb-4">
              Influencer Marketing Made <span className="text-fk-red">Easy</span>
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Effortless Influencer Marketing with AI Insights and Expert Support.
            </p>
            <button 
              className="bg-fk-dark text-white rounded-full px-6 py-3 font-semibold text-sm hover:bg-black flex items-center gap-2"
              onClick={() => document.dispatchEvent(new CustomEvent('open-contact-modal'))}
            >
              Connect with us
              <svg width="12" height="12" viewBox="0 0 11 12" fill="none">
                <path d="M2.01 6.005h7.524M7.24 3.068l2.866 2.938-2.938 2.938" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-md">
              <Image src={`${ASSET}/images/agency-group-4.webp`} alt="" fill className="object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-md">
              <Image src={`${ASSET}/images/agency-group-2.webp`} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

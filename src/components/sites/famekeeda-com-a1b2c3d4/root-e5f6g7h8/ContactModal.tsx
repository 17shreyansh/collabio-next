"use client";

import { useState, useEffect } from "react";

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<"brand" | "influencer" | "agency">("brand");

  // Listen for the custom event to open the modal
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setStep(1);
    };
    document.addEventListener("open-contact-modal", handleOpen);
    return () => document.removeEventListener("open-contact-modal", handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-[2rem] shadow-2xl w-full max-w-5xl h-[85vh] max-h-[800px] flex flex-col md:flex-row overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M13 1L1 13M1 1l12 12" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Left Side - Video/Image */}
        <div className="hidden md:block w-2/5 bg-fk-charcoal relative">
          <img 
            src="/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/images/agency-group-3.webp" 
            alt="Contact"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-10 text-white">
            <h3 className="text-3xl font-bold mb-3">Let's Create<br/>Something Amazing</h3>
            <p className="text-white/80 text-sm">Join the network of fastest growing brands and top tier influencers.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-3/5 h-full overflow-y-auto p-8 md:p-12">
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-fk-dark mb-2">Connect With Us</h2>
            <p className="text-gray-500">Fill in your details below and our team will get back to you shortly.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert("Form submission mocked in clone."); setIsOpen(false); }} className="flex flex-col gap-6">
            
            {step === 1 && (
              <div className="animate-[fk-fade-up_0.3s_ease-out]">
                {/* User Type Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-fk-dark mb-3">I am a</label>
                  <div className="flex bg-gray-100 p-1 rounded-xl">
                    {(["brand", "influencer", "agency"] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setUserType(type)}
                        className={`flex-1 py-3 text-sm font-medium rounded-lg capitalize transition-all ${
                          userType === type ? "bg-white text-fk-red shadow-sm" : "text-gray-600 hover:text-fk-dark"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-fk-dark mb-2">Full Name *</label>
                    <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red focus:ring-1 focus:ring-fk-red transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fk-dark mb-2">Email Address *</label>
                    <input type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red focus:ring-1 focus:ring-fk-red transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fk-dark mb-2">Contact Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red focus:ring-1 focus:ring-fk-red transition-all" />
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={() => setStep(2)}
                  className="mt-10 w-full bg-fk-dark text-white rounded-xl px-4 py-4 font-bold hover:bg-black transition-colors flex items-center justify-center gap-2"
                >
                  Continue
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="animate-[fk-fade-up_0.3s_ease-out]">
                <button 
                  type="button" 
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-fk-dark mb-6 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Back to Basic Details
                </button>

                {userType === "brand" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-fk-dark mb-2">Company Name *</label>
                      <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-fk-dark mb-2">Industry Type</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-fk-dark mb-2">Website URL</label>
                      <input type="url" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-fk-dark mb-2">Business Needs</label>
                      <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red resize-none"></textarea>
                    </div>
                  </div>
                )}

                {userType === "influencer" && (
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-fk-dark mb-2">Stage Name / Handle *</label>
                      <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-fk-dark mb-2">Primary Platform URL *</label>
                      <input type="url" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-fk-dark mb-2">Followers Range</label>
                      <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red text-gray-700">
                        <option>10K - 50K</option>
                        <option>50K - 250K</option>
                        <option>250K - 1M</option>
                        <option>1M+</option>
                      </select>
                    </div>
                  </div>
                )}

                {userType === "agency" && (
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-fk-dark mb-2">Agency Name *</label>
                      <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-fk-dark mb-2">Clients Managed</label>
                      <input type="number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red" />
                    </div>
                  </div>
                )}

                <button 
                  type="submit" 
                  className="mt-8 w-full bg-fk-red text-white rounded-xl px-4 py-4 font-bold hover:bg-[#A0101B] transition-colors shadow-lg shadow-red-500/20"
                >
                  Submit Details
                </button>
              </div>
            )}
            
          </form>

        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function ContactPage() {
  const [userType, setUserType] = useState<"brand" | "influencer" | "agency">("brand");

  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-fk-dark mb-6">Let's talk about your next <span className="text-fk-red">big campaign</span>.</h1>
            <p className="text-gray-600 text-lg mb-12">Whether you're a brand looking to scale, an influencer looking to grow, or an agency seeking a partner, we're here to help.</p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-fk-red/10 p-4 rounded-full text-fk-red">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-fk-dark mb-1">Our Office</h3>
                  <p className="text-gray-600">Mumbai, Maharashtra, India<br/>Zip Code: 400001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-fk-red/10 p-4 rounded-full text-fk-red">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-fk-dark mb-1">Email Us</h3>
                  <a href="mailto:contact@famekeeda.com" className="text-gray-600 hover:text-fk-red transition-colors">contact@famekeeda.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-fk-red/10 p-4 rounded-full text-fk-red">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-fk-dark mb-1">Call Us</h3>
                  <a href="tel:+919876543210" className="text-gray-600 hover:text-fk-red transition-colors">+91 98765 43210</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-50 rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-fk-dark mb-6">Send us a message</h3>
            
            <div className="mb-6 flex bg-white p-1 rounded-xl shadow-sm border border-gray-100">
              {(["brand", "influencer", "agency"] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setUserType(type)}
                  className={`flex-1 py-3 text-sm font-medium rounded-lg capitalize transition-all ${
                    userType === type ? "bg-fk-dark text-white" : "text-gray-600 hover:text-fk-dark"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert("Message Sent (Mock)"); }} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-fk-dark mb-2">Full Name *</label>
                  <input type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-fk-dark mb-2">Email Address *</label>
                  <input type="email" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red" />
                </div>
              </div>

              {userType === "brand" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-fk-dark mb-2">Company Name *</label>
                      <input type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-fk-dark mb-2">Website URL</label>
                      <input type="url" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red" />
                    </div>
                  </div>
                </>
              )}

              {userType === "influencer" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-fk-dark mb-2">Social Profile URL *</label>
                    <input type="url" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red" />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-semibold text-fk-dark mb-2">Your Message *</label>
                <textarea rows={4} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-fk-red resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-4 w-full bg-fk-red text-white rounded-xl px-4 py-4 font-bold hover:bg-[#A0101B] transition-colors shadow-lg shadow-red-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

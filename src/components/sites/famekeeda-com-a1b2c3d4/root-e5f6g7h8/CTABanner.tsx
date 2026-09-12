"use client";

export function CTABanner() {
  return (
    <section className="bg-fk-charcoal py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Amplify Your Brand?
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl">
          Join the fastest scaling brands and let our influencer marketing experts build your next viral campaign.
        </p>
        <button 
          className="bg-white text-fk-dark rounded-full px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-3 shadow-lg group"
          onClick={() => document.dispatchEvent(new CustomEvent('open-contact-modal'))}
        >
          Let's Connect
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 text-fk-red">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

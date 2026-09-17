import Image from "next/image";

const ASSET = "/sites/collabio-com-a1b2c3d4/root-e5f6g7h8";

export function Footer() {
  return (
    <footer className="bg-[#f9f9f9] border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
          
          {/* Column 1 - Logo & About */}
          <div>
            <div className="mb-6">
              <Image 
                src={`${ASSET}/images/fame-keeda-logo.svg`}
                alt="Collabio Logo"
                width={160}
                height={40}
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Collabio is a full-service influencer marketing agency that helps brands connect with the right audiences through authentic creator collaborations.
            </p>
            <div className="flex gap-4">
              {/* Social Icons (Placeholders for actual svg links) */}
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 hover:text-fk-red transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 hover:text-fk-red transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 hover:text-fk-red transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-fk-dark font-bold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="/" className="text-gray-600 hover:text-fk-red transition-colors text-sm font-medium">Home</a></li>
              <li><a href="/about-us" className="text-gray-600 hover:text-fk-red transition-colors text-sm font-medium">About Us</a></li>
              <li><a href="/case-studies" className="text-gray-600 hover:text-fk-red transition-colors text-sm font-medium">Case Studies</a></li>
              <li><a href="https://collabio.co.in/blogs/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-fk-red transition-colors text-sm font-medium">Blogs</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-fk-red transition-colors text-sm font-medium">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-fk-dark font-bold text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="/content-marketing-agency" className="text-gray-600 hover:text-fk-red transition-colors text-sm font-medium">Content Marketing</a></li>
              <li><a href="/celebrity-endorsement-agency" className="text-gray-600 hover:text-fk-red transition-colors text-sm font-medium">Celebrity Endorsements</a></li>
              <li><a href="/ad-film-production-agency" className="text-gray-600 hover:text-fk-red transition-colors text-sm font-medium">Ad Films</a></li>
              <li><a href="/barter-collaboration-agency" className="text-gray-600 hover:text-fk-red transition-colors text-sm font-medium">Barter Campaigns</a></li>
              <li><a href="/product-reviews-agency" className="text-gray-600 hover:text-fk-red transition-colors text-sm font-medium">Product Reviews</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-fk-dark font-bold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-fk-red mt-0.5 flex-shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-fk-red flex-shrink-0"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/></svg>
                <a href="mailto:contact@collabio.co.in" className="hover:text-fk-red transition-colors">contact@collabio.co.in</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-fk-red flex-shrink-0"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/></svg>
                <a href="tel:+919876543210" className="hover:text-fk-red transition-colors">+91 98765 43210</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Collabio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-fk-red transition-colors">Privacy Policy</a>
            <a href="/terms-conditions" className="hover:text-fk-red transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

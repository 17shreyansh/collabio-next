import Image from "next/image";
import Link from "next/link";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { MailIcon, MapPinIcon, PhoneIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";

export function Footer() {
  const { footer } = navigationConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cb-navy border-t border-white/5 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">

          {/* Column 1 - Logo & About */}
          <div>
            <div className="mb-6">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt={siteConfig.name}
                  width={80}
                  height={80}
                // className="brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-cb-yellow hover:border-cb-yellow/30 transition-colors">
                <InstagramIcon />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-cb-yellow hover:border-cb-yellow/30 transition-colors">
                <LinkedinIcon />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-cb-yellow hover:border-cb-yellow/30 transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Dynamic Columns */}
          {footer.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-lg mb-6">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-cb-yellow transition-colors text-sm font-medium">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-white/50 hover:text-cb-yellow transition-colors text-sm font-medium">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPinIcon className="text-cb-cyan mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <MailIcon className="text-cb-cyan flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-cb-yellow transition-colors">{siteConfig.contact.email}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <PhoneIcon className="text-cb-cyan flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="hover:text-cb-yellow transition-colors">{siteConfig.contact.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-cb-yellow transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-cb-yellow transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

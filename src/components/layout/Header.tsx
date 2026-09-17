"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ChevronSvg, DiagonalArrowSvg } from "@/components/ui/Icons";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePlatformsOpen, setMobilePlatformsOpen] = useState(false);
  
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const platformsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMobile = useCallback(() => {
    setMobileOpen((p) => !p);
    setMobileServicesOpen(false);
    setMobilePlatformsOpen(false);
  }, []);

  const openContactModal = useCallback(() => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
    setMobileOpen(false);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setServicesOpen(true);
    setPlatformsOpen(false);
  };
  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };
  const handlePlatformsEnter = () => {
    if (platformsTimeout.current) clearTimeout(platformsTimeout.current);
    setPlatformsOpen(true);
    setServicesOpen(false);
  };
  const handlePlatformsLeave = () => {
    platformsTimeout.current = setTimeout(() => setPlatformsOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
      if (platformsTimeout.current) clearTimeout(platformsTimeout.current);
    };
  }, []);

  const { header } = navigationConfig;

  return (
    <header className="fk-navbar">
      <div className="fk-nav-container">
        {/* Mobile: Hamburger + Logo */}
        <div className="fk-nav-left">
          <button onClick={toggleMobile} aria-label="Toggle menu" className="fk-hamburger">
            <span className={`fk-bar ${mobileOpen ? "fk-bar-1-open" : ""}`} />
            <span className={`fk-bar ${mobileOpen ? "fk-bar-2-open" : ""}`} />
            <span className={`fk-bar ${mobileOpen ? "fk-bar-3-open" : ""}`} />
          </button>
          <Link href="/" className="fk-logo-link">
            <Image
              src="/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/images/fame-keeda-logo.svg"
              alt={siteConfig.name}
              width={140}
              height={36}
              priority
            />
          </Link>
        </div>

        {/* Mobile CTA */}
        <button onClick={openContactModal} className="fk-mobile-cta">
          Contact us
        </button>

        {/* Desktop Nav */}
        <nav className="fk-desktop-nav">
          {header.main.map((link) => (
            <Link key={link.label} href={link.href} className="fk-nav-link">{link.label}</Link>
          ))}

          {/* ─── Services Mega Menu ─── */}
          <div
            className="fk-dropdown-wrapper"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button className="fk-nav-link fk-dropdown-btn">
              {header.services.label} <ChevronSvg />
            </button>
            <div className={`fk-mega-menu fk-services-menu ${servicesOpen ? "fk-mega-open" : ""}`}>
              <div className="fk-mega-col">
                {header.services.featured.map((s) => (
                  <Link key={s.name} href={s.href} className="fk-mega-card fk-mega-featured">
                    <span className="fk-mega-card-text">{s.name}</span>
                    <DiagonalArrowSvg />
                    <div className="fk-mega-card-img">
                      <Image src={s.img} alt={s.name} width={120} height={80} style={{ objectFit: "cover", borderRadius: 8 }} />
                    </div>
                  </Link>
                ))}
              </div>
              <div className="fk-mega-col">
                {header.services.col2.map((s) => (
                  <Link key={s.name} href={s.href} className="fk-mega-card fk-mega-text-only">
                    <span className="fk-mega-card-text">{s.name}</span>
                    <DiagonalArrowSvg grey />
                  </Link>
                ))}
              </div>
              <div className="fk-mega-col">
                {header.services.col3.map((s) => (
                  <Link key={s.name} href={s.href} className="fk-mega-card fk-mega-text-only">
                    <span className="fk-mega-card-text">{s.name}</span>
                    <DiagonalArrowSvg grey />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Platforms Mega Menu ─── */}
          <div
            className="fk-dropdown-wrapper"
            onMouseEnter={handlePlatformsEnter}
            onMouseLeave={handlePlatformsLeave}
          >
            <button className="fk-nav-link fk-dropdown-btn">
              {header.platforms.label} <ChevronSvg />
            </button>
            <div className={`fk-mega-menu fk-platforms-menu ${platformsOpen ? "fk-mega-open" : ""}`}>
              <div className="fk-mega-col">
                {header.platforms.featured.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className="fk-mega-card fk-platform-featured"
                    style={{ background: p.gradient }}
                  >
                    <span className="fk-mega-card-text" style={{ color: "#fff" }}>{p.name}</span>
                    <Image src={p.icon} alt={p.name} width={24} height={24} className="fk-platform-icon" />
                  </Link>
                ))}
              </div>
              <div className="fk-mega-col">
                {header.platforms.col2.map((p) => (
                  <Link key={p.name} href={p.href} className="fk-mega-card fk-mega-text-only fk-platform-small">
                    <span className="fk-mega-card-text">{p.name}</span>
                    <Image src={p.icon} alt={p.name} width={18} height={18} className="fk-platform-icon-sm" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a href="https://www.famekeeda.com/blogs/" target="_blank" rel="noopener noreferrer" className="fk-nav-link">
            Blogs
          </a>

          <button onClick={openContactModal} className="fk-contact-btn">
            Contact us
          </button>
        </nav>
      </div>

      {/* ─── Mobile Menu ─── */}
      <div className={`fk-mobile-menu ${mobileOpen ? "fk-mobile-open" : ""}`}>
        {header.main.map((link) => (
          <Link key={link.label} href={link.href} className="fk-mobile-link" onClick={() => setMobileOpen(false)}>{link.label}</Link>
        ))}

        <div>
          <button onClick={() => setMobileServicesOpen((p) => !p)} className="fk-mobile-link fk-mobile-dropdown-btn">
            {header.services.label}
            <span style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s", display: "inline-flex" }}>
              <ChevronSvg />
            </span>
          </button>
          <div className={`fk-mobile-sub ${mobileServicesOpen ? "fk-mobile-sub-open" : ""}`}>
            {[...header.services.featured, ...header.services.col2, ...header.services.col3].map((s) => (
              <Link key={s.name} href={s.href} className="fk-mobile-sub-link" onClick={() => setMobileOpen(false)}>
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <button onClick={() => setMobilePlatformsOpen((p) => !p)} className="fk-mobile-link fk-mobile-dropdown-btn">
            {header.platforms.label}
            <span style={{ transform: mobilePlatformsOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s", display: "inline-flex" }}>
              <ChevronSvg />
            </span>
          </button>
          <div className={`fk-mobile-sub ${mobilePlatformsOpen ? "fk-mobile-sub-open" : ""}`}>
            {[...header.platforms.featured, ...header.platforms.col2].map((p) => (
              <Link key={p.name} href={p.href} className="fk-mobile-sub-link" onClick={() => setMobileOpen(false)}>
                <Image src={p.icon} alt="" width={16} height={16} />
                {p.name}
              </Link>
            ))}
          </div>
        </div>

        <a href="https://www.famekeeda.com/blogs/" target="_blank" rel="noopener noreferrer" className="fk-mobile-link" onClick={() => setMobileOpen(false)}>
          Blogs
        </a>
      </div>
      <style>{`
        /* ─── Base ─── */
        .fk-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #eee;
        }
        .fk-nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .fk-nav-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .fk-logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        /* ─── Hamburger ─── */
        .fk-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .fk-bar {
          width: 22px;
          height: 2px;
          background: #1A1A1A;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .fk-bar-1-open { transform: rotate(45deg) translate(5px, 5px); }
        .fk-bar-2-open { opacity: 0; }
        .fk-bar-3-open { transform: rotate(-45deg) translate(5px, -5px); }

        /* ─── Desktop Nav ─── */
        .fk-desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .fk-nav-link {
          text-decoration: none;
          color: #1A1A1A;
          font-size: 14px;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
        }
        .fk-nav-link:hover { color: #BE1622; }
        .fk-dropdown-btn {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .fk-contact-btn {
          background: #1A1A1A;
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 10px 24px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          font-family: inherit;
        }
        .fk-contact-btn:hover { background: #333; }
        .fk-mobile-cta {
          display: none;
          background: #1A1A1A;
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          font-family: inherit;
        }

        /* ─── Dropdown Wrapper ─── */
        .fk-dropdown-wrapper {
          position: relative;
        }

        /* ─── Mega Menu ─── */
        .fk-mega-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
          padding: 12px;
          display: none;
          gap: 8px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .fk-mega-open {
          display: flex;
          opacity: 1;
          pointer-events: auto;
        }
        .fk-services-menu {
          min-width: 620px;
        }
        .fk-platforms-menu {
          min-width: 380px;
        }

        /* ─── Mega Columns ─── */
        .fk-mega-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        /* ─── Mega Cards ─── */
        .fk-mega-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 12px;
          text-decoration: none;
          color: #1A1A1A;
          font-size: 13px;
          font-weight: 500;
          transition: background 0.2s;
          gap: 8px;
        }
        .fk-mega-card:hover {
          background: #f5f5f5;
        }
        .fk-mega-card-text {
          white-space: nowrap;
        }

        /* Featured service cards with image */
        .fk-mega-featured {
          flex-direction: column;
          align-items: flex-start;
          padding: 14px;
          background: #f9f9f9;
          border-radius: 14px;
          gap: 8px;
          min-height: 100px;
          position: relative;
          overflow: hidden;
        }
        .fk-mega-featured:hover {
          background: #f0f0f0;
        }
        .fk-mega-card-img {
          position: absolute;
          bottom: 8px;
          right: 8px;
          border-radius: 8px;
          overflow: hidden;
          opacity: 0.85;
        }

        /* Platform featured cards */
        .fk-platform-featured {
          border-radius: 14px;
          padding: 16px;
          min-height: 60px;
        }
        .fk-platform-featured:hover {
          filter: brightness(1.05);
          background: inherit !important;
        }
        .fk-platform-icon {
          filter: brightness(0) invert(1);
        }

        /* Small platform cards */
        .fk-platform-small {
          border: 1px solid #eee;
          border-radius: 10px;
        }
        .fk-platform-small:hover {
          border-color: #ddd;
        }

        /* ─── Mobile Menu ─── */
        .fk-mobile-menu {
          display: none;
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fff;
          z-index: 999;
          padding: 24px;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
        }
        .fk-mobile-open {
          display: flex;
        }
        .fk-mobile-link {
          font-size: 16px;
          font-weight: 500;
          color: #1A1A1A;
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
          display: block;
          background: none;
          border-top: none;
          border-left: none;
          border-right: none;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
          width: 100%;
        }
        .fk-mobile-dropdown-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .fk-mobile-sub {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding-left: 16px;
        }
        .fk-mobile-sub-open {
          max-height: 600px;
        }
        .fk-mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #555;
          text-decoration: none;
          padding: 8px 0;
        }
        .fk-mobile-sub-link:hover { color: #BE1622; }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .fk-hamburger { display: flex; }
          .fk-desktop-nav { display: none !important; }
          .fk-mobile-cta { display: block; }
        }
      `}</style>
    </header>
  );
}

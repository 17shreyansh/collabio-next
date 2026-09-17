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
    <header className="cb-navbar">
      <div className="cb-nav-container">
        {/* Mobile: Hamburger + Logo */}
        <div className="cb-nav-left">
          <button onClick={toggleMobile} aria-label="Toggle menu" className="cb-hamburger">
            <span className={`cb-bar ${mobileOpen ? "cb-bar-1-open" : ""}`} />
            <span className={`cb-bar ${mobileOpen ? "cb-bar-2-open" : ""}`} />
            <span className={`cb-bar ${mobileOpen ? "cb-bar-3-open" : ""}`} />
          </button>
          <Link href="/" className="cb-logo-link">
            <Image
              src="/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/images/fame-keeda-logo.svg"
              alt={siteConfig.name}
              width={140}
              height={36}
              priority
            />
          </Link>
        </div>

        {/* Mobile CTA */}
        <button onClick={openContactModal} className="cb-mobile-cta">
          Start a Campaign
        </button>

        {/* Desktop Nav */}
        <nav className="cb-desktop-nav">
          {header.main.map((link) => (
            <Link key={link.label} href={link.href} className="cb-nav-link">{link.label}</Link>
          ))}

          {/* ─── Services Mega Menu ─── */}
          <div
            className="cb-dropdown-wrapper"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button className="cb-nav-link cb-dropdown-btn">
              {header.services.label} <ChevronSvg />
            </button>
            <div className={`cb-mega-menu cb-services-menu ${servicesOpen ? "cb-mega-open" : ""}`}>
              <div className="cb-mega-col">
                {header.services.featured.map((s) => (
                  <Link key={s.name} href={s.href} className="cb-mega-card cb-mega-featured">
                    <span className="cb-mega-card-text">{s.name}</span>
                    <DiagonalArrowSvg />
                    <div className="cb-mega-card-img">
                      <Image src={s.img} alt={s.name} width={120} height={80} style={{ objectFit: "cover", borderRadius: 8 }} />
                    </div>
                  </Link>
                ))}
              </div>
              <div className="cb-mega-col">
                {header.services.col2.map((s) => (
                  <Link key={s.name} href={s.href} className="cb-mega-card cb-mega-text-only">
                    <span className="cb-mega-card-text">{s.name}</span>
                    <DiagonalArrowSvg grey />
                  </Link>
                ))}
              </div>
              <div className="cb-mega-col">
                {header.services.col3.map((s) => (
                  <Link key={s.name} href={s.href} className="cb-mega-card cb-mega-text-only">
                    <span className="cb-mega-card-text">{s.name}</span>
                    <DiagonalArrowSvg grey />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Platforms Mega Menu ─── */}
          <div
            className="cb-dropdown-wrapper"
            onMouseEnter={handlePlatformsEnter}
            onMouseLeave={handlePlatformsLeave}
          >
            <button className="cb-nav-link cb-dropdown-btn">
              {header.platforms.label} <ChevronSvg />
            </button>
            <div className={`cb-mega-menu cb-platforms-menu ${platformsOpen ? "cb-mega-open" : ""}`}>
              <div className="cb-mega-col">
                {header.platforms.featured.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className="cb-mega-card cb-platform-featured"
                    style={{ background: p.gradient }}
                  >
                    <span className="cb-mega-card-text" style={{ color: "#fff" }}>{p.name}</span>
                    <Image src={p.icon} alt={p.name} width={24} height={24} className="cb-platform-icon" />
                  </Link>
                ))}
              </div>
              <div className="cb-mega-col">
                {header.platforms.col2.map((p) => (
                  <Link key={p.name} href={p.href} className="cb-mega-card cb-mega-text-only cb-platform-small">
                    <span className="cb-mega-card-text">{p.name}</span>
                    <Image src={p.icon} alt={p.name} width={18} height={18} className="cb-platform-icon-sm" />
                  </Link>
                ))}
              </div>
            </div>
          </div>



          <button onClick={openContactModal} className="cb-contact-btn">
            Start a Campaign
          </button>
        </nav>
      </div>

      {/* ─── Mobile Menu ─── */}
      <div className={`cb-mobile-menu ${mobileOpen ? "cb-mobile-open" : ""}`}>
        {header.main.map((link) => (
          <Link key={link.label} href={link.href} className="cb-mobile-link" onClick={() => setMobileOpen(false)}>{link.label}</Link>
        ))}

        <div>
          <button onClick={() => setMobileServicesOpen((p) => !p)} className="cb-mobile-link cb-mobile-dropdown-btn">
            {header.services.label}
            <span style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s", display: "inline-flex" }}>
              <ChevronSvg />
            </span>
          </button>
          <div className={`cb-mobile-sub ${mobileServicesOpen ? "cb-mobile-sub-open" : ""}`}>
            {[...header.services.featured, ...header.services.col2, ...header.services.col3].map((s) => (
              <Link key={s.name} href={s.href} className="cb-mobile-sub-link" onClick={() => setMobileOpen(false)}>
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <button onClick={() => setMobilePlatformsOpen((p) => !p)} className="cb-mobile-link cb-mobile-dropdown-btn">
            {header.platforms.label}
            <span style={{ transform: mobilePlatformsOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s", display: "inline-flex" }}>
              <ChevronSvg />
            </span>
          </button>
          <div className={`cb-mobile-sub ${mobilePlatformsOpen ? "cb-mobile-sub-open" : ""}`}>
            {[...header.platforms.featured, ...header.platforms.col2].map((p) => (
              <Link key={p.name} href={p.href} className="cb-mobile-sub-link" onClick={() => setMobileOpen(false)}>
                <Image src={p.icon} alt="" width={16} height={16} />
                {p.name}
              </Link>
            ))}
          </div>
        </div>


      </div>
      <style>{`
        /* ─── Base ─── */
        .cb-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(10, 30, 60, 0.08);
        }
        .cb-nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cb-nav-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .cb-logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        /* ─── Hamburger ─── */
        .cb-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .cb-bar {
          width: 22px;
          height: 2px;
          background: #080A0D;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .cb-bar-1-open { transform: rotate(45deg) translate(5px, 5px); }
        .cb-bar-2-open { opacity: 0; }
        .cb-bar-3-open { transform: rotate(-45deg) translate(5px, -5px); }

        /* ─── Desktop Nav ─── */
        .cb-desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .cb-nav-link {
          text-decoration: none;
          color: #080A0D;
          font-size: 14px;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
          transition: color 0.2s;
        }
        .cb-nav-link:hover { color: #24529B; }
        .cb-dropdown-btn {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .cb-contact-btn {
          background: #24529B;
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 10px 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .cb-contact-btn:hover { background: #10264A; transform: translateY(-1px); }
        .cb-mobile-cta {
          display: none;
          background: #24529B;
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
        }

        /* ─── Dropdown Wrapper ─── */
        .cb-dropdown-wrapper {
          position: relative;
        }

        /* ─── Mega Menu ─── */
        .cb-mega-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(10, 30, 60, 0.12);
          padding: 12px;
          display: none;
          gap: 8px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .cb-mega-open {
          display: flex;
          opacity: 1;
          pointer-events: auto;
        }
        .cb-services-menu {
          min-width: 620px;
        }
        .cb-platforms-menu {
          min-width: 380px;
        }

        /* ─── Mega Columns ─── */
        .cb-mega-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        /* ─── Mega Cards ─── */
        .cb-mega-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 12px;
          text-decoration: none;
          color: #080A0D;
          font-size: 13px;
          font-weight: 500;
          transition: background 0.2s;
          gap: 8px;
        }
        .cb-mega-card:hover {
          background: #F8FAFC;
        }
        .cb-mega-card-text {
          white-space: nowrap;
        }

        /* Featured service cards with image */
        .cb-mega-featured {
          flex-direction: column;
          align-items: flex-start;
          padding: 14px;
          background: #F8FAFC;
          border-radius: 14px;
          gap: 8px;
          min-height: 100px;
          position: relative;
          overflow: hidden;
        }
        .cb-mega-featured:hover {
          background: #EFF3F8;
        }
        .cb-mega-card-img {
          position: absolute;
          bottom: 8px;
          right: 8px;
          border-radius: 8px;
          overflow: hidden;
          opacity: 0.85;
        }

        /* Platform featured cards */
        .cb-platform-featured {
          border-radius: 14px;
          padding: 16px;
          min-height: 60px;
        }
        .cb-platform-featured:hover {
          filter: brightness(1.05);
          background: inherit !important;
        }
        .cb-platform-icon {
          filter: brightness(0) invert(1);
        }

        /* Small platform cards */
        .cb-platform-small {
          border: 1px solid rgba(10, 30, 60, 0.08);
          border-radius: 10px;
        }
        .cb-platform-small:hover {
          border-color: rgba(10, 30, 60, 0.15);
        }

        /* ─── Mobile Menu ─── */
        .cb-mobile-menu {
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
        .cb-mobile-open {
          display: flex;
        }
        .cb-mobile-link {
          font-size: 16px;
          font-weight: 500;
          color: #080A0D;
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid rgba(10, 30, 60, 0.06);
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
        .cb-mobile-dropdown-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cb-mobile-sub {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding-left: 16px;
        }
        .cb-mobile-sub-open {
          max-height: 600px;
        }
        .cb-mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #5A6577;
          text-decoration: none;
          padding: 8px 0;
        }
        .cb-mobile-sub-link:hover { color: #24529B; }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .cb-hamburger { display: flex; }
          .cb-desktop-nav { display: none !important; }
          .cb-mobile-cta { display: block; }
        }
      `}</style>
    </header>
  );
}

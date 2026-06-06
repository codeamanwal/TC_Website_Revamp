"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Pre-configured mock data matching the screenshot categories
const menuData = [
  {
    id: "about",
    title: "ABOUT",
    subItems: ["Our Story", "Team", "Careers", "Contact"],
  },
  {
    id: "for-founders",
    title: "FOR FOUNDERS",
    subItems: ["Get investment", "Beyond The Cheque", "Titan Seed Funding", "Titan Winner Fund"],
  },
  {
    id: "portfolio",
    title: "PORTFOLIO",
    subItems: ["All Companies", "Recent Exits", "Sector Focus"],
  },
  {
    id: "community",
    title: "COMMUNITY",
    subItems: ["Events", "Founder Network", "Resources"],
  },
  {
    id: "perspective",
    title: "PERSPECTIVE",
    subItems: ["Blog", "News", "Podcasts", "Reports"],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      const timer = setTimeout(() => setActiveSubMenu(null), 500);
      return () => clearTimeout(timer);
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* =========================================
          MAIN TOP NAVBAR (Closed State)
          ========================================= */}
      {/* FLUID NAV: Height and padding scale down fluidly on smaller screens */}
      <nav className="fixed left-0 top-0 z-[40] flex h-[var(--nav-height)] w-full items-center justify-between bg-[linear-gradient(90deg,#001A4D_0%,#001A4D_58.17%,#003C82_74.52%,#06C_89.42%,#001A4D_100%)] px-[clamp(16px,4.3vw,62px)]">
        
        {/* FLUID TOGGLE: Button size and padding scale perfectly */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex h-[clamp(36px,2.84vw,41px)] w-[clamp(36px,2.84vw,41px)] shrink-0 cursor-pointer items-center justify-center rounded-full bg-white p-[clamp(8px,0.9vw,13px)] transition-opacity hover:opacity-90"
          aria-label="Open Menu"
        >
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
            <path d="M17.7678 17.7678C18.2366 17.2989 18.5 16.663 18.5 16C18.5 15.337 18.2366 14.7011 17.7678 14.2322C17.2989 13.7634 16.663 13.5 16 13.5C15.337 13.5 14.7011 13.7634 14.2322 14.2322C13.7634 14.7011 13.5 15.337 13.5 16C13.5 16.663 13.7634 17.2989 14.2322 17.7678C14.7011 18.2366 15.337 18.5 16 18.5C16.663 18.5 17.2989 18.2366 17.7678 17.7678Z" fill="#001A4D" />
            <path d="M17.7678 29.2678C17.2989 29.7366 16.663 30 16 30C15.337 30 14.7011 29.7366 14.2322 29.2678C13.7634 28.7989 13.5 28.163 13.5 27.5C13.5 26.837 13.7634 26.2011 14.2322 25.7322C14.7011 25.2634 15.337 25 16 25C16.663 25 17.2989 25.2634 17.7678 25.7322C18.2366 26.2011 18.5 26.837 18.5 27.5C18.5 28.163 18.2366 28.7989 17.7678 29.2678Z" fill="#001A4D" />
            <path d="M17.7678 6.26777C18.2366 5.79893 18.5 5.16304 18.5 4.5C18.5 3.83696 18.2366 3.20107 17.7678 2.73223C17.2989 2.26339 16.663 2 16 2C15.337 2 14.7011 2.26339 14.2322 2.73223C13.7634 3.20107 13.5 3.83696 13.5 4.5C13.5 5.16304 13.7634 5.79893 14.2322 6.26777C14.7011 6.73661 15.337 7 16 7C16.663 7 17.2989 6.73661 17.7678 6.26777Z" fill="#001A4D" />
          </svg>
        </button>

        <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* FLUID LOGO: Scales proportionately between mobile (100x33) and desktop (127x42) */}
          <Image
            src="/images/logos/titancapitallogo.svg"
            alt="Titan Capital"
            width={127}
            height={42}
            priority
            className="h-[clamp(33px,2.91vw,42px)] w-[clamp(100px,8.81vw,127px)] object-cover brightness-0 invert"
          />
        </Link>

        {/* FLUID CTA BUTTON: Scales padding, font size, and dimensions smoothly */}
        <Link
          href="/get-investment"
          className="group relative flex h-[clamp(40px,3.26vw,47px)] w-[clamp(140px,12.98vw,187px)] shrink-0 items-center justify-center gap-[10px] overflow-hidden rounded-[9px] bg-white p-[clamp(8px,0.69vw,10px)] text-center font-['Libre_Baskerville',_serif] text-[clamp(14px,1.11vw,16px)] font-semibold leading-[107%] text-[#001A4D]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,#D6E4FF_0%,#FFFFFF_55%)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
          <span className="relative z-10">Get Investment</span>
        </Link>
      </nav>

     {/* =========================================
          FULL-SCREEN MENU OVERLAY (Open State)
          ========================================= */}
      <div
        className={`fixed inset-0 z-[50] flex ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div 
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer transition-opacity duration-500 ease-in-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)} 
          aria-label="Close menu by clicking outside"
        />

        {/*
          Container — sized to its ACTUAL content (no fixed max-w-[1051px]).
          When the right panel is closed, the container is just the width of
          the left panel. When opened, it grows. This is what kills the
          transparent strip the user complained about.
        */}
        <div
          className={`relative z-10 flex h-full max-w-full flex-col shadow-2xl transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >

          {/* Inner top navbar — spans whatever the container's current width is */}
          <div className="flex h-[var(--nav-height)] w-full shrink-0 items-center justify-between bg-[#001A4D] px-[clamp(24px,4.3vw,62px)]">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer transition-opacity hover:opacity-70"
              aria-label="Close Menu"
            >
              <svg className="h-[clamp(24px,1.94vw,28px)] w-[clamp(24px,1.94vw,28px)]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M14 16l-4-4 4-4" fill="white" />
              </svg>
            </button>

            {activeSubMenu && (
              <Image
                src="/images/logos/titancapitallogo.svg"
                alt="Titan Capital"
                width={127}
                height={42}
                className="h-[clamp(33px,2.91vw,42px)] w-[clamp(100px,8.81vw,127px)] object-cover brightness-0 invert"
              />
            )}
          </div>

          <div className="flex flex-1 overflow-hidden bg-transparent">

            {/* LEFT PANEL — always visible, fixed clamp width */}
            <div className="flex h-full w-[clamp(350px,40.13vw,578px)] shrink-0 flex-col overflow-y-auto bg-[#001A4D] pt-[clamp(16px,1.38vw,20px)] pb-[clamp(60px,6.8vw,98px)]">
              <div className="mb-[clamp(16px,1.38vw,20px)] px-[clamp(24px,2.5vw,36px)]">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-['Libre_Baskerville',_serif] text-[clamp(14px,1.11vw,16px)] font-medium tracking-wide text-white transition-opacity hover:opacity-80"
                >
                  HOME
                </Link>
              </div>

              <div className="flex w-full flex-col">
                {menuData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSubMenu(item.id === activeSubMenu ? null : item.id)}
                    className={`flex w-full cursor-pointer items-center justify-between px-[clamp(24px,2.5vw,36px)] py-[clamp(12px,1.11vw,16px)] transition-colors duration-200 ${
                      activeSubMenu === item.id ? "bg-[#002868]" : "hover:bg-[#002868]/40"
                    }`}
                  >
                    <span className="font-['Libre_Baskerville',_serif] text-[clamp(24px,2.5vw,36px)] font-medium leading-[150%] text-white">
                      {item.title}
                    </span>

                    <svg width="12" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/*
              RIGHT PANEL — width animates 0 ↔ design width.
              - shrink-0 so the inner fixed-width content doesn't collapse
              - overflow-hidden so content clips during the slide-in/out
              - transition-[width] not transform: the container itself grows,
                so there's never an empty layout slot beside the left panel
            */}
            <div
              className={`h-full shrink-0 overflow-hidden bg-[#FBF7F0] transition-[width] duration-500 ease-in-out ${
                activeSubMenu ? "w-[clamp(250px,32.84vw,473px)]" : "w-0"
              }`}
              aria-hidden={!activeSubMenu}
            >
              {/* Inner content holds its full design width even when the outer is 0 */}
              <div className="flex h-full w-[clamp(250px,32.84vw,473px)] flex-col overflow-y-auto">
                <div className="flex flex-col items-start gap-[clamp(12px,1.38vw,20px)] px-[clamp(24px,2.77vw,40px)] pt-[clamp(16px,4.16vw,60px)]">
                  {menuData
                    .find((m) => m.id === activeSubMenu)
                    ?.subItems.map((subItem, idx) => (
                      <Link
                        key={idx}
                        href={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="font-['Poppins',_sans-serif] text-[clamp(18px,1.66vw,24px)] font-normal leading-[150%] text-[#0E0E0E] transition-colors hover:text-[#001A4D]"
                      >
                        {subItem}
                      </Link>
                    ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
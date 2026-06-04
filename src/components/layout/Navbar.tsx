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
  
  // Defaulting to "for-founders" so the sub-menu is populated immediately on desktop
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>("for-founders");

  // Lock body scroll when the full-screen menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
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
      <nav className="fixed left-0 top-0 z-[40] flex h-[77px] w-full items-center justify-between bg-[linear-gradient(90deg,#001A4D_0%,#001A4D_58.17%,#003C82_74.52%,#06C_89.42%,#001A4D_100%)] px-4 md:px-[62px]">
        
        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex h-[41px] w-[41px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-white p-[8px] transition-opacity hover:opacity-90 md:p-[13px]"
          aria-label="Open Menu"
        >
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
            <path d="M17.7678 17.7678C18.2366 17.2989 18.5 16.663 18.5 16C18.5 15.337 18.2366 14.7011 17.7678 14.2322C17.2989 13.7634 16.663 13.5 16 13.5C15.337 13.5 14.7011 13.7634 14.2322 14.2322C13.7634 14.7011 13.5 15.337 13.5 16C13.5 16.663 13.7634 17.2989 14.2322 17.7678C14.7011 18.2366 15.337 18.5 16 18.5C16.663 18.5 17.2989 18.2366 17.7678 17.7678Z" fill="#001A4D" />
            <path d="M17.7678 29.2678C17.2989 29.7366 16.663 30 16 30C15.337 30 14.7011 29.7366 14.2322 29.2678C13.7634 28.7989 13.5 28.163 13.5 27.5C13.5 26.837 13.7634 26.2011 14.2322 25.7322C14.7011 25.2634 15.337 25 16 25C16.663 25 17.2989 25.2634 17.7678 25.7322C18.2366 26.2011 18.5 26.837 18.5 27.5C18.5 28.163 18.2366 28.7989 17.7678 29.2678Z" fill="#001A4D" />
            <path d="M17.7678 6.26777C18.2366 5.79893 18.5 5.16304 18.5 4.5C18.5 3.83696 18.2366 3.20107 17.7678 2.73223C17.2989 2.26339 16.663 2 16 2C15.337 2 14.7011 2.26339 14.2322 2.73223C13.7634 3.20107 13.5 3.83696 13.5 4.5C13.5 5.16304 13.7634 5.79893 14.2322 6.26777C14.7011 6.73661 15.337 7 16 7C16.663 7 17.2989 6.73661 17.7678 6.26777Z" fill="#001A4D" />
          </svg>
        </button>

        <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/logos/titancapitallogo.svg"
            alt="Titan Capital"
            width={127}
            height={42}
            priority
            className="h-[33px] w-[100px] object-cover brightness-0 invert md:h-[42px] md:w-[127px]"
          />
        </Link>

        {/* HOVER-ACTIVATED LIGHT GRADIENT */}
        <Link
          href="/get-investment"
          className="group relative flex h-[40px] w-auto shrink-0 items-center justify-center gap-[10px] overflow-hidden rounded-[9px] bg-white px-[16px] text-center font-['Libre_Baskerville',_serif] text-[14px] font-semibold leading-[107%] text-[#001A4D] md:h-[47px] md:w-[187px] md:p-[10px] md:text-[16px]"
        >
          {/* The gradient layer (Invisible by default, fades in on hover) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,#D6E4FF_0%,#FFFFFF_55%)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
          
          <span className="relative z-10">Get Investment</span>
        </Link>
      </nav>

      {/* =========================================
          FULL-SCREEN MENU OVERLAY (Open State)
          ========================================= */}
      <div
        className={`fixed inset-0 z-[50] flex transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Container: Max width matches the combined width of Left (578px) + Right (473px) panels = 1051px */}
        <div className="relative z-10 flex h-full w-full max-w-[1051px] flex-col shadow-2xl">
          
          {/* INNER NAVBAR: Constrained exactly to the 1051px container */}
          <div className="flex h-[77px] w-full shrink-0 items-center justify-between bg-[#001A4D] px-6 md:px-[62px]">
            {/* Back Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer transition-opacity hover:opacity-70"
              aria-label="Close Menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M14 16l-4-4 4-4" fill="white" />
              </svg>
            </button>

            {/* Titan Capital Logo on the right side of the constrained nav */}
            <Image
              src="/images/logos/titancapitallogo.svg"
              alt="Titan Capital"
              width={127}
              height={42}
              className="h-[33px] w-[100px] object-cover brightness-0 invert md:h-[42px] md:w-[127px]"
            />
          </div>

          {/* MENU BODY: Left Panel & Right Panel */}
          <div className="relative flex flex-1 w-full overflow-hidden bg-transparent">
            
            {/* --- LEFT PANEL: Categories (578px) --- */}
            <div className="flex h-full w-full flex-col overflow-y-auto bg-[#001A4D] pt-4 md:w-[578px] md:pt-[20px] pb-[98px]">
              <div className="mb-[20px] px-6 md:px-[36px]">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-['Libre_Baskerville',_serif] text-[16px] font-medium tracking-wide text-white transition-opacity hover:opacity-80"
                >
                  HOME
                </Link>
              </div>

              <div className="flex w-full flex-col">
                {menuData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSubMenu(item.id === activeSubMenu ? null : item.id)}
                    className={`flex w-full cursor-pointer items-center justify-between px-6 py-[16px] transition-colors duration-200 md:px-[36px] ${
                      activeSubMenu === item.id ? "bg-[#002868]" : "hover:bg-[#002868]/40"
                    }`}
                  >
                    <span className="font-['Libre_Baskerville',_serif] text-[clamp(28px,3vw,36px)] font-medium leading-[150%] text-white">
                      {item.title}
                    </span>
                    
                    <svg width="12" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* --- RIGHT PANEL: Subcategories (473px) --- */}
            <div
              className={`absolute left-0 top-0 flex h-full w-full flex-col overflow-y-auto bg-[#FBF7F0] transition-transform duration-500 ease-in-out md:relative md:w-[473px] ${
                activeSubMenu 
                  ? "translate-x-0 md:translate-x-0" 
                  : "translate-x-full md:translate-x-full"
              }`}
            >
              <button
                className="mb-8 mt-6 flex cursor-pointer items-center gap-2 px-8 font-['Poppins',_sans-serif] font-medium text-[#001A4D] md:hidden"
                onClick={() => setActiveSubMenu(null)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Back to Categories
              </button>

              <div className="flex flex-col items-start gap-[20px] px-8 pt-4 md:px-[40px] md:pt-[60px]">
                {menuData
                  .find((m) => m.id === activeSubMenu)
                  ?.subItems.map((subItem, idx) => (
                    <Link
                      key={idx}
                      href={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="font-['Poppins',_sans-serif] text-[24px] font-normal leading-[150%] text-[#0E0E0E] transition-colors hover:text-[#001A4D]"
                    >
                      {subItem}
                    </Link>
                  ))}
              </div>
            </div>
            
          </div>
        </div>

        {/* --- BLURRY BACKDROP OVERLAY --- */}
        {/* Fills the remaining right side of the screen on ultra-wide desktop monitors */}
        <div 
          className="hidden h-full flex-1 md:block bg-black/40 backdrop-blur-sm cursor-pointer transition-opacity" 
          onClick={() => setIsMenuOpen(false)} 
          aria-label="Close menu by clicking outside"
        />

        {/* Mobile-only backdrop (just in case) */}
        <div 
          className="absolute inset-0 -z-10 bg-black/40 backdrop-blur-sm md:hidden" 
          onClick={() => setIsMenuOpen(false)} 
        />
      </div>
    </>
  );
}
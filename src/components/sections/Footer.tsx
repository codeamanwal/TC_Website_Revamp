"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { title: "Home", links: [] },
  { title: "About", links: ["Our Story", "Teams", "Indicorns"] },
  { title: "For Founder", links: ["Get Investment", "Beyond Cheque", "Titan Seed Fund", "Titan Winner Fund"] },
  { title: "Portfolio", links: ["Our Portfolio"] },
  { title: "Community", links: ["Founder Story", "Titan Ecosystem"] },
  { title: "Perspective", links: ["Blogs/News/Events"] },
];

export default function Footer() {
  return (
    <footer className="relative flex w-full h-[696px] flex-col items-center overflow-hidden bg-white pt-[40px] shadow-[0_-3px_27.6px_0_rgba(178,178,178,0.25)]">
      
      {/* Inner Content Wrapper */}
      <div className="relative z-10 flex h-full w-full max-w-[1440px] flex-col px-12">
        
        {/* =========================================
            TOP SECTION: Logo & Navigation Grid
            ========================================= */}
        <div className="flex w-full justify-between">
          
          {/* Left: Logo, Address, Socials */}
          <div className="flex flex-col gap-6">
            <div className="relative h-[71px] w-[219px]">
              <Image
                src="/images/logos/titancapitallogo.svg" 
                alt="Titan Capital"
                fill
                className="object-contain"
              />
            </div>
            
            <p className="font-poppins text-[14px] font-normal text-[#0E0E0E]">
              M3M Urbana, Sector 67, Gurugram, India
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link href="#" className="transition hover:opacity-70">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0E0E0E" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452H16.89V14.881C16.89 13.554 16.865 11.848 15.088 11.848C13.285 11.848 13.009 13.255 13.009 14.786V20.452H9.453V8.997H12.87V10.56H12.918C13.395 9.654 14.563 8.685 16.291 8.685C19.897 8.685 20.447 11.056 20.447 14.169V20.452ZM5.337 7.433C4.196 7.433 3.272 6.505 3.272 5.369C3.272 4.233 4.196 3.305 5.337 3.305C6.476 3.305 7.4 4.233 7.4 5.369C7.4 6.505 6.476 7.433 5.337 7.433ZM7.118 20.452H3.555V8.997H7.118V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 23.996 23.227 23.996 22.271V1.729C23.996 0.774 23.2 0 22.225 0Z" />
                </svg>
              </Link>
              <Link href="#" className="transition hover:opacity-70">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0E0E0E" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.901 1.153H22.581L14.541 10.339L24 22.846H16.596L10.794 15.263L4.148 22.846H0.466L9.043 13.037L0 1.153H7.593L12.836 8.082L18.901 1.153ZM17.611 20.644H19.65L6.486 3.24H4.309L17.611 20.644Z" />
                </svg>
              </Link>
              <Link href="#" className="transition hover:opacity-70">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Navigation Links */}
          <div className="flex gap-[60px]">
            {navLinks.map((section, idx) => (
              <div key={idx} className="flex flex-col items-start gap-4">
                <h3 className="font-poppins text-[20px] font-medium text-[#001A4D]">
                  {section.title}
                </h3>
                {section.links.length > 0 && (
                  <ul className="flex flex-col gap-3">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link href="#" className="font-poppins text-[14px] font-normal leading-[1.5] text-[#0E0E0E] transition hover:text-[#001A4D]">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Flexible spacer pushes everything below to the bottom */}
        <div className="flex-1"></div>

        {/* =========================================
            MIDDLE SECTION: SEBI Text & Email Address 
            ========================================= */}
        <div className="flex w-full items-end justify-between pb-6">
          <p className="max-w-[360px] font-poppins text-[14px] font-normal leading-[1.5] text-[#0E0E0E]">
            SEBI registration disclaimer for Winners Fund this is mandatory.
          </p>
          <a 
            href="mailto:startups@titancapital.vc" 
            className="font-poppins text-[46px] font-semibold text-[#111] transition hover:opacity-70"
          >
            startups@titancapital.vc
          </a>
        </div>

        {/* =========================================
            DIVIDER LINE
            ========================================= */}
        <div className="mb-6 h-[1px] w-full bg-[#B2B2B2] opacity-50"></div>

        {/* =========================================
            BOTTOM SECTION: Copyright & Links
            FIX: Added mb-[150px] to push this entire block safely ABOVE the watermark!
            ========================================= */}
        <div className="mb-[150px] flex w-full justify-between font-poppins text-[24px] font-normal leading-[1.5] text-[#001A4D]">
          <p>© 2026 Titan Capital. All rights reserved.</p>
          <div className="flex gap-10">
            <Link href="#" className="underline decoration-1 underline-offset-4 transition hover:opacity-70">
              Privacy Policy
            </Link>
            <Link href="#" className="underline decoration-1 underline-offset-4 transition hover:opacity-70">
              Terms and Conditions
            </Link>
          </div>
        </div>

      </div>

      {/* =========================================
          GIANT WATERMARK
          Absolutely positioned at the very bottom
          ========================================= */}
      <div className="pointer-events-none absolute bottom-[-40px] flex w-full justify-center overflow-hidden">
        <h1 className="select-none text-center font-poppins text-[150px] font-bold leading-[1.502] tracking-[22.5px] bg-[linear-gradient(0deg,#DBDBDB_26.78%,#EBEBEB_70.55%)] bg-clip-text text-transparent">
          TITAN CAPITAL
        </h1>
      </div>

    </footer>
  );
}
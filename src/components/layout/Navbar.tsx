"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT: Three dots menu button */}
      <button className="navbar__menu-btn" aria-label="Menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M17.7678 17.7678C18.2366 17.2989 18.5 16.663 18.5 16C18.5 15.337 18.2366 14.7011 17.7678 14.2322C17.2989 13.7634 16.663 13.5 16 13.5C15.337 13.5 14.7011 13.7634 14.2322 14.2322C13.7634 14.7011 13.5 15.337 13.5 16C13.5 16.663 13.7634 17.2989 14.2322 17.7678C14.7011 18.2366 15.337 18.5 16 18.5C16.663 18.5 17.2989 18.2366 17.7678 17.7678Z" fill="#001A4D"/>
          <path d="M17.7678 29.2678C17.2989 29.7366 16.663 30 16 30C15.337 30 14.7011 29.7366 14.2322 29.2678C13.7634 28.7989 13.5 28.163 13.5 27.5C13.5 26.837 13.7634 26.2011 14.2322 25.7322C14.7011 25.2634 15.337 25 16 25C16.663 25 17.2989 25.2634 17.7678 25.7322C18.2366 26.2011 18.5 26.837 18.5 27.5C18.5 28.163 18.2366 28.7989 17.7678 29.2678Z" fill="#001A4D"/>
          <path d="M17.7678 6.26777C18.2366 5.79893 18.5 5.16304 18.5 4.5C18.5 3.83696 18.2366 3.20107 17.7678 2.73223C17.2989 2.26339 16.663 2 16 2C15.337 2 14.7011 2.26339 14.2322 2.73223C13.7634 3.20107 13.5 3.83696 13.5 4.5C13.5 5.16304 13.7634 5.79893 14.2322 6.26777C14.7011 6.73661 15.337 7 16 7C16.663 7 17.2989 6.73661 17.7678 6.26777Z" fill="#001A4D"/>
        </svg>
      </button>

      {/* CENTER: Titan Capital Logo (white) */}
      <Link href="/" className="navbar__logo-wrapper">
        <Image
          src="/images/logos/titancapitallogo.svg"
          alt="Titan Capital"
          width={179}
          height={58}
          priority
          className="navbar__logo"
        />
      </Link>

      {/* RIGHT: Get Investment button */}
      <Link href="/get-investment" className="navbar__cta">
        Get Investment
      </Link>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

/*
  LAYOUT (matches reference screenshot):

  ┌──────────────────────────────────────────────────────┐
  │ TV FRAME                                              │
  │  ┌─────────────────────────────────────┐  ┌──────┐  │
  │  │ SCREEN AREA (overflow-hidden)        │  │dials │  │
  │  │                                      │  │      │  │
  │  │  ┌─ Name (top-left)                  │  │      │  │
  │  │  │                                   │  │      │  │
  │  │  │  Role (below name)        ┌─────┐ │  │      │  │
  │  │  │                           │photo│ │  │      │  │
  │  │  │                           │ on  │ │  │      │  │
  │  │  │                           │right│ │  │      │  │
  │  │  │  Logo (bottom-left)       └─────┘ │  │      │  │
  │  │  └───────────────────────────────────┘  └──────┘  │
  │  └──────────────────────────────────────┘            │
  └──────────────────────────────────────────────────────┘

  Everything (photo + name + role + logo) is INSIDE the screen area with
  overflow-hidden — nothing bleeds into the dials column, nothing gets
  obscured by the TV bezel. The TV SVG sits at a LOWER z-index than the
  content so the screen cutout shows through cleanly.

  Z-ORDER:
    z-[0]   TV SVG (frame + bezel + dials + transparent screen)
    z-[10]  Screen content (photo + text + logo) — all clipped by screen area
*/

const slides = [
  {
    name: "Ashish Mahopatra",
    role: "Co-Founder and CEO, OfBusiness",
    image: "/images/misc/5.webp",
    logo: "/images/logos/Ofbusiness.webp",
    text: `"We left our careers, put everything into a baby care brand nobody asked for, and built it into India's first D2C IPO"`,
  },
  {
    name: "Abhishek Bansal",
    role: "Co-Founder and CEO, Shadowfax",
    image: "/images/misc/6.webp",
    logo: "/images/logos/Shadowfax.svg",
    text: `"In India, logistics isn't just about speed. It's about reaching the right place even when the address is wrong."`,
  },
  {
    name: "Harshil\nMathur",
    role: "Co-founder and CEO of Razorpay",
    image: "/images/misc/3.webp",
    logo: "/images/logos/Razorpay.webp",
    text: `"We believed in Harshil's mission to simplify payments for every business in India."`,
  },
];

export default function FeaturedFounderStory() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  /* ── TV glitch ── */
  const tvGlitch: Variants = {
    initial: { opacity: 0, filter: "brightness(0%) grayscale(100%)", scaleY: 0.01 },
    animate: { opacity: 1, filter: "brightness(100%) grayscale(0%)", scaleY: 1, transition: { duration: 0.35, ease: "easeOut" } },
    exit:    { opacity: 0, filter: "brightness(0%) grayscale(100%)", scaleY: 0.01, transition: { duration: 0.15, ease: "easeIn" } },
  };

  /* ── Heading entrance ── */
  const h1v: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const hlv: Variants = { hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 0.6 } } };
  const h2v: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 1.1 } } };

  return (
    <section
      className="flex w-full flex-col items-center justify-start bg-white"
      style={{
        gap:           "clamp(10px, min(1.66vw, 2.44vh), 24px)",
        paddingTop:    "clamp(24px, min(3.33vw, 4.89vh), 48px)",
        paddingBottom: "clamp(24px, min(3.33vw, 4.89vh), 48px)",
        paddingLeft:   "clamp(16px, 3vw, 48px)",
        paddingRight:  "clamp(16px, 3vw, 48px)",
      }}
    >

      {/* ── 1. Heading ── */}
      <motion.div
        className="mx-auto flex w-full max-w-[828px] flex-col items-center justify-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="m-0 text-center font-['Libre_Baskerville',_serif] font-bold italic leading-[1.2] text-[#001A4D]"
          style={{ fontSize: "clamp(20px, min(3.33vw, 4.89vh), 48px)" }}
          variants={h1v}
        >
          <span className="relative inline-block overflow-hidden px-2.5" style={{ background: "transparent" }}>
            <motion.span className="absolute inset-0 z-0 bg-[#D3E2FF]" style={{ transformOrigin: "left" }} variants={hlv} />
            <span className="relative z-10">Their stories,</span>
          </span>
        </motion.h2>

        <motion.h2
          className="m-0 mt-1 text-center font-['Libre_Baskerville',_serif] font-semibold leading-[1.2] text-[#001A4D]"
          style={{ fontSize: "clamp(20px, min(3.33vw, 4.89vh), 48px)" }}
          variants={h2v}
        >
          our credentials
        </motion.h2>
      </motion.div>

      {/* ── 2. TV wrapper ── */}
      <div
        className="relative w-full"
        style={{ maxWidth: "clamp(280px, min(45.13vw, 66.19vh), 650px)" }}
      >

        {/* ── 2a. TV SVG — base layer (z-0) ── */}
        <Image
          src="/images/misc/television.svg"
          alt="Television frame"
          width={800}
          height={500}
          className="pointer-events-none relative z-0 block h-auto w-full"
          sizes="(max-width: 1440px) min(45vw, 66vh), 650px"
          priority
        />

        {/* ── 2b. Screen area — overflow-hidden, ALL content clipped to screen ──
            Percentages match the TV SVG screen cutout: left 8%, top 13%,
            width 58%, height 72%.
        ── */}
        <div className="absolute left-[8%] top-[13%] z-[10] h-[72%] w-[58%] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`slide-${current}`}
              variants={tvGlitch}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative h-full w-full"
            >

              {/* Founder photo — right side, fills full height (cropped via cover) */}
              <div
                className="absolute"
                style={{
                  right:  "0%",
                  top:    "0%",
                  bottom: "0%",
                  width:  "45%",
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.name.replace("\n", " ")}
                  fill
                  sizes="(max-width: 1440px) 20vw, 290px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>

              {/* Name — top-left */}
              <h3
                className="absolute m-0 font-['Libre_Baskerville',_serif] text-black"
                style={{
                  top:             "15%",
                  left:            "6%",
                  width:           "55%",
                  fontSize:        "clamp(11px, min(1.38vw, 2.04vh), 20px)",
                  fontWeight:      700,
                  lineHeight:      "100%",
                  whiteSpace:      "pre-wrap",
                  display:         "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow:        "hidden",
                }}
              >
                {slide.name}
              </h3>

              {/* Role — directly under name */}
              <p
                className="absolute m-0 font-['Poppins',_sans-serif] text-black"
                style={{
                  top:             "36%",
                  left:            "6%",
                  width:           "50%",
                  fontSize:        "clamp(9px, min(0.83vw, 1.22vh), 12px)",
                  fontWeight:      300,
                  lineHeight:      "119%",
                  display:         "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow:        "hidden",
                }}
              >
                {slide.role}
              </p>

              {/* Logo — bottom-left */}
              <div
                className="absolute"
                style={{
                  bottom: "12%",
                  left:   "6%",
                }}
              >
                <Image
                  src={slide.logo}
                  alt="Company logo"
                  width={148}
                  height={52}
                  style={{
                    objectFit:      "contain",
                    objectPosition: "left",
                    width:          "clamp(50px, min(8.61vw, 12.63vh), 124px)",
                    height:         "clamp(18px, min(3.02vw,  4.43vh),  44px)",
                    aspectRatio:    "37/13",
                  }}
                />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* ── 3. Quote text ── */}
      <AnimatePresence mode="wait">
        <motion.p
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="m-0 mx-auto w-full max-w-[600px] text-center font-['Poppins',sans-serif] font-normal leading-[1.5] text-black"
          style={{ fontSize: "clamp(11px, min(1.11vw, 1.63vh), 16px)" }}
        >
          {slide.text}
        </motion.p>
      </AnimatePresence>

      {/* ── 4. CTA button ── */}
      <button
        className="flex shrink-0 cursor-pointer items-center justify-center gap-[10px] rounded-[9px] border-none bg-[#001A4D] font-['Libre_Baskerville',_serif] font-semibold text-white transition-all duration-300 ease-in-out hover:opacity-90"
        style={{
          height:   "clamp(38px, min(3.75vw, 5.5vh),  54px)",
          width:    "clamp(120px, min(11.6vw, 17.02vh), 167px)",
          fontSize: "clamp(11px, min(1.04vw, 1.53vh),  15px)",
          padding:  "clamp(6px, 0.69vw, 10px)",
        }}
      >
        Read full story
      </button>

      {/* ── 5. Pagination dots ── */}
      <div className="flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`cursor-pointer border-none p-0 transition-all duration-300 ease-in-out ${
              current === i
                ? "h-[12px] w-8 rounded-[10px] bg-[#001A4D]"
                : "h-[12px] w-[12px] rounded-full bg-[#D3E2FF]"
            }`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

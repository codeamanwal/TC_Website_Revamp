"use client";

import { motion, Variants } from "framer-motion";

const lookForData = [
  {
    title: "A founder with genuine insight.",
    desc: "You understand your customer's problem better than anyone. Not just from research, but from experience, obsession, or lived reality.",
  },
  {
    title: "A market worth fighting for.",
    desc: "Large enough to build a meaningful company, underserved enough that there's real territory to take. We're especially drawn to markets others have written off.",
  },
  {
    title: "A differentiated approach.",
    desc: "Technology, distribution, or business model edge. Something that makes your company structurally hard to copy.",
  },
  {
    title: "Ambition to build a lasting, enduring business.",
    desc: "Building for 10 years, not for the next fundraise. Something that outlasts any one cycle.",
  },
  {
    title: "Integrity and coachability.",
    desc: "We'll push you, challenge you, and occasionally disagree with you. We need founders who can handle that, and push back when they're right.",
  },
];

export default function WhatWeLookFor() {
  // ── ANIMATION VARIANTS ──

  // Staggered Container for Grid Items
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Fade up for each individual feature item (text only)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Tick marks draw one by one AFTER all text has appeared
  // 5 items × 0.15s stagger + 0.2s delayChildren + 0.4s duration ≈ 1.35s total for text
  const getDrawTick = (itemIndex: number): Variants => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.4 + itemIndex * 0.3,
      },
    },
  });

  return (
    <section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white"
      style={{
        paddingTop: "clamp(40px, min(6.94vw, 10.18vh), 100px)",
        paddingBottom: "clamp(40px, min(6.94vw, 10.18vh), 100px)",
        paddingLeft: "var(--section-px-wide)",
        paddingRight: "var(--section-px-wide)",
      }}
    >

      {/* ── INNER WRAPPER ── */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">

        {/* ── TOP LEFT: HEADING ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-[clamp(30px,4.5vw,52px)] flex w-full flex-col items-start"
        >
          <motion.h2
            className="m-0 font-['Libre_Baskerville',_serif] text-[length:var(--heading-xl)] max-md:!text-[28px] font-semibold not-italic leading-none text-[#001A4D]"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } }
            }}
          >
            What We
          </motion.h2>
          <motion.span
            className="relative mt-[clamp(4px,0.5vw,8px)] inline-flex items-center justify-center overflow-hidden px-[4px] py-[8px] md:px-[6px] md:py-[10px] bg-transparent"
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
            }}
          >
            <motion.span
              className="absolute inset-0 z-0 bg-[#D3E2FF] h-full w-full"
              style={{ transformOrigin: "left" }}
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeInOut", delay: 0.7 } }
              }}
            />
            <span className="relative z-10 font-['Libre_Baskerville',_serif] text-[length:var(--heading-xl)] max-md:!text-[28px] font-semibold italic leading-none text-[#001A4D]">
              Look for
            </span>
          </motion.span>
        </motion.div>

        {/* ── BOTTOM: CONTENT GRID (More compact spacing and text sizing) ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid w-full grid-cols-1 gap-x-[clamp(24px,4vw,48px)] gap-y-[clamp(24px,4vw,44px)] md:grid-cols-2"
        >
          {lookForData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-row items-start gap-[clamp(10px,1.5vw,18px)]"
            >
              {/* ── ICON ── */}
              <div className="shrink-0 pt-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="clamp(40px, 5vw, 64px)"
                  height="clamp(40px, 5vw, 64px)"
                  viewBox="0 0 97 97"
                  fill="none"
                  className="w-[clamp(40px,5vw,64px)] h-[clamp(40px,5vw,64px)]"
                >
                  <motion.path variants={getDrawTick(index)} d="M30 16 H 22 A 6 6 0 0 0 16 22 V 30" stroke="#111" strokeWidth="4.5" strokeLinecap="round" />
                  <motion.path variants={getDrawTick(index)} d="M16 67 V 75 A 6 6 0 0 0 22 81 H 30" stroke="#111" strokeWidth="4" strokeLinecap="round" />
                  <motion.path variants={getDrawTick(index)} d="M67 81 H 75 A 6 6 0 0 0 81 75 V 67" stroke="#111" strokeWidth="4" strokeLinecap="round" />
                  <motion.path variants={getDrawTick(index)} d="M81 30 V 22 A 6 6 0 0 0 75 16 H 67" stroke="#111" strokeWidth="4" strokeLinecap="round" />
                  <motion.path
                    variants={getDrawTick(index)}
                    d="M20.0801 58.2296C20.0801 58.2296 26.1038 58.2296 34.1355 72.285C34.1355 72.285 56.4595 35.4719 76.3018 28.1108"
                    stroke="#111"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* ── TEXT CONTENT ── */}
              <div className="flex w-full max-w-[380px] flex-col items-start justify-start gap-1">
                {/* SUBHEADING: Scaled down to max 22px */}
                <h3 className="font-['Poppins',_sans-serif] text-left font-medium leading-[115%] text-[#001A4D] text-[clamp(15px,1.6vw,22px)]">
                  {item.title}
                </h3>
                {/* DESCRIPTION: Scaled down to max 16px */}
                <p className="font-['Poppins',_sans-serif] font-normal leading-[145%] text-[#555] text-[clamp(12px,1.2vw,16px)]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
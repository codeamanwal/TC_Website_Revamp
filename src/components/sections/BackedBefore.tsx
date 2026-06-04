"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// ROW 1: 10 Companies
const row1Companies = [
  { name: "Ola", logoSrc: "/images/logos/ola.svg", scaleClass: "scale-[0.8]" },
  { name: "Urban Company", logoSrc: "/images/logos/Urban Company.webp", scaleClass: "" }, 
  { name: "Mamaearth", logoSrc: "/images/logos/mamaearthpng.webp", scaleClass: "scale-[1.4]" },
  { name: "Shadowfax", logoSrc: "/images/logos/Shadowfax.svg", scaleClass: "scale-[1.2]" },
  { name: "Razorpay", logoSrc: "/images/logos/Razorpay.webp", scaleClass: "scale-[1.4]" },
  { name: "Ofbusiness", logoSrc: "/images/logos/Ofbusiness.webp", scaleClass: "scale-[1.8]" },
  { name: "Cart.com", logoSrc: "/images/logos/Cart.com.webp", scaleClass: "scale-[1.4]" },
  { name: "Unicommerce", logoSrc: "/images/logos/unicommerce-logo.svg", scaleClass: "" },
  { name: "Snapdeal", logoSrc: "/images/logos/snapdeal-company-1.webp", scaleClass: "scale-[1.4]" },
  { name: "Credgenics", logoSrc: "/images/logos/Credgenics.svg", scaleClass: "scale-[1.4]" }, 
];

// ROW 2: 13 Companies
const row2Companies = [
  { name: "Giva", logoSrc: "/images/logos/GIVA.webp", scaleClass: "scale-[0.8]" },
  { name: "Boba Bhai", logoSrc: "/images/logos/bobaBhai.webp", scaleClass: "" },
  { name: "Invideo", logoSrc: "/images/logos/invideo.svg", scaleClass: "" },
  { name: "Park+", logoSrc: "/images/logos/Park+.webp", scaleClass: "scale-[1.4]" },
  { name: "Renee", logoSrc: "/images/logos/RENEE.svg", scaleClass: "" }, 
  { name: "Supertails", logoSrc: "/images/logos/Supertails.png", scaleClass: "scale-[1.4]" }, 
  { name: "Zingbus", logoSrc: "/images/logos/zingbus.webp", scaleClass: "" },
  { name: "Anveshan", logoSrc: "/images/logos/anveshan.webp", scaleClass: "" },
  { name: "Kutumb", logoSrc: "/images/logos/Kutumb.webp", scaleClass: "" },
  { name: "Magma", logoSrc: "/images/logos/magma factory.webp", scaleClass: "scale-[2.4]" },
  { name: "Mekr", logoSrc: "/images/logos/mekr.webp", scaleClass: "" },
  { name: "Powerhouse 91", logoSrc: "/images/logos/powerhouse.webp", scaleClass: "scale-[1.4]" },
  { name: "Zouk", logoSrc: "/images/logos/zouk_new_logo.webp", scaleClass: "scale-[0.8]" },
];

export default function BackedBefore() {
  const loopPoolRow1 = [...row1Companies, ...row1Companies, ...row1Companies];
  const loopPoolRow2 = [...row2Companies, ...row2Companies, ...row2Companies];

  return (
    <section className="backed">
      
      {/* =========================================
          ANIMATED SCROLL HEADING SEQUENCE
          ========================================= */}
      <div className="backed__heading flex flex-col items-center mb-8">
        
        {/* Parent container triggering the sequence when 80% visible */}
        <motion.h2 
          className="backed__title-italic"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          {/* 1. The Text Container sliding in from Left to Right */}
          <motion.span 
            className="backed__highlight relative overflow-hidden !bg-transparent inline-flex"
            variants={{
              hidden: { opacity: 0, x: -80 }, // Starts invisible and 80px to the left
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { duration: 0.9, ease: "easeOut" } 
              }
            }}
          >
            {/* 2. The Blue Highlight sweeping from Left to Right */}
            <motion.span
              className="absolute inset-0 bg-[#d3e2ff] z-[-1]"
              variants={{
                hidden: { scaleX: 0 },
                visible: { 
                  scaleX: 1, 
                  transition: { duration: 0.9, ease: "easeInOut", delay: 0.35 } // Sweeps right after text arrives
                }
              }}
              style={{ transformOrigin: "left" }} 
            />
            
            {/* The actual text */}
            <span className="relative z-10">Backed before</span>
          </motion.span>
        </motion.h2>

        {/* 3. "anyone else did" sliding up from the bottom */}
        <motion.h2 
          className="backed__title mt-2"
          initial={{ opacity: 0, y: 40 }} // Starts lower down
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.7 }} // Triggers as the highlight finishes
        >
          anyone else did
        </motion.h2>
      </div>


      {/* =========================================
          TRACK ONE: Left to Right
          ========================================= */}
      <div className="group flex w-full overflow-hidden relative py-6 mt-6">
        <div className="flex w-max gap-20 pr-20 items-center animate-[marquee-right_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          {loopPoolRow1.map((company, i) => (
            <motion.div
              key={`row1-${company.name}-${i}`}
              className="relative flex shrink-0 items-center justify-center h-[45px] w-[140px] select-none cursor-pointer"
              whileHover={{ scale: 1.15, filter: "brightness(1.08)" }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <div className={`relative w-full h-full ${company.scaleClass}`}>
                <Image
                  src={company.logoSrc}
                  alt={company.name}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="140px"
                  priority={i < 10}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =========================================
          TRACK TWO: Right to Left
          ========================================= */}
      <div className="group flex w-full overflow-hidden relative py-6 mt-2">
        <div className="flex w-max gap-20 pr-20 items-center animate-[marquee-left_35s_linear_infinite] group-hover:[animation-play-state:paused]">
          {loopPoolRow2.map((company, i) => (
            <motion.div
              key={`row2-${company.name}-${i}`}
              className="relative flex shrink-0 items-center justify-center h-[45px] w-[140px] select-none cursor-pointer"
              whileHover={{ scale: 1.15, filter: "brightness(1.08)" }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <div className={`relative w-full h-full ${company.scaleClass}`}>
                <Image
                  src={company.logoSrc}
                  alt={company.name}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="140px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
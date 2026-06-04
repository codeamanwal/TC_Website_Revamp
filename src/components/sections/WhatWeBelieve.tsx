"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const beliefs = [
  {
    title: "Founder-First, Always",
    description:
      "We back people before we back markets. Great founders always figure it out, and we help them do that.",
  },
  {
    title: "Conviction Over Consensus",
    description:
      "We don’t follow the herd. We invest where we see long-term asymmetric potential, often before the market agrees. Our best bets have always looked early and unusual.",
  },
  {
    title: "Built for Endurance",
    description:
      "We don’t just write a cheque and move on. We partner beyond capital, through hiring, pivots, fundraising, and the moments that don’t make it to the press release.",
  },
];

export default function WhatWeBelieve() {
  
  // Slow, elegant fan-out for the cards
  const getCardVariants = (index: number): Variants => {
    if (index === 0) {
      return {
        hidden: { opacity: 0, x: "105%", zIndex: 0 },
        visible: { 
          opacity: 1, 
          x: 0, 
          zIndex: 1, 
          transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 } 
        },
      };
    }
    if (index === 2) {
      return {
        hidden: { opacity: 0, x: "-105%", zIndex: 0 },
        visible: { 
          opacity: 1, 
          x: 0, 
          zIndex: 1, 
          transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 } 
        },
      };
    }
    return {
      hidden: { opacity: 0, y: 40, zIndex: 10 },
      visible: { 
        opacity: 1, 
        y: 0, 
        zIndex: 10, 
        transition: { duration: 0.8, ease: "easeOut", delay: 0 } 
      },
    };
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", delay: 1.5 } 
    },
  };

  return (
    <section className="wwb overflow-hidden">
      
     {/* =========================================
          STRICT 1-2-3 ANIMATED HEADING
          ========================================= */}
      <div className="wwb__heading">
        
        {/* STEP 1: "What" slides up (0.0s to 0.6s) */}
        <motion.span 
          className="wwb__title inline-block mr-4" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }} 
        >
          What
        </motion.span>
        
        {/* STEP 2: The Text Container slides in (0.6s to 1.2s) */}
        <motion.span 
          className="wwb__title-italic relative overflow-hidden !bg-transparent inline-flex px-4" 
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }} // Waits for Step 1
        >
          {/* STEP 3: The Blue Highlight sweeps (1.2s to 1.7s) */}
          <motion.span
            className="absolute inset-0 bg-[#d3e2ff] z-0" // FIX: Changed from z-[-1] to z-0 so it stays above the cream background!
            initial={{ scaleX: 0 }} 
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }} // Waits for Step 2
            style={{ transformOrigin: "left" }} 
          />
          
          {/* The actual text */}
          <span className="relative z-10">We believe</span>
        </motion.span>
      </div>

      {/* =========================================
          ANIMATED CARDS FAN-OUT SEQUENCE
          ========================================= */}
      <motion.div 
        className="wwb__cards relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {beliefs.map((belief, i) => (
          <motion.div 
            className="wwb__card relative" 
            key={i}
            variants={getCardVariants(i)}
          >
            <Image
              src="/images/misc/borderedcard.svg"
              alt=""
              width={392}
              height={530}
              className="wwb__card-bg"
            />
            
            <motion.div 
              className="wwb__card-content"
              variants={textVariants}
            >
              <p className="wwb__card-title">{belief.title}</p>
              <p className="wwb__card-desc">{belief.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
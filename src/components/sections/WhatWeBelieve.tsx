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
    <section className="relative m-0 flex min-h-[100dvh] w-full flex-col items-center overflow-hidden bg-[#FBF7F0] px-4 pb-[60px] pt-[80px] xl:h-[763px] xl:min-h-max xl:px-[83px] xl:pb-[67px] xl:pt-[88px] gap-[30px] xl:gap-[48px]">
      
     {/* =========================================
          STRICT 1-2-3 ANIMATED HEADING
          ========================================= */}
      <div className="z-20 flex flex-wrap items-center justify-center gap-x-3 text-center md:gap-x-4">
        <motion.span 
          className="m-0 font-['Libre_Baskerville',_serif] text-[40px] font-semibold leading-[120%] text-[#001A4D] md:text-[80px]" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }} 
        >
          What
        </motion.span>
        
        <motion.span 
          className="relative inline-flex items-center justify-center overflow-hidden bg-transparent px-2 md:px-4" 
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <motion.span
            className="absolute inset-0 z-0 bg-[#D3E2FF]"
            initial={{ scaleX: 0 }} 
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
            style={{ transformOrigin: "left" }} 
          />
          
          <span className="relative z-10 font-['Libre_Baskerville',_serif] text-[40px] font-semibold italic leading-[120%] text-[#001A4D] md:text-[80px]">
            We believe
          </span>
        </motion.span>
      </div>

      {/* =========================================
          ANIMATED CARDS FAN-OUT SEQUENCE
          ========================================= */}
      <motion.div 
        className="relative z-10 mx-auto flex w-full max-w-[1080px] flex-col items-center justify-center gap-[24px] lg:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {beliefs.map((belief, i) => (
          <motion.div 
            // 323px Max Width (10px wider as requested)
            className="relative flex aspect-[16/23] w-full max-w-[323px] shrink-0 flex-col items-center justify-center" 
            key={i}
            variants={getCardVariants(i)}
          >
            <Image
              src="/images/misc/borderedcard.svg"
              alt="Card Border"
              fill
              className="pointer-events-none object-contain"
              sizes="(max-width: 768px) 100vw, 323px"
              priority
            />
            
            <motion.div 
              // Replaced gap-[13px] with fluid gap-[5.3%]
              className="absolute left-[14.05%] top-[25.55%] z-10 flex w-[77.95%] flex-col items-start gap-[5.3%] text-left"
              variants={textVariants}
            >
              {/* TEXT FIXED AT 24PX - Replaced pl-[10px] with fluid pl-[4.1%] */}
              <h3 className="m-0 self-stretch shrink-0 pl-[4.1%] font-['Libre_Baskerville',_serif] text-[24px] font-semibold not-italic leading-[155%] text-[#001A4D]">
                {belief.title}
              </h3>
              
              {/* Replaced p-[10px] with fluid p-[4.1%] */}
              <div className="flex w-[89.7%] items-center justify-center p-[4.1%]">
                {/* TEXT FIXED AT 14PX */}
                <p className="m-0 flex-1 font-['Poppins',_sans-serif] text-[14px] font-normal leading-[140%] text-[#323232]">
                  {belief.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
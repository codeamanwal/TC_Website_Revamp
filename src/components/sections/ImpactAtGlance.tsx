"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const impactData = [
  { num: "300+", label: "Startups Backed" },
  { num: "650+", label: "Founders Backed" },
  { num: "₹450B", label: "Capital Raised by Portfolio" },
  { num: "6", label: "Indicorns" },
  { num: "250M+", label: "Lives Impacted" },
  { num: "4", label: "IPO's" },
];

const CarouselItem = ({ 
  data, 
  index, 
  progress 
}: { 
  data: typeof impactData[0], 
  index: number, 
  progress: MotionValue<number> 
}) => {
  
  const getDiff = (p: number) => {
    const totalItems = impactData.length;
    const center = p * totalItems;
    let diff = ((index - center) % totalItems + totalItems) % totalItems;
    if (diff > 3) diff -= totalItems;
    return diff;
  };

  const angleMultiplier = 0.6; 
  const radius = 850; 

  const x = useTransform(progress, (p) => {
    const diff = getDiff(p);
    return `${Math.sin(diff * angleMultiplier) * radius}px`;
  });

  const y = useTransform(progress, (p) => {
    const diff = getDiff(p);
    return `${(diff * diff) * 20}px`; 
  });

  const scale = useTransform(progress, (p) => {
    const diff = getDiff(p);
    return Math.max(0, Math.cos(diff * angleMultiplier)); 
  });

  const opacity = useTransform(progress, (p) => {
    const diff = Math.abs(getDiff(p));
    if (diff >= 2.5) return 0; 
    return Math.max(0, Math.cos(diff * angleMultiplier));
  });

  const zIndex = useTransform(progress, (p) => Math.round(10 - Math.abs(getDiff(p))));

  return (
    <motion.div
      style={{ x, y, scale, opacity, zIndex }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center w-[600px]"
    >
      <span className="text-[128px] font-bold text-[#001A4D] font-libre leading-none mb-6 drop-shadow-sm tracking-tight">
        {data.num}
      </span>
      <span className="text-[44px] font-semibold text-[#001A4D] font-libre drop-shadow-sm leading-tight">
        {data.label}
      </span>
    </motion.div>
  );
};

export default function ImpactAtGlance() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="impact !block !h-[300vh] !p-0 !overflow-visible w-full bg-[#FBF7F0]">
      
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
        
       {/* =========================================
            STRICT 1-2-3 ANIMATED HEADING
            ========================================= */}
        <div className="impact__heading flex flex-col items-center justify-center mb-auto pt-10 z-50">
          
          {/* Main Title Row */}
          <div className="flex items-center justify-center mb-8">
            
            {/* STEP 1: The word "Impact" slides up (0.0s to 0.6s) */}
            <motion.span 
              className="impact__title relative overflow-hidden inline-block mr-4 text-[96px] text-[#001A4D] font-libre font-semibold !bg-transparent"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }} 
            >
              {/* STEP 2: The Blue Highlight sweeps left-to-right INDEPENDENTLY (0.6s to 1.1s) */}
              <motion.span
                className="absolute inset-0 bg-[#d3e2ff] z-0" 
                initial={{ scaleX: 0 }} 
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }} 
                style={{ transformOrigin: "left" }} 
              />
              <span className="relative z-10">Impact</span>
            </motion.span>
            
            {/* STEP 3: "at glance" slides up (1.1s to 1.7s) */}
            <motion.span 
              className="impact__title-highlight px-4 text-[96px] text-[#001A4D] font-libre font-bold italic"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }} 
            >
              at glance
            </motion.span>
          </div>
        </div>

        {/* =========================================
            SPHERICAL INFINITE GLOBE CAROUSEL
            ========================================= */}
        {/* Adjusted spacing slightly to center the sphere in the remaining space */}
        <div className="relative w-full flex-1 flex items-center justify-center -mt-20">
          
          {/* THE PERMANENT CENTER GRADIENT BLOB */}
          <div className="absolute inset-0 m-auto w-[600px] h-[600px] bg-[#d3e2ff] opacity-70 blur-[100px] rounded-full pointer-events-none z-0" />

          {/* THE 6 SCROLLING RAW TEXT ITEMS */}
          {impactData.map((item, i) => (
            <CarouselItem 
              key={i} 
              data={item} 
              index={i} 
              progress={scrollYProgress} 
            />
          ))}

          {/* =========================================
              STATIC OVERLAY DESCRIPTION
              ========================================= */}
          {/* Positioned absolutely from the center of the screen, shifted down by 220px 
            so it perfectly overlaps the bottom fade of the 600px blue gradient blob. 
          */}
          <motion.p 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[220px] text-[#323232] font-poppins text-[22px] text-center w-full max-w-2xl leading-relaxed z-50 pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }} 
          >
            Across seed, pre-Series A and growth stages since 2011
          </motion.p>

        </div>
      </div>
    </section>
  );
}
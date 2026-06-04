"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const impactData = [
  { num: "300+", label: "Startups Backed", caption: "Across seed, pre-Series A and growth stages since 2011" },
  { num: "650+", label: "Founders Backed", caption: "Operators, builders, and category creators" },
  { num: "₹450B+", label: "Capital Raised by Portfolio", caption: "From 100+ institutional investors globally" },
  { num: "6", label: "Indicorns", caption: "Direct employment across the portfolio ecosystem" },
  { num: "250M+", label: "Lives Impacted", caption: "Customers served by portfolio companies" },
  { num: "4", label: "IPO's", caption: "Direct employment across the portfolio ecosystem" },
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
    return `${- (diff * diff) * 45}px`; 
  });

  const scale = useTransform(progress, (p) => {
    const diff = getDiff(p);
    const rawScale = Math.cos(diff * angleMultiplier);
    return Math.max(0.2, rawScale); 
  });

  const opacity = useTransform(progress, (p) => {
    const diff = Math.abs(getDiff(p));
    if (diff >= 2.5) return 0; 
    return Math.max(0, Math.cos(diff * angleMultiplier));
  });

  const captionOpacity = useTransform(progress, (p) => {
    const diff = Math.abs(getDiff(p));
    return diff < 0.3 ? Math.max(0, Math.cos(diff * Math.PI * 1.6)) : 0;
  });

  const zIndex = useTransform(progress, (p) => Math.round(10 - Math.abs(getDiff(p))));

  return (
    <motion.div
      style={{ x, y, scale, opacity, zIndex }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center w-[90%] max-w-[700px]"
    >
      <h2 className="text-[64px] md:text-[128px] font-medium text-[#001A4D] font-['Libre_Baskerville',_serif] leading-none mb-4 md:mb-6 tracking-tight">
        {data.num}
      </h2>
      
      <h3 className="text-[24px] md:text-[44px] font-medium text-[#001A4D] font-['Libre_Baskerville',_serif] leading-[120%] max-w-[180px] md:max-w-[340px] mx-auto">
        {data.label}
      </h3>
      
      <motion.h4 
        style={{ opacity: captionOpacity }}
        className="mt-4 md:mt-6 text-[#323232] font-['Poppins',_sans-serif] text-[16px] md:text-[20px] font-normal leading-relaxed w-[80%] max-w-xl mx-auto"
      >
        {data.caption}
      </motion.h4>
    </motion.div>
  );
};

export default function ImpactAtGlance() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const blobScale = useTransform(scrollYProgress, (p) => {
    const totalItems = impactData.length;
    const currentPosition = p * totalItems;
    const distanceFromNearestCenter = Math.abs(currentPosition - Math.round(currentPosition));
    
    const bloomFactor = Math.max(0, Math.cos(distanceFromNearestCenter * Math.PI));
    return bloomFactor;
  });

  const blobOpacity = useTransform(blobScale, [0, 1], [0.1, 1]);

  return (
    <section 
      ref={containerRef} 
      className="block relative w-full h-[300vh] p-0 m-0 overflow-visible"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-[40px] md:pt-[80px]">
        
        {/* =========================================
              FIGMA RESTORED HEADING SEQUENCE
              ========================================= */}
        <div className="flex flex-col items-center justify-center w-full px-4 mb-auto pt-[40px] md:pt-[70px] z-50">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center text-center gap-2 md:gap-0 w-full max-w-[1280px] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* "Impact" -> font-bold (700), italic, text-[80px], leading-[120%] */}
            <motion.span 
              className="relative overflow-hidden inline-block md:mr-4 p-[6px_16px] text-[40px] md:text-[80px] text-[#001A4D] font-['Libre_Baskerville',_serif] font-bold bg-transparent"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <motion.span
                className="absolute inset-0 bg-[#D3E2FF] z-0" 
                style={{ transformOrigin: "left" }} 
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 } }
                }}
              />
              <span className="relative z-10 italic leading-[120%]">Impact</span>
            </motion.span>
            
            {/* "at glance" -> font-semibold (600), normal style, text-[80px], leading-[120%] */}
            <motion.span 
              className="px-4 text-[40px] md:text-[80px] text-[#001A4D] font-['Libre_Baskerville',_serif] font-semibold leading-[120%]"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.9 } }
              }}
            >
              at glance
            </motion.span>
          </motion.div>
        </div>

        {/* SPHERICAL INFINITE GLOBE CAROUSEL */}
        <div className="relative w-full flex-1 flex items-center justify-center -mt-10 md:-mt-20">
          
          {/* BLOOMING GRADIENT BLOB */}
          <motion.div 
            style={{ scale: blobScale, opacity: blobOpacity }}
            className="absolute inset-0 m-auto w-[240px] h-[240px] md:w-[400px] md:h-[400px] bg-[#D3E2FF] blur-[60px] md:blur-[100px] rounded-full pointer-events-none z-0 transition-shadow duration-150 ease-out" 
          />

          {/* INFINITE CAROUSEL ITEMS */}
          {impactData.map((item, i) => (
            <CarouselItem 
              key={i} 
              data={item} 
              index={i} 
              progress={scrollYProgress} 
            />
          ))}

        </div>
      </div>
    </section>
  );
}
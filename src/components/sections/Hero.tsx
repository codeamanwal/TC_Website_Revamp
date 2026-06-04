"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const founderSlots = [
  { size: "large", pool: [{ name: "Abhiraj Singh Bhal", role: "Co-Founder, Urban Company", image: "/images/hero_founders_images/abhiraj_bahl.png" }, { name: "Ashutosh Valani", role: "Co-Founder, RENÉE Cosmetics", image: "/images/hero_founders_images/ashutosh-valani.png" }] },
  { size: "small", pool: [{ name: "Abhishek Bansal", role: "Co-Founder and CEO, Shadowfax", image: "/images/hero_founders_images/abhishek-bansal.png" }, { name: "Ishendra Agarwal", role: "Co-Founder, GIVA", image: "/images/hero_founders_images/ishendra-agarwal.png" }] },
  { size: "small", pool: [{ name: "Ruchi Kalra", role: "Co-Founder & CFO, Ofbusiness", image: "/images/hero_founders_images/ruchi-kalra.png" }, { name: "Anand Agrawal", role: "Co-Founder & CPTO, Credgenics", image: "/images/hero_founders_images/anand-agarwal.png" }] },
  { size: "small", pool: [{ name: "Varun Khaitan", role: "Co-Founder, Urban Company", image: "/images/hero_founders_images/varun-khaitan.png" }, { name: "Bhavish Aggarwal", role: "CEO of Ola Cabs", image: "/images/hero_founders_images/bhavish-aggarwal.png" }] },
  { size: "large", pool: [{ name: "Ghazal Alagh", role: "Co-Founder, Mamaearth", image: "/images/hero_founders_images/ghazal-alagh.png" }, { name: "Shashank Kumar", role: "Co-Founder, Razorpay", image: "/images/hero_founders_images/shashank-kumar.png" }] },
];

export default function Hero() {
  const [currentIndices, setCurrentIndices] = useState([0, 0, 0, 0, 0]);
  const [flipState, setFlipState] = useState([false, false, false, false, false]);

  useEffect(() => {
    const triggerStaggeredFlip = async () => {
      for (let i = 0; i < 5; i++) {
        await new Promise((resolve) => setTimeout(resolve, 200)); 
        setFlipState((prev) => { const next = [...prev]; next[i] = !next[i]; return next; });
        setCurrentIndices((prev) => { const next = [...prev]; next[i] = (next[i] + 1) % founderSlots[i].pool.length; return next; });
      }
    };
    const interval = setInterval(triggerStaggeredFlip, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative m-0 flex min-h-[100dvh] w-full shrink-0 flex-col items-center overflow-hidden bg-[#FBF7F0] pb-[10px] pt-[100px] lg:pt-[110px] xl:pt-[160px]">
      
      {/* HEADING */}
      <h1 className="relative z-10 w-full max-w-[717px] px-4 text-center font-['Libre_Baskerville',_serif] text-[40px] font-normal leading-[110%] text-black md:text-[64px]">
        300+ bets. all on
        <span className="block font-['Libre_Baskerville',_serif] text-[48px] font-semibold italic leading-[120%] text-[#001A4D] md:text-[80px]">
          Founders
        </span>
      </h1>

      {/* SUBTITLE */}
      <p className="relative z-10 mt-[16px] w-full max-w-[593px] px-4 text-center font-['Poppins',_sans-serif] text-[14px] font-normal not-italic leading-[150%] text-[#323232] lg:mt-[20px] xl:mt-[32px] md:text-[16px]">
        We partner with founders from day one. We invest conviction, not
        just capital, and stay by their side through every stage of the
        journey
      </p>

      {/* BUTTONS */}
      <div className="relative z-20 mt-[24px] flex flex-col items-center justify-center gap-[16px] px-4 sm:flex-row lg:mt-[28px] xl:mt-[40px] md:gap-[24px]">
        <Link 
          href="/portfolio" 
          className="flex h-[54px] w-full items-center justify-center gap-[10px] p-[10px] font-['Libre_Baskerville',_serif] text-[16px] font-semibold leading-[107%] text-[#001A4D] transition-opacity hover:opacity-60 sm:w-[185px]"
        >
          View Portfolio
        </Link>
        
        {/* FIXED: Applied Canva Gradient directly via Tailwind hover arbitrary value */}
        <Link 
          href="/get-investment" 
          className="group relative m-0 flex h-[54px] w-full shrink-0 items-center justify-center gap-[10px] overflow-hidden rounded-[9px] bg-[#001A4D] p-[10px] font-['Libre_Baskerville',_serif] text-[16px] font-semibold leading-[107%] text-[#F5F0E8] transition-all sm:w-[185px]"
        >
          {/* Smooth transition hover gradient using standard circle syntax to prevent warping */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,#003CB3_0%,#012469_50%,#001A4D_100%)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
          
          <span className="relative z-10">Get Investment</span>
        </Link>
      </div>

      {/* CAROUSEL */}
      <div className="scrollbar-hide relative z-0 mt-[30px] w-full shrink-0 overflow-x-auto px-4 lg:mt-[-20px] lg:overflow-visible lg:px-0 xl:mt-[-10px]">
        <div className="mx-auto flex min-w-max items-end justify-center gap-[10px] lg:min-w-0 lg:gap-[14px] xl:gap-[17px]">
          {founderSlots.map((slot, i) => {
            const currentFounder = slot.pool[currentIndices[i]];
            const isLarge = slot.size === "large";
            
            return (
              <div key={i} className="shrink-0" style={{ perspective: "1200px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndices[i]} 
                    initial={{ rotateY: -90, opacity: 0, scale: 0.95 }}
                    animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                    exit={{ rotateY: 90, opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                    className={`flex flex-col items-start rounded-[12px] bg-white shadow-[0_4px_14.8px_0_rgba(101,101,101,0.25)] ${
                      isLarge 
                        ? "h-[222px] w-[160px] gap-[6px] p-[10px_10px_40px_10px] lg:h-[280px] lg:w-[200px] lg:p-[12px_12px_50px_12px] xl:h-[386px] xl:w-[278px] xl:gap-[10px] xl:p-[14px_14px_81px_13px]" 
                        : "h-[169px] w-[138px] gap-[1px] p-[10px_12px_12px_12px] lg:h-[212px] lg:w-[172px] lg:p-[12px_14px_14px_14px] xl:h-[294px] xl:w-[240px] xl:gap-[4px] xl:p-[14px_18px_16px_18px]"
                    }`}
                  >
                    <div className={`relative shrink-0 overflow-hidden rounded-[5px] ${
                      isLarge 
                        ? "h-[162px] w-[140px] lg:h-[208px] lg:w-[176px] xl:h-[291px] xl:w-[251px]" 
                        : "h-[128px] w-[122px] lg:h-[155px] lg:w-[148px] xl:h-[223px] xl:w-[211px]"
                    }`}>
                      <Image
                        src={currentFounder.image}
                        alt={currentFounder.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes={isLarge ? "(max-width: 1280px) 206px, 251px" : "(max-width: 1280px) 176px, 211px"}
                      />
                    </div>

                    <div className="flex flex-col pt-[2px] xl:pt-[5px]">
                      <p className={`font-['Libre_Baskerville',_serif] font-bold leading-[119%] text-black ${
                        isLarge ? "text-[12px] lg:text-[16px] xl:text-[20px]" : "text-[10px] lg:text-[12px] xl:text-[16px]"
                      }`}>
                        {currentFounder.name}
                      </p>
                      <p className={`mt-[2px] font-['Poppins',_sans-serif] font-light leading-[119%] text-black xl:mt-[4px] ${
                        isLarge ? "text-[8px] lg:text-[10px] xl:text-[12px]" : "text-[8px] lg:text-[10px] xl:text-[12px]"
                      }`}>
                        {currentFounder.role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
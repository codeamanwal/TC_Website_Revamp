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
    <section className="relative mt-[77px] flex min-h-[calc(100vh-77px)] w-full flex-col items-center justify-center overflow-hidden bg-[#FBF7F0] pt-[45.5px] pb-[50px]">
      
      <div className="relative flex w-full max-w-[1440px] flex-col items-center">
        
        {/* FLUID TYPOGRAPHY */}
        <h1 className="relative z-10 mx-auto w-full max-w-[541px] text-center font-['Libre_Baskerville',_serif] text-[clamp(36px,3.33vw,48px)] font-normal leading-[110%] text-[#000]">
          300+ bets. All on
          <span className="block font-['Libre_Baskerville',_serif] text-[clamp(48px,4.44vw,64px)] font-semibold italic leading-[120%] text-[#001A4D]">
            Founders
          </span>
        </h1>

        <p className="relative z-10 mx-auto mt-[clamp(6px,0.59vw,8.5px)] mb-[clamp(28px,2.7vw,39px)] w-full max-w-[593px] text-center font-['Poppins',_sans-serif] text-[clamp(14px,1.11vw,16px)] font-normal leading-[150%] text-[#323232]">
          We partner with founders from day one. We invest conviction, not
          just capital, and stay by their side through every stage of the
          journey
        </p>

        {/* FLUID BUTTONS */}
        <div className="relative z-20 mb-[clamp(30px,2.9vw,42px)] flex flex-col items-center justify-center gap-[clamp(16px,1.66vw,24px)] sm:flex-row">
          <Link 
            href="/portfolio" 
            className="flex h-[clamp(45px,3.75vw,54px)] w-[clamp(160px,12.8vw,185px)] shrink-0 items-center justify-center p-[10px] font-['Libre_Baskerville',_serif] text-[clamp(14px,1.11vw,16px)] font-semibold leading-[107%] text-[#001A4D] transition-opacity hover:opacity-60"
          >
            View Portfolio
          </Link>
          
          <Link 
            href="/get-investment" 
            className="group relative m-0 flex h-[clamp(45px,3.75vw,54px)] w-[clamp(160px,12.8vw,185px)] shrink-0 items-center justify-center gap-[10px] overflow-hidden rounded-[9px] bg-[#001A4D] p-[10px] font-['Libre_Baskerville',_serif] text-[clamp(14px,1.11vw,16px)] font-semibold leading-[107%] text-[#F5F0E8] transition-all"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,#003CB3_0%,#012469_50%,#001A4D_100%)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
            <span className="relative z-10">Get Investment</span>
          </Link>
        </div>

        {/* CARDS ROW */}
        <div className="relative z-0 -mt-[96px] w-full overflow-hidden px-4 lg:overflow-visible lg:px-0">
          <div className="mx-auto flex w-full items-end justify-center gap-[clamp(8px,1.18vw,17px)]">
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
                      // 1. GAP FIX: Removed the massive 81px bottom padding. Standardized padding allows the fluid aspect ratio to breathe perfectly!
                      className={`flex flex-col items-start rounded-[12px] bg-white shadow-[0_4px_14.8px_0_rgba(101,101,101,0.25)] ${
                        isLarge 
                          ? "aspect-[278/386] w-[clamp(180px,19.3vw,278px)] gap-[clamp(6px,0.69vw,10px)] p-[clamp(10px,0.97vw,14px)]" 
                          : "aspect-[240/294] w-[clamp(155px,16.6vw,240px)] gap-[clamp(2px,0.27vw,4px)] p-[clamp(10px,0.97vw,14px)_clamp(12px,1.25vw,18px)]"
                      }`}
                    >
                      {/* 2. IMAGE FIX: Fluid width + locked aspect ratio perfectly anchors the photo to the top edge. */}
                      <div className={`relative shrink-0 w-full overflow-hidden rounded-[5px] ${
                        isLarge ? "aspect-[251/291]" : "aspect-[211/223]"
                      }`}>
                        <Image
                          src={currentFounder.image}
                          alt={currentFounder.name}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes={isLarge ? "(max-width: 1440px) 19vw, 251px" : "(max-width: 1440px) 15vw, 211px"}
                        />
                      </div>

                      <div className="flex w-full flex-col pt-[clamp(3px,0.34vw,5px)]">
                        <p className={`w-full font-['Libre_Baskerville',_serif] font-bold leading-[119%] text-black ${
                          isLarge ? "text-[clamp(13px,1.38vw,20px)]" : "text-[clamp(11px,1.11vw,16px)]"
                        }`}>
                          {currentFounder.name}
                        </p>
                        <p className={`mt-[clamp(2px,0.27vw,4px)] w-full font-['Poppins',_sans-serif] font-light leading-[119%] text-black ${
                          isLarge ? "text-[clamp(9px,0.83vw,12px)]" : "text-[clamp(9px,0.83vw,12px)]"
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

      </div>
    </section>
  );
}
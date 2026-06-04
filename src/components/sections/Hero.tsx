"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// 10 Founders partitioned into 5 visual slot columns (2 founders per slot)
const founderSlots = [
  {
    size: "large" as const,
    pool: [
      { 
        name: "Abhiraj Singh Bhal", 
        role: "Co-Founder, Urban Company", 
        image: "/images/hero_founders_images/abhiraj_bahl.jpeg" 
      },
      { 
        name: "Ashutosh Valani", 
        role: "Co-Founder, RENÉE Cosmetics", 
        image: "/images/hero_founders_images/ashutosh-valani.webp" 
      },
    ]
  },
  {
    size: "small" as const,
    pool: [
      { 
        name: "Abhishek Bansal", 
        role: "Co-Founder and CEO, Shadowfax", 
        image: "/images/hero_founders_images/abhishek-bansal.webp" 
      },
      { 
        name: "Ishendra Agarwal", 
        role: "Co-Founder, GIVA", 
        image: "/images/hero_founders_images/ishendra-agarwal.webp" 
      },
    ]
  },
  {
    size: "small" as const,
    pool: [
      { 
        name: "Ruchi Kalra", 
        role: "Co-Founder & CFO, Ofbusiness", 
        image: "/images/hero_founders_images/ruchi-kalra.webp" 
      },
      { 
        name: "Anand Agrawal", 
        role: "Co-Founder & CPTO, Credgenics", 
        image: "/images/hero_founders_images/anand-agrawal.webp" 
      },
    ]
  },
  {
    size: "small" as const,
    pool: [
      { 
        name: "Varun Khaitan", 
        role: "Co-Founder, Urban Company", 
        image: "/images/hero_founders_images/varun-khaitan.webp" 
      },
      { 
        name: "Bhavish Aggarwal", 
        role: "CEO of Ola Cabs", 
        image: "/images/hero_founders_images/bhavish-aggarwal.webp" 
      },
    ]
  },
  {
    size: "large" as const,
    pool: [
      { 
        name: "Ghazal Alagh", 
        role: "Co-Founder, Mamaearth", 
        image: "/images/hero_founders_images/ghazal-alagh.webp" 
      },
      { 
        name: "Shashank Kumar", 
        role: "Co-Founder, Razorpay", 
        image: "/images/hero_founders_images/shashank-kumar.webp" 
      },
    ]
  },
];

export default function Hero() {
  const [currentIndices, setCurrentIndices] = useState([0, 0, 0, 0, 0]);
  const [flipState, setFlipState] = useState([false, false, false, false, false]);

  useEffect(() => {
    const triggerStaggeredFlip = async () => {
      // Loop through all 5 card slots sequentially
      for (let i = 0; i < 5; i++) {
        // Exactly 0.2 seconds (200ms) delay between each card flip
        await new Promise((resolve) => setTimeout(resolve, 200)); 
        
        setFlipState((prev) => {
          const next = [...prev];
          next[i] = !next[i];
          return next;
        });

        setCurrentIndices((prev) => {
          const next = [...prev];
          // Cycle cleanly back to index 0 after hitting index 1
          next[i] = (next[i] + 1) % founderSlots[i].pool.length;
          return next;
        });
      }
    };

    // Trigger the full wave rotation every 6.5 seconds
    const interval = setInterval(triggerStaggeredFlip, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <h1 className="hero__title">
        300+ bets. all on
        <span className="hero__title--highlight">Founders</span>
      </h1>

      <p className="hero__subtitle !w-[878px] !font-poppins !text-[24px] !font-normal !not-italic !leading-[1.5] !text-[#323232]">
        &ldquo; we partner with founders from day one. We invest conviction, not
        just capital, and see stay by their side through every stage of
        journey&rdquo;
      </p>

      <div className="hero__ctas">
        <Link 
          href="/portfolio" 
          className="hero__cta-secondary !font-libre !text-[24px] !font-semibold !not-italic !leading-[1.07] !text-[#001A4D]"
        >
          View Portfolio
        </Link>
        <Link 
          href="/get-investment" 
          className="hero__cta-primary !font-libre !text-[24px] !font-semibold !not-italic !leading-[1.07] !text-[#F5F0E8]"
        >
          Get Investment
        </Link>
      </div>

      <div className="founders__grid">
        {founderSlots.map((slot, i) => {
          const currentFounder = slot.pool[currentIndices[i]];
          const isLarge = slot.size === "large";
          
          return (
            <div
              key={i}
              className="shrink-0"
              style={{ 
                perspective: "1200px",
                width: isLarge ? "278px" : "240px",
                height: isLarge ? "386px" : "294px"
              }} 
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndices[i]} 
                  initial={{ rotateY: -90, opacity: 0, scale: 0.95 }}
                  animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                  exit={{ rotateY: 90, opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  className={`founders__card founders__card--${slot.size}`}
                >
                  <div className={`founders__card-img founders__card-img--${slot.size}`}>
                    <Image
                      src={currentFounder.image}
                      alt={currentFounder.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes={isLarge ? "251px" : "211px"}
                    />
                  </div>

                  <div className="founders__card-info">
                    <p className={`founders__card-name founders__card-name--${slot.size}`}>
                      {currentFounder.name}
                    </p>
                    <p className={`founders__card-role founders__card-role--${slot.size}`}>
                      {currentFounder.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
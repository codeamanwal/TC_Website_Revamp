"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
    image: "/images/misc/6.webp" ,
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

  // Auto-play interval: Changes slide every 5000ms (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  // The Blackout TV Channel Animation
  const tvGlitchVariants: Variants = {
    initial: {
      opacity: 0,
      filter: "brightness(0%) grayscale(100%)",
      scaleY: 0.01,
    },
    animate: {
      opacity: 1,
      filter: "brightness(100%) grayscale(0%)",
      scaleY: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      }
    },
    exit: {
      opacity: 0,
      filter: "brightness(0%) grayscale(100%)",
      scaleY: 0.01, 
      transition: {
        duration: 0.15,
        ease: "easeIn",
      }
    }
  };

  // =========================================
  // HEADING PROPAGATION VARIANTS
  // =========================================
  const text1Variants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const highlightVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0.6 } // Runs after text finishes sliding
    }
  };

  const text2Variants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.1 } // Runs after highlight finishes sweeping
    }
  };

  return (
    <section className="ffs">
      {/* =========================================
          STRICT 1-2-3 ORCHESTRATED HEADING
          ========================================= */}
      {/* By handling the viewport trigger here, children variants run flawlessly */}
      <motion.div 
        className="ffs__heading flex flex-col items-center justify-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* STEP 1: Text container slides up */}
        <motion.h2 className="ffs__title-highlight" variants={text1Variants}>
          <span 
            className="ffs__highlight-box relative overflow-hidden inline-block" 
            style={{ background: "transparent" }} 
          >
            {/* STEP 2: The Blue Highlight sweeps left-to-right safely */}
            <motion.span
              className="absolute inset-0 z-0" 
              style={{ backgroundColor: "#d3e2ff", transformOrigin: "left" }}
              variants={highlightVariants}
            />
            <span className="relative z-10">Their Stories,</span>
          </span>
        </motion.h2>

        {/* STEP 3: Bottom Line Slides Up */}
        <motion.h2 className="ffs__title mt-2" variants={text2Variants}>
          our credentials
        </motion.h2>
      </motion.div>

      {/* 2. TV Wrapper */}
      <div className="ffs__tv-wrapper relative">
        <Image
          src="/images/misc/television.png"
          alt="Television frame"
          width={800}
          height={500}
          className="ffs__tv-img relative z-0 pointer-events-none"
          sizes="(max-width: 1317px) 100vw, 1317px"
          priority 
        />
        
        <div className="ffs__tv-screen absolute inset-0 z-10 overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={current} 
              variants={tvGlitchVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="ffs__slide w-full h-full flex"
            >
              
              {/* Left Side: Info & Logo */}
              <div className="ffs__slide-info">
                <h3 className="ffs__slide-name whitespace-pre-line">{slide.name}</h3>
                <p className="ffs__slide-role">{slide.role}</p>
                <div className="ffs__slide-logo">
                  <Image 
                    src={slide.logo} 
                    alt="Company logo" 
                    width={160} 
                    height={48} 
                    style={{ 
                      objectFit: "contain", 
                      objectPosition: "left", 
                      width: "160px",  
                      height: "48px"   
                    }} 
                  />
                </div>
              </div>

              {/* Right Side: Founder Cutout Image */}
              <div className="ffs__slide-photo relative">
                <Image
                  src={slide.image}
                  alt={slide.name.replace('\n', ' ')}
                  fill
                  sizes="100vw, 50vw" 
                  style={{ 
                    objectFit: "contain", 
                    objectPosition: "bottom right" 
                  }}
                />
              </div>
              
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Quote Text */}
      <AnimatePresence mode="wait">
        <motion.p 
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="ffs__text"
        >
          {slide.text}
        </motion.p>
      </AnimatePresence>

      {/* 4. CTA Button */}
      <button className="ffs__cta">Read full story</button>

      {/* 5. Pagination Dots */}
      <div className="ffs__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`ffs__dot ${current === i ? "ffs__dot--active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
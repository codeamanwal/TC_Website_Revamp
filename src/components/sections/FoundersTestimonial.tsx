"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Mock data array to handle both image cards and the blue quote card
const testimonials = [
  {
    id: 1,
    type: "image",
    name: "Bavesh Aggarwal",
    role: "Founder and CEO of OLA",
    image: "/images/misc/1.webp",
  },
  {
    id: 2,
    type: "image",
    name: "Bavesh Aggarwal",
    role: "Founder and CEO of OLA",
    image: "/images/misc/2.webp",
  },
  {
    id: 3,
    type: "quote",
    name: "Bavesh Aggarwal",
    role: "Founder and CEO of OLA",
    text: "“Titan Capital is truly ‘founder only’. From the first interaction, I was very overwhelmed with their focus on making the founder successful beyond anything. They were always there as a great sounding board whenever we had to make critical decisions.  I always felt Titan Capital had our back whatever is the situation and that's a great support an early-stage founder can have",
  },
  {
    id: 4,
    type: "image",
    name: "Bavesh Aggarwal",
    role: "Founder and CEO of OLA",
    image: "/images/misc/3.webp",
  },
];

export default function FounderTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval: Changes slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // =========================================
  // STRICT 1-2-3 HEADING VARIANTS
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
      transition: { duration: 0.5, ease: "easeInOut", delay: 0.6 }
    }
  };

  const text2Variants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.1 }
    }
  };

  return (
    <section className="flex flex-col pt-[100px] overflow-hidden bg-white">
      {/* Top Header Row */}
      <div className="flex w-full max-w-[1280px] mx-auto items-end justify-between px-10 mb-16">
        
        {/* =========================================
            ANIMATED HEADING 1: Founder Testimonial
            ========================================= */}
        <motion.div 
          className="flex flex-col items-start gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* STEP 1: Text slides up */}
          <motion.h2 className="font-libre text-[96px] italic font-bold leading-[1.2] text-[#001A4D]" variants={text1Variants}>
            {/* The transparent box holding the blue highlight */}
            <span className="relative overflow-hidden inline-block px-4" style={{ background: "transparent" }}>
              {/* STEP 2: The Blue Highlight sweeps */}
              <motion.span
                className="absolute inset-0 z-0"
                style={{ backgroundColor: "#D3E2FF", transformOrigin: "left" }}
                variants={highlightVariants}
              />
              <span className="relative z-10">Founder</span>
            </span>
          </motion.h2>
          
          {/* STEP 3: Bottom text slides up */}
          <motion.h2 className="font-libre text-[96px] font-semibold leading-[1.2] text-[#001A4D]" variants={text2Variants}>
            Testimonial
          </motion.h2>
        </motion.div>

        {/* Carousel Arrow Buttons */}
        <div className="flex items-center gap-4 mb-4">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="flex h-[77px] w-[77px] items-center justify-center rounded-full bg-[#D3E2FF] transition hover:opacity-80"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
              <path d="M27.1151 20.9695C27.2962 20.8007 27.4415 20.5972 27.5423 20.371C27.6431 20.1448 27.6973 19.9007 27.7016 19.6531C27.706 19.4056 27.6605 19.1597 27.5677 18.9301C27.475 18.7005 27.337 18.492 27.1619 18.3169C26.9868 18.1418 26.7783 18.0038 26.5487 17.911C26.3191 17.8183 26.0732 17.7728 25.8256 17.7771C25.5781 17.7815 25.3339 17.8357 25.1078 17.9365C24.8816 18.0372 24.6781 18.1825 24.5093 18.3637L14.6759 28.197C14.3307 28.5427 14.1367 29.0113 14.1367 29.4999C14.1367 29.9885 14.3307 30.4571 14.6759 30.8028L24.5093 40.6362C24.6781 40.8173 24.8816 40.9626 25.1078 41.0634C25.3339 41.1642 25.5781 41.2183 25.8256 41.2227C26.0732 41.2271 26.3191 41.1815 26.5487 41.0888C26.7783 40.9961 26.9868 40.8581 27.1619 40.683C27.337 40.5079 27.475 40.2994 27.5677 40.0698C27.6605 39.8402 27.706 39.5943 27.7016 39.3467C27.6973 39.0992 27.6431 38.855 27.5423 38.6289C27.4415 38.4027 27.2962 38.1991 27.1151 38.0303L20.4284 31.3437H44.2497C44.7387 31.3437 45.2076 31.1494 45.5534 30.8037C45.8992 30.4579 46.0934 29.9889 46.0934 29.4999C46.0934 29.0109 45.8992 28.542 45.5534 28.1962C45.2076 27.8504 44.7387 27.6562 44.2497 27.6562H20.4284L27.1151 20.9695Z" fill="black"/>
            </svg>
          </button>
          
          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="flex h-[77px] w-[77px] items-center justify-center rounded-full bg-[#D3E2FF] transition hover:opacity-80"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none" className="rotate-180">
              <path d="M27.1151 20.9695C27.2962 20.8007 27.4415 20.5972 27.5423 20.371C27.6431 20.1448 27.6973 19.9007 27.7016 19.6531C27.706 19.4056 27.6605 19.1597 27.5677 18.9301C27.475 18.7005 27.337 18.492 27.1619 18.3169C26.9868 18.1418 26.7783 18.0038 26.5487 17.911C26.3191 17.8183 26.0732 17.7728 25.8256 17.7771C25.5781 17.7815 25.3339 17.8357 25.1078 17.9365C24.8816 18.0372 24.6781 18.1825 24.5093 18.3637L14.6759 28.197C14.3307 28.5427 14.1367 29.0113 14.1367 29.4999C14.1367 29.9885 14.3307 30.4571 14.6759 30.8028L24.5093 40.6362C24.6781 40.8173 24.8816 40.9626 25.1078 41.0634C25.3339 41.1642 25.5781 41.2183 25.8256 41.2227C26.0732 41.2271 26.3191 41.1815 26.5487 41.0888C26.7783 40.9961 26.9868 40.8581 27.1619 40.683C27.337 40.5079 27.475 40.2994 27.5677 40.0698C27.6605 39.8402 27.706 39.5943 27.7016 39.3467C27.6973 39.0992 27.6431 38.855 27.5423 38.6289C27.4415 38.4027 27.2962 38.1991 27.1151 38.0303L20.4284 31.3437H44.2497C44.7387 31.3437 45.2076 31.1494 45.5534 30.8037C45.8992 30.4579 46.0934 29.9889 46.0934 29.4999C46.0934 29.0109 45.8992 28.542 45.5534 28.1962C45.2076 27.8504 44.7387 27.6562 44.2497 27.6562H20.4284L27.1151 20.9695Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>

      {/* =========================================
          BASIC AUTO-CAROUSEL TRACK
          ========================================= */}
      {/* Container clips overflow so the track slides smoothly out of frame */}
      <div className="w-full overflow-hidden px-10 pb-10 lg:px-[calc((100vw-1280px)/2+40px)]">
        
        <motion.div 
          className="flex gap-6 w-max"
          // Slide calculation: 373px (card width) + 24px (gap) = 397px per slide
          animate={{ x: -(currentIndex * 397) }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {testimonials.map((item) => (
            // Switched from motion.div to a standard div to remove all scaling/fading
            <div
              key={item.id}
              className="relative flex h-[444px] w-[373px] flex-col justify-end overflow-hidden rounded-xl shrink-0"
            >
              {item.type === "image" ? (
                <>
                  <Image
                    src={item.image || ""}
                    alt={item.name}
                    fill
                    sizes="373px"
                    className="object-cover"
                  />
                  {/* Drop-shadow added to text to ensure it stays readable against light images */}
                  <div className="relative z-10 flex flex-col p-6 drop-shadow-md">
                    <p className="font-libre text-xl font-bold text-white">{item.name}</p>
                    <p className="font-poppins text-xs font-light text-white">{item.role}</p>
                  </div>
                </>
              ) : (
                // The Blue Quote Card Variation
                <div className="flex h-full w-full flex-col justify-between bg-[#C8DBFF] p-8">
                  <p className="font-inter text-[15px] leading-relaxed text-[#001A4D]">
                    {item.text}
                  </p>
                  <div className="flex flex-col">
                    <p className="font-libre text-xl font-bold text-[#001A4D]">{item.name}</p>
                    <p className="font-poppins text-xs font-light text-[#001A4D]">{item.role}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* =========================================
          ANIMATED HEADING 2: We're listening
          ========================================= */}
      <div className="mt-12 flex w-full flex-col items-center justify-center gap-10 rounded-t-[40px] bg-[#FBF7F0] px-10 py-24">
        
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* STEP 1: Text slides up */}
          <motion.h2 className="font-libre text-[96px] italic font-semibold leading-[1.2] text-[#001A4D]" variants={text1Variants}>
             {/* The transparent box holding the blue highlight */}
            <span className="relative overflow-hidden inline-block px-6" style={{ background: "transparent" }}>
               {/* STEP 2: The Blue Highlight sweeps */}
               <motion.span 
                 className="absolute inset-0 z-0" 
                 style={{ backgroundColor: "#D3E2FF", transformOrigin: "left" }} 
                 variants={highlightVariants} 
               />
               <span className="relative z-10">We're listening.</span>
            </span>
          </motion.h2>
          
          {/* STEP 3: Bottom text slides up */}
          <motion.h2 className="w-full max-w-[858px] font-libre text-[96px] font-bold leading-[1.19] text-[#001A4D]" variants={text2Variants}>
            Tell us what you're building.
          </motion.h2>
        </motion.div>

        <button className="flex h-[90px] w-[379px] items-center justify-center rounded-xl bg-[#001A4D] px-4 font-libre text-[32px] font-semibold leading-[1.07] text-[#F5F0E8] transition hover:opacity-90">
          Get Investment Now
        </button>
      </div>
      
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/*
  RESPONSIVE STRATEGY — pure fluid CSS, no JS / no transform hacks.

  Every size is written as clamp(MIN, FLUID, MAX):
    - MAX  = the design value (your Figma spec). Caps growth so content never
             balloons on huge or ultrawide monitors.
    - FLUID = a vw expression. E.g. 48px at 1440 → 48/1440*100 = 3.33vw.
             Above 1440 viewport the clamp pins at MAX; below it scales fluidly.
    - MIN  = legibility floor for the tightest laptops (~ design × 0.6–0.7).

  Vertical paddings/gaps use vh-driven clamps so the section breathes
  correctly on short screens (Windows 125% scaling, 1366×768, etc.).
*/

const founderSlots = [
  { size: "large", pool: [{ name: "Abhiraj Singh Bhal", role: "Co-Founder, Urban Company", image: "/images/hero_founders_images/abhiraj_bahl.png" }, { name: "Ashutosh Valani", role: "Co-Founder, RENÉE Cosmetics", image: "/images/hero_founders_images/ashutosh-valani.png" }] },
  { size: "small", pool: [{ name: "Abhishek Bansal", role: "Co-Founder and CEO, Shadowfax", image: "/images/hero_founders_images/abhishek-bansal.png" }, { name: "Ishendra Agarwal", role: "Co-Founder, GIVA", image: "/images/hero_founders_images/ishendra-agarwal.png" }] },
  { size: "small", pool: [{ name: "Ruchi Kalra", role: "Co-Founder & CFO, Ofbusiness", image: "/images/hero_founders_images/ruchi-kalra.png" }, { name: "Anand Agrawal", role: "Co-Founder & CPTO, Credgenics", image: "/images/hero_founders_images/anand-agarwal.png" }] },
  { size: "small", pool: [{ name: "Varun Khaitan", role: "Co-Founder, Urban Company", image: "/images/hero_founders_images/varun-khaitan.png" }, { name: "Bhavish Aggarwal", role: "CEO of Ola Cabs", image: "/images/hero_founders_images/bhavish-aggarwal.png" }] },
  { size: "large", pool: [{ name: "Ghazal Alagh", role: "Co-Founder, Mamaearth", image: "/images/hero_founders_images/ghazal-alagh.png" }, { name: "Shashank Kumar", role: "Co-Founder, Razorpay", image: "/images/hero_founders_images/shashank-kumar.png" }] },
];

export default function Hero() {
  const [currentIndices, setCurrentIndices] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const triggerStaggeredFlip = async () => {
      for (let i = 0; i < 5; i++) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        setCurrentIndices((prev) => { const next = [...prev]; next[i] = (next[i] + 1) % founderSlots[i].pool.length; return next; });
      }
    };
    const interval = setInterval(triggerStaggeredFlip, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#FBF7F0]"
      style={{
        // Reads the same --nav-height CSS variable the navbar uses, so they
        // stay perfectly in sync when the nav shrinks on small screens.
        marginTop: "var(--nav-height)",
        // svh = "small viewport height" — stable under mobile browser UI bars.
        // min-height (not fixed height) lets the section grow on shorter screens
        // instead of clipping content.
        minHeight: "calc(100svh - var(--nav-height))",
        // Vertical breathing room that shrinks on short viewports (125% zoom etc).
        paddingTop: "clamp(24px, 6vh, 64px)",
        paddingBottom: "clamp(24px, 6vh, 64px)",
        paddingLeft: "clamp(16px, 3vw, 48px)",
        paddingRight: "clamp(16px, 3vw, 48px)",
      }}
    >
      <div className="relative flex w-full max-w-[1440px] flex-col items-center">

        {/* HEADING — caps at design 48 / 64 px */}
        <h1 className="relative z-10 mx-auto w-full max-w-[541px] text-center font-['Libre_Baskerville',_serif] font-normal leading-[110%] text-black text-[clamp(28px,3.33vw,48px)]">
          300+ bets. All on
          <span className="block font-semibold italic leading-[120%] text-[#001A4D] text-[clamp(36px,4.44vw,64px)]">
            Founders
          </span>
        </h1>

        {/* SUBHEAD — caps at design 16 px */}
        <p
          className="relative z-10 mx-auto w-full max-w-[593px] text-center font-['Poppins',_sans-serif] font-normal leading-[150%] text-[#323232] text-[clamp(13px,1.11vw,16px)]"
          style={{
            marginTop: "clamp(6px, 0.6vw, 9px)",
            marginBottom: "clamp(20px, 2.7vw, 39px)",
          }}
        >
          We partner with founders from day one. We invest conviction, not
          just capital, and stay by their side through every stage of the
          journey
        </p>

        {/* BUTTONS — width / height / font all clamp to design */}
        <div
          className="relative z-20 flex flex-row items-center justify-center"
          style={{
            gap: "clamp(12px, 1.66vw, 24px)",
            marginBottom: "clamp(20px, 2.9vw, 42px)",
          }}
        >
          <Link
            href="/portfolio"
            className="flex shrink-0 items-center justify-center p-[10px] font-['Libre_Baskerville',_serif] font-semibold leading-[107%] text-[#001A4D] transition-opacity hover:opacity-60 h-[clamp(44px,3.75vw,54px)] w-[clamp(140px,12.85vw,185px)] text-[clamp(13px,1.11vw,16px)]"
          >
            View Portfolio
          </Link>

          <Link
            href="/get-investment"
            className="group relative m-0 flex shrink-0 items-center justify-center gap-[10px] overflow-hidden rounded-[clamp(7px,0.625vw,9px)] bg-[#001A4D] p-[10px] font-['Libre_Baskerville',_serif] font-semibold leading-[107%] text-[#F5F0E8] transition-all h-[clamp(44px,3.75vw,54px)] w-[clamp(140px,12.85vw,185px)] text-[clamp(13px,1.11vw,16px)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,#003CB3_0%,#012469_50%,#001A4D_100%)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
            <span className="relative z-10">Get Investment</span>
          </Link>
        </div>

        {/* CARDS ROW — width / gap / padding all clamp to design */}
        <div
          className="relative z-0 w-full"
          style={{ marginTop: "clamp(-72px, -6.67vw, -32px)" }}
        >
          <div
            className="mx-auto flex w-full items-end justify-center"
            style={{ gap: "clamp(6px, 1.18vw, 17px)" }}
          >
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
                      className={`flex flex-col items-start bg-white shadow-[0_4px_14.8px_0_rgba(101,101,101,0.25)] rounded-[clamp(8px,0.83vw,12px)] ${
                        isLarge
                          ? "aspect-[278/386] w-[clamp(180px,19.3vw,278px)] gap-[clamp(6px,0.69vw,10px)] p-[clamp(10px,0.97vw,14px)]"
                          : "aspect-[240/294] w-[clamp(155px,16.67vw,240px)] gap-[clamp(2px,0.27vw,4px)] p-[clamp(10px,0.97vw,14px)_clamp(12px,1.25vw,18px)]"
                      }`}
                    >
                      <div className={`relative shrink-0 w-full overflow-hidden rounded-[clamp(3px,0.34vw,5px)] ${
                        isLarge ? "aspect-[251/291]" : "aspect-[211/223]"
                      }`}>
                        <Image
                          src={currentFounder.image}
                          alt={currentFounder.name}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes={isLarge ? "(max-width: 1440px) 19.3vw, 278px" : "(max-width: 1440px) 16.67vw, 240px"}
                        />
                      </div>

                      <div className="flex w-full flex-col" style={{ paddingTop: "clamp(3px, 0.34vw, 5px)" }}>
                        <p className={`w-full font-['Libre_Baskerville',_serif] font-bold leading-[119%] text-black ${
                          isLarge ? "text-[clamp(14px,1.38vw,20px)]" : "text-[clamp(12px,1.11vw,16px)]"
                        }`}>
                          {currentFounder.name}
                        </p>
                        <p
                          className="w-full font-['Poppins',_sans-serif] font-light leading-[119%] text-black text-[clamp(10px,0.83vw,12px)]"
                          style={{ marginTop: "clamp(2px, 0.27vw, 4px)" }}
                        >
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

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TitanSeedHero() {
  return (
    <section
      className="relative flex w-full items-center justify-center overflow-hidden bg-[#FBF7F0]"
      style={{
        marginTop: "var(--nav-height)",
        minHeight: "calc(100svh - var(--nav-height))",
        paddingTop: "clamp(40px, min(6.94vw, 10.18vh), 100px)",
        paddingBottom: "clamp(40px, min(6.94vw, 10.18vh), 100px)",
        paddingLeft: "var(--section-px-wide)",
        paddingRight: "var(--section-px-wide)",
      }}
    >

      {/* ── INNER WRAPPER ── */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col-reverse items-center justify-between lg:flex-row">

        {/* ── LEFT: TEXT CONTENT ── */}
        <div className="flex w-full flex-col items-start lg:w-[55%]">

          <motion.div
            className="flex flex-col items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h1
              className="m-0 font-['Libre_Baskerville',_serif] font-semibold leading-[110%] text-[#001A4D] text-[length:var(--heading-xl)] max-md:!text-[28px]"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              We Are Your
            </motion.h1>

            <motion.span
              className="relative mt-[clamp(4px,0.5vw,8px)] inline-flex items-center justify-center overflow-hidden px-[4px] py-[8px] md:px-[6px] md:py-[10px] bg-transparent"
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
              }}
            >
              <motion.span
                className="absolute inset-0 z-0 bg-[#D3E2FF] h-full w-full"
                style={{ transformOrigin: "left" }}
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeInOut", delay: 0.9 } }
                }}
              />
              <span className="relative z-10 font-['Libre_Baskerville',_serif] text-[length:var(--heading-xl)] max-md:!text-[28px] font-semibold italic leading-none text-[#001A4D]">
                first believer
              </span>
            </motion.span>
          </motion.div>

          <p className="mt-[clamp(24px,min(3vw,5vh),48px)] max-w-[clamp(300px,80%,500px)] font-['Poppins',_sans-serif] font-normal leading-[1.6] text-[#323232] text-[clamp(14px, min(1.6vw, 2.35vh), 20px)]">
            Titan Seed backs the boldest founders who have absolute clarity of thought.
          </p>

        </div>

        {/* ── RIGHT: IMAGE CONTENT ── */}
        <div className="relative mb-12 flex w-full justify-center lg:mb-0 lg:w-[45%] lg:justify-end">

          <div className="relative aspect-[4/3] w-full max-w-[clamp(280px,40vw,650px)] lg:aspect-square">
            <Image
              src="/images/titanseedfund/pawn.png"
              alt="Titan Seed First Believer"
              fill
              priority
              className="object-contain object-center lg:object-right"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
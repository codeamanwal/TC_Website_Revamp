"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

/*
  Each company has a `brandColor` — used for the hover gradient.
  Cards are monochrome (grayscale) by default; on hover the gradient
  fills in from the cursor and the logo snaps to full colour.
*/
const portfolioCompanies = [
  {
    name: "Boba Bhai",
    logo: "/images/logos/bobabhai.webp",
    category: "QSR & cloud kitchens",
    brandColor: "#F3DCF6",
    brandColorDark: "#E2B6EA",
    logoScale: 1,
  },
  {
    name: "Zouk",
    logo: "/images/logos/zouk_new_logo.webp",
    category: "Vegan leather goods",
    brandColor: "#FDE8D0",
    brandColorDark: "#F5CFA0",
    logoScale: 0.8,
  },
  {
    name: "BECO",
    logo: "/images/logos/BECO.webp",
    category: "Sustainable home products",
    brandColor: "#D4EDDA",
    brandColorDark: "#A8D8B0",
    logoScale: 1,
  },
  {
    name: "Simplismart",
    logo: "/images/logos/Simplismart.webp",
    category: "AI infrastructure",
    brandColor: "#D3E2FF",
    brandColorDark: "#A8C4F5",
    logoScale: 1,
  },
  {
    name: "Supertails",
    logo: "/images/logos/Supertails.webp",
    category: "Pet care platform",
    brandColor: "#FDEBD0",
    brandColorDark: "#F5D0A0",
    logoScale: 1,
  },
  {
    name: "Nat Habit",
    logo: "/images/logos/Nat Habit.webp",
    category: "Natural personal care",
    brandColor: "#E8F5E0",
    brandColorDark: "#C0E2B0",
    logoScale: 1,
  },
  {
    name: "GoKwik",
    logo: "/images/logos/GoKwik.svg",
    category: "E-commerce enablement",
    brandColor: "#E0E8FF",
    brandColorDark: "#B0C4F5",
    logoScale: 1,
  },
  {
    name: "Headout",
    logo: "/images/logos/Headout.svg",
    category: "Experiences marketplace",
    brandColor: "#FFE0E6",
    brandColorDark: "#F5B0BE",
    logoScale: 1,
  },
  {
    name: "Park+",
    logo: "/images/logos/Park+.webp",
    category: "Automobile platform",
    brandColor: "#FFF4D6",
    brandColorDark: "#F5E0A0",
    logoScale: 1,
  },
  {
    name: "DotPe",
    logo: "/images/logos/DotPe.webp",
    category: "Digital commerce",
    brandColor: "#D3E8FF",
    brandColorDark: "#A8CCF5",
    logoScale: 1,
  },
];

/* ── Card — monochrome by default, gradient + colour on hover ── */
function PortfolioCard({
  company,
  index,
}: {
  company: (typeof portfolioCompanies)[number];
  index: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const progressRef = useRef(0);
  const targetRef = useRef(0); // 0 = white, 1 = brandColor
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const drawFill = useCallback(() => {
    const canvas = canvasRef.current;
    const card = cardRef.current;
    if (!canvas || !card) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = card.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const w = rect.width;
    const h = rect.height;

    // Gentle ease towards target
    progressRef.current += (targetRef.current - progressRef.current) * 0.04;
    if (Math.abs(progressRef.current - targetRef.current) < 0.001) {
      progressRef.current = targetRef.current;
    }

    ctx.clearRect(0, 0, w, h);

    if (progressRef.current > 0.001) {
      const p = progressRef.current;

      // Radial gradient: white at center → brand colour at edges
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.sqrt(cx * cx + cy * cy);

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${p})`);
      gradient.addColorStop(0.4, company.brandColor);
      gradient.addColorStop(1, company.brandColorDark);

      ctx.globalAlpha = p;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
      ctx.globalAlpha = 1;
    }

    if (Math.abs(progressRef.current - targetRef.current) > 0.001) {
      animRef.current = requestAnimationFrame(drawFill);
    }

    if (card) {
      card.setAttribute(
        "data-hovered",
        targetRef.current === 1 ? "true" : "false"
      );
    }
  }, [company.brandColor, company.brandColorDark]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
  }, []);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent) => {
      const card = cardRef.current;
      if (card) {
        const rect = card.getBoundingClientRect();
        mouseRef.current = {
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        };
        card.setAttribute("data-hovered", "true");
      }
      targetRef.current = 1;
      cancelAnimationFrame(animRef.current);
      animRef.current = requestAnimationFrame(drawFill);
    },
    [drawFill]
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) card.setAttribute("data-hovered", "false");
    targetRef.current = 0;
    cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(drawFill);
  }, [drawFill]);

  useEffect(() => {
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.15 + index * 0.08,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      data-hovered="false"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="portfolio-card group relative flex cursor-pointer flex-col items-center overflow-hidden bg-white"
      style={{
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)",
        width: "100%",
        aspectRatio: "1 / 1",
      }}
    >
      {/* Canvas for animated colour gradient fill */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ zIndex: 0, borderRadius: "inherit" }}
      />

      {/* Category label */}
      <p
        className="relative z-10 w-full text-center font-['Poppins',_sans-serif] font-normal text-[#323232] transition-colors duration-300"
        style={{
          paddingTop: "clamp(16px, min(2.5vw, 3.5vh), 32px)",
          fontSize: "clamp(11px, min(1.1vw, 1.6vh), 16px)",
        }}
      >
        {company.category}
      </p>

      {/* Logo — grayscale by default, full colour on hover */}
      <div className="relative z-10 flex flex-1 w-full items-center justify-center px-[15%]">
        <div
          className="relative w-full transition-[filter] duration-500 ease-out grayscale group-hover:grayscale-0"
          style={{
            height: "clamp(36px, min(4.5vw, 6.5vh), 64px)",
            transform: `scale(${company.logoScale})`,
          }}
        >
          <Image
            src={company.logo}
            alt={company.name}
            fill
            sizes="(max-width: 768px) 40vw, 20vw"
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioWinnerFund() {
  return (
    <section
      className="relative flex w-full flex-col items-center overflow-hidden bg-[#FBF7F0]"
      style={{
        paddingTop: "clamp(40px, min(6.94vw, 10.18vh), 100px)",
        paddingBottom: "clamp(40px, min(6.94vw, 10.18vh), 100px)",
        paddingLeft: "var(--section-px-wide)",
        paddingRight: "var(--section-px-wide)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">

        {/* ── HEADING ── */}
        <motion.div
          className="mb-[clamp(28px,min(4vw,6vh),56px)] flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* "Portfolio Company" — highlighted */}
          <motion.div
            className="relative inline-flex items-center justify-center overflow-hidden bg-transparent px-[6px] py-[8px] md:px-[8px] md:py-[10px]"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <motion.span
              className="absolute inset-0 z-0 h-full w-full bg-[#D3E2FF]"
              style={{ transformOrigin: "left" }}
              variants={{
                hidden: { scaleX: 0 },
                visible: {
                  scaleX: 1,
                  transition: { duration: 0.6, ease: "easeInOut", delay: 0.5 },
                },
              }}
            />
            <span
              className="relative z-10 font-['Libre_Baskerville',_serif] font-semibold italic leading-[110%] text-[#001A4D] max-md:!text-[28px]"
              style={{ fontSize: "var(--heading-xl)" }}
            >
              Portfolio Company
            </span>
          </motion.div>

          {/* "Winner Fund" */}
          <motion.h2
            className="mt-[clamp(4px,0.5vw,8px)] m-0 font-['Libre_Baskerville',_serif] font-semibold leading-[110%] text-[#001A4D] max-md:!text-[28px]"
            style={{ fontSize: "var(--heading-xl)" }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
              },
            }}
          >
            Winner Fund
          </motion.h2>
        </motion.div>

        {/* ── CARD GRID ── */}
        <motion.div
          className="grid w-full grid-cols-2 gap-[clamp(12px,1.5vw,20px)] md:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioCompanies.map((company, i) => (
            <PortfolioCard key={company.name} company={company} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

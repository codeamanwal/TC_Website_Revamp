"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/*
  ANIMATED GRID BACKGROUND
  Draws a subtle grid on canvas and animates a radial wave
  that brightens grid lines as it passes through — no dots.
*/
function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const startTime = performance.now();

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const GRID_SIZE = 60;
    const BASE_ALPHA = 0.055;
    const WAVE_BOOST = 0.12;

    const draw = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      const cx = w / 2;
      const cy = h / 2;
      const maxDist = Math.sqrt(cx * cx + cy * cy);

      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.lineCap = "butt";

      // Two overlapping waves for organic feel
      const waves = [
        { speed: 110, width: 200 },
        { speed: 75, width: 280 },
      ];

      const getBoost = (px: number, py: number) => {
        const dist = Math.sqrt((px - cx) ** 2 + (py - cy) ** 2);
        let boost = 0;
        for (const wave of waves) {
          const wavePos = (elapsed * wave.speed) % (maxDist + wave.width);
          const delta = Math.abs(dist - wavePos);
          if (delta < wave.width) {
            boost += (1 - delta / wave.width) * WAVE_BOOST;
          }
        }
        return Math.min(boost, WAVE_BOOST * 1.5);
      };

      // ── VERTICAL LINES (draw in segments for per-segment glow) ──
      for (let x = 0; x <= w; x += GRID_SIZE) {
        for (let y = 0; y < h; y += GRID_SIZE) {
          const midY = y + GRID_SIZE / 2;
          const alpha = BASE_ALPHA + getBoost(x, midY);
          ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, Math.min(y + GRID_SIZE, h));
          ctx.stroke();
        }
      }

      // ── HORIZONTAL LINES (draw in segments for per-segment glow) ──
      for (let y = 0; y <= h; y += GRID_SIZE) {
        for (let x = 0; x < w; x += GRID_SIZE) {
          const midX = x + GRID_SIZE / 2;
          const alpha = BASE_ALPHA + getBoost(midX, y);
          ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(Math.min(x + GRID_SIZE, w), y);
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ zIndex: 0 }}
    />
  );
}

export default function WinnersHero() {
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

      {/* ── ANIMATED GRID BACKGROUND ── */}
      <AnimatedGrid />

      {/* ── CONTENT ── */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >

        {/* ── HEADING ── */}
        <motion.h1
          className="m-0 font-['Libre_Baskerville',_serif] font-semibold leading-[110%] text-[#001A4D] max-md:!text-[28px]"
          style={{ fontSize: "var(--heading-xl)" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
          }}
        >
          Doubling Down on
        </motion.h1>

        {/* ── HIGHLIGHTED LINE ── */}
        <motion.div
          className="relative mt-[clamp(4px,0.5vw,8px)] inline-flex items-center justify-center overflow-hidden px-[6px] py-[8px] md:px-[8px] md:py-[10px] bg-transparent"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
          }}
        >
          <motion.span
            className="absolute inset-0 z-0 bg-[#D3E2FF] h-full w-full"
            style={{ transformOrigin: "left" }}
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeInOut", delay: 0.8 } }
            }}
          />
          <span
            className="relative z-10 font-['Libre_Baskerville',_serif] font-semibold italic leading-[110%] text-[#001A4D] max-md:!text-[28px]"
            style={{ fontSize: "var(--heading-xl)" }}
          >
            Breakout Companies
          </span>
        </motion.div>

        {/* ── SUBTITLE ── */}
        <motion.p
          className="mt-[clamp(20px,min(3vw,5vh),44px)] max-w-[600px] font-['Poppins',_sans-serif] font-normal leading-[1.6] text-[#323232] text-center"
          style={{ fontSize: "clamp(14px, min(1.6vw, 2.35vh), 20px)" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.6 } }
          }}
        >
          The Titan Capital Winners Fund backs portfolio companies that have
          demonstrated exceptional traction, and are ready to define their
          categories at scale.
        </motion.p>

      </motion.div>
    </section>
  );
}

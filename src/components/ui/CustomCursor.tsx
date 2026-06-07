"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/*
  CUSTOM CURSOR — premium VC aesthetic.
    • A precise navy dot tracks the pointer 1:1.
    • A thin navy ring trails with a soft spring lag (elegant, not playful).
    • Hovering anything interactive expands the ring + fades a tint in, and the
      dot tucks away so the ring reads as a "focus" target.
    • Pressing nudges the ring inward for tactile feedback.
    • Only enabled on fine-pointer (mouse) devices — never on touch.
*/

const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="hover"]';

const NAVY = "0,26,77"; // #001A4D as rgb channels for rgba() tinting

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Raw pointer position (dot follows this exactly).
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Ring trails with a gentle spring for the refined lag.
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Mouse only — skip touch / coarse pointers entirely.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
    document.documentElement.classList.add("cc-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.(INTERACTIVE);
      setHovering(Boolean(el));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    return () => {
      document.documentElement.classList.remove("cc-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden
        className="cc-ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hovering ? 1.8 : pressed ? 0.82 : 1,
          opacity: hidden ? 0 : 1,
          backgroundColor: `rgba(${NAVY},${hovering ? 0.06 : 0})`,
          borderColor: `rgba(${NAVY},${hovering ? 0.55 : 0.35})`,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.4 }}
      />

      {/* Precise dot */}
      <motion.div
        aria-hidden
        className="cc-dot"
        style={{ x, y }}
        animate={{
          scale: hovering ? 0 : pressed ? 0.7 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}

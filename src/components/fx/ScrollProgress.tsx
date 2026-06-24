"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** A thin water level that fills left to right as you move down the page. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-sky to-blue"
      style={{ scaleX: x }}
    />
  );
}

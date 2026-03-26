"use client";

import { motion } from "framer-motion";

export function LogoSVG({ className }: { className?: string }) {
  const strokeWidth = 1.5;
  const transition = {
    duration: 2,
    ease: "easeInOut",
  };

  return (
    <motion.svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Diamond/Construction Frame */}
      <motion.path
        d="M200 20 L320 100 L200 180 L80 100 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ ...transition, delay: 0.2 }}
      />

      {/* "B" Symbol Construction */}
      <motion.path
        d="M160 70 V130 M160 70 H180 C190 70 195 75 195 85 C195 95 190 100 180 100 H160 M160 100 H180 C190 100 195 105 195 115 C195 125 190 130 180 130 H160"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ ...transition, delay: 0.5 }}
      />

      {/* "M" Symbol Construction */}
      <motion.path
        d="M205 130 V70 L230 100 L255 70 V130"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ ...transition, delay: 0.8 }}
      />

      {/* "BUILD MATRIX" Text Placeholder (Geometric Style) */}
      <motion.path
        d="M100 155 H300 M100 170 H300"
        stroke="currentColor"
        strokeWidth={0.5}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.3 }}
        transition={{ ...transition, delay: 1.2 }}
      />
      
      {/* Solid Fill layer (appears last) */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <path
          d="M200 20 L320 100 L200 180 L80 100 Z"
          fill="white"
          fillOpacity="0.05"
        />
      </motion.g>
    </motion.svg>
  );
}

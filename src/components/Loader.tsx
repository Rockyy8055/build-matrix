"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedLogo from "./AnimatedLogo";

export default function Loader() {
  const [phase, setPhase] = useState<"draw" | "logo">("draw");

  useEffect(() => {
    const timer = setTimeout(() => setPhase("logo"), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {phase === "draw" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
        >
          {/* BASE SVG (hidden fill) */}
          <svg viewBox="0 0 600 200" width="320">
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
              fontSize="42"
              fontWeight="bold"
              letterSpacing="8"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              BUILD MATRIX
            </text>
          </svg>

          {/* DRAWING STROKE OVERLAY */}
          <motion.svg
            viewBox="0 0 600 200"
            width="320"
            className="absolute top-0 left-0"
          >
            <motion.text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              fontSize="42"
              fontWeight="bold"
              letterSpacing="8"
              fontFamily="system-ui, -apple-system, sans-serif"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            >
              BUILD MATRIX
            </motion.text>
          </motion.svg>
        </motion.div>
      )}

      {phase === "logo" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <AnimatedLogo />
        </motion.div>
      )}
    </motion.div>
  );
}

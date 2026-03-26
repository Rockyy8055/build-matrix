"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedLogo from "./AnimatedLogo";

export default function Loader() {
  const [phase, setPhase] = useState<"draw" | "logo">("draw");

  useEffect(() => {
    const timer = setTimeout(() => setPhase("logo"), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {phase === "draw" && (
        <motion.svg
          viewBox="0 0 600 200"
          width="320"
          initial="hidden"
          animate="visible"
          className="overflow-visible"
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
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 2.2, ease: "easeInOut" },
              opacity: { duration: 0.3 }
            }}
          >
            BUILD MATRIX
          </motion.text>

          {/* Glow effect */}
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="none"
            stroke="rgba(59, 130, 246, 0.5)"
            strokeWidth="3"
            fontSize="42"
            fontWeight="bold"
            letterSpacing="8"
            fontFamily="system-ui, -apple-system, sans-serif"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
            transition={{
              pathLength: { duration: 2.2, ease: "easeInOut" },
              opacity: { duration: 2.5, times: [0, 0.8, 1] }
            }}
            style={{ filter: "blur(4px)" }}
          />
        </motion.svg>
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

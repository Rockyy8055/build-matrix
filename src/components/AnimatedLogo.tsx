"use client";

import { motion } from "framer-motion";
import { LogoSVG } from "./ui/LogoSVG";

export function AnimatedLogo({ isLoaded }: { isLoaded: boolean }) {
  return (
    <motion.div
      initial={{ 
        position: "fixed",
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        scale: 1,
        zIndex: 60
      }}
      animate={{
        top: isLoaded ? "2.5rem" : "50%",
        left: isLoaded ? "2.5rem" : "50%",
        x: isLoaded ? "0%" : "-50%",
        y: isLoaded ? "-50%" : "-50%",
        scale: isLoaded ? 0.25 : 1,
        transition: { 
          duration: 1.2, 
          ease: [0.76, 0, 0.24, 1], // Custom Apple-style ease
          delay: 0.1 
        }
      }}
      className="pointer-events-none"
    >
      <div className="text-white">
        <LogoSVG className="w-64 h-64 md:w-96 md:h-96" />
      </div>
    </motion.div>
  );
}

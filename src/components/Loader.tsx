"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoSVG } from "./ui/LogoSVG";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence of animation steps
    const timer1 = setTimeout(() => setStep(1), 500);  // Start drawing
    const timer2 = setTimeout(() => setStep(2), 2500); // Fill and Glow
    const timer3 = setTimeout(() => {
      onComplete();
    }, 3500); // Exit loader

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div className="relative w-64 h-64 md:w-96 md:h-96">
        {/* Construction Blueprint Lines (Subtle) */}
        <AnimatePresence>
          {step < 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 border-[0.5px] border-white/30 grid grid-cols-6 grid-rows-6"
            >
              {[...Array(36)].map((_, i) => (
                <div key={i} className="border-[0.5px] border-white/10" />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Logo Animation */}
        <motion.div
          animate={{
            scale: step === 0 ? 0.8 : 1,
            filter: step === 2 ? "drop-shadow(0 0 15px rgba(255,255,255,0.5))" : "drop-shadow(0 0 0px rgba(255,255,255,0))",
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-full h-full flex items-center justify-center text-white"
        >
          <LogoSVG className="w-full h-full" />
        </motion.div>

        {/* Build Progress Text (Subtle) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-12 left-0 right-0 text-center"
        >
          <p className="text-white text-[10px] tracking-[0.4em] uppercase font-light">
            {step < 2 ? "Initializing Build..." : "Structure Complete"}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

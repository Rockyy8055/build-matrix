"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [showScan, setShowScan] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowScan(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Background Particles (Subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0.1, 
              x: Math.random() * 100 + "%", 
              y: "110%" 
            }}
            animate={{ 
              y: "-10%",
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
          animate={{
            opacity: [0, 0.6, 1],
            scale: [0.85, 1, 1],
            filter: ["blur(8px)", "blur(2px)", "blur(0px)"],
          }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          {/* Main Logo */}
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/images/clients/logo.png"
              alt="Build Matrix Logo"
              width={200}
              height={80}
              priority
              className="relative z-10"
            />
            
            {/* Shimmer Overlay (Phase 2) */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                delay: 1,
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5
              }}
              className="absolute inset-0 z-20 shimmer-overlay"
            />
          </div>

          {/* Glow Effect (Phase 3) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0.8],
              scale: [1, 1.05, 1]
            }}
            transition={{
              delay: 2,
              duration: 0.5,
              times: [0, 0.5, 1],
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-white/10 blur-2xl rounded-full z-0"
            style={{ filter: "drop-shadow(0 0 25px rgba(255,255,255,0.35))" }}
          />
        </motion.div>

        {/* Scanning Line (Phase 1) */}
        {showScan && (
          <motion.div
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 1.5, ease: "linear" }}
            className="absolute left-0 right-0 h-px bg-white/50 z-30 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          />
        )}
      </div>
    </motion.div>
  );
}

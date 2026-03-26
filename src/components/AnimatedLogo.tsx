"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogo({ isLoaded }: { isLoaded: boolean }) {
  return (
    <motion.div
      layoutId="main-logo"
      initial={{
        position: "fixed",
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        scale: 1,
        zIndex: 60,
      }}
      animate={{
        top: isLoaded ? "18px" : "50%",
        left: isLoaded ? "24px" : "50%",
        x: isLoaded ? "0%" : "-50%",
        y: isLoaded ? "0%" : "-50%",
        scale: isLoaded ? 0.45 : 1,
        transition: {
          duration: 0.9,
          ease: "easeInOut",
        },
      }}
    >
      <Image
        src="/images/clients/logo.png"
        alt="Build Matrix Logo"
        width={200}
        height={80}
        priority
      />
    </motion.div>
  );
}

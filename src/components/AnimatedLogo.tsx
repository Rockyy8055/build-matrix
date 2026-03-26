"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogo({ isLoaded }: { isLoaded: boolean }) {
  return (
    <motion.div
      layoutId="main-logo"
      className="fixed z-50"
      initial={{
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
        scale: 1,
      }}
      animate={{
        top: isLoaded ? 18 : "50%",
        left: isLoaded ? 32 : "50%",
        translateX: isLoaded ? 0 : "-50%",
        translateY: isLoaded ? 0 : "-50%",
        scale: isLoaded ? 0.55 : 1,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/images/clients/logo.png"
        alt="Build Matrix"
        width={160}
        height={60}
        className="object-contain"
        priority
      />
    </motion.div>
  );
}

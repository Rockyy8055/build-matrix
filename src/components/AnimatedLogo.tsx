"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogo({ isLoaded }: { isLoaded: boolean }) {
  return (
    <motion.div
      layoutId="main-logo"
      className="fixed"
      style={{ zIndex: isLoaded ? 40 : 60 }}
      initial={{
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        scale: 1,
      }}
      animate={{
        top: isLoaded ? 14 : "50%",
        left: isLoaded ? 24 : "50%",
        x: isLoaded ? 0 : "-50%",
        y: isLoaded ? 0 : "-50%",
        scale: isLoaded ? 0.6 : 1,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/images/clients/logo.png"
        alt="Build Matrix"
        width={180}
        height={70}
        className="object-contain"
        priority
      />
    </motion.div>
  );
}

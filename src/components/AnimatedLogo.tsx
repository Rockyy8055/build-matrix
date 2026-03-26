"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogo() {
  return (
    <motion.div layoutId="main-logo">
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

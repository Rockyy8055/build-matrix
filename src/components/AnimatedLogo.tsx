"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogo() {
  return (
    <motion.div layoutId="main-logo">
      <Image
        src="/clients/images/BMlogo.svg"
        alt="Build Matrix"
        width={240}
        height={96}
        className="object-contain brightness-0 invert"
        priority
      />
    </motion.div>
  );
}

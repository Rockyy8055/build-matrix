"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogo() {
  return (
    <motion.div layoutId="main-logo" className="brightness-0 invert">
      <Image
        src="/clients/images/BMlogo.svg"
        alt="Build Matrix"
        width={160}
        height={64}
        className="object-contain"
        priority
      />
    </motion.div>
  );
}

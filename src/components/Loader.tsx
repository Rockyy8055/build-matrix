"use client";

import { motion } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedLogo />
    </motion.div>
  );
}

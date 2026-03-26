"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { About } from "@/components/site/About";
import { Careers } from "@/components/site/Careers";
import { Clients } from "@/components/site/Clients";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { Enquiry } from "@/components/site/Enquiry";
import { Interiors } from "@/components/site/Interiors";
import { Navbar } from "@/components/site/Navbar";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { Loader } from "@/components/Loader";
import { AnimatedLogo } from "@/components/AnimatedLogo";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      // Small delay before showing content to let logo move
      const timer = setTimeout(() => setShowContent(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-[var(--foreground)] overflow-x-hidden">
      <AnimatePresence>
        {!isLoaded && (
          <Loader onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      <AnimatedLogo isLoaded={isLoaded} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Navbar hideLogo={!showContent} />
        <main>
          <Hero />
          <About />
          <Services />
          <Clients />
          <Interiors />
          <Projects />
          <Gallery />
          <Enquiry />
          <Careers />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

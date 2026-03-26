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
import Loader from "@/components/Loader";
import AnimatedLogo from "@/components/AnimatedLogo";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <AnimatedLogo isLoaded={!loading} />

      {!loading && (
        <div className="animate-fadeIn">
          <Navbar />
          <main className="bg-black text-white min-h-screen">
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
        </div>
      )}
    </>
  );
}

import { About } from "@/components/site/About";
import { Careers } from "@/components/site/Careers";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { Inquiry } from "@/components/site/Inquiry";
import { Interiors } from "@/components/site/Interiors";
import { Navbar } from "@/components/site/Navbar";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f19] text-[var(--foreground)] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Interiors />
        <Projects />
        <Gallery />
        <Inquiry />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

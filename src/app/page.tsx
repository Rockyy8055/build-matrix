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

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-[var(--foreground)] overflow-x-hidden">
      <Navbar />
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
    </div>
  );
}

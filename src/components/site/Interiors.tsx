"use client";

import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

type InteriorProject = {
  title: string;
  location: string;
  image: string;
  category: "residential" | "commercial";
};

const interiorProjects: InteriorProject[] = [
  {
    title: "Modern Villa Interior",
    location: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80",
    category: "residential",
  },
  {
    title: "Luxury Apartment",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c2f11c0?auto=format&fit=crop&w=1800&q=80",
    category: "residential",
  },
  {
    title: "Corporate Office Space",
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1497366210384-9bbd5fc66f6f?auto=format&fit=crop&w=1800&q=80",
    category: "commercial",
  },
  {
    title: "Premium Penthouse",
    location: "Pune",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa9cbe8?auto=format&fit=crop&w=1800&q=80",
    category: "residential",
  },
  {
    title: "Tech Startup Hub",
    location: "Chennai",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80",
    category: "commercial",
  },
  {
    title: "Contemporary Home",
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1600585154340-7deb409bcbcb?auto=format&fit=crop&w=1800&q=80",
    category: "residential",
  },
  {
    title: "Restaurant Interior",
    location: "Goa",
    image:
      "https://images.unsplash.com/photo-1517248135467-085f403eea86?auto=format&fit=crop&w=1800&q=80",
    category: "commercial",
  },
  {
    title: "Minimalist Studio",
    location: "Kochi",
    image:
      "https://images.unsplash.com/photo-1600573472550-80a0d0b76a54?auto=format&fit=crop&w=1800&q=80",
    category: "residential",
  },
];

function InteriorCard({ project }: { project: InteriorProject }) {
  return (
    <div className="card-3d group overflow-hidden rounded-2xl sm:rounded-3xl glass-card">
      <div className="relative">
        <div
          className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="text-base sm:text-lg font-semibold text-white truncate">
              {project.title}
            </div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">
              {project.location}
            </div>
          </div>
          <div
            className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs font-semibold flex-shrink-0 ${
              project.category === "residential"
                ? "bg-blue-500/20 text-blue-300"
                : "bg-purple-500/20 text-purple-300"
            }`}
          >
            {project.category === "residential" ? "Residential" : "Commercial"}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Interiors() {
  const [activeTab, setActiveTab] = useState<"all" | "residential" | "commercial">("all");

  const filteredProjects =
    activeTab === "all"
      ? interiorProjects
      : interiorProjects.filter((p) => p.category === activeTab);

  return (
    <Section id="interiors" className="bg-[var(--soft)] overflow-hidden">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[var(--accent-light)]">
              Interiors
            </p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Our <span className="gradient-text">Interior</span> Works
            </h2>
            <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
              Explore our curated collection of residential and commercial interior
              projects crafted with precision and modern aesthetics.
            </p>
          </div>
        </FadeIn>

        <FadeIn delayMs={100}>
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { key: "all", label: "All Projects" },
              { key: "residential", label: "Residential" },
              { key: "commercial", label: "Commercial" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-blue-600 text-white shadow-lg"
                    : "glass-card text-gray-300 hover:bg-white/15"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-8 sm:mt-10 md:mt-14 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project, idx) => (
            <FadeIn key={project.title} delayMs={idx * 60}>
              <InteriorCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

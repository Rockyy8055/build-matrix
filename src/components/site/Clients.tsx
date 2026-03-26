"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

type ClientCategory = keyof typeof clients;

// Clients data - file names match /public/images/{name}.webp
const clients = {
  "Major Projects": [
    "google",
    "reliance-industries",
    "cognizant",
    "philips-innovation",
    "honeywell",
    "mindtree",
    "cisco",
    "dell",
    "hp",
  ],
  "Others": [
    "axis-bank",
    "centurion-bank",
    "may-bank",
  ],
  "Retail": [
    "benetton",
  ],
  "Healthcare": [
    "cultfit",
    "kaveri-hospitals",
    "novex-health",
  ],
  "Corporate Office": [
    "google",
    "cisco",
    "mindtree",
    "cognizant",
    "ge",
    "philips-innovation",
    "honeywell",
    "accenture",
    "hp",
    "samsung",
    "wework",
    "simplyworks",
    "smartworks",
  ],
  "Hotels": [
    "premier-inn",
    "novartis",
  ],
  "Hospital": [
    "apollo",
    "kaveri-hospitals",
    "know6-health",
  ],
  "Builders": [
    "ivrcl",
    "gmr",
    "embassy",
    "bagmane",
    "dlf",
    "divyasree",
    "mantri",
  ],
  "Banking": [
    "centurion-bank",
    "axis-bank",
    "standard-chartered",
  ],
  "Industrial": [
    "brilliant-printers",
  ],
  "Retail Showrooms": [
    "reliance-trends",
    "jack-and-jones",
    "benetton",
    "kfc",
    "5-star",
  ],
  "Fitness": [
    "cultfit",
  ],
  "Residential": [
    "boulevard-villa-project",
    "phoenix-apartments",
  ],
};

const categories: ClientCategory[] = [
  "Major Projects",
  "Others",
  "Retail",
  "Healthcare",
  "Corporate Office",
  "Hotels",
  "Hospital",
  "Builders",
  "Banking",
  "Industrial",
  "Retail Showrooms",
  "Fitness",
  "Residential",
];

function ClientLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center">
      <img
        src={`/clients/images/${name}.webp`}
        alt={`${name} logo`}
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain transition-all duration-300"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
        }}
      />
    </div>
  );
}

export function Clients() {
  const [activeTab, setActiveTab] = useState<ClientCategory>("Major Projects");

  // Auto-scroll through categories every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev: ClientCategory) => {
        const currentIndex = categories.indexOf(prev);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const filteredClients = clients[activeTab];

  return (
    <Section id="clients" className="bg-[#f1f5f9] overflow-hidden">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-blue-500">
              Clients
            </p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Trusted by <span className="gradient-text">Leading Brands</span>
            </h2>
            <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
              Trusted by leading brands across multiple industries.
            </p>
          </div>
        </FadeIn>

        <FadeIn delayMs={100}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === category
                    ? "bg-blue-500 text-white shadow-lg"
                    : "glass-card text-slate-600 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {filteredClients.map((client, idx) => (
            <FadeIn key={`${activeTab}-${client}-${idx}`} delayMs={idx * 50}>
              <ClientLogo name={client} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

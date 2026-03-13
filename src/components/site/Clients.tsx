"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

type ClientCategory = keyof typeof clients;

// Logo file mapping - add your logo files to /public/images/clients/
// Naming convention: lowercase, spaces replaced with hyphens, .png format
// Example: "Google" -> "/images/clients/google.png"
const logoMap: Record<string, string> = {
  // Major Projects
  "Google": "/images/clients/google.png",
  "Reliance Industries": "/images/clients/reliance-industries.png",
  "Cognizant": "/images/clients/cognizant.png",
  "Philips Innovation": "/images/clients/philips.png",
  "Honeywell": "/images/clients/honeywell.png",
  "Mindtree": "/images/clients/mindtree.png",
  "Cisco": "/images/clients/cisco.png",
  "Dell": "/images/clients/dell.png",
  "HP": "/images/clients/hp.png",
  // Others
  "Axis Bank": "/images/clients/axis-bank.png",
  "Centurion Bank": "/images/clients/centurion-bank.png",
  "May Bank": "/images/clients/may-bank.png",
  // Retail
  "Benetton": "/images/clients/benetton.png",
  // Healthcare
  "Cultfit": "/images/clients/cultfit.png",
  "Kaveri Hospital": "/images/clients/kaveri-hospital.png",
  "Novex Health": "/images/clients/novex-health.png",
  // Corporate Office
  "GE": "/images/clients/ge.png",
  "Accenture": "/images/clients/accenture.png",
  "Samsung": "/images/clients/samsung.png",
  "WeWork": "/images/clients/wework.png",
  "SimplyWorks": "/images/clients/simplyworks.png",
  "SmartWorks": "/images/clients/smartworks.png",
  // Hotels
  "Premier Inn": "/images/clients/premier-inn.png",
  "Novartis": "/images/clients/novartis.png",
  // Hospital
  "Apollo": "/images/clients/apollo.png",
  "Kaveri Hospitals": "/images/clients/kaveri-hospitals.png",
  "Know6 Health": "/images/clients/know6-health.png",
  // Builders
  "IVRCL": "/images/clients/ivrcl.png",
  "GMR": "/images/clients/gmr.png",
  "Embassy": "/images/clients/embassy.png",
  "Bagmane": "/images/clients/bagmane.png",
  "DLF": "/images/clients/dlf.png",
  "Divyasree": "/images/clients/divyasree.png",
  "Mantri": "/images/clients/mantri.png",
  // Banking
  "Centurion": "/images/clients/centurion.png",
  "Axis": "/images/clients/axis.png",
  "Standard Chartered": "/images/clients/standard-chartered.png",
  // Industrial
  "Brilliant Printers": "/images/clients/brilliant-printers.png",
  // Retail Showrooms
  "Reliance Trends": "/images/clients/reliance-trends.png",
  "Jack & Jones": "/images/clients/jack-jones.png",
  "KFC": "/images/clients/kfc.png",
  "5 Star": "/images/clients/5-star.png",
  // Fitness
  "Cult Fit": "/images/clients/cult-fit.png",
  // Residential
  "Boulevard Villa Project": "/images/clients/boulevard-villa.png",
  "Phoenix Apartments": "/images/clients/phoenix-apartments.png",
  // Construction
  "Bus Stand Project": "/images/clients/bus-stand.png",
  "Sudhamnagar": "/images/clients/sudhamnagar.png",
};

const clients = {
  "Major Projects": [
    "Google",
    "Reliance Industries",
    "Cognizant",
    "Philips Innovation",
    "Honeywell",
    "Mindtree",
    "Cisco",
    "Dell",
    "HP",
  ],
  "Others": [
    "Axis Bank",
    "Centurion Bank",
    "May Bank",
  ],
  "Retail": [
    "Benetton",
  ],
  "Healthcare": [
    "Cultfit",
    "Kaveri Hospital",
    "Novex Health",
  ],
  "Corporate Office": [
    "Google",
    "Cisco",
    "Mindtree",
    "Cognizant",
    "GE",
    "Philips Innovation",
    "Honeywell",
    "Accenture",
    "HP",
    "Samsung",
    "WeWork",
    "SimplyWorks",
    "SmartWorks",
  ],
  "Hotels": [
    "Premier Inn",
    "Novartis",
  ],
  "Hospital": [
    "Apollo",
    "Kaveri Hospitals",
    "Know6 Health",
  ],
  "Builders": [
    "IVRCL",
    "GMR",
    "Embassy",
    "Bagmane",
    "DLF",
    "Divyasree",
    "Mantri",
  ],
  "Banking": [
    "Centurion",
    "Axis",
    "Standard Chartered",
  ],
  "Industrial": [
    "Brilliant Printers",
  ],
  "Retail Showrooms": [
    "Reliance Trends",
    "Jack & Jones",
    "Benetton",
    "KFC",
    "5 Star",
  ],
  "Fitness": [
    "Cult Fit",
  ],
  "Residential": [
    "Boulevard Villa Project",
    "Phoenix Apartments",
  ],
  "Construction": [
    "Bus Stand Project",
    "Sudhamnagar",
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
  "Construction",
];

function ClientLogo({ name }: { name: string }) {
  const logoSrc = logoMap[name] || `/images/clients/${name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.png`;
  
  return (
    <div className="group relative overflow-hidden rounded-xl glass-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-center justify-center h-[50px]">
        <img
          src={logoSrc}
          alt={`${name} logo`}
          className="max-h-[50px] max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            target.nextElementSibling?.classList.remove("hidden");
          }}
        />
        <div className="hidden text-slate-600 text-sm font-medium text-center">
          {name}
        </div>
      </div>
    </div>
  );
}

export function Clients() {
  const [activeTab, setActiveTab] = useState<ClientCategory>("Major Projects");

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

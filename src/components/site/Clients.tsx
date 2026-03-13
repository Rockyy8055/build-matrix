"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

type ClientCategory = keyof typeof clients;

const domainMap: Record<string, string> = {
  // Major Projects
  "Google": "google.com",
  "Reliance Industries": "reliance.com",
  "Cognizant": "cognizant.com",
  "Philips Innovation": "philips.com",
  "Honeywell": "honeywell.com",
  "Mindtree": "mindtree.com",
  "Cisco": "cisco.com",
  "Dell": "dell.com",
  "HP": "hp.com",
  // Others
  "Axis Bank": "axisbank.com",
  "Centurion Bank": "centurionbank.com",
  "May Bank": "maybank.com",
  // Retail
  "Benetton": "benetton.com",
  // Healthcare
  "Cultfit": "cult.fit",
  "Kaveri Hospital": "kaverihospitals.com",
  "Novex Health": "novexhealth.com",
  // Corporate Office
  "GE": "ge.com",
  "Accenture": "accenture.com",
  "Samsung": "samsung.com",
  "WeWork": "wework.com",
  "SimplyWorks": "simplyworks.com",
  "SmartWorks": "smartworks.com",
  // Hotels
  "Premier Inn": "premierinn.com",
  "Novartis": "novartis.com",
  // Hospital
  "Apollo": "apollohospitals.com",
  "Know6 Health": "know6.com",
  // Builders
  "IVRCL": "ivrcl.com",
  "GMR": "gmrgroup.in",
  "Embassy": "embassygroup.com",
  "Bagmane": "bagmane.com",
  "DLF": "dlf.in",
  "Divyasree": "divyasree.com",
  "Mantri": "mantri.com",
  // Banking
  "Centurion": "centurionbank.com",
  "Axis": "axisbank.com",
  "Standard Chartered": "sc.com",
  // Industrial
  "Brilliant Printers": "brilliantprinters.com",
  // Retail Showrooms
  "Reliance Trends": "relianceretail.com",
  "Jack & Jones": "jackjones.com",
  "KFC": "kfc.com",
  "5 Star": "5star.in",
  // Fitness
  "Cult Fit": "cult.fit",
  // Residential
  "Boulevard Villa Project": "boulevard.com",
  "Phoenix Apartments": "phoenix.com",
  // Construction
  "Bus Stand Project": "project.com",
  "Sudhamnagar": "sudhamnagar.com",
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
  const domain = domainMap[name] || "example.com";
  const logoUrl = `https://logo.clearbit.com/${domain}?size=100&format=png`;
  
  return (
    <div className="group relative overflow-hidden rounded-xl glass-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-center justify-center h-[50px]">
        <img
          src={logoUrl}
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

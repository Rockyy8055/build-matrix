import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

type Service = {
  subtitle: string;
  title: string;
  description: string;
};

function Card({ subtitle, title, description }: Service) {
  return (
    <div className="card-3d glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 h-full flex flex-col">
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="h-10 w-10 sm:h-12 md:h-14 sm:w-12 md:w-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] shadow-lg grid place-items-center flex-shrink-0">
          <div className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 rounded-md sm:rounded-lg bg-white/30" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-blue-500 mb-1">{subtitle}</p>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">{title}</h3>
        </div>
      </div>
      <p className="text-sm sm:text-base leading-relaxed text-slate-600 flex-1">
        {description}
      </p>
    </div>
  );
}

const services: Service[] = [
  {
    subtitle: "Interior designing in Bangalore",
    title: "Residential Interior",
    description: "Residential interior is the art of designing and furnishing the interiors of homes to look and function better. We cover all kinds of projects to make them amazing. From modern apartments to cozy cottages, independent houses, bungalows, flats, apartments, and villas. Contact us today for a consultation!",
  },
  {
    subtitle: "Interior company in Bangalore",
    title: "Industrial Interior",
    description: "Industrial interior fit-out means improving the design and functionality of industrial spaces like factories, warehouses, and offices. We have expertise and experience in a wide range of industrial projects. Choose Build Matrix for industrial interior fit-out services. Contact us today for a consultation!",
  },
  {
    subtitle: "Best Interior designing in Bangalore",
    title: "Corporate Interior",
    description: "Build Matrix also covers corporate interior fit-out services. We cover all types of commercial projects, from regular corporate buildings to fancy meeting rooms, shopping malls, industrial parks, and more. Contact us today for a consultation and take your commercial projects to the next level!",
  },
  {
    subtitle: "Top Interior company in Bangalore",
    title: "Hospitality Interior",
    description: "Build Matrix also specializes in creating stunning hospitality interior fit-outs. We're experts in designing hotels, restaurants, bars, lounges, event spaces, and more. We transform spaces into remarkable experiences – choose us for outstanding hospitality interior service. Join our satisfied client list.",
  },
  {
    subtitle: "Leading Interior designing company in Bangalore",
    title: "Institutional Interior",
    description: "Institutional interior involves customizing and furnishing interior spaces like schools, hospitals, government buildings, and offices. We have the expertise to transform these diverse projects. If you want to improve your institutional space, contact us today for institutional interior fit-out service.",
  },
  {
    subtitle: "Bangalore Best Interior designing company",
    title: "Retail Interior",
    description: "Retail interior fit-out means creating attractive and functional interiors for stores and shops. Our expertise covers various retail projects, from boutiques to supermarkets. People choose our retail interior fit-out service because we make shopping spaces more appealing and profitable.",
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-[#f1f5f9] overflow-hidden">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-blue-500">
              Our Services
            </p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Interior Designing <span className="gradient-text">Excellence</span> in Bangalore
            </h2>
            <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
              Transform your spaces with our expert interior design services. From residential to commercial, we deliver excellence in every project.
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 sm:mt-10 md:mt-14 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <FadeIn key={s.title} delayMs={idx * 90}>
              <Card {...s} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

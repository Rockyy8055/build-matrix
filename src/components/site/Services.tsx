import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

type Service = {
  title: string;
  items: string[];
};

function Card({ title, items }: Service) {
  return (
    <div className="card-3d glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 h-full">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
        <div className="h-10 w-10 sm:h-12 md:h-14 sm:w-12 md:w-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] shadow-lg grid place-items-center flex-shrink-0">
          <div className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 rounded-md sm:rounded-lg bg-white/30" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
          <ul className="mt-3 sm:mt-4 md:mt-5 grid gap-2 sm:gap-2.5 md:gap-3 text-sm sm:text-base text-gray-300">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-2 sm:gap-3">
                <span className="mt-1.5 sm:mt-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--neon-purple)] flex-shrink-0" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const services: Service[] = [
  {
    title: "Construction Services",
    items: [
      "Residential Construction",
      "Commercial Construction",
      "Turnkey Construction",
      "Structural Engineering",
    ],
  },
  {
    title: "Interior Design Services",
    items: [
      "Residential Interior Design",
      "Commercial Interior Design",
      "Office Interior Fitouts",
      "Modular Kitchen",
      "Wardrobes & Storage Solutions",
      "False Ceiling & Lighting",
      "Space Planning",
      "Renovation & Remodeling",
    ],
  },
  {
    title: "Other Services",
    items: [
      "Project Management",
      "3D Design Visualization",
      "Material Procurement",
      "Site Supervision",
      "End-to-End Turnkey Solutions",
    ],
  },
];

export function Services() {
  return (
    <Section id="services" className="overflow-hidden">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[var(--accent-light)]">
              Services
            </p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Built with <span className="gradient-text">precision</span>. Designed for life.
            </h2>
            <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
              From civil construction to premium interior finishes, Build Matrix
              delivers end-to-end solutions with quality-first execution.
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 sm:mt-10 md:mt-14 grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
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

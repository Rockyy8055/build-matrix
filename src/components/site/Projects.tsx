import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

type Project = {
  title: string;
  type: string;
  location: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Skyline Residence",
    type: "Residential Construction",
    location: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Steel & Stone Office",
    type: "Commercial Interiors",
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Modern Retail Fitout",
    type: "Interior Fitouts",
    location: "Pune",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Courtyard Villa",
    type: "Turnkey Construction",
    location: "Chennai",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Minimal Apartment",
    type: "Residential Interiors",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2f85?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Structural Upgrade",
    type: "Engineering + Supervision",
    location: "Coimbatore",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80",
  },
];

function ProjectCard(p: Project) {
  return (
    <div className="card-3d group overflow-hidden rounded-2xl sm:rounded-3xl glass-card">
      <div className="relative">
        <div
          className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${p.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      <div className="p-4 sm:p-5 md:p-6">
        <div className="text-base sm:text-lg font-semibold text-white">{p.title}</div>
        <div className="text-sm sm:text-base text-gray-300 mt-1">{p.type}</div>
        <div className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-blue-400">
          {p.location}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="bg-[var(--soft)] overflow-hidden">
      <Container>
        <FadeIn>
          <div className="flex items-end justify-between gap-4 sm:gap-6 flex-wrap">
            <div>
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[var(--accent-light)]">
                Projects
              </p>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Completed work, <span className="gradient-text">crafted</span> with care
              </h2>
              <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-xl sm:max-w-2xl">
                A glimpse of our residential and commercial deliveries—premium
                execution with modern design and reliable project management.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mt-8 sm:mt-10 md:mt-14 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <FadeIn key={p.title} delayMs={idx * 70}>
              <ProjectCard {...p} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

const images = [
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
];

function Tile({ src }: { src: string }) {
  return (
    <div className="card-3d group overflow-hidden rounded-2xl sm:rounded-3xl glass-card relative">
      <div
        className="h-full w-full bg-cover bg-center aspect-[4/3] transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent" />
      <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-blue-400/30 transition-all duration-300 rounded-2xl sm:rounded-3xl" />
    </div>
  );
}

export function Gallery() {
  return (
    <Section id="gallery" className="overflow-hidden">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-blue-500">
              Gallery
            </p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Modern construction and <span className="gradient-text">interior</span> finishes
            </h2>
            <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
              A curated grid of spaces—minimal, premium, and built for longevity.
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 sm:mt-10 md:mt-14 grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, idx) => (
            <FadeIn key={src} delayMs={idx * 60}>
              <Tile src={src} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

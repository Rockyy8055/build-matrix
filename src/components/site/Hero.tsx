import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2200&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-blue-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-black/50" />
      </div>

      <Container className="relative z-10 flex min-h-screen items-center py-20 sm:py-0">
        <div className="mx-auto max-w-4xl text-center px-2 sm:px-0">
          <p className="text-blue-400 text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase font-semibold">
            Build Matrix
          </p>
          <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
            Creating{" "}
            <span className="gradient-text">Impactful</span>{" "}
            Spaces
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-xl sm:max-w-2xl mx-auto">
            End-to-end construction and interior solutions built with precision and
            innovation.
          </p>

          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
            <Button href="#contact" variant="primary" size="md">
              Contact Us
            </Button>
            <Button href="#projects" variant="secondary" size="md">
              View Projects
            </Button>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 gap-3 sm:gap-4 md:gap-4 sm:grid-cols-3">
            <div className="card-3d glass-card rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-4 sm:py-5">
              <div className="text-white text-lg sm:text-xl md:text-2xl font-bold">12+ Years</div>
              <div className="text-gray-400 text-sm sm:text-base mt-1">Industry Expertise</div>
            </div>
            <div className="card-3d glass-card rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-4 sm:py-5">
              <div className="text-white text-lg sm:text-xl md:text-2xl font-bold">Quality First</div>
              <div className="text-gray-400 text-sm sm:text-base mt-1">Materials & Finishes</div>
            </div>
            <div className="card-3d glass-card rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-4 sm:py-5">
              <div className="text-white text-lg sm:text-xl md:text-2xl font-bold">Turnkey</div>
              <div className="text-gray-400 text-sm sm:text-base mt-1">Design to Delivery</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

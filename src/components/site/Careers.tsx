import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function Careers() {
  return (
    <Section id="careers" className="bg-[var(--soft)] overflow-hidden">
      <Container>
        <FadeIn>
          <div className="card-3d glass-card rounded-2xl sm:rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
            <div className="relative grid gap-6 sm:gap-8 p-8 sm:p-10 md:p-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-blue-400">
                  Careers
                </p>
                <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Join our growing team at <span className="gradient-text">Build Matrix</span>
                </h2>
                <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                  We're always looking for skilled engineers, designers, site
                  supervisors, and project managers.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <Button href="#contact" variant="secondary" size="md">
                  View Openings
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

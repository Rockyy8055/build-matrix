import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-3d glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7">
      <div className="text-2xl sm:text-2xl md:text-3xl font-bold tracking-tight gradient-text">
        {value}
      </div>
      <div className="mt-1 sm:mt-2 text-sm sm:text-base font-medium text-gray-400">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <Section id="about" className="bg-[var(--soft)] overflow-hidden">
      <Container>
        <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div>
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[var(--accent-light)]">
                About
              </p>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                About <span className="gradient-text">Build Matrix</span>
              </h2>
              <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                Build Matrix is a professional construction and interior solutions
                company delivering residential and commercial projects with
                precision, quality materials, and modern design.
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10 grid gap-4 sm:gap-5">
                <div className="card-3d glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7">
                  <div className="text-base sm:text-lg font-bold text-white">
                    Mission
                  </div>
                  <div className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-gray-300">
                    Deliver high-quality construction and interior outcomes through
                    disciplined execution, reliable craftsmanship, and thoughtful
                    design.
                  </div>
                </div>

                <div className="card-3d glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7">
                  <div className="text-base sm:text-lg font-bold text-white">
                    Vision
                  </div>
                  <div className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-gray-300">
                    Create timeless spaces that elevate everyday living and working
                    environments with modern, sustainable practices.
                  </div>
                </div>

                <div className="card-3d glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7">
                  <div className="text-base sm:text-lg font-bold text-white">
                    Quality Commitment
                  </div>
                  <div className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-gray-300">
                    We use trusted materials, transparent processes, and
                    on-site supervision to ensure a consistent premium finish.
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delayMs={120}>
            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
              <Stat label="Years of Expertise" value="12+" />
              <Stat label="Projects Delivered" value="150+" />
              <Stat label="Residential + Commercial" value="End-to-End" />
              <Stat label="Site Supervision" value="Dedicated" />

              <div className="sm:col-span-2 overflow-hidden rounded-2xl sm:rounded-3xl card-3d glass-card">
                <div
                  className="aspect-[16/9] w-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=2200&q=80)",
                  }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

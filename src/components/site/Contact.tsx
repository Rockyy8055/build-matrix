import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function Contact() {
  return (
    <Section id="contact" className="bg-[#f1f5f9] overflow-hidden">
      <Container>
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <div>
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-blue-500">
                Contact
              </p>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Let's build something <span className="gradient-text">exceptional</span>
              </h2>
              <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
                Reach us for consultations, site visits, and detailed estimates.
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10 grid gap-4 sm:gap-5">
                <div className="card-3d glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7">
                  <div className="text-base sm:text-lg font-bold text-slate-900">
                    Phone Number
                  </div>
                  <div className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
                    +91 7411005186
                  </div>
                </div>

                <div className="card-3d glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7">
                  <div className="text-base sm:text-lg font-bold text-slate-900">Email</div>
                  <div className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
                    ibuildmatrix@gmail.com
                  </div>
                </div>

                <div className="card-3d glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7">
                  <div className="text-base sm:text-lg font-bold text-slate-900">
                    Office Address
                  </div>
                  <div className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                    Build Matrix, Main Road, Your City, India
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delayMs={120}>
            <div className="card-3d glass-card overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="aspect-[4/3] w-full">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=Bengaluru&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

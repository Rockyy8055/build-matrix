"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function Enquiry() {
  return (
    <Section id="enquiry" className="overflow-hidden">
      <Container>
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div>
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[var(--accent-light)]">
                Enquiry
              </p>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Tell us about your <span className="gradient-text">project</span>
              </h2>
              <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                Share a few details and our team will reach out with next steps,
                timelines, and an estimate.
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10 grid gap-4 sm:gap-5">
                <div className="card-3d glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7">
                  <div className="text-base sm:text-lg font-bold text-white">
                    What you get
                  </div>
                  <div className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-gray-300">
                    A structured plan, transparent budget guidance, and premium
                    execution across construction and interiors.
                  </div>
                </div>
                <div className="card-3d glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7">
                  <div className="text-base sm:text-lg font-bold text-white">
                    Typical turnaround
                  </div>
                  <div className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-gray-300">
                    We respond within 24–48 hours with a consultation slot.
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delayMs={120}>
            <form
              className="card-3d glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We will get back to you shortly.");
              }}
            >
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div className="grid gap-1.5 sm:gap-2">
                  <label className="text-sm sm:text-base font-semibold text-white">
                    Name
                  </label>
                  <input
                    required
                    className="h-11 sm:h-12 md:h-14 rounded-xl sm:rounded-2xl bg-white/6 border border-white/15 px-4 sm:px-5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid gap-1.5 sm:gap-2">
                  <label className="text-sm sm:text-base font-semibold text-white">
                    Phone Number
                  </label>
                  <input
                    required
                    className="h-11 sm:h-12 md:h-14 rounded-xl sm:rounded-2xl bg-white/6 border border-white/15 px-4 sm:px-5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
                    placeholder="+91"
                  />
                </div>
                <div className="grid gap-1.5 sm:gap-2 sm:col-span-2">
                  <label className="text-sm sm:text-base font-semibold text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="h-11 sm:h-12 md:h-14 rounded-xl sm:rounded-2xl bg-white/6 border border-white/15 px-4 sm:px-5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
                    placeholder="name@email.com"
                  />
                </div>
                <div className="grid gap-1.5 sm:gap-2 sm:col-span-2">
                  <label className="text-sm sm:text-base font-semibold text-white">
                    Project Type
                  </label>
                  <select className="h-11 sm:h-12 md:h-14 rounded-xl sm:rounded-2xl bg-white/6 border border-white/15 px-4 sm:px-5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    <option>Residential Construction</option>
                    <option>Commercial Construction</option>
                    <option>Residential Interiors</option>
                    <option>Commercial Interiors</option>
                    <option>Turnkey Solution</option>
                    <option>Renovation / Remodeling</option>
                  </select>
                </div>
                <div className="grid gap-1.5 sm:gap-2 sm:col-span-2">
                  <label className="text-sm sm:text-base font-semibold text-white">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="rounded-xl sm:rounded-2xl bg-white/6 border border-white/15 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
                    placeholder="Tell us location, budget range, and timeline..."
                  />
                </div>
              </div>

              <button
                className="mt-5 sm:mt-6 md:mt-8 h-11 sm:h-12 md:h-14 w-full rounded-full bg-blue-600 text-white font-semibold text-sm sm:text-base md:text-lg shadow-lg transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:-translate-y-0.5 btn-premium"
                type="submit"
              >
                Send Enquiry
              </button>
            </form>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

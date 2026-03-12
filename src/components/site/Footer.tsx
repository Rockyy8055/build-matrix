import Link from "next/link";

import { Container } from "@/components/ui/Container";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Interiors", href: "#interiors" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Construction",
  "Interiors",
  "Turnkey",
  "Project Management",
  "3D Visualization",
  "Site Supervision",
];

export function Footer() {
  return (
    <footer className="glass-card relative overflow-hidden border-t border-slate-200">
      <Container className="py-10 sm:py-12 md:py-14 lg:py-16 relative">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
          <div className="lg:col-span-1 sm:col-span-2">
            <Link href="#home" className="flex items-center gap-2 sm:gap-3">
              <div className="h-10 w-10 sm:h-11 md:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] shadow-lg grid place-items-center">
                <span className="text-xs sm:text-sm font-bold tracking-tight text-white">
                  BM
                </span>
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
                  Build Matrix
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">
                  Construction & Interiors
                </div>
              </div>
            </Link>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-slate-600">
              Premium construction and interior design solutions for residential and
              commercial spaces.
            </p>
          </div>

          <div>
            <div className="text-sm sm:text-base font-bold text-slate-900">Quick Links</div>
            <div className="mt-4 sm:mt-5 grid gap-2 sm:gap-3">
              {quickLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm sm:text-base text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm sm:text-base font-bold text-slate-900">Services</div>
            <div className="mt-4 sm:mt-5 grid gap-2 sm:gap-3">
              {services.map((s) => (
                <div key={s} className="text-sm sm:text-base text-slate-600">
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm sm:text-base font-bold text-slate-900">Contact</div>
            <div className="mt-4 sm:mt-5 grid gap-2 sm:gap-3 text-sm sm:text-base text-slate-600">
              <div>+91 7411005186</div>
              <div>ibuildmatrix@gmail.com</div>
              <div>Build Matrix, Main Road, Your City, India</div>
              <div className="mt-4 sm:mt-5 flex items-center gap-2 sm:gap-3">
                <a
                  href="#"
                  className="h-10 w-10 sm:h-11 md:h-12 sm:w-11 md:w-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] shadow-lg grid place-items-center hover:shadow-xl transition-all hover:-translate-y-0.5"
                  aria-label="Instagram"
                >
                  <span className="text-xs sm:text-sm font-bold text-white">IG</span>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 sm:h-11 md:h-12 sm:w-11 md:w-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] shadow-lg grid place-items-center hover:shadow-xl transition-all hover:-translate-y-0.5"
                  aria-label="LinkedIn"
                >
                  <span className="text-xs sm:text-sm font-bold text-white">IN</span>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 sm:h-11 md:h-12 sm:w-11 md:w-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] shadow-lg grid place-items-center hover:shadow-xl transition-all hover:-translate-y-0.5"
                  aria-label="Facebook"
                >
                  <span className="text-xs sm:text-sm font-bold text-white">FB</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-14 flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-slate-200 pt-6 sm:pt-7 md:pt-8">
          <div className="text-xs sm:text-sm text-slate-500">
            © {new Date().getFullYear()} Build Matrix. All rights reserved.
          </div>
          <div className="text-xs sm:text-sm text-slate-500">
            Designed for a modern construction brand.
          </div>
        </div>
      </Container>
    </footer>
  );
}

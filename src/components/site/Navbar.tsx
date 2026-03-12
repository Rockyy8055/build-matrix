"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

const items = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Interiors", href: "#interiors" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phoneHref = useMemo(() => "tel:+917411005186", []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 glass-card border-b border-white/10"
      )}
    >
      <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between w-full px-4 sm:px-6 md:px-8">
        <Link href="#home" className="flex items-center gap-2 sm:gap-3">
          <div className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] shadow-lg grid place-items-center ring-2 ring-white/20">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-white">
              BM
            </span>
          </div>
          <div className="leading-tight">
            <div
              className={cn(
                "text-base sm:text-lg md:text-lg font-bold tracking-tight text-white"
              )}
            >
              Build Matrix
            </div>
            <div
              className={cn(
                "text-xs sm:text-sm font-medium hidden sm:block text-white"
              )}
            >
              Construction & Interiors
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm xl:text-base font-medium transition-all duration-200 relative group text-white hover:text-blue-400 whitespace-nowrap"
            >
              {it.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={phoneHref}
            className="hidden md:inline-flex items-center justify-center rounded-full px-6 lg:px-8 h-10 sm:h-11 md:h-12 text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg bg-blue-600 text-white hover:bg-blue-500 hover:shadow-xl"
          >
            <span className="hidden lg:inline">Call +91 7411005186</span>
            <span className="lg:hidden">Call Now</span>
          </a>

          <button
            className="lg:hidden h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full grid place-items-center ring-2 transition-all duration-200 bg-white/10 ring-white/20 hover:bg-white/20"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-white" />
              <span className="h-0.5 w-5 rounded-full bg-white" />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="lg:hidden glass-card border-t border-white/10 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="py-4 sm:py-6 px-4 sm:px-6 md:px-8">
            <div className="grid gap-2 sm:gap-3">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className="rounded-xl sm:rounded-2xl px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white hover:text-blue-400 hover:bg-white/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {it.label}
                </a>
              ))}
              <a
                href={phoneHref}
                className="mt-2 sm:mt-3 rounded-xl sm:rounded-2xl px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold bg-blue-600 text-white text-center shadow-lg hover:bg-blue-500"
              >
                Call +91 7411005186
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

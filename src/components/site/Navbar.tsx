"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import AnimatedLogo from "@/components/AnimatedLogo";

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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 h-[70px] flex items-center",
        scrolled ? "bg-slate-900/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="flex w-full items-center justify-between px-6">
        {/* LEFT SIDE LOGO */}
        <div className="flex items-center h-full">
          <AnimatedLogo />
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-base font-medium transition-all duration-200 relative group text-slate-300 hover:text-white whitespace-nowrap"
            >
              {it.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={phoneHref}
            className="hidden md:inline-flex items-center justify-center rounded-full px-8 h-12 text-base font-semibold transition-all duration-300 shadow-lg bg-blue-500 text-white hover:bg-blue-600 hover:shadow-xl"
          >
            <span className="hidden lg:inline">Call +91 7411005186</span>
            <span className="lg:hidden">Call Now</span>
          </a>

          <button
            className="lg:hidden h-12 w-12 rounded-full grid place-items-center ring-2 transition-all duration-200 bg-slate-800 ring-slate-700 hover:bg-slate-700"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-slate-200" />
              <span className="h-0.5 w-5 rounded-full bg-slate-200" />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="py-6 px-6">
            <div className="grid gap-3">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {it.label}
                </a>
              ))}
              <a
                href={phoneHref}
                className="mt-3 rounded-2xl px-4 py-3 text-base font-semibold bg-blue-500 text-white text-center shadow-lg hover:bg-blue-600"
              >
                Call +91 7411005186
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

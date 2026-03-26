"use client";

import { cn } from "@/lib/cn";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "up" | "right" | "left";
};

export function FadeIn({
  children,
  className,
  delayMs = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const getTransformClass = () => {
    if (visible) return "opacity-100 translate-x-0 translate-y-0";
    switch (direction) {
      case "right":
        return "opacity-0 -translate-x-8";
      case "left":
        return "opacity-0 translate-x-8";
      default:
        return "opacity-0 translate-y-4";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 will-change-transform",
        getTransformClass(),
        className
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

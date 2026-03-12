import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type Props = {
  href?: string;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none btn-premium";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl",
  secondary:
    "glass-card text-slate-700 hover:bg-slate-100 border border-slate-200",
  ghost:
    "bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-100 ring-2 ring-slate-200 backdrop-blur-sm",
};

const sizes = {
  sm: "h-10 sm:h-11 px-4 sm:px-5 text-sm",
  md: "h-11 sm:h-12 md:h-14 px-6 sm:px-7 md:px-8 text-sm sm:text-base",
  lg: "h-12 sm:h-14 md:h-16 px-8 sm:px-9 md:px-10 text-base sm:text-lg",
};

export function Button({
  href,
  className,
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link className={classes} href={href}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}

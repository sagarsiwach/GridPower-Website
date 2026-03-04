import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-dark)]">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
          The Open Energy Platform
        </p>
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
          India generates power.
          <br />
          <span className="text-[var(--color-gp-red)]">We make sure</span>
          <br />
          it&apos;s never wasted.
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/50">
          Energy storage, EV charging, and powertrain solutions — built on open
          standards. No vendor lock-in. No black boxes.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/energy"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-gp-red)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
          >
            Explore GridEnergy <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Talk to Sales
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}

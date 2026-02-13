import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--foreground)]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/50">
          GridPower
        </p>
        <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-white md:text-7xl">
          The Open Energy
          <br />
          Platform
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
          Charging, storage, and powertrain -- one open ecosystem.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--gp-red)] px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[var(--gp-red-dark)]"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#solutions"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            Explore Products
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

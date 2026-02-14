import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-gp-secondary">
          GridPower
        </p>
        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
          The Open Energy
          <br />
          Platform
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/50 md:text-xl">
          Charging, storage, and powertrain -- one open ecosystem.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#solutions"
            className="inline-flex items-center gap-2 rounded-md bg-gp-cta px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gp-cta-hover cursor-pointer"
          >
            Explore Solutions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/5 cursor-pointer"
          >
            Talk to Sales
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

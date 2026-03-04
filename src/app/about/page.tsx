import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | GridPower",
  description: "The open energy platform built by DeltaEV Mobility Pvt Ltd.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">About</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            We build for the next grid.
          </h1>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[var(--color-fg-muted)]">
              GridPower is a brand of DeltaEV Mobility Private Limited, a Goa-based company building open energy infrastructure for India.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-fg-muted)]">
              We believe India&apos;s energy transition will be won by distributed intelligence — not by a handful of large centralized players. Every home, office, and factory with storage is a node in a smarter grid. GridPower builds the hardware and software to make that node work.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-fg-muted)]">
              Our products span energy storage (GridEnergy), EV charging (GridCharge), and OEM powertrain components (GridDrive) — all managed by the GridPower Platform. Open standards, full data access, no lock-in.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-xl font-bold text-[var(--color-fg)]">Leadership</h2>
            <p className="mt-4 text-sm text-[var(--color-fg-subtle)]">Team details coming soon.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

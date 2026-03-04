import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "GridDrive — EV Powertrain | GridPower",
  description: "Open EV powertrain components for 2W, 3W, and 4W OEMs.",
};

const segments = [
  { title: "Two-Wheeler", href: "/drive/two-wheeler", desc: "Electrify two-wheelers.", sub: "E-bike and scooter kits" },
  { title: "Three-Wheeler", href: "/drive/three-wheeler", desc: "Power the last mile.", sub: "E-rickshaw and cargo" },
  { title: "Four-Wheeler", href: "/drive/four-wheeler", desc: "Full EV powertrain.", sub: "4W OEM drivetrain platform" },
];

export default function DrivePage() {
  return (
    <main>
      <section className="bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">GridDrive</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Electrify any vehicle.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50">
            Open powertrain components for 2W, 3W, and 4W OEMs. No proprietary lock-in. Built for India.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {segments.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-6 transition-all hover:border-[var(--color-border-strong)] hover:shadow-sm"
              >
                <h2 className="text-base font-bold text-[var(--color-fg)]">{s.title}</h2>
                <p className="mt-1 text-sm font-medium text-[var(--color-gp-red)]">{s.desc}</p>
                <p className="mt-3 text-sm text-[var(--color-fg-muted)]">{s.sub}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[var(--color-fg-subtle)] group-hover:text-[var(--color-fg-muted)]">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--color-fg-subtle)]">OEM powertrain — available for qualified vehicle manufacturers. Contact us for qualification.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

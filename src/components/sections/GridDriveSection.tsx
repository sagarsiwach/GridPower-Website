import Link from "next/link";
import { ArrowRight } from "lucide-react";

const segments = [
  {
    title: "Two-Wheeler",
    href: "/drive/two-wheeler",
    desc: "Electrify two-wheelers.",
    detail: "Motor, controller, BMS for e-bikes and scooters.",
  },
  {
    title: "Three-Wheeler",
    href: "/drive/three-wheeler",
    desc: "Power the last mile.",
    detail: "Complete powertrain kits for e-rickshaws and cargo.",
  },
  {
    title: "Four-Wheeler",
    href: "/drive/four-wheeler",
    desc: "Full EV powertrain.",
    detail: "Scalable drivetrain architecture for 4W vehicle OEMs.",
  },
];

export function GridDriveSection() {
  return (
    <section className="bg-[var(--color-bg-subtle)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            GridDrive
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-fg)] md:text-5xl">
            Electrify any vehicle.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-fg-muted)]">
            Open powertrain components for 2W, 3W, and 4W OEMs. No lock-in.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {segments.map((seg) => (
            <Link
              key={seg.href}
              href={seg.href}
              className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-all hover:border-[var(--color-border-strong)] hover:shadow-sm"
            >
              <h3 className="text-base font-bold text-[var(--color-fg)]">{seg.title}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--color-gp-red)]">{seg.desc}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">{seg.detail}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[var(--color-fg-subtle)] group-hover:text-[var(--color-fg-muted)]">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

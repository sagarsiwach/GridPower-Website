import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | GridPower",
  description: "GridPower installations and case studies across India.",
};

const projects = [
  {
    title: "GIDC Verna Industrial Estate",
    location: "Verna, Goa",
    status: "Upcoming",
    scope: "500 kWh industrial BESS + 200 kW solar integration",
    note: "Pilot project for GIDC industrial park electrification initiative.",
  },
  {
    title: "GIDC Pilerne IT Park",
    location: "Pilerne, Goa",
    status: "Upcoming",
    scope: "EV charging depot (50 ports) + rooftop solar storage",
    note: "IT park fleet and employee EV charging infrastructure.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <section className="bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">Projects</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">Where we work.</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50">
            From residential rooftops to industrial estates — GridPower installations across India.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <div key={p.title} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-8">
                <span className="inline-block rounded-full bg-[var(--color-bg-tint)] px-3 py-1 text-xs font-semibold text-[var(--color-fg-muted)]">
                  {p.status}
                </span>
                <h2 className="mt-4 text-xl font-bold text-[var(--color-fg)]">{p.title}</h2>
                <p className="mt-1 text-sm text-[var(--color-fg-muted)]">{p.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">{p.scope}</p>
                <p className="mt-2 text-xs text-[var(--color-fg-subtle)]">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-[var(--color-fg-subtle)]">
            More projects coming soon. Want to be on this list?{" "}
            <a href="/contact" className="text-[var(--color-gp-red)] hover:underline">Talk to us.</a>
          </p>
        </div>
      </section>
    </main>
  );
}

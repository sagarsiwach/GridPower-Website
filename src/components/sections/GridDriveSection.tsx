import { ArrowRight } from "lucide-react";

const vehicles = [
  {
    title: "Two-Wheeler",
    description: "Hub motors, controllers, and battery packs for electric scooters and motorcycles.",
  },
  {
    title: "Three-Wheeler",
    description: "Complete powertrain kits for passenger and cargo e-rickshaws.",
  },
  {
    title: "Four-Wheeler",
    description: "High-voltage systems for cars, vans, and light commercial vehicles.",
  },
];

export function GridDriveSection() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[var(--gp-red)]">
            GridDrive
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Electrify any vehicle.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.title}
              className="group rounded-2xl border border-[var(--border)] p-10 transition-all hover:border-[var(--gp-red)]/20 hover:shadow-lg"
            >
              <div className="mb-8 h-48 rounded-xl bg-[var(--muted)]" />
              <h3 className="mb-3 text-2xl font-semibold text-[var(--foreground)]">
                {vehicle.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {vehicle.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--gp-red)] transition-colors group-hover:underline">
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

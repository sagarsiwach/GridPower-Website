import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "GridDrive | EV Powertrain Solutions",
  description:
    "OEM powertrain kits for two, three, and four-wheeled electric vehicles. Hub motors, controllers, battery packs, and complete kits.",
};

const vehicles = [
  {
    title: "Two-Wheeler",
    description:
      "Hub motors, controllers, and battery packs for electric scooters and motorcycles. Proven components from our Kabira Mobility heritage.",
  },
  {
    title: "Three-Wheeler",
    description:
      "Complete powertrain kits for passenger and cargo e-rickshaws. Optimized for Indian road conditions and duty cycles.",
  },
  {
    title: "Four-Wheeler",
    description:
      "High-voltage systems for cars, vans, and light commercial vehicles. Motors, inverters, BMS, and battery packs -- all open spec.",
  },
];

export default function DrivePage() {
  return (
    <main>
      <section className="pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gp-primary">
            GridDrive
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-fg md:text-6xl">
            Electrify any vehicle.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            OEM powertrain components and complete kits. Published specs, open
            documentation, no black boxes.
          </p>
        </div>
      </section>

      <section className="border-t border-border-light bg-bg-tint py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.title}
                className="rounded-lg border border-border-light bg-white p-8"
              >
                <div className="mb-8 h-48 rounded-md bg-bg-tint" />
                <h2 className="mb-3 text-2xl font-bold text-fg">
                  {vehicle.title}
                </h2>
                <p className="text-sm leading-relaxed text-fg-muted">
                  {vehicle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-fg">
            Building an electric vehicle?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gp-cta px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gp-cta-hover cursor-pointer"
          >
            Talk to Our Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

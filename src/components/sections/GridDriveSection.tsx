const vehicles = [
  {
    title: "Two-Wheeler",
    description:
      "Hub motors, controllers, and battery packs for electric scooters and motorcycles. Complete powertrain development. Battery pack integration.",
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

export function GridDriveSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gp-primary">
            GridDrive
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-fg md:text-5xl">
            Electrify any vehicle.
          </h2>
          <p className="mt-4 max-w-lg text-base text-fg-muted">
            Complete powertrain development. Battery pack integration.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.title}
              className="group rounded-lg border border-border-light p-8 transition-all duration-200 hover:border-gp-primary/30 hover:shadow-md"
            >
              <div className="mb-8 h-48 rounded-md bg-bg-tint" />
              <h3 className="mb-3 text-2xl font-bold text-fg">
                {vehicle.title}
              </h3>
              <p className="text-sm leading-relaxed text-fg-muted">
                {vehicle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "8,000+", label: "Stations deployed" },
  { value: "5+", label: "Cities" },
  { value: "99.9%", label: "Platform uptime" },
];

export function NumbersSection() {
  return (
    <section className="bg-[var(--dark)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

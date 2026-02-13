const stats = [
  { value: "8,000+", label: "Stations deployed" },
  { value: "5+", label: "Cities" },
  { value: "99.9%", label: "Platform uptime" },
];

export function NumbersSection() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--muted)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

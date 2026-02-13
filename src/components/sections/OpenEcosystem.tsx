import { Puzzle, Eye, Unlock } from "lucide-react";

const pillars = [
  {
    icon: Puzzle,
    title: "Open Ecosystem",
    description:
      "Use what you have. Our products work with existing infrastructure, solar setups, and third-party hardware.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "Know what you're buying. Published specs, open documentation, and no hidden costs.",
  },
  {
    icon: Unlock,
    title: "No Lock-in",
    description:
      "Your data stays yours. Export anytime, integrate anywhere, switch whenever you want.",
  },
];

export function OpenEcosystem() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Built different.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-[var(--muted-foreground)]">
            Three principles that set GridPower apart from every other energy company.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--muted)]">
                  <Icon className="h-6 w-6 text-[var(--foreground)]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[var(--foreground)]">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

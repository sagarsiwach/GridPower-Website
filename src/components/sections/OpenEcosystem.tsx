import { Puzzle, Eye, Unlock } from "lucide-react";

const pillars = [
  {
    icon: Puzzle,
    title: "Open Ecosystem",
    tagline: "Use what you have.",
    description:
      "Our products work with existing infrastructure, solar setups, and third-party hardware.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    tagline: "Know what you're buying.",
    description:
      "Published specs, open documentation, and no hidden costs.",
  },
  {
    icon: Unlock,
    title: "No Lock-in",
    tagline: "Your data stays yours.",
    description:
      "Export anytime, integrate anywhere, switch whenever you want.",
  },
];

export function OpenEcosystem() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-fg md:text-5xl">
            Built different.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-fg-muted">
            Three principles that set GridPower apart from every other energy company.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-bg-tint">
                  <Icon className="h-6 w-6 text-gp-primary" />
                </div>
                <h3 className="mb-1 text-xl font-bold text-fg">
                  {pillar.title}
                </h3>
                <p className="mb-3 text-sm font-semibold text-gp-primary">
                  {pillar.tagline}
                </p>
                <p className="text-sm leading-relaxed text-fg-muted">
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

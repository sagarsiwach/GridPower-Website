import { Monitor, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Real-time monitoring",
    description: "Every asset, every metric, live on your dashboard.",
  },
  {
    icon: Globe,
    title: "Open protocols",
    description: "OCPP, REST APIs, and webhooks. Integrate with anything.",
  },
  {
    icon: Shield,
    title: "Your data, your control",
    description: "Export anytime. No vendor lock-in. Full transparency.",
  },
];

export function PlatformSection() {
  return (
    <section className="bg-bg-tint py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gp-primary">
              GridOS
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-fg md:text-5xl">
              One platform.
              <br />
              Every asset.
            </h2>
            <p className="mb-10 max-w-lg text-base leading-relaxed text-fg-muted">
              Every GridPower product connects through GridOS -- our open energy
              operating system. Monitor, manage, and optimize your entire energy
              infrastructure from a single console.
            </p>

            <div className="space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white">
                      <Icon className="h-5 w-5 text-gp-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-fg">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-fg-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="aspect-[4/3] w-full max-w-lg rounded-lg border border-border-light bg-white p-8">
              <div className="flex h-full flex-col items-center justify-center rounded-md bg-bg-tint">
                <div className="mb-4 h-3 w-32 rounded-sm bg-border-dark" />
                <div className="mb-2 h-2 w-48 rounded-sm bg-border-light" />
                <div className="mb-6 h-2 w-40 rounded-sm bg-border-light" />
                <div className="grid w-full max-w-xs grid-cols-3 gap-3 px-6">
                  <div className="h-16 rounded-md bg-border-light" />
                  <div className="h-16 rounded-md bg-border-light" />
                  <div className="h-16 rounded-md bg-border-light" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

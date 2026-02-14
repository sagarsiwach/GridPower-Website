export function CompanyBrief() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-fg md:text-5xl">
          GridPower is India&apos;s open energy
          <br className="hidden md:block" />
          infrastructure company.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-fg-muted">
          We build charging stations, energy storage systems, and EV powertrains
          on open technology. No vendor lock-in. From home to grid-scale -- one
          platform, one ecosystem.
        </p>
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.15em] text-fg-muted">
          A DeltaEV Mobility company
        </p>
      </div>
    </section>
  );
}

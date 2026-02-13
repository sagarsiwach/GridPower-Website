export function CompanyBrief() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
          GridPower is India&apos;s open energy
          <br className="hidden md:block" />
          infrastructure company.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted-foreground)]">
          We build charging stations, energy storage systems, and EV powertrains on open technology.
          No vendor lock-in. From home to grid-scale -- one platform, one ecosystem.
        </p>
        <p className="mt-8 text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
          A DeltaEV Mobility company
        </p>
      </div>
    </section>
  );
}

"use client";

export function ContactCTA() {
  return (
    <section className="bg-[var(--foreground)] py-28 md:py-36">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Tell us what you need.
        </h2>
        <p className="mb-12 text-base text-white/60">
          Select your interest area and we will get back to you within 24 hours.
        </p>

        <form
          className="mx-auto max-w-md space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <select
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-[var(--gp-red)] [&>option]:text-black"
            defaultValue=""
          >
            <option value="" disabled>
              What are you interested in?
            </option>
            <option>Home Energy</option>
            <option>Commercial Energy</option>
            <option>EV Charging</option>
            <option>Fleet Solutions</option>
            <option>OEM / Powertrain</option>
            <option>Other</option>
          </select>

          <input
            type="email"
            placeholder="Your email address"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[var(--gp-red)]"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-[var(--gp-red)] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[var(--gp-red-dark)]"
          >
            Request a Quote
          </button>
        </form>
      </div>
    </section>
  );
}

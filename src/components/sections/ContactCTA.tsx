"use client";

export function ContactCTA() {
  return (
    <section className="bg-dark py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Tell us what you need.
        </h2>
        <p className="mb-12 text-base text-white/50">
          Select your interest area and we will get back to you within 24 hours.
        </p>

        <form
          className="mx-auto max-w-md space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <select
            className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-colors duration-200 focus:border-gp-primary cursor-pointer [&>option]:text-black"
            defaultValue=""
            aria-label="Interest area"
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
            aria-label="Email address"
            className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors duration-200 focus:border-gp-primary"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-gp-cta px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gp-cta-hover cursor-pointer"
          >
            Get in Touch
          </button>
        </form>

        <div className="mt-12 text-sm text-white/40">
          <p>Plot No. S-153, Phase III, Verna Industrial Estate, Goa - 403722</p>
        </div>
      </div>
    </section>
  );
}

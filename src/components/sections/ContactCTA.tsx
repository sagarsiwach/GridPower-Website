"use client";

import { useState } from "react";

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-[var(--color-dark)] py-24 md:py-32">
      <div className="mx-auto max-w-xl px-6 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
          Get Started
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Tell us about your property.
        </h2>
        <p className="mt-4 text-lg text-white/50">
          We&apos;ll design your energy system.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-8">
            <p className="text-base font-semibold text-white">We&apos;ll be in touch.</p>
            <p className="mt-1 text-sm text-white/50">Our team will reach out within 24 hours.</p>
          </div>
        ) : (
          <form
            className="mt-10 flex flex-col gap-4"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[var(--color-gp-red)]"
            />
            <select
              className="rounded-md border border-white/15 bg-[var(--color-dark-2)] px-4 py-3 text-sm text-white/70 outline-none focus:border-[var(--color-gp-red)]"
              defaultValue=""
            >
              <option value="" disabled>Select your use case</option>
              <option value="home">Home Energy</option>
              <option value="office">Office Energy</option>
              <option value="industrial">Industrial</option>
              <option value="ev">EV Charging</option>
              <option value="fleet">Fleet</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              className="rounded-md bg-[var(--color-gp-red)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
            >
              Request a Quote
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

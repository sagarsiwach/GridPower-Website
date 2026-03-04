"use client";

export function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label
          htmlFor="interest"
          className="mb-1.5 block text-sm font-bold text-[var(--color-fg)]"
        >
          Interest Area
        </label>
        <select
          id="interest"
          className="w-full rounded-md border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-fg)] outline-none transition-colors duration-200 focus:border-[var(--color-gp-red)] cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          <option>Home Energy</option>
          <option>Commercial Energy</option>
          <option>EV Charging</option>
          <option>Fleet Solutions</option>
          <option>OEM / Powertrain</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-bold text-[var(--color-fg)]"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          className="w-full rounded-md border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-fg)] placeholder-[var(--color-fg-muted)] outline-none transition-colors duration-200 focus:border-[var(--color-gp-red)]"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-bold text-[var(--color-fg)]"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your requirements..."
          className="w-full resize-none rounded-md border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-fg)] placeholder-[var(--color-fg-muted)] outline-none transition-colors duration-200 focus:border-[var(--color-gp-red)]"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-[var(--color-gp-red)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--color-gp-red-hover)] cursor-pointer"
      >
        Request a Quote
      </button>
    </form>
  );
}

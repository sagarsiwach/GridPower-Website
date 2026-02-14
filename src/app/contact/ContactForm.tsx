"use client";

export function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label
          htmlFor="interest"
          className="mb-1.5 block text-sm font-bold text-[var(--foreground)]"
        >
          Interest Area
        </label>
        <select
          id="interest"
          className="w-full rounded-md border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors duration-200 focus:border-[var(--gp-primary)] cursor-pointer"
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
          className="mb-1.5 block text-sm font-bold text-[var(--foreground)]"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          className="w-full rounded-md border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--foreground-muted)] outline-none transition-colors duration-200 focus:border-[var(--gp-primary)]"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-bold text-[var(--foreground)]"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your requirements..."
          className="w-full resize-none rounded-md border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--foreground-muted)] outline-none transition-colors duration-200 focus:border-[var(--gp-primary)]"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-[var(--gp-cta)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--gp-cta-hover)] cursor-pointer"
      >
        Request a Quote
      </button>
    </form>
  );
}

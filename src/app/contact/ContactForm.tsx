"use client";

export function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label
          htmlFor="interest"
          className="mb-1.5 block text-sm font-bold text-fg"
        >
          Interest Area
        </label>
        <select
          id="interest"
          className="w-full rounded-md border border-border-light bg-white px-4 py-3 text-sm text-fg outline-none transition-colors duration-200 focus:border-gp-primary cursor-pointer"
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
          className="mb-1.5 block text-sm font-bold text-fg"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          className="w-full rounded-md border border-border-light bg-white px-4 py-3 text-sm text-fg placeholder-fg-muted outline-none transition-colors duration-200 focus:border-gp-primary"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-bold text-fg"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your requirements..."
          className="w-full resize-none rounded-md border border-border-light bg-white px-4 py-3 text-sm text-fg placeholder-fg-muted outline-none transition-colors duration-200 focus:border-gp-primary"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-gp-cta px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gp-cta-hover cursor-pointer"
      >
        Request a Quote
      </button>
    </form>
  );
}

import Link from "next/link";
import { SignupForm } from "./signup-form";

export const metadata = {
  title: "Sign Up | GridPower",
  description: "Create your GridPower account. Access the console, manage your energy assets, and track performance.",
};

export default function SignupPage() {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center bg-[var(--color-bg)]">
        <div className="mx-auto w-full max-w-md px-6">
          <div className="mb-8 text-center">
            <div className="mb-4 text-2xl font-bold tracking-tight">
              <span className="text-[var(--color-gp-red)]">Grid</span>
              <span className="text-[var(--color-fg)]">Power</span>
            </div>
            <h1 className="text-xl font-bold text-[var(--color-fg)]">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
              Access the GridPower Console to manage your energy assets.
            </p>
          </div>

          <SignupForm />

          <p className="mt-6 text-center text-xs text-[var(--color-fg-muted)]">
            Already have an account?{" "}
            <Link href="/contact" className="text-[var(--color-gp-red)] hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

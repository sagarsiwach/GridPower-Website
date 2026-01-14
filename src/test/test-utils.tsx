import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";

// Add providers here if needed (e.g., ThemeProvider, QueryClientProvider)
function AllTheProviders({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from "@testing-library/react";
export { customRender as render };

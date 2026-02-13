import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize package imports for better tree-shaking and faster builds
  // This automatically transforms barrel imports to direct imports at build time
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-navigation-menu",
      "@radix-ui/react-slot",
    ],
  },
};

export default nextConfig;

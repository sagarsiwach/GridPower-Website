import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "GridPower | The Open Energy Platform",
  description:
    "India generates power. We make sure it's never wasted. EV charging, energy storage, and powertrain — one open ecosystem.",
  openGraph: {
    title: "GridPower | The Open Energy Platform",
    description: "India generates power. We make sure it's never wasted.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

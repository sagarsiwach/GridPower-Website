import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "GridPower | The Open Energy Platform",
  description:
    "Charging, storage, and powertrain -- one open ecosystem. EV charging stations and energy storage systems built on open technology. No vendor lock-in.",
  openGraph: {
    title: "GridPower | The Open Energy Platform",
    description:
      "Charging, storage, and powertrain -- one open ecosystem. EV charging stations and energy storage systems built on open technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body style={{ fontFamily: "var(--font-geist), var(--font-sans)" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

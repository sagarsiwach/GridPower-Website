import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const googleSansFlex = localFont({
  src: "../fonts/GoogleSansFlex-Variable.ttf",
  variable: "--font-google-sans-flex",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GridPower - Solar Energy Solutions",
  description: "GridPower provides residential, workplace, and industrial solar energy solutions. Powering a sustainable future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSansFlex.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

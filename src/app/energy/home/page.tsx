import type { Metadata } from "next";
import { SegmentPageTemplate } from "@/components/templates/SegmentPageTemplate";

export const metadata: Metadata = {
  title: "Home Energy Storage | GridPower",
  description: "Store solar energy. Reduce bills by up to 80%. Never worry about outages.",
};

export default function EnergyHomePage() {
  return (
    <SegmentPageTemplate
      vertical="GridEnergy"
      headline="Store your sun. Power your home."
      subline="Residential solar storage from 5 kWh to 21 kWh. Works with any solar setup."
      painPoints={[
        { pain: "Electricity bills keep rising", solution: "Offset up to 80% with stored solar energy" },
        { pain: "Power cuts disrupt your day", solution: "Seamless backup, automatic switchover" },
        { pain: "Locked into one vendor", solution: "Open system. Any panel. Any inverter. Your choice." },
      ]}
      products={[
        { name: "GridVault Home", spec: "5–10 kWh LiFePO4 wall battery" },
        { name: "GridSync G1 Inverter", spec: "3–6 kW hybrid inverter" },
        { name: "GridCharge Home AC", spec: "7.4 kW EV wallbox" },
      ]}
      howItWorks={[
        "Site survey — we assess your solar setup and consumption",
        "Install & connect — certified team, one-day installation",
        "Monitor via app — real-time data, savings, alerts",
      ]}
      platformNote="Track your solar generation, battery level, and savings in real time with the GridCharge app."
      ctaLabel="Ready to take control of your energy?"
      ctaHref="/contact"
    />
  );
}

import type { Metadata } from "next";
import { SegmentPageTemplate } from "@/components/templates/SegmentPageTemplate";

export const metadata: Metadata = {
  title: "Home EV Charging | GridPower",
  description: "Smart home charging wallbox. Charge overnight, wake up full.",
};

export default function ChargeHomePage() {
  return (
    <SegmentPageTemplate
      vertical="GridCharge"
      headline="Charge at home. Wake up full."
      subline="7.4 kW AC wallbox with smart scheduling. Works with all EVs. No electrician headaches."
      painPoints={[
        { pain: "Public chargers are unreliable", solution: "Home charging — always available, always yours" },
        { pain: "Slow 3-pin charging takes all night", solution: "7.4 kW wallbox charges 5x faster" },
        { pain: "Charging costs are unpredictable", solution: "Smart scheduling charges at cheapest tariff window" },
      ]}
      products={[
        { name: "GridCharge Home AC", spec: "7.4 kW Type 2 wallbox" },
        { name: "GridCharge App", spec: "iOS + Android, scheduling, cost tracking" },
        { name: "Smart Meter Bridge", spec: "TOU tariff integration" },
      ]}
      howItWorks={[
        "Order online — we verify compatibility with your EV and wiring",
        "Installation — certified electrician, typically 2–3 hours",
        "Connect app — set schedule, track usage, auto-charge at cheapest rates",
      ]}
      platformNote="GridCharge App shows real-time charging status, session history, and cost per km driven."
      ctaLabel="Get your home charger installed."
      ctaHref="/contact"
    />
  );
}

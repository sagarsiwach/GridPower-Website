import type { Metadata } from "next";
import { SegmentPageTemplate } from "@/components/templates/SegmentPageTemplate";

export const metadata: Metadata = {
  title: "Office Energy Storage | GridPower",
  description: "Cut peak demand charges. Store solar. Slash electricity bills.",
};

export default function EnergyOfficePage() {
  return (
    <SegmentPageTemplate
      vertical="GridEnergy"
      headline="Cut peak demand. Cut your bills."
      subline="Commercial energy storage for offices and retail. ROI typically 3–5 years."
      painPoints={[
        { pain: "Peak demand charges inflate bills", solution: "Discharge stored energy during peak hours" },
        { pain: "Grid outages halt operations", solution: "Automatic backup, zero transition delay" },
        { pain: "Solar without storage wastes generation", solution: "Capture every kWh your panels produce" },
      ]}
      products={[
        { name: "GridVault C1", spec: "30–100 kWh commercial ESS" },
        { name: "GridSync C1 Inverter", spec: "10–30 kW commercial inverter" },
        { name: "GridPower Console", spec: "Energy management software" },
      ]}
      howItWorks={[
        "Energy audit — map your consumption peaks and solar profile",
        "System design — right-sized storage and inverter",
        "Installation — typically 2–3 days, no business interruption",
        "Monitor & optimise — Console dashboard with demand forecasting",
      ]}
      platformNote="GridPower Console gives your facility manager full visibility into energy use, costs, and carbon impact."
      ctaLabel="Find out how much you could save."
      ctaHref="/contact"
    />
  );
}

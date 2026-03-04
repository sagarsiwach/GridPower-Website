import type { Metadata } from "next";
import { SegmentPageTemplate } from "@/components/templates/SegmentPageTemplate";

export const metadata: Metadata = {
  title: "Power Park — Grid-Scale Storage | GridPower",
  description: "MW-scale BESS for solar developers, IPPs, and utilities.",
};

export default function EnergyPowerParkPage() {
  return (
    <SegmentPageTemplate
      vertical="GridEnergy"
      headline="Grid-scale storage. Your terms."
      subline="Containerized MW-scale BESS for solar developers, IPPs, and utilities. Open architecture, bankable specs."
      painPoints={[
        { pain: "Intermittent solar limits PPA value", solution: "Storage enables firm power contracts" },
        { pain: "Proprietary systems lock in vendor dependency", solution: "Open BMS, any cell chemistry, auditable stack" },
        { pain: "Grid curtailment wastes generation", solution: "Capture and shift generation to peak tariff windows" },
      ]}
      products={[
        { name: "GridTitan P1", spec: "1–10 MWh containerized BESS" },
        { name: "GridSync Grid Inverter", spec: "500 kW – 2 MW PCS" },
        { name: "GridPower EMS", spec: "Grid-scale energy management system" },
      ]}
      howItWorks={[
        "Project scoping — capacity, grid connection, offtake structure",
        "Engineering design — single-line diagrams, civil, electrical",
        "Procurement & installation — turnkey delivery",
        "Commissioning & O&M — remote monitoring + preventive maintenance",
      ]}
      platformNote="GridPower EMS supports SCADA, DERMS, and utility-grade telemetry protocols."
      ctaLabel="Discuss your project with our team."
      ctaHref="/contact"
    />
  );
}

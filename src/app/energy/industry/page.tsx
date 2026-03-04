import type { Metadata } from "next";
import { SegmentPageTemplate } from "@/components/templates/SegmentPageTemplate";

export const metadata: Metadata = {
  title: "Industrial Energy Storage | GridPower",
  description: "Reliable power for factories and warehouses. Zero unplanned downtime.",
};

export default function EnergyIndustryPage() {
  return (
    <SegmentPageTemplate
      vertical="GridEnergy"
      headline="Reliable power. Zero downtime."
      subline="Industrial-grade energy storage for factories, warehouses, and logistics hubs."
      painPoints={[
        { pain: "Grid outages cost lakhs per hour", solution: "Full backup with <10ms switchover" },
        { pain: "Demand charges on heavy machinery", solution: "Peak shaving cuts ToD tariff exposure" },
        { pain: "Captive solar stranded without storage", solution: "Store and self-consume 100% of rooftop solar" },
      ]}
      products={[
        { name: "GridTitan I1", spec: "200–500 kWh industrial BESS" },
        { name: "GridSync I1 Inverter", spec: "50–200 kW industrial inverter" },
        { name: "GridPower SCADA Bridge", spec: "Industrial protocol integration" },
      ]}
      howItWorks={[
        "Load analysis — map critical vs non-critical loads",
        "System sizing — matched to your demand profile",
        "Installation — industrial electrical team, safety certified",
        "Integration — connect to existing SCADA or DCS if applicable",
      ]}
      platformNote="Full SCADA integration available. GridPower Console supports Modbus, BACnet, and MQTT."
      ctaLabel="Protect your operations from grid uncertainty."
      ctaHref="/contact"
    />
  );
}

import type { Metadata } from "next";
import { SegmentPageTemplate } from "@/components/templates/SegmentPageTemplate";

export const metadata: Metadata = {
  title: "Enterprise & Fleet EV Charging | GridPower",
  description: "Depot charging and energy management for commercial fleets. Schedulable, metered, integrated.",
};

export default function ChargeEnterprisePage() {
  return (
    <SegmentPageTemplate
      vertical="GridCharge"
      headline="Manage your fleet's energy."
      subline="Fleet depot charging with smart scheduling, energy management, and cost-per-km tracking. Built for uptime."
      painPoints={[
        { pain: "Fleet fuel costs are unpredictable", solution: "Electric fleets cut fuel cost by 60–80%" },
        { pain: "Depot charging overloads the grid connection", solution: "Smart load management stays within sanctioned load" },
        { pain: "No visibility into per-vehicle energy cost", solution: "Per-vehicle metering and cost-per-km dashboards" },
      ]}
      products={[
        { name: "GridCharge Fleet DC", spec: "60–180 kW CCS2 depot charger" },
        { name: "GridCharge Fleet AC", spec: "22 kW managed AC charging" },
        { name: "GridPower Fleet Console", spec: "Scheduling, metering, fleet analytics" },
      ]}
      howItWorks={[
        "Fleet audit — vehicle count, routes, duty cycles, depot layout",
        "System design — charger mix, load management, grid interface",
        "Installation — phased rollout, driver training",
        "Operate — automated scheduling, overnight charging, live dashboards",
      ]}
      platformNote="GridPower Fleet Console integrates with your fleet management system. API access for custom workflows."
      ctaLabel="Electrify your fleet operations."
      ctaHref="/contact"
    />
  );
}

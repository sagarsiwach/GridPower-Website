import type { Metadata } from "next";
import { SegmentPageTemplate } from "@/components/templates/SegmentPageTemplate";

export const metadata: Metadata = {
  title: "Destination EV Charging | GridPower",
  description: "Turn parking into revenue. OCPP-compliant chargers for hotels, malls, and offices.",
};

export default function ChargeDestinationPage() {
  return (
    <SegmentPageTemplate
      vertical="GridCharge"
      headline="Turn parking into revenue."
      subline="OCPP-compliant EV chargers for hotels, malls, restaurants, and offices. Your pricing, your branding, your data."
      painPoints={[
        { pain: "Visitors leave for locations with chargers", solution: "Attract EV drivers and increase dwell time" },
        { pain: "No way to monetize parking spaces", solution: "Paid charging sessions — set your own tariff" },
        { pain: "Proprietary networks lock you in", solution: "OCPP 2.0.1 means switch providers anytime" },
      ]}
      products={[
        { name: "GridCharge Destination AC", spec: "7–22 kW Type 2 pedestal" },
        { name: "GridCharge Destination DC", spec: "30–60 kW CCS2 fast charger" },
        { name: "GridPower Console", spec: "Billing, access control, analytics" },
      ]}
      howItWorks={[
        "Site assessment — parking layout, electrical capacity, footfall",
        "Hardware selection — AC or DC based on dwell time and budget",
        "Installation — certified team, signage, commissioning",
        "Go live — set pricing, accept payments, track usage",
      ]}
      platformNote="GridPower Console handles billing, user access, and session analytics. White-label your charging network."
      ctaLabel="Add EV charging to your location."
      ctaHref="/contact"
    />
  );
}

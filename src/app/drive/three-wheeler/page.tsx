import type { Metadata } from "next";
import { SegmentPageTemplate } from "@/components/templates/SegmentPageTemplate";

export const metadata: Metadata = {
  title: "Three-Wheeler EV Powertrain | GridPower",
  description: "Complete powertrain kits for e-rickshaws and cargo vehicles. Optimized for Indian conditions.",
};

export default function DriveThreeWheelerPage() {
  return (
    <SegmentPageTemplate
      vertical="GridDrive"
      headline="Power the last mile."
      subline="Complete powertrain kits for passenger and cargo e-rickshaws. Optimized for Indian road conditions and duty cycles."
      painPoints={[
        { pain: "Underpowered motors fail on inclines", solution: "3–8 kW motors rated for gradient and load" },
        { pain: "Battery degradation in Indian heat", solution: "Thermal-managed LiFePO4 packs, 3000+ cycles" },
        { pain: "No after-sales support from importers", solution: "India-based engineering and spare parts" },
      ]}
      products={[
        { name: "GridDrive Motor 3W", spec: "3–8 kW BLDC/PMSM motor" },
        { name: "GridDrive Controller 3W", spec: "Regenerative braking, programmable" },
        { name: "GridDrive Battery Pack 3W", spec: "4–8 kWh swappable or fixed" },
      ]}
      howItWorks={[
        "Application review — passenger, cargo, or mixed-use duty cycle",
        "Kit selection — motor, controller, battery, harness",
        "Integration support — mounting, wiring, CAN setup",
        "Volume supply — production-ready kits with warranty",
      ]}
      platformNote="Fleet operators can track vehicle health and battery state through GridPower Console."
      ctaLabel="Build your three-wheeler platform."
      ctaHref="/contact"
    />
  );
}

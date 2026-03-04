import type { Metadata } from "next";
import { SegmentPageTemplate } from "@/components/templates/SegmentPageTemplate";

export const metadata: Metadata = {
  title: "Two-Wheeler EV Powertrain | GridPower",
  description: "Motor, controller, and BMS for electric scooters and motorcycles. Open specs, no lock-in.",
};

export default function DriveTwoWheelerPage() {
  return (
    <SegmentPageTemplate
      vertical="GridDrive"
      headline="Electrify two-wheelers."
      subline="Hub motors, controllers, and battery packs for e-bikes and scooters. Proven components from our Kabira Mobility heritage."
      painPoints={[
        { pain: "Proprietary powertrains lock OEMs to one supplier", solution: "Open-spec components — switch or dual-source freely" },
        { pain: "Poor component documentation", solution: "Full datasheets, CAD models, and integration guides" },
        { pain: "Long lead times from overseas suppliers", solution: "India-stocked inventory, 2–4 week delivery" },
      ]}
      products={[
        { name: "GridDrive Hub Motor 2W", spec: "1.5–4 kW BLDC hub motor" },
        { name: "GridDrive Controller 2W", spec: "Programmable FOC controller" },
        { name: "GridDrive BMS 2W", spec: "16S–24S LiFePO4 BMS" },
      ]}
      howItWorks={[
        "Spec review — share your vehicle architecture and performance targets",
        "Component selection — matched motor, controller, and BMS",
        "Sample kits — prototype and validate on your chassis",
        "Production supply — volume pricing, scheduled deliveries",
      ]}
      platformNote="Access component datasheets, firmware updates, and integration guides through the GridPower developer portal."
      ctaLabel="Discuss your two-wheeler project."
      ctaHref="/contact"
    />
  );
}

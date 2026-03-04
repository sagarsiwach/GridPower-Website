import type { Metadata } from "next";
import { SegmentPageTemplate } from "@/components/templates/SegmentPageTemplate";

export const metadata: Metadata = {
  title: "Four-Wheeler EV Powertrain | GridPower",
  description: "Scalable drivetrain architecture for 4W vehicle OEMs. Motors, inverters, BMS, and battery packs.",
};

export default function DriveFourWheelerPage() {
  return (
    <SegmentPageTemplate
      vertical="GridDrive"
      headline="Full EV powertrain."
      subline="Scalable drivetrain architecture for cars, vans, and light commercial vehicles. High-voltage systems, open spec."
      painPoints={[
        { pain: "Developing a powertrain from scratch takes years", solution: "Pre-validated platform — accelerate your timeline" },
        { pain: "Tier-1 suppliers require massive volume commitments", solution: "Flexible MOQs for emerging OEMs" },
        { pain: "Black-box systems prevent customization", solution: "Open firmware, full CAN documentation, source access" },
      ]}
      products={[
        { name: "GridDrive Motor 4W", spec: "30–120 kW PMSM traction motor" },
        { name: "GridDrive Inverter 4W", spec: "400V / 800V SiC inverter" },
        { name: "GridDrive Battery System 4W", spec: "30–80 kWh modular pack" },
        { name: "GridDrive VCU", spec: "Vehicle control unit with open CAN" },
      ]}
      howItWorks={[
        "Platform review — vehicle class, performance targets, timeline",
        "Architecture design — motor, inverter, battery, VCU integration",
        "Prototype delivery — bench-tested powertrain kit",
        "Production partnership — volume supply, engineering support",
      ]}
      platformNote="Full telemetry and diagnostics available through GridPower Console for OEM fleet monitoring."
      ctaLabel="Discuss your four-wheeler program."
      ctaHref="/contact"
    />
  );
}

import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { EnergyFlowSection } from "@/components/sections/EnergyFlowSection";
import { GridEnergySolutions } from "@/components/sections/GridEnergySolutions";
import { GridChargeSolutions } from "@/components/sections/GridChargeSolutions";
import { GridDriveSection } from "@/components/sections/GridDriveSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { OpenEcosystem } from "@/components/sections/OpenEcosystem";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <EnergyFlowSection />
      <GridEnergySolutions />
      <GridChargeSolutions />
      <GridDriveSection />
      <PlatformSection />
      <OpenEcosystem />
      <ContactCTA />
    </main>
  );
}

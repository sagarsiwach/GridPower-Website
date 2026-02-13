import { Hero } from "@/components/sections/Hero";
import { GridEnergySolutions } from "@/components/sections/GridEnergySolutions";
import { GridChargeSolutions } from "@/components/sections/GridChargeSolutions";
import { GridDriveSection } from "@/components/sections/GridDriveSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { OpenEcosystem } from "@/components/sections/OpenEcosystem";
import { NumbersSection } from "@/components/sections/NumbersSection";
import { CompanyBrief } from "@/components/sections/CompanyBrief";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <GridEnergySolutions />
      <GridChargeSolutions />
      <GridDriveSection />
      <PlatformSection />
      <OpenEcosystem />
      <NumbersSection />
      <CompanyBrief />
      <ContactCTA />
    </main>
  );
}

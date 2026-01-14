import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";

const heroImages = [
  {
    src: "/images/solar-farm.jpg",
    alt: "Solar farm in the desert with rows of solar panels at sunset",
  },
  {
    src: "/images/house-solar.jpg",
    alt: "Modern house with solar panels on the roof at dusk",
  },
  {
    src: "/images/house-solar.jpg",
    alt: "Residential solar installation on a tropical home",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-200 min-h-screen p-4 flex flex-col gap-2">
      <Header />
      <HeroSection images={heroImages} />
    </main>
  );
}

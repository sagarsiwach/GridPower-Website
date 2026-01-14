import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";

const heroMedia = [
  {
    type: "video" as const,
    src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4",
    poster: "/images/solar-farm.jpg",
  },
  {
    type: "image" as const,
    src: "/images/house-solar.jpg",
    alt: "Modern house with solar panels on the roof at dusk",
  },
  {
    type: "image" as const,
    src: "/images/solar-farm.jpg",
    alt: "Solar farm in the desert with rows of solar panels at sunset",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-200 min-h-screen p-4 flex flex-col gap-2">
      <Header />
      <HeroSection media={heroMedia} />
    </main>
  );
}

import Header from "@/components/ui/Header";
import { GridContainer } from "@/components/grid";
import { gridData } from "@/lib/grid-data";

export default function Home() {
  return (
    <main className="flex h-screen flex-col gap-2 bg-gray-200 p-4">
      <Header />
      <GridContainer items={gridData} />
    </main>
  );
}

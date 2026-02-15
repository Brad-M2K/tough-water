import { HeroSection } from "@/components/hero-section";
import { SectorsShowcase } from "@/components/sectors-showcase";

export default function Home() {
  return (
    <div className="from-background via-background to-muted/30 min-h-screen bg-linear-to-b">
      <HeroSection />
      <main>
        <SectorsShowcase />
      </main>
    </div>
  );
}

import { HeroSection } from "@/components/hero-section";
import { SectorsShowcase } from "@/components/sectors-showcase";
import { SiteFooter } from "@/components/site-footer";
import { TrustedBySection } from "@/components/trusted-by-section";

export default function Home() {
  return (
    <div className="site-shift-layer from-background via-background to-muted/30 min-h-screen bg-linear-to-b">
      <HeroSection />
      <main>
        <SectorsShowcase />
        <TrustedBySection />
      </main>
      <SiteFooter />
    </div>
  );
}

import sectors from "@/lib/sector-content.json";
import { RotatingShowcase, type RotatingShowcaseItem } from "@/components/ui/rotating-showcase";

const sectorItems = sectors as RotatingShowcaseItem[];

export function SectorsShowcase() {
  return (
    <RotatingShowcase
      id="sectors"
      eyebrow="Who We Work With"
      heading="Sector-focused support"
      description="Practical water hygiene delivery and clear compliance reporting for commercial estates, operational facilities, and high-responsibility environments."
      supportHeading="Typical Support"
      items={sectorItems}
      highlightCount={2}
    />
  );
}

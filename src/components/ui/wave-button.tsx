import Link from "next/link";

import { cn } from "@/lib/utils";

type WaveButtonProps = React.ComponentProps<typeof Link>;

const waveButtonBaseClass =
  "relative inline-flex overflow-hidden rounded-md bg-brand font-semibold text-brand-foreground transition-opacity hover:opacity-90 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[38%] after:bg-brand-accent after:transition-[height,clip-path] after:duration-300 after:ease-out after:[clip-path:polygon(0_45%,12%_70%,24%_52%,37%_74%,52%_50%,66%_72%,79%_54%,91%_73%,100%_58%,100%_100%,0_100%)] hover:after:h-full hover:after:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]";

export function WaveButton({ className, children, ...props }: WaveButtonProps) {
  return (
    <Link {...props} className={cn(waveButtonBaseClass, className)}>
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

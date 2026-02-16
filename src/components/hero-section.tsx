import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { WaveButton } from "@/components/ui/wave-button";
import { accreditationLogos, heroServiceHighlights } from "@/lib/site-content";

const companyStartYear = 2007;
const yearsServing = new Date().getFullYear() - companyStartYear;

export function HeroSection() {
  return (
    <section className="relative mb-20 w-full md:mb-[clamp(7rem,10vw,12rem)]">
      {/* Mobile hero layout */}
      <div
        className="relative overflow-visible lg:hidden"
        style={{
          backgroundImage: "url('/border-splash-hero.png')",
          backgroundSize: "100% auto",
          backgroundRepeat: "repeat-y",
        }}
      >
        <div className="mx-auto grid w-full max-w-6xl gap-3 px-4 py-3">
          <div className="flex-center space-y-2.5">
            <h1 className="text-brand max-w-3xl text-[1.95rem] leading-[1.1] font-bold tracking-tight">
              Clean Water. Safe Systems. Full Compliance.
            </h1>
            <p className="text-brand text-base font-semibold">
              Professional Water Hygiene Services
            </p>
            <p className="text-muted-foreground max-w-3xl text-sm leading-6">
              Professional legionella risk assessments, monitoring, and remedial works for
              commercial and residential properties across the UK.
            </p>
            <WaveButton href="/#contact" className="px-4 py-2 text-sm">
              Get in Touch
            </WaveButton>
          </div>
          <div className="z-10 rounded-2xl border border-gray-300/30 bg-gray-100/30 p-4 backdrop-blur-sm">
            <h2 className="text-brand text-base font-bold tracking-tight">Our Services</h2>
            <div className="mt-2 space-y-2">
              {heroServiceHighlights.map((service) => (
                <div key={service}>
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="text-brand-success size-4 shrink-0" />
                    <p className="text-brand text-xs font-medium">{service}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-brand/15 my-3 h-px" />
            <p className="text-brand text-xs">
              Fully compliant with HSE ACOP L8 and HSG274 guidance. Supporting businesses across
              Yorkshire and full UK-wide coverage for over {yearsServing} years.
            </p>
            <div className="mt-3 grid grid-cols-3 gap-1">
              {accreditationLogos.map((logo) => (
                <div key={logo.src} className="flex h-10 items-center justify-center p-1">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-7 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-[35%]">
          <Image
            src="/water-splash-seperation.png"
            alt=""
            width={4249}
            height={700}
            className="mx-auto w-full"
          />
        </div>
      </div>

      {/* Desktop hero layout */}
      <div className="relative hidden h-[clamp(34rem,52vw,52rem)] overflow-visible lg:block">
        <Image
          src="/border-splash-hero.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 z-20">
          <div className="mx-auto grid h-full w-full max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div className="space-y-6">
              <h1 className="text-brand max-w-3xl text-[clamp(2rem,3.2vw,3.75rem)] font-bold tracking-tight">
                Clean Water. Safe Systems. Full Compliance.
              </h1>
              <p className="text-brand text-xl font-medium">Professional Water Hygiene Services</p>
              <p className="text-muted-foreground max-w-3xl text-xl leading-relaxed">
                Professional legionella risk assessments, monitoring, and remedial works for
                commercial and residential properties across the UK.
              </p>
              <WaveButton href="/#contact" className="px-6 py-3 text-base">
                Get in Touch
              </WaveButton>
            </div>
            <div className="rounded-2xl border border-gray-300/30 bg-gray-100/30 p-8 backdrop-blur-sm">
              <h2 className="text-brand text-xl font-bold tracking-tight">Our Services</h2>
              <div className="mt-3 space-y-3">
                {heroServiceHighlights.map((service) => (
                  <div key={service}>
                    <div className="flex items-center gap-3">
                      <CircleCheckBig className="text-brand-success size-5 shrink-0" />
                      <p className="text-brand text-lg leading-tight font-medium">{service}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-brand/15 my-6 h-px" />
              <p className="text-brand max-w-xl text-base leading-relaxed">
                Fully compliant with HSE ACOP L8 and HSG274 guidance. Supporting businesses across
                Yorkshire and full UK-wide coverage for over {yearsServing} years.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {accreditationLogos.map((logo) => (
                  <div key={logo.src} className="flex h-20 items-center justify-center p-1.5">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="max-h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-[35%]">
          <Image
            src="/water-splash-seperation.png"
            alt=""
            width={4249}
            height={700}
            className="mx-auto w-full max-w-[1600px]"
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { CircleCheckBig } from "lucide-react";

const heroServiceHighlights = [
  "Commercial Plumbing Maintenance & Repairs",
  "Legionella Risk Assessments & Monitoring",
  "Remedial Works, Sampling & Compliance Support",
];

const companyStartYear = 2007;
const yearsServing = new Date().getFullYear() - companyStartYear;

const accreditationLogos = [
  { src: "/CHAS.webp", alt: "CHAS accreditation", width: 180, height: 64 },
  { src: "/WIAPS.svg", alt: "WIAPS accreditation", width: 180, height: 64 },
  { src: "/SafeContractor.png", alt: "SafeContractor accreditation", width: 180, height: 64 },
];

export function HeroSection() {
  return (
    <section className="relative mb-[clamp(7rem,10vw,12rem)] w-full">
      {/* Mobile hero layout */}
      <div
        className="relative overflow-visible lg:hidden"
        style={{
          backgroundImage: "url('/border-splash-hero.png')",
          backgroundSize: "100% auto",
          backgroundRepeat: "repeat-y",
        }}
      >
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 py-4">
          <div className="space-y-3">
            <h1 className="max-w-3xl text-lg leading-tight font-bold tracking-tight text-[#36467F]">
              Clean Water. Safe Systems. Full Compliance.
            </h1>
            <p className="text-md font-semibold text-[#36467F]">
              Professional Water Hygiene Services
            </p>
            <p className="text-muted-foreground max-w-3xl text-sm leading-7">
              Professional legionella risk assessments, monitoring, and remedial works for
              commercial and residential properties across the UK.
            </p>
            <Link
              href="/#contact"
              className="inline-flex rounded-md bg-[#36467F] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get in Touch
            </Link>
          </div>
          <div className="rounded-2xl border border-gray-300/30 bg-gray-100/30 p-6 backdrop-blur-sm">
            <h2 className="text-lg font-bold tracking-tight text-[#36467F]">Our Services</h2>
            <div className="mt-2.5 space-y-2.5">
              {heroServiceHighlights.map((service) => (
                <div key={service}>
                  <div className="flex items-center gap-2.5">
                    <CircleCheckBig className="size-4 shrink-0 text-[#9acb8d]" />
                    <p className="text-sm font-medium text-[#36467F]">{service}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-3.5 h-px bg-[#36467F]/15" />
            <p className="text-xs text-[#36467F]">
              Fully compliant with HSE ACOP L8 and HSG274 guidance. Supporting businesses across
              Yorkshire and full UK-wide coverage for over {yearsServing} years.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {accreditationLogos.map((logo) => (
                <div key={logo.src} className="flex h-12 items-center justify-center p-1">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-8 w-auto object-contain"
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
              <h1 className="max-w-3xl text-[clamp(2rem,3.2vw,3.75rem)] font-bold tracking-tight text-[#36467F]">
                Clean Water. Safe Systems. Full Compliance.
              </h1>
              <p className="text-xl font-medium text-[#36467F]">
                Professional Water Hygiene Services
              </p>
              <p className="text-muted-foreground max-w-3xl text-xl leading-relaxed">
                Professional legionella risk assessments, monitoring, and remedial works for
                commercial and residential properties across the UK.
              </p>
              <Link
                href="/#contact"
                className="inline-flex rounded-md bg-[#36467F] px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
              >
                Get in Touch
              </Link>
            </div>
            <div className="rounded-2xl border border-gray-300/30 bg-gray-100/30 p-8 backdrop-blur-sm">
              <h2 className="text-xl font-bold tracking-tight text-[#36467F]">Our Services</h2>
              <div className="mt-3 space-y-3">
                {heroServiceHighlights.map((service) => (
                  <div key={service}>
                    <div className="flex items-center gap-3">
                      <CircleCheckBig className="size-5 shrink-0 text-[#9acb8d]" />
                      <p className="text-lg leading-tight font-medium text-[#36467F]">{service}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="my-6 h-px bg-[#36467F]/15" />
              <p className="max-w-xl text-base leading-relaxed text-[#36467F]">
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

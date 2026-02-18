import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Sectors", href: "/#sectors" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand text-brand-foreground relative mt-10 md:mt-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-5.5 overflow-hidden leading-none md:-top-5.5"
      >
        <Image
          src="/tws-wave-bottom-mobile.svg"
          alt=""
          width={1200}
          height={170}
          className="relative left-1/2 block h-auto w-[112vw] max-w-none -translate-x-1/2 md:hidden"
        />
        <Image
          src="/tws-wave-bottom.svg"
          alt=""
          width={4245}
          height={75}
          className="mx-auto hidden h-auto w-full max-w-480 md:block"
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-16 pb-8 md:px-6 md:pt-20 md:pb-10">
        <div className="grid gap-8 md:grid-cols-[1.25fr_1fr_1fr]">
          <div className="space-y-3">
            <Image
              src="/tws-logo-wordmark.png"
              alt="Tough Water"
              width={300}
              height={64}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="max-w-md text-sm/6 text-white/85">
              Plumbing and water hygiene services for commercial buildings, facilities portfolios,
              and compliance-led environments across Yorkshire and the UK.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.08em] text-white/90 uppercase">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/85 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.08em] text-white/90 uppercase">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              <li>enquiries@toughwater.co.uk</li>
              <li>0113 000 0000</li>
              <li>Yorkshire + UK-wide commercial coverage</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-4 text-xs text-white/75 md:mt-10">
          <p>© {new Date().getFullYear()} Tough Water Solutions Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

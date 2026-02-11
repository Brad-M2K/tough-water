"use client";

import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const primaryLinks = [
  { href: "#about", label: "About" },
  { href: "#coverage", label: "Coverage" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  {
    href: "#services",
    title: "Emergency Plumbing",
    description: "24/7 response for leaks, bursts, and no-water incidents.",
  },
  {
    href: "#services",
    title: "Planned Maintenance",
    description: "Routine checks for commercial and multi-site properties.",
  },
  {
    href: "#services",
    title: "Installations & Upgrades",
    description: "Pipework, valves, boosters, and system modernisation.",
  },
];

const complianceLinks = [
  {
    href: "#hygiene",
    title: "Legionella Risk Control",
    description: "Monitoring, sampling, and control-scheme execution.",
  },
  {
    href: "#hygiene",
    title: "Water Hygiene Remediation",
    description: "Tank cleaning, disinfection, and corrective works.",
  },
  {
    href: "#hygiene",
    title: "Compliance Documentation",
    description: "Audit-ready records and clear reporting for stakeholders.",
  },
];

export default function Home() {
  const waveRef = useRef<HTMLDivElement>(null);
  const [showNavBackground, setShowNavBackground] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateNavBackground = () => {
      const waveBottom = waveRef.current?.getBoundingClientRect().bottom ?? 1;
      setShowNavBackground(waveBottom <= 0);
    };

    updateNavBackground();
    window.addEventListener("scroll", updateNavBackground, { passive: true });
    window.addEventListener("resize", updateNavBackground);

    return () => {
      window.removeEventListener("scroll", updateNavBackground);
      window.removeEventListener("resize", updateNavBackground);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const closeMobileMenuOnDesktop = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMobileMenuOnDesktop);
    return () => {
      window.removeEventListener("resize", closeMobileMenuOnDesktop);
    };
  }, []);

  return (
    <div className="from-background via-background to-muted/30 min-h-screen bg-linear-to-b">
      <div ref={waveRef} aria-hidden="true" className="w-screen overflow-hidden leading-none">
        <Image
          src="/tws-wave-top.svg"
          alt=""
          width={4245}
          height={75}
          className="block h-auto w-full"
          priority
        />
      </div>

      <header
        className={`sticky top-0 z-30 transition-colors ${
          showNavBackground ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/tws-logo-wordmark.png"
              alt="Tough Water"
              width={300}
              height={64}
              className={`w-auto transition-all duration-300 ${
                showNavBackground ? "h-8 md:h-9" : "h-16 md:h-20"
              }`}
              priority
            />
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Plumbing Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[420px] gap-2 md:grid-cols-1">
                    {serviceLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link href={item.href} className="rounded-md p-3">
                            <div className="text-sm font-medium">{item.title}</div>
                            <p className="text-muted-foreground mt-1 text-sm leading-snug">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Water Hygiene</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[420px] gap-2 md:grid-cols-1">
                    {complianceLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link href={item.href} className="rounded-md p-3">
                            <div className="text-sm font-medium">{item.title}</div>
                            <p className="text-muted-foreground mt-1 text-sm leading-snug">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {primaryLinks.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="tel:+441234567890"
              className="rounded-md border px-3 py-2 text-sm font-medium"
            >
              24/7 Callout
            </Link>
            <Link
              href="#contact"
              className="rounded-md bg-[#36467F] px-3 py-2 text-sm font-medium text-white"
            >
              Request Quote
            </Link>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border lg:hidden"
          >
            {isMobileMenuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 overflow-y-auto bg-white px-6 pt-28 pb-8 lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-8">
            <section>
              <h2 className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                Plumbing Services
              </h2>
              <ul className="mt-3 space-y-3">
                {serviceLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="block text-base font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                Water Hygiene
              </h2>
              <ul className="mt-3 space-y-3">
                {complianceLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="block text-base font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <ul className="space-y-3">
                {primaryLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block text-base font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-2 flex flex-col gap-3">
              <Link
                href="tel:+441234567890"
                className="rounded-md border px-4 py-3 text-center text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                24/7 Callout
              </Link>
              <Link
                href="#contact"
                className="rounded-md bg-[#36467F] px-4 py-3 text-center text-sm font-medium text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </nav>
        </div>
      )}

      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 py-10">
        <section className="bg-card grid gap-8 rounded-2xl border p-8 shadow-sm md:grid-cols-2 md:items-center md:p-12">
          <div className="space-y-5">
            <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              Commercial Plumbing & Water Hygiene
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#36467F] md:text-5xl">
              Safe water systems and dependable plumbing for high-stakes sites
            </h1>
            <p className="text-muted-foreground max-w-xl">
              Tough Water supports facilities teams, property managers, and businesses with
              responsive plumbing support and water hygiene compliance services.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#services"
                className="rounded-md bg-[#36467F] px-4 py-2 text-sm font-medium text-white"
              >
                Explore Services
              </Link>
              <Link href="#hygiene" className="rounded-md border px-4 py-2 text-sm font-medium">
                View Compliance Scope
              </Link>
            </div>
          </div>
          <div className="bg-muted/60 rounded-xl border p-6">
            <p className="text-sm font-medium">Typical client environments</p>
            <ul className="text-muted-foreground mt-3 space-y-2 text-sm">
              <li>Healthcare and care settings</li>
              <li>Education campuses</li>
              <li>Hospitality and leisure properties</li>
              <li>Industrial and commercial estates</li>
            </ul>
          </div>
        </section>

        <section id="services" className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-[#36467F]">
            Plumbing Services
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {serviceLinks.map((item) => (
              <article key={item.title} className="bg-card rounded-xl border p-5">
                <h3 className="font-semibold text-[#36467F]">{item.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="hygiene" className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-[#36467F]">
            Water Hygiene & Compliance
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {complianceLinks.map((item) => (
              <article key={item.title} className="bg-card rounded-xl border p-5">
                <h3 className="font-semibold text-[#36467F]">{item.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-card mt-14 rounded-2xl border p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#36467F]">
            About Tough Water
          </h2>
          <p className="text-muted-foreground mt-3 max-w-3xl">
            This starter is now structured for a real service business website with dedicated
            service, compliance, and conversion sections. You can plug in CMS data, form handling,
            auth, and backend routes as needed without changing the core layout model.
          </p>
        </section>

        <section id="coverage" className="bg-card mt-14 rounded-2xl border p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#36467F]">Coverage</h2>
          <p className="text-muted-foreground mt-3">
            Add your operating regions, SLA windows, and out-of-hours escalation policy here.
          </p>
        </section>

        <section id="contact" className="bg-card mt-14 rounded-2xl border p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="text-muted-foreground mt-3">
            Add your preferred lead capture flow (email, form endpoint, CRM integration, or phone).
          </p>
        </section>
      </main>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
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

  return (
    <div className="from-background via-background to-muted/30 min-h-screen bg-gradient-to-b">
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
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Tough Water
          </Link>

          <NavigationMenu className="hidden md:flex">
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

          <div className="flex items-center gap-2">
            <Link
              href="tel:+441234567890"
              className="rounded-md border px-3 py-2 text-sm font-medium"
            >
              24/7 Callout
            </Link>
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm font-medium"
            >
              Request Quote
            </Link>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-6xl gap-2 px-6 pb-4 md:hidden">
          <Link href="#services" className="rounded-md border px-3 py-1.5 text-sm font-medium">
            Services
          </Link>
          <Link href="#hygiene" className="rounded-md border px-3 py-1.5 text-sm font-medium">
            Hygiene
          </Link>
          <Link href="#about" className="rounded-md border px-3 py-1.5 text-sm font-medium">
            About
          </Link>
          <Link href="#contact" className="rounded-md border px-3 py-1.5 text-sm font-medium">
            Contact
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 py-10">
        <section className="bg-card grid gap-8 rounded-2xl border p-8 shadow-sm md:grid-cols-2 md:items-center md:p-12">
          <div className="space-y-5">
            <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              Commercial Plumbing & Water Hygiene
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Safe water systems and dependable plumbing for high-stakes sites
            </h1>
            <p className="text-muted-foreground max-w-xl">
              Tough Water supports facilities teams, property managers, and businesses with
              responsive plumbing support and water hygiene compliance services.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#services"
                className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
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
          <h2 className="text-2xl font-semibold tracking-tight">Plumbing Services</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {serviceLinks.map((item) => (
              <article key={item.title} className="bg-card rounded-xl border p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="hygiene" className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight">Water Hygiene & Compliance</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {complianceLinks.map((item) => (
              <article key={item.title} className="bg-card rounded-xl border p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-card mt-14 rounded-2xl border p-8">
          <h2 className="text-2xl font-semibold tracking-tight">About Tough Water</h2>
          <p className="text-muted-foreground mt-3 max-w-3xl">
            This starter is now structured for a real service business website with dedicated
            service, compliance, and conversion sections. You can plug in CMS data, form handling,
            auth, and backend routes as needed without changing the core layout model.
          </p>
        </section>

        <section id="coverage" className="bg-card mt-14 rounded-2xl border p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Coverage</h2>
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
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
  { href: "/#about", label: "About" },
  { href: "/#coverage", label: "Coverage" },
  { href: "/#contact", label: "Contact" },
];

const serviceLinks = [
  {
    href: "/#services",
    title: "Emergency Plumbing",
    description: "24/7 response for leaks, bursts, and no-water incidents.",
  },
  {
    href: "/#services",
    title: "Planned Maintenance",
    description: "Routine checks for commercial and multi-site properties.",
  },
  {
    href: "/#services",
    title: "Installations & Upgrades",
    description: "Pipework, valves, boosters, and system modernisation.",
  },
];

const complianceLinks = [
  {
    href: "/#hygiene",
    title: "Legionella Risk Control",
    description: "Monitoring, sampling, and control-scheme execution.",
  },
  {
    href: "/#hygiene",
    title: "Water Hygiene Remediation",
    description: "Tank cleaning, disinfection, and corrective works.",
  },
  {
    href: "/#hygiene",
    title: "Compliance Documentation",
    description: "Audit-ready records and clear reporting for stakeholders.",
  },
];

export function SiteHeader() {
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
    <>
      <div ref={waveRef} aria-hidden="true" className="w-full overflow-hidden leading-none">
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
          showNavBackground ? "bg-white/70 backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
            showNavBackground ? "py-2" : "py-4"
          }`}
        >
          <Link href="/" className="shrink-0">
            <Image
              src="/tws-logo-wordmark.png"
              alt="Tough Water"
              width={300}
              height={64}
              className={`w-auto transition-all duration-300 ${
                showNavBackground ? "h-12 md:h-13" : "h-16 md:h-20"
              }`}
              priority
            />
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Plumbing Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-105 gap-2 md:grid-cols-1">
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
                  <ul className="grid w-105 gap-2 md:grid-cols-1">
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

          <div className="hidden items-center gap-4 lg:flex">
            <div className="h-10 w-px bg-[#36467F]/30" />
            <Link
              href="#"
              aria-label="Facebook"
              className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-[#36467F] text-white transition-opacity hover:opacity-90"
            >
              <FaFacebookF className="size-4" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-[#36467F] text-white transition-opacity hover:opacity-90"
            >
              <FaLinkedinIn className="size-4" />
            </Link>
            <Link
              href="/#contact"
              className="rounded-md bg-[#36467F] px-4 py-1 text-lg font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get in Touch
            </Link>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="relative inline-flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-6 rounded bg-[#36467F] transition-transform duration-300 ${
                isMobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-6 rounded bg-[#36467F] transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-6 rounded bg-[#36467F] transition-transform duration-300 ${
                isMobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            />
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

            <div className="mt-2 border-t border-[#36467F]/20 pt-6">
              <div className="flex items-center justify-center gap-4">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#36467F] text-white transition-opacity hover:opacity-90"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaFacebookF className="size-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#36467F] text-white transition-opacity hover:opacity-90"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaLinkedinIn className="size-5" />
                </Link>
              </div>
              <Link
                href="/#contact"
                className="mt-4 block rounded-md bg-[#36467F] px-4 py-2.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

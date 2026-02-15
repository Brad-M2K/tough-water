"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { DesktopNav } from "@/components/header/desktop-nav";
import { MobileNavDrawer } from "@/components/header/mobile-nav-drawer";

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

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
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
          className="mx-auto block h-auto w-full max-w-480"
          priority
        />
      </div>

      <header className="sticky top-0 z-50">
        {showNavBackground && (
          <div
            aria-hidden="true"
            className={`${isMobileMenuOpen ? "opacity-0" : "opacity-100"} pointer-events-none absolute inset-0 bg-white/60 backdrop-blur-2xl backdrop-saturate-150`}
          />
        )}
        <div
          className={`relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
            showNavBackground ? "py-2" : "py-4"
          }`}
        >
          <Link
            href="/"
            className={`shrink-0 transition-opacity duration-200 lg:opacity-100 ${
              isMobileMenuOpen ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src="/tws-logo-wordmark.png"
              alt="Tough Water"
              width={300}
              height={64}
              className={`w-auto transition-all duration-300 ${
                showNavBackground ? "h-8 md:h-13" : "h-10 md:h-20"
              }`}
              priority
            />
          </Link>

          <DesktopNav />

          {/* Mobile menu trigger (visible below lg) */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="relative z-50 inline-flex h-10 w-10 items-center justify-center lg:hidden"
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

      <MobileNavDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}

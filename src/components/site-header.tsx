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
    document.body.classList.toggle("mobile-nav-open", isMobileMenuOpen);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-nav-open");
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
      <div
        ref={waveRef}
        aria-hidden="true"
        className="site-shift-layer relative left-1/2 w-screen -translate-x-1/2 overflow-hidden leading-none"
      >
        <Image
          src="/tws-wave-top-mobile.svg"
          alt=""
          width={1200}
          height={170}
          className="relative left-1/2 block h-auto w-[112vw] max-w-none -translate-x-1/2 md:hidden"
          priority
        />
        <Image
          src="/tws-wave-top.svg"
          alt=""
          width={4245}
          height={75}
          className="mx-auto hidden h-auto w-full max-w-480 md:block"
          priority
        />
      </div>

      <header className="sticky top-0 z-50">
        {showNavBackground && (
          <div
            aria-hidden="true"
            className={`${isMobileMenuOpen ? "opacity-0" : "opacity-100"} pointer-events-none absolute inset-0 bg-white`}
          />
        )}
        <div
          className={`relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
            showNavBackground ? "py-2" : "py-4"
          }`}
        >
          <div className="site-shift-layer flex w-full items-center justify-between">
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
          </div>

          {/* Mobile menu trigger (visible below lg) */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="mobile-menu-trigger absolute top-1/2 right-6 z-50 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center lg:hidden"
          >
            <span
              aria-hidden="true"
              className={`bg-brand absolute h-0.5 w-6 rounded transition-transform duration-300 ${
                isMobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              aria-hidden="true"
              className={`bg-brand absolute h-0.5 w-6 rounded transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              aria-hidden="true"
              className={`bg-brand absolute h-0.5 w-6 rounded transition-transform duration-300 ${
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

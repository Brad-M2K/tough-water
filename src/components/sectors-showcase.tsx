"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import sectors from "@/lib/sector-content.json";

type Sector = {
  id: string;
  label: string;
  title: string;
  summary: string;
  highlights: string[];
  image: {
    src: string;
    alt: string;
    creditName: string;
    creditUrl: string;
  };
};

const sectorItems = sectors as Sector[];

export function SectorsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pillsContainerRef = useRef<HTMLDivElement | null>(null);
  const mobilePillRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const resumeTimerRef = useRef<number | null>(null);

  const queueMobileResume = () => {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, 7000);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % sectorItems.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      return;
    }

    const container = pillsContainerRef.current;
    const activePill = mobilePillRefs.current[activeIndex];
    if (!container || !activePill) {
      return;
    }

    const nextLeft = activePill.offsetLeft - (container.clientWidth - activePill.clientWidth) / 2;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const clampedLeft = Math.max(0, Math.min(nextLeft, maxScrollLeft));

    container.scrollTo({ left: clampedLeft, behavior: "smooth" });
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const activeSector = sectorItems[activeIndex];

  return (
    <section id="sectors" className="relative overflow-hidden py-10 md:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: "url('/line-mobile.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "175% auto",
            opacity: 0.42,
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: "url('/line.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "125% auto",
            opacity: 0.36,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="md:hidden">
          <div className="space-y-3">
            <div className="border-brand/12 rounded-2xl border bg-white/88 p-4">
              <p className="text-brand/70 text-xs font-semibold tracking-[0.12em] uppercase">
                Who We Work With
              </p>
              <h2 className="text-brand mt-1.5 text-xl leading-tight font-bold">
                Sector-focused support
              </h2>
              <p className="text-muted-foreground mt-1.5 text-sm leading-6">
                Practical delivery and clear compliance reporting for commercial estates.
              </p>
            </div>

            <div ref={pillsContainerRef} className="flex gap-2 overflow-x-auto pb-1">
              {sectorItems.map((sector, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={sector.id}
                    type="button"
                    ref={(el) => {
                      mobilePillRefs.current[index] = el;
                    }}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsPaused(true);
                      queueMobileResume();
                    }}
                    className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                      isActive
                        ? "border-brand bg-brand text-brand-foreground"
                        : "border-brand/20 text-brand bg-white"
                    }`}
                  >
                    {sector.label}
                  </button>
                );
              })}
            </div>

            <figure className="border-brand/15 relative h-44 overflow-hidden rounded-2xl border bg-slate-100">
              {sectorItems.map((sector, index) => {
                const isActive = index === activeIndex;

                return (
                  <Image
                    key={sector.id}
                    src={sector.image.src}
                    alt={sector.image.alt}
                    fill
                    sizes="100vw"
                    className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ${
                      isActive ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                  />
                );
              })}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/55 to-transparent" />
              <figcaption className="absolute right-3 bottom-2 text-[10px] text-white/85">
                Photo:{" "}
                <a
                  href={activeSector.image.creditUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="pointer-events-auto underline underline-offset-2"
                >
                  {activeSector.image.creditName}
                </a>
              </figcaption>
            </figure>

            <article className="border-brand/15 h-30 overflow-hidden rounded-2xl border bg-white/88 p-3.5">
              <h3 className="text-brand text-base leading-tight font-semibold">
                {activeSector.title}
              </h3>
              <p className="text-muted-foreground mt-1.5 text-xs leading-5">
                {activeSector.summary}
              </p>
            </article>

            <aside className="border-brand/15 h-24 overflow-hidden rounded-2xl border bg-white/88 p-3.5">
              <p className="text-brand/70 text-xs font-semibold tracking-[0.08em] uppercase">
                Typical Support
              </p>
              <ul className="mt-1.5 space-y-1.5">
                {activeSector.highlights.slice(0, 1).map((highlight) => (
                  <li key={highlight} className="text-brand flex items-start gap-2 text-xs">
                    <span className="bg-brand mt-1 inline-block h-2 w-2 shrink-0 rounded-full" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="border-brand/12 rounded-3xl border bg-white/82 p-7 shadow-sm backdrop-blur-sm lg:p-8">
            <div className="max-w-3xl">
              <p className="text-brand/70 text-sm font-semibold tracking-[0.12em] uppercase">
                Who We Work With
              </p>
              <h2 className="text-brand mt-2 text-4xl font-bold tracking-tight">
                Sector-Focused Water Hygiene & Plumbing Support
              </h2>
              <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                We support commercial and multi-site organisations with practical delivery, clear
                reporting, and consistent compliance standards.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {sectorItems.map((sector, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={sector.id}
                    type="button"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                    onClick={() => setActiveIndex(index)}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? "border-brand bg-brand text-brand-foreground"
                        : "border-brand/20 text-brand hover:bg-brand/8 bg-white"
                    }`}
                  >
                    {sector.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-7 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
              <figure className="border-brand/15 relative h-80 overflow-hidden rounded-2xl border bg-slate-100">
                {sectorItems.map((sector, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <Image
                      key={sector.id}
                      src={sector.image.src}
                      alt={sector.image.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 50vw"
                      className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ${
                        isActive ? "scale-100 opacity-100" : "scale-105 opacity-0"
                      }`}
                    />
                  );
                })}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/55 to-transparent" />
                <figcaption className="absolute right-3 bottom-3 text-[11px] text-white/85">
                  Photo:{" "}
                  <a
                    href={activeSector.image.creditUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="pointer-events-auto underline underline-offset-2"
                  >
                    {activeSector.image.creditName}
                  </a>
                </figcaption>
              </figure>

              <div className="space-y-4">
                <article className="border-brand/15 rounded-2xl border bg-white/88 p-6">
                  <h3 className="text-brand text-2xl leading-tight font-semibold">
                    {activeSector.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                    {activeSector.summary}
                  </p>
                </article>

                <aside className="border-brand/15 bg-brand/4 rounded-2xl border p-6">
                  <p className="text-brand/70 text-sm font-semibold tracking-[0.08em] uppercase">
                    Typical Support
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {activeSector.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight} className="text-brand flex items-start gap-2.5 text-base">
                        <span className="bg-brand mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

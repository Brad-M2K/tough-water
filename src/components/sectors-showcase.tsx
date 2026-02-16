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
  const transitionMs = 520;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const pillsContainerRef = useRef<HTMLDivElement | null>(null);
  const mobilePillRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const resumeTimerRef = useRef<number | null>(null);
  const transitionTimerRef = useRef<number | null>(null);

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
      setDirection(1);
      setActiveIndex((current) => {
        const next = (current + 1) % sectorItems.length;
        setPreviousIndex(current);

        if (transitionTimerRef.current) {
          window.clearTimeout(transitionTimerRef.current);
        }
        transitionTimerRef.current = window.setTimeout(() => {
          setPreviousIndex(null);
        }, transitionMs);

        return next;
      });
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, [isPaused, transitionMs]);

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
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const activeSector = sectorItems[activeIndex];

  return (
    <section id="sectors" className="bg-stone-50 py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="border-brand/25 bg-brand/25 mb-4 h-1 w-20 rounded-full md:mb-5" />

        <p className="text-brand/70 text-xs font-semibold tracking-[0.12em] uppercase md:text-sm">
          Who We Work With
        </p>
        <h2 className="text-brand mt-2 text-2xl leading-tight font-bold md:text-5xl">
          Sector-focused support
        </h2>
        <p className="text-muted-foreground mt-2 max-w-3xl text-sm leading-6 md:mt-3 md:text-base md:leading-relaxed">
          Practical water hygiene delivery and clear compliance reporting for commercial estates,
          operational facilities, and high-responsibility environments.
        </p>

        <div
          ref={pillsContainerRef}
          className="mt-4 flex gap-2 overflow-x-auto pb-1 md:mt-6 md:flex-wrap"
        >
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
                  if (index === activeIndex) {
                    return;
                  }

                  setDirection(index > activeIndex ? 1 : -1);
                  setPreviousIndex(activeIndex);
                  setActiveIndex(index);

                  if (transitionTimerRef.current) {
                    window.clearTimeout(transitionTimerRef.current);
                  }
                  transitionTimerRef.current = window.setTimeout(() => {
                    setPreviousIndex(null);
                  }, transitionMs);

                  setIsPaused(true);
                  queueMobileResume();
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors md:px-4 md:py-2 md:text-sm ${
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

        <div className="mt-5 grid gap-4 md:mt-7 md:grid-cols-[1.05fr_1fr] md:gap-7">
          <figure className="relative h-52 overflow-hidden rounded-2xl md:h-84">
            {previousIndex !== null && (
              <div
                className={`animate-out absolute inset-0 z-10 duration-500 ${
                  direction === 1 ? "slide-out-to-left-10" : "slide-out-to-right-10"
                }`}
              >
                <Image
                  src={sectorItems[previousIndex].image.src}
                  alt={sectorItems[previousIndex].image.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div
              key={`active-image-${activeSector.id}-${direction}-${previousIndex !== null ? "move" : "still"}`}
              className={`absolute inset-0 z-20 ${
                previousIndex !== null
                  ? `animate-in duration-500 ${direction === 1 ? "slide-in-from-right-10" : "slide-in-from-left-10"}`
                  : ""
              }`}
            >
              <Image
                src={activeSector.image.src}
                alt={activeSector.image.alt}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/55 to-transparent" />
            <figcaption className="absolute right-3 bottom-2 text-[10px] text-white/85 md:text-[11px]">
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

          <div className="space-y-3 md:space-y-4">
            <article
              key={`summary-${activeSector.id}-${direction}`}
              className={`bg-white p-4 md:p-5 ${
                previousIndex !== null
                  ? `animate-in duration-400 ${direction === 1 ? "slide-in-from-right-4" : "slide-in-from-left-4"}`
                  : ""
              }`}
            >
              <h3 className="text-brand text-lg leading-tight font-semibold md:text-2xl">
                {activeSector.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-6 md:mt-2.5 md:text-base md:leading-relaxed">
                {activeSector.summary}
              </p>
            </article>

            <aside
              key={`support-${activeSector.id}-${direction}`}
              className={`border-brand-accent/55 bg-brand-accent/12 border-l-4 p-4 md:p-5 ${
                previousIndex !== null
                  ? `animate-in duration-500 ${direction === 1 ? "slide-in-from-right-4" : "slide-in-from-left-4"}`
                  : ""
              }`}
            >
              <p className="text-brand/75 text-xs font-semibold tracking-[0.08em] uppercase md:text-sm">
                Typical Support
              </p>
              <ul className="mt-2 space-y-2 md:mt-3 md:space-y-2.5">
                {activeSector.highlights.slice(0, 2).map((highlight) => (
                  <li
                    key={highlight}
                    className="text-brand flex items-start gap-2.5 text-sm md:text-base"
                  >
                    <span className="bg-brand mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

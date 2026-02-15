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
  const mobilePillRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const resumeTimerRef = useRef<number | null>(null);

  const queueMobileResume = () => {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % sectorItems.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      return;
    }

    mobilePillRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/line.svg"
          alt=""
          width={2200}
          height={320}
          className="absolute top-1/2 left-1/2 min-w-225 -translate-x-1/2 -translate-y-1/2 opacity-80 md:w-[125vw]"
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-6">
        <div className="border-brand/10 relative rounded-3xl border bg-gray-100/30 p-4 shadow-sm backdrop-blur-md md:p-8">
          <div className="max-w-3xl rounded-xl">
            <p className="text-brand/70 text-xs font-semibold tracking-[0.12em] uppercase md:text-sm">
              Who We Work With
            </p>
            <h2 className="text-brand mt-2 text-lg font-bold tracking-tight md:text-4xl">
              Sector-Focused Water Hygiene & Plumbing Support
            </h2>
            <p className="text-muted-foreground mt-2.5 text-xs leading-6 md:mt-3 md:text-base md:leading-relaxed">
              We support commercial and multi-site organisations with practical delivery, clear
              reporting, and consistent compliance standards.
            </p>
          </div>

          <div className="mt-6 flex gap-2 overflow-x-auto pb-1 md:mt-8 md:flex-wrap md:overflow-visible">
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
                  onFocus={() => setIsPaused(true)}
                  onBlur={() => setIsPaused(false)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors duration-300 md:px-4 md:py-2 md:text-sm ${
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

          <div className="mt-5 grid gap-3 md:mt-8 md:grid-cols-[1.05fr_1fr] md:gap-6">
            <figure className="border-brand/15 relative h-44 overflow-hidden rounded-2xl border bg-slate-100 sm:h-52 md:h-88">
              {sectorItems.map((sector, index) => {
                const isActive = index === activeIndex;

                return (
                  <Image
                    key={sector.id}
                    src={sector.image.src}
                    alt={sector.image.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ${
                      isActive ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                    }`}
                  />
                );
              })}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/55 to-transparent md:h-28" />
              <figcaption className="absolute right-3 bottom-2.5 text-[10px] text-white/85 md:bottom-3 md:text-[11px]">
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
                key={activeSector.id}
                className="border-brand/15 rounded-2xl border bg-white/80 p-4 transition-all duration-300 md:p-6"
              >
                <h3 className="text-brand text-lg font-semibold md:text-2xl">
                  {activeSector.title}
                </h3>
                <p className="text-muted-foreground mt-2.5 text-xs leading-6 md:mt-3 md:text-base md:leading-relaxed">
                  {activeSector.summary}
                </p>
              </article>

              <aside className="border-brand/15 bg-brand/4 rounded-2xl border p-4 md:p-6">
                <p className="text-brand/70 text-xs font-semibold tracking-[0.08em] uppercase md:text-sm">
                  Typical Support
                </p>
                <ul className="mt-2.5 space-y-2 md:mt-3 md:space-y-2.5">
                  {activeSector.highlights.slice(0, 2).map((highlight) => (
                    <li
                      key={highlight}
                      className="text-brand flex items-start gap-2.5 text-xs md:text-base"
                    >
                      <span className="bg-brand mt-1 inline-block h-2 w-2 shrink-0 rounded-full" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

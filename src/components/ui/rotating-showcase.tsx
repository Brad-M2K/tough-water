"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type RotatingShowcaseItem = {
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

type RotatingShowcaseProps = {
  id: string;
  eyebrow: string;
  heading: string;
  description: string;
  supportHeading?: string;
  items: RotatingShowcaseItem[];
  highlightCount?: number;
};

const TRANSITION_MS = 520;
const AUTOPLAY_MS = 5500;
const MOBILE_RESUME_MS = 7000;
const TEXT_OUT_MS = 170;
const TEXT_HOLD_MS = 120;

export function RotatingShowcase({
  id,
  eyebrow,
  heading,
  description,
  supportHeading = "Typical Support",
  items,
  highlightCount = 2,
}: RotatingShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [slideReady, setSlideReady] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);
  const [textPhase, setTextPhase] = useState<"idle" | "out" | "in">("idle");

  const pillsContainerRef = useRef<HTMLDivElement | null>(null);
  const mobilePillRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const resumeTimerRef = useRef<number | null>(null);
  const transitionTimerRef = useRef<number | null>(null);
  const textOutTimerRef = useRef<number | null>(null);
  const textSwapTimerRef = useRef<number | null>(null);
  const textInTimerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const itemCount = items.length;
  const activeItem = items[activeIndex];
  const contentItem = items[contentIndex];

  const clearTransitionTimer = useCallback(() => {
    if (transitionTimerRef.current) {
      window.clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = null;
    }
  }, []);

  const clearRaf = useCallback(() => {
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const clearTextTimers = useCallback(() => {
    if (textOutTimerRef.current) {
      window.clearTimeout(textOutTimerRef.current);
      textOutTimerRef.current = null;
    }
    if (textSwapTimerRef.current) {
      window.clearTimeout(textSwapTimerRef.current);
      textSwapTimerRef.current = null;
    }
    if (textInTimerRef.current) {
      window.clearTimeout(textInTimerRef.current);
      textInTimerRef.current = null;
    }
  }, []);

  const queueTransitionEnd = useCallback(() => {
    clearTransitionTimer();
    transitionTimerRef.current = window.setTimeout(() => {
      setPreviousIndex(null);
      setSlideReady(false);
    }, TRANSITION_MS);
  }, [clearTransitionTimer]);

  const queueMobileResume = () => {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, MOBILE_RESUME_MS);
  };

  const startSlide = useCallback(
    (nextIndex: number, nextDirection: 1 | -1, currentIndex: number) => {
      if (nextIndex === currentIndex) {
        return;
      }

      setDirection(nextDirection);
      setPreviousIndex(currentIndex);
      setSlideReady(false);
      setActiveIndex(nextIndex);

      clearRaf();
      rafRef.current = window.requestAnimationFrame(() => {
        setSlideReady(true);
      });

      queueTransitionEnd();
    },
    [clearRaf, queueTransitionEnd]
  );

  useEffect(() => {
    if (itemCount <= 1 || isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % itemCount;
        setDirection(1);
        setPreviousIndex(current);
        setSlideReady(false);

        clearRaf();
        rafRef.current = window.requestAnimationFrame(() => {
          setSlideReady(true);
        });

        queueTransitionEnd();
        return next;
      });
    }, AUTOPLAY_MS);

    return () => window.clearInterval(intervalId);
  }, [clearRaf, isPaused, itemCount, queueTransitionEnd]);

  useEffect(() => {
    if (window.innerWidth >= 768 || itemCount <= 1) {
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
  }, [activeIndex, itemCount]);

  useEffect(() => {
    if (contentIndex === activeIndex) {
      return;
    }

    clearTextTimers();

    textOutTimerRef.current = window.setTimeout(() => {
      setTextPhase("out");
    }, 0);

    textSwapTimerRef.current = window.setTimeout(() => {
      setContentIndex(activeIndex);
      setTextPhase("in");

      textInTimerRef.current = window.setTimeout(() => {
        setTextPhase("idle");
      }, TEXT_HOLD_MS);
    }, TEXT_OUT_MS);
  }, [activeIndex, contentIndex, clearTextTimers]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
      clearTransitionTimer();
      clearRaf();
      clearTextTimers();
    };
  }, [clearRaf, clearTextTimers, clearTransitionTimer]);

  if (itemCount === 0) {
    return null;
  }

  const textFadeClass = `transition-opacity duration-200 ease-out ${
    textPhase === "idle" ? "opacity-100" : "opacity-0"
  }`;

  return (
    <section id={id} className="bg-stone-50 py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="border-brand/25 bg-brand/25 mb-4 h-1 w-20 rounded-full md:mb-5" />

        <p className="text-brand/70 text-xs font-semibold tracking-[0.12em] uppercase md:text-sm">
          {eyebrow}
        </p>
        <h2 className="text-brand mt-2 text-2xl leading-tight font-bold md:text-5xl">{heading}</h2>
        <p className="text-muted-foreground mt-2 max-w-3xl text-sm leading-6 md:mt-3 md:text-base md:leading-relaxed">
          {description}
        </p>

        <div
          ref={pillsContainerRef}
          className="mt-4 flex gap-2 overflow-x-auto pb-1 md:mt-6 md:flex-wrap"
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.id}
                type="button"
                ref={(el) => {
                  mobilePillRefs.current[index] = el;
                }}
                onClick={() => {
                  startSlide(index, index > activeIndex ? 1 : -1, activeIndex);
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
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-5 grid gap-4 md:mt-7 md:grid-cols-[1.05fr_1fr] md:gap-7">
          <figure className="relative isolate h-52 overflow-hidden rounded-2xl md:h-84">
            {previousIndex !== null && (
              <div
                className={`absolute inset-0 z-20 [transform:translateZ(0)] transition-transform duration-700 ease-out will-change-transform [backface-visibility:hidden] ${
                  slideReady
                    ? direction === 1
                      ? "-translate-x-full"
                      : "translate-x-full"
                    : "translate-x-0"
                }`}
              >
                <Image
                  src={items[previousIndex].image.src}
                  alt={items[previousIndex].image.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div
              className={`absolute inset-0 z-10 [transform:translateZ(0)] transition-transform duration-700 ease-out will-change-transform [backface-visibility:hidden] ${
                previousIndex === null
                  ? "translate-x-0"
                  : slideReady
                    ? "translate-x-0"
                    : direction === 1
                      ? "translate-x-full"
                      : "-translate-x-full"
              }`}
            >
              <Image
                src={activeItem.image.src}
                alt={activeItem.image.alt}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/55 to-transparent" />
            <figcaption className="absolute right-3 bottom-2 text-[10px] text-white/85 md:text-[11px]">
              Photo:{" "}
              <a
                href={activeItem.image.creditUrl}
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto underline underline-offset-2"
              >
                {activeItem.image.creditName}
              </a>
            </figcaption>
          </figure>

          <div className="space-y-3 md:space-y-4">
            <div className="overflow-hidden bg-white">
              <article className="p-4 md:p-5">
                <h3
                  className={`text-brand text-lg leading-tight font-semibold md:text-2xl ${textFadeClass}`}
                >
                  {contentItem.title}
                </h3>
                <p
                  className={`text-muted-foreground mt-2 text-sm leading-6 md:mt-2.5 md:text-base md:leading-relaxed ${textFadeClass}`}
                >
                  {contentItem.summary}
                </p>
              </article>
            </div>

            <div className="border-brand-accent/55 bg-brand-accent/12 overflow-hidden border-l-4">
              <aside className="p-4 md:p-5">
                <p
                  className={`text-brand/75 text-xs font-semibold tracking-[0.08em] uppercase md:text-sm ${textFadeClass}`}
                >
                  {supportHeading}
                </p>
                <ul className="mt-2 space-y-2 md:mt-3 md:space-y-2.5">
                  {contentItem.highlights.slice(0, highlightCount).map((highlight) => (
                    <li
                      key={highlight}
                      className={`text-brand flex items-start gap-2.5 text-sm transition-opacity duration-200 ease-out md:text-base ${
                        textPhase === "idle" ? "opacity-100" : "opacity-0"
                      }`}
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
      </div>
    </section>
  );
}

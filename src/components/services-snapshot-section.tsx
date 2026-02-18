"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type SnapshotCard = {
  title: string;
  description: string;
  cover: string;
  detail: string;
};

const cards: SnapshotCard[] = [
  {
    title: "Legionella Risk Control & Monitoring",
    description: "Risk assessments, routine monitoring, and control scheme delivery.",
    detail:
      "Sampling, temperature checks, and reporting built around ACOP L8/HSG274 responsibilities.",
    cover:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Commercial Plumbing Works",
    description: "Planned plumbing works, upgrades, and multi-site maintenance support.",
    detail:
      "From TMV replacements to pipework upgrades, delivered with minimal disruption and clear scheduling.",
    cover:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tank Cleaning & Remedial Works",
    description: "Tank cleans, disinfection, and corrective works following risk findings.",
    detail:
      "Documented remedial actions with post-work verification to support audit-ready compliance records.",
    cover:
      "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=1200&q=80",
  },
];

export function ServicesSnapshotSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isDesktop = () =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;

  return (
    <section id="services" className="bg-brand/3 py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="border-brand/25 bg-brand/25 mb-4 h-1 w-20 rounded-full md:mb-5" />
        <p className="text-brand/70 text-xs font-semibold tracking-[0.12em] uppercase md:text-sm">
          Services Snapshot
        </p>
        <h2 className="text-brand mt-2 max-w-3xl text-2xl leading-tight font-bold md:text-4xl">
          Compliance-led plumbing and water hygiene support
        </h2>
        <p className="text-muted-foreground mt-2 max-w-3xl text-sm leading-6 md:mt-3 md:text-base md:leading-relaxed">
          Three core service areas. Tap to expand detail.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={card.title}
                className="border-brand/12 relative h-56 overflow-hidden rounded-2xl border bg-stone-100 md:h-68"
                onMouseEnter={() => {
                  if (isDesktop()) {
                    setOpenIndex(index);
                  }
                }}
                onMouseLeave={() => {
                  if (isDesktop()) {
                    setOpenIndex(null);
                  }
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${card.cover}")` }}
                />
                <div className="absolute inset-0 bg-black/20" />

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="relative z-10 block h-full w-full cursor-pointer text-left"
                >
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-white/80 p-4 backdrop-blur-sm transition-transform duration-400 ease-out ${
                      isOpen ? "translate-y-0" : "translate-y-[64%]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`border-brand/30 text-brand absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full border bg-blue-800/30 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                    <h3 className="text-brand pr-10 text-base leading-snug font-semibold">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-black">{card.description}</p>
                    <p
                      className={`mt-2 text-sm leading-relaxed text-black transition-opacity duration-250 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {card.detail}
                    </p>
                  </div>
                </button>
              </article>
            );
          })}
        </div>

        <div className="mt-6 md:mt-8">
          <Link
            href="/#contact"
            className="bg-brand text-brand-foreground inline-flex rounded-md px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            More in Services
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import clients from "@/lib/trusted-clients.json";

type TrustedClient = {
  name: string;
  type: string;
};

const trustedClients = clients as TrustedClient[];

export function TrustedBySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry && entry.intersectionRatio >= 0.78) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: [0.5, 0.78, 0.95],
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="trusted-by" ref={sectionRef} className="bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="border-brand/25 bg-brand/25 mb-4 h-1 w-20 rounded-full md:mb-5" />

        <p className="text-brand/70 text-xs font-semibold tracking-[0.12em] uppercase md:text-sm">
          Selected Clients & Sites
        </p>
        <h2 className="text-brand mt-2 text-2xl leading-tight font-bold md:text-4xl">
          Trusted by teams responsible for critical buildings
        </h2>
        <p className="text-muted-foreground mt-2 max-w-3xl text-sm leading-6 md:mt-3 md:text-base md:leading-relaxed">
          Ongoing support for compliance-led estates where consistency, reporting clarity, and
          reliable delivery matter.
        </p>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {trustedClients.map((client, index) => (
            <article
              key={client.name}
              className={`border-brand/15 shrink-0 rounded-full border bg-stone-50 px-3 py-2 transition-[opacity,transform,filter] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible
                  ? "blur-0 translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0 blur-[1px]"
              }`}
              style={{ transitionDelay: `${120 + index * 50}ms` }}
            >
              <h3 className="text-brand text-xs font-semibold whitespace-nowrap">{client.name}</h3>
            </article>
          ))}
        </div>

        <div className="mt-6 hidden gap-3 sm:grid-cols-2 md:grid lg:grid-cols-3">
          {trustedClients.map((client, index) => (
            <article
              key={client.name}
              className={`border-brand/12 rounded-2xl border bg-stone-50 p-4 transition-[opacity,transform,filter] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible
                  ? "blur-0 translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0 blur-[1px]"
              }`}
              style={{ transitionDelay: `${120 + index * 70}ms` }}
            >
              <h3 className="text-brand text-base leading-snug font-semibold lg:text-lg">
                {client.name}
              </h3>
              <p className="text-muted-foreground mt-1.5 text-sm">{client.type}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 md:mt-7 md:gap-3">
          <div
            className={`border-brand-accent/35 bg-brand-accent/12 rounded-xl border p-2.5 text-center transition-[opacity,transform,filter] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] md:p-3.5 ${
              isVisible
                ? "blur-0 translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0 blur-[1px]"
            }`}
            style={{ transitionDelay: "380ms" }}
          >
            <p className="text-brand text-lg font-bold md:text-2xl">2007</p>
            <p className="text-muted-foreground text-xs md:text-sm">Established</p>
          </div>
          <div
            className={`border-brand-accent/35 bg-brand-accent/12 rounded-xl border p-2.5 text-center transition-[opacity,transform,filter] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] md:p-3.5 ${
              isVisible
                ? "blur-0 translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0 blur-[1px]"
            }`}
            style={{ transitionDelay: "460ms" }}
          >
            <p className="text-brand text-lg font-bold md:text-2xl">UK-wide</p>
            <p className="text-muted-foreground text-xs md:text-sm">Coverage</p>
          </div>
          <div
            className={`border-brand-accent/35 bg-brand-accent/12 rounded-xl border p-2.5 text-center transition-[opacity,transform,filter] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] md:p-3.5 ${
              isVisible
                ? "blur-0 translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0 blur-[1px]"
            }`}
            style={{ transitionDelay: "540ms" }}
          >
            <p className="text-brand text-lg font-bold md:text-2xl">ACOP L8</p>
            <p className="text-muted-foreground text-xs md:text-sm">Compliant</p>
          </div>
        </div>
      </div>
    </section>
  );
}

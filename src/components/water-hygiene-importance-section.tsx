import { AlertTriangle, ClipboardCheck, ShieldAlert, Wrench } from "lucide-react";

import { WaveButton } from "@/components/ui/wave-button";

const pillars = [
  {
    title: "Protect People",
    body: "Unmanaged water systems can increase risk from bacteria and poor water quality. Routine control measures reduce that exposure.",
    icon: ShieldAlert,
  },
  {
    title: "Meet Compliance Duties",
    body: "Commercial duty holders are expected to follow ACOP L8 and HSG274 guidance with clear records and accountable actions.",
    icon: ClipboardCheck,
  },
  {
    title: "Reduce Operational Disruption",
    body: "Planned upkeep prevents avoidable failures, emergency callouts, and unexpected downtime across occupied sites.",
    icon: AlertTriangle,
  },
  {
    title: "Keep Systems Performing",
    body: "Regular maintenance, tank cleaning, and remedial works improve reliability and help avoid asset deterioration.",
    icon: Wrench,
  },
];

export function WaterHygieneImportanceSection() {
  return (
    <section id="why-water-hygiene" className="bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="border-brand/25 bg-brand/25 mb-4 h-1 w-20 rounded-full md:mb-5" />
        <p className="text-brand/70 text-xs font-semibold tracking-[0.12em] uppercase md:text-sm">
          Why It Matters
        </p>
        <h2 className="text-brand mt-2 max-w-3xl text-2xl leading-tight font-bold md:text-4xl">
          Water hygiene and system upkeep are business-critical, not box-ticking
        </h2>
        <p className="text-muted-foreground mt-2 max-w-3xl text-sm leading-6 md:mt-3 md:text-base md:leading-relaxed">
          Effective programmes combine monitoring, planned maintenance, and documented remedial
          action so operators can manage risk with confidence.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <article className="border-brand/12 relative h-52 overflow-hidden rounded-2xl border bg-stone-100">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/35 to-transparent" />
            <div className="relative z-10 max-w-xl p-4 md:p-5">
              <p className="text-xs font-semibold tracking-[0.08em] text-white/90 uppercase">
                Legionella Risk Context
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/95 md:text-base">
                Water systems in large buildings need structured oversight, not occasional checks.
              </p>
            </div>
          </article>

          <article className="border-brand/12 relative h-52 overflow-hidden rounded-2xl border bg-stone-100">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/35 to-transparent" />
            <div className="relative z-10 max-w-xl p-4 md:p-5">
              <p className="text-xs font-semibold tracking-[0.08em] text-white/90 uppercase">
                Planned Upkeep
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/95 md:text-base">
                Planned interventions help protect occupants while keeping operations running.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="border-brand/12 rounded-2xl border bg-stone-50 p-4"
              >
                <div className="flex items-start gap-2.5">
                  <div className="bg-brand/10 text-brand rounded-lg p-2">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="text-brand text-base font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="border-brand/15 bg-brand/6 mt-6 rounded-2xl border p-4 md:mt-8 md:p-5">
          <p className="text-brand text-base font-semibold md:text-lg">
            Good water hygiene is an ongoing programme across the estate, not a one-off task.
          </p>
          <div className="mt-3">
            <WaveButton href="/#contact" className="px-5 py-2.5 text-sm">
              Talk to Us About Your Site
            </WaveButton>
          </div>
        </div>
      </div>
    </section>
  );
}

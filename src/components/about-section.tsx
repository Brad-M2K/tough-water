import { Building2, ClipboardCheck, UserCog } from "lucide-react";

const workingStyle = [
  {
    title: "Who You Work With",
    copy: "A small senior team, led by the director and engineers who stay close to delivery.",
    icon: UserCog,
  },
  {
    title: "How Jobs Run",
    copy: "Clear scopes, practical scheduling, and direct communication from first survey to sign-off.",
    icon: ClipboardCheck,
  },
  {
    title: "What Clients Get",
    copy: "Consistent delivery across sites without the slow handoffs and noise of larger chains.",
    icon: Building2,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="border-brand/25 bg-brand/25 mb-4 h-1 w-20 rounded-full md:mb-5" />
        <p className="text-brand/70 text-xs font-semibold tracking-[0.12em] uppercase md:text-sm">
          About Tough Water
        </p>

        <div className="mt-3 grid items-start gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <h2 className="text-brand text-2xl leading-tight font-bold md:text-4xl">
              Built as a hands-on commercial contractor, not a call-centre operation
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-6 md:text-base md:leading-relaxed">
              Tough Water was founded in 2007 with a straightforward model: experienced people,
              practical delivery, and accountability on every job. The business stays intentionally
              lean so decisions are fast and clients get direct answers from people who understand
              the site reality.
            </p>
          </div>

          <div className="border-brand/12 rounded-2xl border bg-stone-50 p-4 md:p-5">
            <p className="text-brand text-sm font-semibold tracking-[0.08em] uppercase">
              Working Style
            </p>
            <div className="mt-3 space-y-3">
              {workingStyle.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="border-brand/12 rounded-xl border bg-white p-3.5"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="bg-brand/10 text-brand rounded-lg p-1.5">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h3 className="text-brand text-sm font-semibold md:text-base">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                          {item.copy}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div
          id="coverage"
          className="border-brand/15 bg-brand/6 mt-6 rounded-2xl border p-4 md:mt-8 md:p-5"
        >
          <p className="text-brand text-sm font-semibold tracking-[0.08em] uppercase">Coverage</p>
          <p className="text-brand mt-1 text-base font-semibold md:text-xl">
            Yorkshire base, supporting commercial clients across the full UK.
          </p>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            Coverage planning is agreed upfront so stakeholders know exactly who is attending, when,
            and for what scope.
          </p>
        </div>
      </div>
    </section>
  );
}

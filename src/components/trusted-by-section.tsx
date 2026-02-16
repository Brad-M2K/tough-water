import clients from "@/lib/trusted-clients.json";

type TrustedClient = {
  name: string;
  type: string;
};

const trustedClients = clients as TrustedClient[];

export function TrustedBySection() {
  return (
    <section id="trusted-by" className="scroll-mt-24 py-9 md:py-12">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="md:hidden">
          <div className="space-y-3">
            <div className="border-brand/12 rounded-2xl border bg-white p-4 shadow-sm">
              <p className="text-brand/70 text-xs font-semibold tracking-[0.12em] uppercase">
                Selected Clients & Sites
              </p>
              <h2 className="text-brand mt-1.5 text-xl leading-tight font-bold">
                Trusted by teams managing critical buildings
              </h2>
              <p className="text-muted-foreground mt-1.5 text-sm leading-6">
                Proven support for high-responsibility estates and compliance programmes.
              </p>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {trustedClients.map((client) => (
                <article
                  key={client.name}
                  className="border-brand/12 bg-brand/4 shrink-0 rounded-full border px-3 py-2"
                >
                  <h3 className="text-brand text-xs font-semibold whitespace-nowrap">
                    {client.name}
                  </h3>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="border-brand/12 rounded-xl border bg-white p-2.5 text-center">
                <p className="text-brand text-lg font-bold">2007</p>
                <p className="text-muted-foreground text-xs">Established</p>
              </div>
              <div className="border-brand/12 rounded-xl border bg-white p-2.5 text-center">
                <p className="text-brand text-lg font-bold">UK-wide</p>
                <p className="text-muted-foreground text-xs">Coverage</p>
              </div>
              <div className="border-brand/12 rounded-xl border bg-white p-2.5 text-center">
                <p className="text-brand text-lg font-bold">ACOP L8</p>
                <p className="text-muted-foreground text-xs">Compliant</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="border-brand/12 rounded-3xl border bg-white p-6 shadow-sm lg:p-8">
            <div className="max-w-3xl">
              <p className="text-brand/70 text-sm font-semibold tracking-[0.12em] uppercase">
                Selected Clients & Sites
              </p>
              <h2 className="text-brand mt-2 text-3xl font-bold tracking-tight">
                Trusted by teams responsible for critical buildings
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed lg:text-base">
                We support high-responsibility environments where water hygiene and planned plumbing
                compliance must be delivered consistently, clearly, and with minimal disruption.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {trustedClients.map((client) => (
                <article
                  key={client.name}
                  className="border-brand/12 bg-brand/4 rounded-2xl border p-4"
                >
                  <h3 className="text-brand text-base leading-snug font-semibold lg:text-lg">
                    {client.name}
                  </h3>
                  <p className="text-muted-foreground mt-1.5 text-sm">{client.type}</p>
                </article>
              ))}
            </div>

            <div className="border-brand/12 mt-6 grid gap-3 border-t pt-5 md:grid-cols-3">
              <div className="border-brand/10 rounded-xl border bg-white p-3.5">
                <p className="text-brand text-2xl font-bold">2007</p>
                <p className="text-muted-foreground text-sm">
                  Established and operating continuously
                </p>
              </div>
              <div className="border-brand/10 rounded-xl border bg-white p-3.5">
                <p className="text-brand text-2xl font-bold">UK-wide</p>
                <p className="text-muted-foreground text-sm">
                  Support across Yorkshire and nationwide sites
                </p>
              </div>
              <div className="border-brand/10 rounded-xl border bg-white p-3.5">
                <p className="text-brand text-2xl font-bold">ACOP L8</p>
                <p className="text-muted-foreground text-sm">
                  Compliance-led delivery and reporting standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

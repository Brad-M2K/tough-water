import clients from "@/lib/trusted-clients.json";

type TrustedClient = {
  name: string;
  type: string;
};

const trustedClients = clients as TrustedClient[];

export function TrustedBySection() {
  return (
    <section id="trusted-by" className="py-9 md:py-12">
      <div className="mx-auto w-full max-w-6xl rounded-xl border-l-6 border-blue-900/60 px-5 md:px-6">
        <div className="border-brand/12 rounded-3xl border bg-white p-4 shadow-sm md:p-6">
          <div className="max-w-3xl">
            <p className="text-brand/70 text-xs font-semibold tracking-[0.12em] uppercase md:text-sm">
              Selected Clients & Sites
            </p>
            <h2 className="text-brand mt-2 text-lg font-bold tracking-tight md:text-3xl">
              Trusted by teams responsible for critical buildings
            </h2>
            <p className="text-muted-foreground mt-2.5 text-xs leading-6 md:text-sm md:leading-relaxed">
              We support high-responsibility environments where water hygiene and planned plumbing
              compliance must be delivered consistently, clearly, and with minimal disruption.
            </p>
          </div>

          <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {trustedClients.map((client) => (
              <article
                key={client.name}
                className="border-brand/12 bg-brand/4 rounded-2xl border p-3.5"
              >
                <h3 className="text-brand text-sm leading-snug font-semibold md:text-base">
                  {client.name}
                </h3>
                <p className="text-muted-foreground mt-1 text-xs md:text-sm">{client.type}</p>
              </article>
            ))}
          </div>

          <div className="border-brand/12 mt-5 grid gap-2.5 border-t pt-4 md:grid-cols-3">
            <div className="rounded-xl bg-white p-2.5">
              <p className="text-brand text-xl font-bold">2007</p>
              <p className="text-muted-foreground text-xs md:text-sm">
                Established and operating continuously
              </p>
            </div>
            <div className="rounded-xl bg-white p-2.5">
              <p className="text-brand text-xl font-bold">UK-wide</p>
              <p className="text-muted-foreground text-xs md:text-sm">
                Support across Yorkshire and nationwide sites
              </p>
            </div>
            <div className="rounded-xl bg-white p-2.5">
              <p className="text-brand text-xl font-bold">ACOP L8</p>
              <p className="text-muted-foreground text-xs md:text-sm">
                Compliance-led delivery and reporting standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const serviceLinks = [
  {
    href: "#services",
    title: "Emergency Plumbing",
    description: "24/7 response for leaks, bursts, and no-water incidents.",
  },
  {
    href: "#services",
    title: "Planned Maintenance",
    description: "Routine checks for commercial and multi-site properties.",
  },
  {
    href: "#services",
    title: "Installations & Upgrades",
    description: "Pipework, valves, boosters, and system modernisation.",
  },
];

const complianceLinks = [
  {
    href: "#hygiene",
    title: "Legionella Risk Control",
    description: "Monitoring, sampling, and control-scheme execution.",
  },
  {
    href: "#hygiene",
    title: "Water Hygiene Remediation",
    description: "Tank cleaning, disinfection, and corrective works.",
  },
  {
    href: "#hygiene",
    title: "Compliance Documentation",
    description: "Audit-ready records and clear reporting for stakeholders.",
  },
];

export default function Home() {
  return (
    <div className="from-background via-background to-muted/30 min-h-screen bg-linear-to-b">
      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 py-10">
        <section className="grid gap-10 py-8 md:grid-cols-[1.4fr_1fr] md:items-start md:py-12">
          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#36467F] md:text-6xl">
              Clean Water. Safe Systems. Full Compliance.
            </h1>
            <p className="text-2xl font-medium text-[#36467F]">
              Professional Water Hygiene Services
            </p>
            <p className="text-muted-foreground max-w-3xl text-2xl leading-relaxed">
              Professional legionella risk assessments, monitoring, and remedial works for
              commercial and residential properties across the UK.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 md:p-10">
            <h2 className="text-4xl font-semibold tracking-tight text-[#36467F]">Our Services</h2>
            <p className="mt-4 text-2xl font-medium text-[#36467F]">
              End-to-end support for safer, compliant water systems.
            </p>
            <p className="text-muted-foreground mt-5 text-xl leading-relaxed">
              Trusted by facilities teams and property managers for practical compliance delivery
              and long-term system reliability.
            </p>
          </div>
        </section>

        <section id="services" className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-[#36467F]">
            Plumbing Services
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {serviceLinks.map((item) => (
              <article key={item.title} className="bg-card rounded-xl border p-5">
                <h3 className="font-semibold text-[#36467F]">{item.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="hygiene" className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-[#36467F]">
            Water Hygiene & Compliance
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {complianceLinks.map((item) => (
              <article key={item.title} className="bg-card rounded-xl border p-5">
                <h3 className="font-semibold text-[#36467F]">{item.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-card mt-14 rounded-2xl border p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#36467F]">
            About Tough Water
          </h2>
          <p className="text-muted-foreground mt-3 max-w-3xl">
            This starter is now structured for a real service business website with dedicated
            service, compliance, and conversion sections. You can plug in CMS data, form handling,
            auth, and backend routes as needed without changing the core layout model.
          </p>
        </section>

        <section id="coverage" className="bg-card mt-14 rounded-2xl border p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#36467F]">Coverage</h2>
          <p className="text-muted-foreground mt-3">
            Add your operating regions, SLA windows, and out-of-hours escalation policy here.
          </p>
        </section>

        <section id="contact" className="bg-card mt-14 rounded-2xl border p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="text-muted-foreground mt-3">
            Add your preferred lead capture flow (email, form endpoint, CRM integration, or phone).
          </p>
        </section>
      </main>
    </div>
  );
}

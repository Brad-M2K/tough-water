import { HeroSection } from "@/components/hero-section";
import { complianceLinks, serviceLinks } from "@/lib/site-content";

export default function Home() {
  return (
    <div className="from-background via-background to-muted/30 min-h-screen bg-linear-to-b">
      <HeroSection />

      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-10">
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

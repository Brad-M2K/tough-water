import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

const serviceOptions = [
  "Emergency Plumbing",
  "Planned Maintenance",
  "Installations & Upgrades",
  "Legionella Risk Control",
  "Water Hygiene Remediation",
  "Compliance Documentation",
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="border-brand/25 bg-brand/25 mb-4 h-1 w-20 rounded-full md:mb-5" />
        <p className="text-brand/70 text-xs font-semibold tracking-[0.12em] uppercase md:text-sm">
          Contact
        </p>
        <h2 className="text-brand mt-2 max-w-3xl text-2xl leading-tight font-bold md:text-4xl">
          Start a compliance-first conversation
        </h2>
        <p className="text-muted-foreground mt-2 max-w-3xl text-sm leading-6 md:mt-3 md:text-base md:leading-relaxed">
          Tell us what site support you need and we&apos;ll come back with a practical next step.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <aside className="self-start">
            <div className="border-brand/12 overflow-hidden rounded-b-2xl border-x border-b">
              <div aria-hidden="true" className="leading-none">
                <Image
                  src="/contact-wave-mobile.svg"
                  alt=""
                  width={1200}
                  height={170}
                  className="relative left-1/2 block h-auto w-[102%] max-w-none -translate-x-1/2 md:hidden"
                />
                <Image
                  src="/contact-wave.svg"
                  alt=""
                  width={4245}
                  height={75}
                  className="hidden h-auto w-full md:block"
                />
              </div>
              <div className="bg-brand p-5 text-white md:p-6">
                <h3 className="text-xl font-semibold md:text-2xl">Get in Touch</h3>
                <p className="mt-2 text-sm text-white/90 md:text-base">
                  Typical response within one working day for new enquiries.
                </p>

                <div className="mt-5 flex flex-col gap-2.5 text-sm md:gap-3 md:text-base">
                  <Link
                    href="tel:01130000000"
                    className="inline-flex w-fit items-center gap-2 text-white/95 transition-opacity hover:opacity-85"
                  >
                    <Phone className="h-4 w-4" />
                    0113 000 0000
                  </Link>
                  <Link
                    href="mailto:enquiries@toughwater.co.uk"
                    className="inline-flex w-fit items-center gap-2 text-white/95 transition-opacity hover:opacity-85"
                  >
                    <Mail className="h-4 w-4" />
                    enquiries@toughwater.co.uk
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          <form className="p-1 md:p-1">
            <div className="grid gap-3 md:grid-cols-2">
              <label className="text-sm">
                <span className="text-brand mb-1.5 block font-medium">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="border-brand/35 focus:border-brand h-10 w-full border-0 border-b-2 bg-transparent px-0 text-sm outline-none"
                />
              </label>

              <label className="text-sm">
                <span className="text-brand mb-1.5 block font-medium">Company</span>
                <input
                  type="text"
                  name="company"
                  className="border-brand/35 focus:border-brand h-10 w-full border-0 border-b-2 bg-transparent px-0 text-sm outline-none"
                />
              </label>

              <label className="text-sm">
                <span className="text-brand mb-1.5 block font-medium">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="border-brand/35 focus:border-brand h-10 w-full border-0 border-b-2 bg-transparent px-0 text-sm outline-none"
                />
              </label>

              <label className="text-sm">
                <span className="text-brand mb-1.5 block font-medium">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  className="border-brand/35 focus:border-brand h-10 w-full border-0 border-b-2 bg-transparent px-0 text-sm outline-none"
                />
              </label>
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <label className="text-sm">
                <span className="text-brand mb-1.5 block font-medium">Service Needed</span>
                <select
                  name="service"
                  className="border-brand/35 focus:border-brand h-10 w-full border-0 border-b-2 bg-transparent px-0 text-sm outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm">
                <span className="text-brand mb-1.5 block font-medium">Site Location</span>
                <input
                  type="text"
                  name="location"
                  placeholder="City or postcode"
                  className="border-brand/35 focus:border-brand h-10 w-full border-0 border-b-2 bg-transparent px-0 text-sm outline-none"
                />
              </label>
            </div>

            <label className="mt-3 block text-sm">
              <span className="text-brand mb-1.5 block font-medium">Brief Project Details</span>
              <textarea
                name="message"
                rows={4}
                required
                className="border-brand/35 focus:border-brand w-full border-0 border-b-2 bg-transparent px-0 py-2 text-sm outline-none"
              />
            </label>

            <button
              type="submit"
              className="bg-brand text-brand-foreground mt-4 inline-flex h-10 items-center justify-center rounded-md px-5 text-sm font-semibold transition-opacity hover:opacity-90"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

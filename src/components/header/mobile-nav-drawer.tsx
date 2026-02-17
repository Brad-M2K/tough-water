import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { WaveButton } from "@/components/ui/wave-button";
import { complianceLinks, primaryLinks, serviceLinks } from "@/lib/site-content";

type MobileNavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  return (
    <>
      {/* Mobile slide-out drawer navigation */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          type="button"
          aria-label="Close mobile menu"
          onClick={onClose}
          className={`absolute inset-0 transition-opacity duration-300 ${
            isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
        <aside
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          className={`absolute top-0 right-0 h-dvh w-[85vw] max-w-sm overflow-y-auto bg-white px-6 pt-24 pb-8 shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            aria-hidden="true"
            className="from-brand/18 pointer-events-none absolute inset-y-0 left-0 w-4 bg-linear-to-r to-transparent"
          />
          <nav className="mx-auto flex w-full flex-col gap-8">
            <Link href="/" className="flex justify-start" onClick={onClose}>
              <Image
                src="/tws-logo-wordmark.png"
                alt="Tough Water"
                width={240}
                height={52}
                className="h-9 w-auto"
              />
            </Link>

            <section>
              <h2 className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                Plumbing Services
              </h2>
              <ul className="mt-3 space-y-3">
                {serviceLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="block text-base font-medium"
                      onClick={onClose}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                Water Hygiene
              </h2>
              <ul className="mt-3 space-y-3">
                {complianceLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="block text-base font-medium"
                      onClick={onClose}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <ul className="space-y-3">
                {primaryLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block text-base font-medium"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <div className="border-brand/20 mt-2 border-t pt-6">
              <div className="flex items-center justify-center gap-4">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="bg-brand text-brand-foreground inline-flex h-10 w-10 items-center justify-center rounded-sm transition-opacity hover:opacity-90"
                  onClick={onClose}
                >
                  <FaFacebookF className="size-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="bg-brand text-brand-foreground inline-flex h-10 w-10 items-center justify-center rounded-sm transition-opacity hover:opacity-90"
                  onClick={onClose}
                >
                  <FaLinkedinIn className="size-5" />
                </Link>
              </div>
              <WaveButton
                href="/#contact"
                className="mt-4 flex w-full justify-center px-4 py-2.5 text-sm"
                onClick={onClose}
              >
                Get in Touch
              </WaveButton>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}

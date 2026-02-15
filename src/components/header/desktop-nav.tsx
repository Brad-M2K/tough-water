import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { WaveButton } from "@/components/ui/wave-button";
import { complianceLinks, primaryLinks, serviceLinks } from "@/lib/site-content";

const dropdownTriggerClass =
  "bg-transparent font-bold text-brand hover:bg-transparent hover:text-brand focus:bg-transparent focus:text-brand data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:text-brand";

export function DesktopNav() {
  return (
    <>
      {/* Desktop navigation (visible on lg+) */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={dropdownTriggerClass}>
              Plumbing Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-105 gap-2 md:grid-cols-1">
                {serviceLinks.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href} className="rounded-md p-3">
                        <div className="text-brand text-sm font-medium">{item.title}</div>
                        <p className="text-muted-foreground mt-1 text-sm leading-snug">
                          {item.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className={dropdownTriggerClass}>
              Water Hygiene
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-105 gap-2 md:grid-cols-1">
                {complianceLinks.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href} className="rounded-md p-3">
                        <div className="text-brand text-sm font-medium">{item.title}</div>
                        <p className="text-muted-foreground mt-1 text-sm leading-snug">
                          {item.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {primaryLinks.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink asChild>
                <Link href={item.href} className="text-brand font-semibold">
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden items-center gap-4 lg:flex">
        <div className="bg-brand/30 h-10 w-px" />
        <Link
          href="#"
          aria-label="Facebook"
          className="bg-brand text-brand-foreground inline-flex h-7 w-7 items-center justify-center rounded-sm transition-opacity hover:opacity-90"
        >
          <FaFacebookF className="size-4" />
        </Link>
        <Link
          href="#"
          aria-label="LinkedIn"
          className="bg-brand text-brand-foreground inline-flex h-7 w-7 items-center justify-center rounded-sm transition-opacity hover:opacity-90"
        >
          <FaLinkedinIn className="size-4" />
        </Link>
        <WaveButton href="/#contact" className="px-4 py-1 text-lg">
          Get in Touch
        </WaveButton>
      </div>
    </>
  );
}

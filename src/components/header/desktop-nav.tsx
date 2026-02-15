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
  "bg-transparent font-bold text-[#36467F] hover:bg-transparent hover:text-[#36467F] focus:bg-transparent focus:text-[#36467F] data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:text-[#36467F]";

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
                        <div className="text-sm font-medium text-[#36467F]">{item.title}</div>
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
                        <div className="text-sm font-medium text-[#36467F]">{item.title}</div>
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
                <Link href={item.href} className="font-semibold text-[#36467F]">
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden items-center gap-4 lg:flex">
        <div className="h-10 w-px bg-[#36467F]/30" />
        <Link
          href="#"
          aria-label="Facebook"
          className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-[#36467F] text-white transition-opacity hover:opacity-90"
        >
          <FaFacebookF className="size-4" />
        </Link>
        <Link
          href="#"
          aria-label="LinkedIn"
          className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-[#36467F] text-white transition-opacity hover:opacity-90"
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

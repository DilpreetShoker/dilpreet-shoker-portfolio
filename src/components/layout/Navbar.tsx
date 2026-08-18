"use client";

import {
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuPath, setMobileMenuPath] =
    useState<string | null>(null);
  const isOpen = mobileMenuPath === pathname;
  const closeMenu = () => setMobileMenuPath(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex h-[var(--navbar-height)] items-center justify-between"
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            Dilpreet.
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href={profile.cvPath}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-surface-hover"
            >
              CV
            </a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setMobileMenuPath((current) =>
                current === pathname ? null : pathname,
              )
            }
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary/50 md:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </Container>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background md:hidden"
        >
          <Container>
            <div className="flex flex-col py-4">
              {navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "border-b border-border py-4 text-base font-medium transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <a
                href={profile.cvPath}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center rounded-md border border-primary/40 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                View CV
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
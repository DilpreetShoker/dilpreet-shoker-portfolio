import Link from "next/link";

import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { layout } from "@/theme/layout";
import { spacing } from "@/theme/spacing";
import { cn } from "@/lib/utils";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 h-[var(--navbar-height)] border-b border-border bg-background/80 backdrop-blur-md">
            <nav
                aria-label="Main navigation"
                className={cn(
                    "mx-auto flex h-full w-full items-center justify-between",
                    layout.contentMax,
                    spacing.pageX,
                )}
            >
                <Link
                    href="/"
                    className="text-lg font-semibold tracking-tight text-foreground"
                >
                    {profile.name}
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <a
                        href={profile.cvPath}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
                    >
                        View CV
                    </a>
                </div>
            </nav>
        </header>
    );
}
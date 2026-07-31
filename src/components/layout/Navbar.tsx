import Link from "next/link";

import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
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
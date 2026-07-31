import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";

export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
                <p>
                    © {new Date().getFullYear()} {profile.name}. All rights reserved.
                </p>

                <div className="flex flex-wrap items-center gap-5">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                            className="transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
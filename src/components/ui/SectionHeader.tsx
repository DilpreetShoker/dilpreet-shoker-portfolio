import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}

export default function SectionHeader({
                                          eyebrow,
                                          title,
                                          description,
                                          align = "left",
                                          className,
                                      }: SectionHeaderProps) {
    return (
        <header
            className={cn(
                "max-w-3xl",
                align === "center" && "mx-auto text-center",
                className,
            )}
        >
            {eyebrow && (
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {eyebrow}
                </p>
            )}

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                    {description}
                </p>
            )}
        </header>
    );
}
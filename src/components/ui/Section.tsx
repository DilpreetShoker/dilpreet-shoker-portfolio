import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
    fullHeight?: boolean;
}

export default function Section({
                                    children,
                                    className,
                                    fullHeight = false,
                                    ...props
                                }: SectionProps) {
    return (
        <section
            className={cn(
                "py-20 sm:py-24 lg:py-32",
                fullHeight && "flex min-h-screen items-center",
                className,
            )}
            {...props}
        >
            {children}
        </section>
    );
}
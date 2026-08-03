"use client";

import {
    forwardRef,
    type ComponentPropsWithoutRef,
} from "react";

import { spacing } from "@/theme/spacing";
import { cn } from "@/lib/utils";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
    fullHeight?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    (
        {
            children,
            className,
            fullHeight = false,
            ...props
        },
        ref,
    ) => {
        return (
            <section
                ref={ref}
                className={cn(
                    spacing.sectionY,
                    fullHeight && "flex min-h-screen items-center",
                    className,
                )}
                {...props}
            >
                {children}
            </section>
        );
    },
);

Section.displayName = "Section";

export default Section;
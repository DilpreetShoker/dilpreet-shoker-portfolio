import type { ReactNode } from "react";

import { layout } from "@/theme/layout";
import { spacing } from "@/theme/spacing";
import { cn } from "@/lib/utils";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({
                                      children,
                                      className,
                                  }: Readonly<ContainerProps>) {
    return (
        <div
            className={cn(
                "mx-auto w-full",
                layout.contentMax,
                spacing.pageX,
                className,
            )}
        >
            {children}
        </div>
    );
}
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-primary text-white hover:bg-primary-hover focus-visible:outline-primary",
    secondary:
        "border border-border bg-surface text-foreground hover:bg-surface-hover",
    ghost:
        "bg-transparent text-muted hover:bg-surface hover:text-foreground focus-visible:outline-foreground",
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
};

export function buttonStyles({
                                 variant = "primary",
                                 size = "md",
                                 className,
                             }: {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
} = {}) {
    return cn(
        "inline-flex items-center justify-center rounded-lg font-semibold",
        "transition-colors duration-200",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
    );
}

export default function Button({
                                   children,
                                   variant = "primary",
                                   size = "md",
                                   className,
                                   type = "button",
                                   ...props
                               }: Readonly<ButtonProps>) {
    return (
        <button
            type={type}
            className={buttonStyles({ variant, size, className })}
            {...props}
        >
            {children}
        </button>
    );
}
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-primary text-background hover:bg-primary-hover focus-visible:outline-primary",
    secondary:
        "border border-border bg-transparent text-foreground hover:bg-white/5 focus-visible:outline-foreground",
    ghost:
        "bg-transparent text-muted hover:bg-white/5 hover:text-foreground focus-visible:outline-foreground",
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
};

export default function Button({
                                   children,
                                   variant = "primary",
                                   size = "md",
                                   className,
                                   type = "button",
                                   ...props
                               }: ButtonProps) {
    return (
        <button
            type={type}
            className={cn(
                "inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-200",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                "disabled:pointer-events-none disabled:opacity-50",
                variantStyles[variant],
                sizeStyles[size],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}
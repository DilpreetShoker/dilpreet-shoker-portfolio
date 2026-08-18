export const toolboxTheme = {
  group:
    "grid gap-8 border-t border-border py-10 lg:grid-cols-[18rem_1fr] lg:gap-12",

  groupInformation:
    "lg:border-r lg:border-border lg:pr-10",

  title:
    "text-xl font-semibold tracking-tight text-foreground sm:text-2xl",

  description:
    "mt-3 max-w-md text-sm leading-6 text-muted sm:text-base",

  tools:
    "flex flex-wrap content-center items-center gap-3 self-center",

  tool:
    "inline-flex min-h-12 w-fit items-center gap-3 rounded-md border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface-hover",

  footer:
    "mt-10 border-t border-border pt-8 text-center text-sm text-muted",
} as const;

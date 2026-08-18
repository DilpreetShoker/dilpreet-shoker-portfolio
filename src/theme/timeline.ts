export const timelineTheme = {
  layout:
    "relative grid gap-6 pb-16 md:grid-cols-[9rem_3rem_1fr] md:gap-8 md:pb-24",

  period:
    "text-sm font-medium text-muted md:pt-1 md:text-right",

  node:
    "relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-background text-sm font-semibold text-primary",

  connector:
    "absolute bottom-8 left-[1.35rem] top-6 w-px bg-border md:left-[10.35rem]",

  content:
    "max-w-4xl border-t border-border pt-6 md:border-t-0 md:pt-0",

  title:
    "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",

  organisation:
    "mt-2 text-base font-medium text-primary sm:text-lg",

  summary:
    "mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg",

  highlights:
    "mt-6 space-y-3 text-base leading-7 text-muted",

  technologies:
    "mt-7 flex flex-wrap gap-2",

  technology:
    "rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground",
} as const;

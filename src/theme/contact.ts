export const contactTheme = {
  header:
    "relative flex min-h-[24svh] items-center overflow-hidden bg-background py-10 sm:min-h-[26svh] sm:py-12",

  linksGrid:
    "mx-auto grid max-w-5xl gap-4 md:grid-cols-3",

  card:
    "group relative flex min-h-36 items-center gap-5 border border-border bg-surface px-6 py-6 transition-[border-color,background-color] duration-300 hover:border-primary/50 hover:bg-surface-hover",

  icon:
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary transition-[border-color,background-color] duration-300 group-hover:border-primary/60 group-hover:bg-primary/10",

  content:
    "min-w-0 flex-1 text-left",

  label:
    "text-xs font-semibold uppercase tracking-[0.18em] text-muted",

  value:
    "mt-2 text-base font-semibold leading-6 text-foreground",

  arrow:
    "absolute right-5 top-5 text-muted transition-colors duration-300 group-hover:text-primary",
} as const;

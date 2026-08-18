interface HeroMottoProps {
  items: readonly string[];
}

export default function HeroMotto({ items }: HeroMottoProps) {
  return (
    <p className="mt-8 flex max-w-4xl flex-wrap items-center gap-x-3 gap-y-2 text-xl font-medium leading-8 text-foreground/80 sm:text-2xl">
      {items.map((item, index) => (
        <span key={item} className="flex items-center gap-x-3">
          {index > 0 && (
            <span aria-hidden="true" className="text-primary">
              •
            </span>
          )}

          <span>{item}</span>
        </span>
      ))}
    </p>
  );
}

import Image from "next/image";

import type { TimelineImage } from "@/types/timeline";
import { cn } from "@/lib/utils";

interface TimelineGalleryProps {
  images: readonly TimelineImage[];
}

export default function TimelineGallery({
  images,
}: TimelineGalleryProps) {
  const imageCount = Math.min(images.length, 3);

  return (
    <div
      className={cn(
        "mt-8 grid overflow-hidden",
        imageCount === 1 && "grid-cols-1",
        imageCount === 2 && "grid-cols-1 gap-3 sm:grid-cols-2",
        imageCount === 3 &&
          "grid-cols-2 gap-3 sm:grid-rows-2",
      )}
    >
      {images.slice(0, 3).map((image, index) => (
        <figure
          key={image.src}
          className={cn(
            "group relative overflow-hidden bg-surface",
            imageCount === 1 && "aspect-[16/8]",
            imageCount === 2 && "aspect-[4/3]",
            imageCount === 3 &&
              index === 0 &&
              "col-span-2 aspect-[16/8] sm:col-span-1 sm:row-span-2 sm:aspect-auto sm:min-h-72",
            imageCount === 3 &&
              index > 0 &&
              "min-h-[8.625rem]",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={
              imageCount === 1
                ? "(max-width: 768px) 100vw, 800px"
                : "(max-width: 768px) 50vw, 400px"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            style={{
              objectPosition: image.focus ?? "center",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent"
          />
        </figure>
      ))}
    </div>
  );
}

import Image from "next/image";
import type { Slide } from "@/lib/slides";

export default function SlideItem({ slide }: { slide: Slide }) {
  if (slide.variant === "center") {
    return (
      <div className="flex h-full flex-col items-center justify-center text-center">
        {slide.subtitle && (
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/60">
            {slide.subtitle}
          </p>
        )}
        <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
          {slide.title}
        </h1>
      </div>
    );
  }

  // variant: split
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10 px-6 md:flex-row md:justify-between md:px-16">
      <div className="max-w-md text-center md:text-left">
        {slide.eyebrow && (
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/60">
            {slide.eyebrow}
          </p>
        )}
        {slide.badgeLabel && (
          <span className="mb-4 inline-block rounded-full border border-amber-400/40 px-3 py-1 text-[11px] uppercase tracking-wide text-amber-300">
            {slide.badgeLabel}
          </span>
        )}
        <h2 className="text-4xl font-extrabold text-white md:text-6xl">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="mt-2 text-sm text-white/70">{slide.subtitle}</p>
        )}
      </div>

      {slide.image && (
        <div className="relative h-72 w-56 flex-shrink-0 overflow-hidden rounded-xl grayscale md:h-96 md:w-72">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </div>
  );
}

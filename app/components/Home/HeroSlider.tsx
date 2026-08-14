"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { slides } from "@/lib/slides";
import SlideItem from "./SlideItem";
import SlideIndicator from "./SlideIndicator";
import SlideNavArrow from "./SlideNavArrow";
import FollowButton from "./FollowButton";

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
    WheelGesturesPlugin(),
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <SlideItem slide={slide} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex items-center justify-between px-6 md:px-16">
        <SlideNavArrow onPrev={scrollPrev} onNext={scrollNext} />
        <SlideIndicator
          count={slides.length}
          activeIndex={activeIndex}
          onSelect={scrollTo}
        />
        <FollowButton />
      </div>
    </section>
  );
}
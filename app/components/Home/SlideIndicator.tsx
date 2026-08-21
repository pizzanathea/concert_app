"use client";

type Props = {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
};

export default function SlideIndicator({
  count,
  activeIndex,
  onSelect,
}: Props) {
  return (
    <div className="flex w-full max-w-xs items-center">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`Ke slide ${i + 1}`}
          className="h-[3px] flex-1 overflow-hidden bg-white/25"
        >
          <span
            className={[
              "block h-full bg-amber-400 transition-all duration-500",
              i === activeIndex ? "w-full" : "w-0",
            ].join(" ")}
          />
        </button>
      ))}
    </div>
  );
}

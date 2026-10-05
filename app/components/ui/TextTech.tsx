"use client";

import React, {
  CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type RevealMode = "area" | "letter" | "off";
type LineStyle = "dashed" | "solid";

interface TechTextProps {
  text?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: number;
  letterSpacing?: number;
  color?: string;
  accentColor?: string;
  reveal?: RevealMode;
  reach?: number;
  softness?: number;
  dashLength?: number;
  dashGap?: number;
  lineStyle?: LineStyle;
  strokeWidth?: number;
  specks?: number;
  selection?: boolean;
  labels?: boolean;
  draggable?: boolean;
  sweep?: boolean;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

interface LetterData {
  char: string;
  index: number;
}

export default function TechText({
  text = "React Bits",
  fontFamily = "",
  fontWeight = 600,
  fontSize = 150,
  letterSpacing = -0.05,
  color = "#ffffff",
  accentColor = "#ffffff",
  reveal = "letter",
  reach = 200,
  softness = 0.7,
  dashLength = 4,
  dashGap = 2,
  lineStyle = "dashed",
  strokeWidth = 1.5,
  specks = 15,
  selection = true,
  labels = true,
  draggable = true,
  sweep = true,
  speed = 1,
  className = "",
  style,
}: TechTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeLetter, setActiveLetter] = useState<number | null>(null);

  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
    inside: false,
  });

  const [dragging, setDragging] = useState(false);

  const [dragOffsets, setDragOffsets] = useState<
    Record<number, { x: number; y: number }>
  >({});

  const letters = useMemo<LetterData[]>(() => {
    return Array.from(text).map((char, index) => ({
      char,
      index,
    }));
  }, [text]);

  /*
  ============================================================
  LETTER REFS
  ============================================================
  */

  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  /*
  ============================================================
  POINTER TRACKING
  ============================================================
  */

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let raf = 0;

    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setPointer({
          x,
          y,
          inside: true,
        });

        /*
        --------------------------------------------------------
        FIND THE LETTER CLOSEST TO CURSOR
        --------------------------------------------------------
        */

        let closestIndex: number | null = null;
        let closestDistance = Infinity;

        letterRefs.current.forEach((letterElement, index) => {
          if (!letterElement) return;

          const letterRect = letterElement.getBoundingClientRect();

          const centerX = letterRect.left + letterRect.width / 2 - rect.left;

          const centerY = letterRect.top + letterRect.height / 2 - rect.top;

          const distance = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2),
          );

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        /*
        --------------------------------------------------------
        ONLY ACTIVATE WHEN CURSOR IS CLOSE ENOUGH
        --------------------------------------------------------
        */

        if (closestDistance <= reach) {
          setActiveLetter(closestIndex);
        } else {
          setActiveLetter(null);
        }
      });
    };

    const handlePointerLeave = () => {
      cancelAnimationFrame(raf);

      setPointer((prev) => ({
        ...prev,
        inside: false,
      }));

      setActiveLetter(null);
    };

    container.addEventListener("pointermove", handlePointerMove);

    container.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(raf);

      container.removeEventListener("pointermove", handlePointerMove);

      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [reach]);

  /*
  ============================================================
  IDLE SWEEP
  ============================================================
  */

  useEffect(() => {
    if (!sweep) return;

    if (pointer.inside) return;

    const interval = window.setInterval(
      () => {
        setActiveLetter((current) => {
          if (current === null) {
            return 0;
          }

          const next = current + 1;

          if (next >= letters.length) {
            return null;
          }

          return next;
        });
      },
      Math.max(180, 700 / Math.max(speed, 0.1)),
    );

    return () => {
      window.clearInterval(interval);
    };
  }, [sweep, pointer.inside, letters.length, speed]);

  /*
  ============================================================
  DRAG
  ============================================================
  */

  const handlePointerDown = (
    event: React.PointerEvent<HTMLSpanElement>,
    index: number,
  ) => {
    if (!draggable) return;

    event.currentTarget.setPointerCapture(event.pointerId);

    setDragging(true);

    const startX = event.clientX;
    const startY = event.clientY;

    const initial = dragOffsets[index] ?? {
      x: 0,
      y: 0,
    };

    const handleMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      setDragOffsets((prev) => ({
        ...prev,
        [index]: {
          x: initial.x + deltaX,
          y: initial.y + deltaY,
        },
      }));
    };

    const handleUp = () => {
      setDragging(false);

      setDragOffsets((prev) => ({
        ...prev,
        [index]: {
          x: 0,
          y: 0,
        },
      }));

      window.removeEventListener("pointermove", handleMove);

      window.removeEventListener("pointerup", handleUp);
    };

    window.addEventListener("pointermove", handleMove);

    window.addEventListener("pointerup", handleUp);
  };

  /*
  ============================================================
  CSS VARIABLES
  ============================================================
  */

  const rootStyle = {
    ...style,

    "--tech-color": color,
    "--tech-accent": accentColor,

    "--tech-font-size": `${fontSize}px`,
    "--tech-font-weight": fontWeight,
    "--tech-letter-spacing": `${letterSpacing}em`,

    "--tech-stroke-width": strokeWidth,

    "--tech-dash-length": `${dashLength}px`,
    "--tech-dash-gap": `${dashGap}px`,

    "--tech-reach": `${reach}px`,
    "--tech-softness": softness,
  } as CSSProperties;

  return (
    <div
      ref={containerRef}
      className={`relative flex w-full select-none items-center justify-start overflow-visible ${className}`}
      style={rootStyle}
    >
      {/* ======================================================
          CURSOR TRACKING AREA
      ====================================================== */}

      {reveal === "area" && pointer.inside && (
        <div
          className="pointer-events-none absolute z-20 rounded-full border"
          style={{
            width: reach * 2,
            height: reach * 2,

            left: pointer.x - reach,
            top: pointer.y - reach,

            borderColor: accentColor,

            opacity: softness * 0.2,

            transition: "left 80ms linear, top 80ms linear",
          }}
        />
      )}

      {/* ======================================================
          TEXT
      ====================================================== */}

      <div
        className="flex w-full items-center justify-start"
        style={{
          fontFamily: fontFamily || "inherit",
          fontWeight,

          fontSize: `clamp(
            52px,
            ${fontSize / 2}px,
            ${fontSize}px
          )`,

          letterSpacing: `${letterSpacing}em`,
          lineHeight: 0.82,
        }}
      >
        {letters.map((letter) => {
          const isActive = activeLetter === letter.index;

          const offset = dragOffsets[letter.index] ?? {
            x: 0,
            y: 0,
          };

          const isSpace = letter.char === " ";

          if (isSpace) {
            return (
              <span
                key={letter.index}
                className="inline-block"
                style={{
                  width: "0.35em",
                }}
              />
            );
          }

          return (
            <span
              key={letter.index}
              ref={(element) => {
                letterRefs.current[letter.index] = element;
              }}
              data-tech-letter={letter.index}
              onPointerDown={(event) => handlePointerDown(event, letter.index)}
              className="relative inline-block cursor-crosshair"
              style={{
                transform: `translate3d(
                  ${offset.x}px,
                  ${offset.y}px,
                  0
                )`,

                transition: dragging
                  ? "none"
                  : "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* =================================================
                  MAIN LETTER
              ================================================= */}

              <span
                className="relative inline-block"
                style={{
                  color:
                    reveal === "off" ? color : isActive ? "transparent" : color,

                  WebkitTextStroke: isActive
                    ? `${strokeWidth}px ${accentColor}`
                    : "0px transparent",

                  WebkitTextFillColor: isActive ? "transparent" : color,

                  backgroundImage:
                    isActive && lineStyle === "dashed"
                      ? `repeating-linear-gradient(
                          90deg,
                          ${accentColor} 0,
                          ${accentColor} ${dashLength}px,
                          transparent ${dashLength}px,
                          transparent ${dashLength + dashGap}px
                        )`
                      : "none",

                  backgroundClip: isActive ? "text" : "initial",

                  WebkitBackgroundClip: isActive ? "text" : "initial",

                  opacity: reveal === "area" && !isActive ? 0.75 : 1,

                  filter: isActive
                    ? `drop-shadow(
                        0 0 8px
                        ${accentColor}55
                      )`
                    : "none",

                  transition:
                    "color 180ms ease, opacity 180ms ease, filter 180ms ease",
                }}
              >
                {letter.char}
              </span>

              {/* =================================================
                  SELECTION FRAME
              ================================================= */}

              {selection && isActive && (
                <span
                  className="pointer-events-none absolute -inset-[0.12em] border"
                  style={{
                    borderColor: accentColor,
                  }}
                >
                  <span
                    className="absolute -left-[3px] -top-[3px] h-[6px] w-[6px]"
                    style={{
                      backgroundColor: accentColor,
                    }}
                  />

                  <span
                    className="absolute -right-[3px] -top-[3px] h-[6px] w-[6px]"
                    style={{
                      backgroundColor: accentColor,
                    }}
                  />

                  <span
                    className="absolute -bottom-[3px] -left-[3px] h-[6px] w-[6px]"
                    style={{
                      backgroundColor: accentColor,
                    }}
                  />

                  <span
                    className="absolute -bottom-[3px] -right-[3px] h-[6px] w-[6px]"
                    style={{
                      backgroundColor: accentColor,
                    }}
                  />
                </span>
              )}

              {/* =================================================
                  LABEL
              ================================================= */}

              {labels && isActive && (
                <span
                  className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-[8px] uppercase tracking-[0.18em]"
                  style={{
                    color: accentColor,
                  }}
                >
                  {letter.char} · {Math.round(fontSize)}PX
                </span>
              )}

              {/* =================================================
                  SPECKS
              ================================================= */}

              {isActive &&
                Array.from({
                  length: Math.min(specks, 20),
                }).map((_, speckIndex) => (
                  <span
                    key={speckIndex}
                    className="pointer-events-none absolute h-[3px] w-[3px]"
                    style={{
                      backgroundColor: accentColor,

                      left: `${20 + ((speckIndex * 37) % 70)}%`,

                      top: `${15 + ((speckIndex * 53) % 70)}%`,

                      opacity: 0.4 + (speckIndex % 4) * 0.15,

                      transform: `translate(
                        ${Math.sin(Date.now() / 500 + speckIndex) * 2}px,
                        ${Math.cos(Date.now() / 600 + speckIndex) * 2}px
                      )`,
                    }}
                  />
                ))}
            </span>
          );
        })}
      </div>
    </div>
  );
}

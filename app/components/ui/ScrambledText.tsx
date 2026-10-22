"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

type ScrambledTextProps = {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  scrambleColor?: string;
  effect?: "scramble";
  strength?: number;
  trail?: number;
  clickBurst?: boolean;
  intro?: boolean;
  color?: string;
  className?: string;
  style?: CSSProperties;
  children: string;
};

type Timer = ReturnType<typeof setTimeout>;
type Interval = ReturnType<typeof setInterval>;

export default function ScrambledText({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:",
  scrambleColor,
  effect = "scramble",
  strength = 1,
  trail = 0.6,
  clickBurst = true,
  intro = true,
  color,
  className = "",
  style,
  children,
}: ScrambledTextProps) {
  const [displayText, setDisplayText] = useState(children);
  const charactersRef = useRef<Array<HTMLSpanElement | null>>([]);
  const timeoutsRef = useRef(new Map<number, Timer>());
  const intervalsRef = useRef(new Map<number, Interval>());
  const activeCharactersRef = useRef(new Set<number>());

  const clearCharacterTimers = useCallback((index: number) => {
    const timeout = timeoutsRef.current.get(index);
    if (timeout) clearTimeout(timeout);
    timeoutsRef.current.delete(index);

    const interval = intervalsRef.current.get(index);
    if (interval) clearInterval(interval);
    intervalsRef.current.delete(index);
  }, []);

  const restoreCharacters = useCallback(
    (indices: number[]) => {
      if (indices.length === 0) return;

      const originals = Array.from(children);
      indices.forEach((index) => {
        clearCharacterTimers(index);
        activeCharactersRef.current.delete(index);
      });

      setDisplayText((current) => {
        const next = Array.from(current);
        indices.forEach((index) => {
          next[index] = originals[index] ?? "";
        });
        return next.join("");
      });
    },
    [children, clearCharacterTimers],
  );

  const scrambleCharacters = useCallback(
    (
      targets: Array<{ index: number; distance: number }>,
      revealDuration = duration,
    ) => {
      if (effect !== "scramble" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const glyphs = Array.from(scrambleChars || ".:");
      const safeSpeed = Math.max(0.1, speed);
      const baseDuration = Math.max(0.12, revealDuration);
      const tickInterval = Math.max(25, 40 / safeSpeed);

      for (const { index, distance } of targets) {
        const original = Array.from(children)[index];
        if (!original || /\s/.test(original)) continue;

        clearCharacterTimers(index);
        const falloff = Math.max(0, 1 - distance / Math.max(1, radius));
        const length =
          baseDuration * (1 + Math.max(0, trail) * (1 - falloff) * 0.5);
        const startedAt = Date.now();
        activeCharactersRef.current.add(index);

        setDisplayText((current) => {
          const next = Array.from(current);
          next[index] = glyphs[Math.floor(Math.random() * glyphs.length)] ?? original;
          return next.join("");
        });

        const interval = setInterval(() => {
          const elapsed = Date.now() - startedAt;
          if (elapsed >= length * 1000) {
            clearCharacterTimers(index);
            setDisplayText((current) => {
              const next = Array.from(current);
              next[index] = original;
              return next.join("");
            });
            return;
          }

          setDisplayText((current) => {
            const next = Array.from(current);
            next[index] = glyphs[Math.floor(Math.random() * glyphs.length)] ?? original;
            return next.join("");
          });
        }, tickInterval);

        intervalsRef.current.set(index, interval);
      }
    },
    [
      children,
      clearCharacterTimers,
      duration,
      effect,
      radius,
      scrambleChars,
      speed,
      trail,
    ],
  );

  useEffect(() => {
    for (let index = 0; index < Array.from(children).length; index += 1) {
      clearCharacterTimers(index);
    }

    if (!intro || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const characters = Array.from(children);
    characters.forEach((character, index) => {
      if (/\s/.test(character)) return;
      const delay = index * Math.max(3, 10 / Math.max(0.1, strength));
      const timeout = setTimeout(
        () => scrambleCharacters(
          [{ index, distance: 0 }],
          Math.min(duration, 0.32),
        ),
        delay,
      );
      timeoutsRef.current.set(index, timeout);
    });

    return () => {
      for (let index = 0; index < characters.length; index += 1) {
        clearCharacterTimers(index);
      }
    };
  }, [
    children,
    clearCharacterTimers,
    duration,
    intro,
    scrambleCharacters,
    strength,
  ]);

  const getNearbyCharacters = (clientX: number, clientY: number) =>
    charactersRef.current.flatMap((character, index) => {
      if (!character || /\s/.test(Array.from(children)[index] ?? "")) return [];
      const rect = character.getBoundingClientRect();
      const distance = Math.hypot(
        clientX - (rect.left + rect.width / 2),
        clientY - (rect.top + rect.height / 2),
      );
      return distance < radius ? [{ index, distance }] : [];
    });

  const handlePointerMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    if (event.pointerType === "touch") return;

    for (const [index, timeout] of timeoutsRef.current) {
      clearTimeout(timeout);
      timeoutsRef.current.delete(index);
    }

    const nearby = getNearbyCharacters(event.clientX, event.clientY);
    const nearbyIndices = new Set(nearby.map(({ index }) => index));
    const exited = [...activeCharactersRef.current].filter(
      (index) => !nearbyIndices.has(index),
    );
    restoreCharacters(exited);

    const entering = nearby.filter(
      ({ index }) => !activeCharactersRef.current.has(index),
    );
    scrambleCharacters(entering);
  };

  const handlePointerLeave = () => {
    for (const timeout of timeoutsRef.current.values()) {
      clearTimeout(timeout);
    }
    timeoutsRef.current.clear();
    restoreCharacters([...activeCharactersRef.current]);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLSpanElement>) => {
    if (!clickBurst || (event.pointerType === "mouse" && event.button !== 0)) {
      return;
    }
    for (const timeout of timeoutsRef.current.values()) {
      clearTimeout(timeout);
    }
    timeoutsRef.current.clear();
    scrambleCharacters(getNearbyCharacters(event.clientX, event.clientY));
  };

  const textStyle: CSSProperties = {
    ...style,
    ...(color ? { color } : {}),
  };

  return (
    <span
      className={className}
      style={textStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      aria-label={children}
    >
      <span aria-hidden="true">
        {Array.from(displayText).map((character, index) => {
          const isScrambled = character !== Array.from(children)[index];
          return (
            <span
              key={index}
              ref={(element) => {
                charactersRef.current[index] = element;
              }}
              className={isScrambled ? "transition-colors" : undefined}
              style={
                isScrambled && scrambleColor
                  ? { color: scrambleColor }
                  : undefined
              }
            >
              {character}
            </span>
          );
        })}
      </span>
    </span>
  );
}

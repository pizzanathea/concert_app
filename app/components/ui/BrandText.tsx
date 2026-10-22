import type { ReactNode } from "react";

type BrandTextProps = {
  text: string;
  tone?: "on-light" | "on-dark" | "on-amber";
};

export default function BrandText({
  text,
  tone = "on-light",
}: BrandTextProps) {
  const zColor =
    tone === "on-dark"
      ? "text-amber-400"
      : tone === "on-amber"
        ? "text-amber-950"
        : "text-amber-600";

  return (
    <>
      {text.split(/(Z)(?=\s+FEST\b)/gi).map((part, index): ReactNode =>
        part.toUpperCase() === "Z" ? (
          <span key={index} className={zColor}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

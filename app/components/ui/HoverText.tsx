"use client";

import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function HoverText({ href, children, className = "", onClick }: Props) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-block transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <span className="transition-colors duration-300 group-hover:text-amber-300">
        {children}
      </span>
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  );
}
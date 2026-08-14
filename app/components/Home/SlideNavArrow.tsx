"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
    onPrev: () => void;
    onNext: () => void;
};

export default function SlideNavArrow({ onPrev, onNext }: Props) {
    return (
        <div className="flex items-center gap-6">
            <button
                onClick={onPrev}
                aria-label="Slide sebelumnya"
                className="text-white/70 transition-colors hover:text-white"
            >
                <ArrowLeft size={22} strokeWidth={1.75} />
            </button>
            <button
                onClick={onNext}
                aria-label="Slide berikutnya"
                className="text-white/70 transition-colors hover:text-white"
            >
                <ArrowRight size={22} strokeWidth={1.75} />
            </button>
        </div>
    );
}

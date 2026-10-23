"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Brand = {
  name: string;
  logo: string;
  category?: string;
};

export default function BrandLogoGrid({
  brands,
  disclaimer,
  showCategories = false,
}: {
  brands: readonly Brand[];
  disclaimer: string;
  showCategories?: boolean;
}) {
  return (
    <>
      <div className="grid grid-cols-2 border-l border-t border-black/[0.08] sm:grid-cols-3 lg:grid-cols-5">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex min-h-40 flex-col items-center justify-center border-b border-r border-black/[0.08] px-4 py-8 text-center sm:min-h-48 md:min-h-56"
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={180}
              height={100}
              className={
                showCategories
                  ? "h-20 w-36 object-contain sm:h-24 sm:w-40"
                  : "h-auto max-h-16 w-auto max-w-40 object-contain"
              }
            />
            {showCategories && brand.category && (
              <span className="mt-3 text-[9px] uppercase tracking-[0.16em] text-black/40">
                {brand.category}
              </span>
            )}
          </motion.div>
        ))}
      </div>
      <p className="mt-5 text-center text-[8px] font-medium uppercase tracking-[0.16em] text-black/35">
        {disclaimer}
      </p>
    </>
  );
}

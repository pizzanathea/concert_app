"use client";

import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import MagneticIcon from "@/app/components/ui/MagneticIcon";

const socials = [
  {
    icon: FaInstagram,
    href: "https://instagram.com/zfest",
    label: "Instagram",
  },
  { icon: FaFacebookF, href: "https://facebook.com/zfest", label: "Facebook" },
  { icon: FaXTwitter, href: "https://x.com/zfest", label: "X" },
  { icon: FaTiktok, href: "https://tiktok.com/@zfest", label: "TikTok" },
  { icon: FaYoutube, href: "https://youtube.com/@zfest", label: "YouTube" },
];

export default function FollowButton() {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative flex h-9 -translate-y-3 items-center justify-end"
    >
      {/* Trigger: teks "Follow" + icon share, defaultnya keliatan */}
      <motion.div
        variants={{
          rest: { opacity: 1, scale: 1 },
          hover: { opacity: 0, scale: 0.5 },
        }}
        transition={{ duration: 0.2 }}
        className="absolute right-0 flex items-center gap-2 text-white/80"
      >
        <span className="text-sm font-medium tracking-wide">Follow</span>
        <Share2 size={16} strokeWidth={1.75} />
      </motion.div>

      {/* Baris icon sosmed, muncul pas hover */}
      <div className="flex items-center gap-1">
        {socials.map(({ icon: Icon, href, label }, i) => (
          <motion.div
            key={label}
            variants={{
              rest: { opacity: 0, x: 12, pointerEvents: "none" },
              hover: { opacity: 1, x: 0, pointerEvents: "auto" },
            }}
            transition={{ duration: 0.25, delay: i * 0.05 }}
          >
            <MagneticIcon href={href} label={label}>
              <Icon size={16} />
            </MagneticIcon>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { ArrowDown, ArrowUp, ArrowUpRight, Circle } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const breakdownSections = [
  {
    title: "What's Happening",
    subtitle: "Everything inside Z Fest",
    content: (
      <>
        <p>
          Selama dua hari, Z Fest menghadirkan pertunjukan musik dari berbagai
          musisi lokal dan internasional, creative space, area kuliner,
          komunitas, serta berbagai aktivitas yang membuat pengalaman festival
          terasa lebih lengkap dari sekadar menonton konser.
        </p>

        <Link
          href="/whats-happening"
          className="group mt-8 inline-flex items-center gap-4 border-b border-white/30 pb-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition-colors duration-300 hover:border-amber-400 hover:text-amber-400"
        >
          Explore the experience
          <ArrowUpRight
            size={17}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </>
    ),
  },
  {
    title: "Our History",
    subtitle: "Where the story began",
    content: (
      <>
        <p>
          Z Fest berawal dari sebuah ide sederhana: menciptakan ruang di mana
          musik, kreativitas, dan manusia dapat bertemu dalam satu pengalaman.
          Dari awal yang sederhana, Z Fest terus berkembang bersama musisi,
          komunitas, kreator, dan orang-orang yang percaya bahwa festival bukan
          hanya tentang panggung.
        </p>

        <p className="mt-7">
          Hari ini, Z Fest hadir dengan semangat yang sama, tetapi dengan
          pengalaman yang lebih besar. Setiap edisi menjadi bagian dari
          perjalanan untuk menciptakan momen baru dan membawa lebih banyak orang
          menjadi bagian dari cerita ini.
        </p>

        <Link
          href="/history"
          className="group mt-8 inline-flex items-center gap-4 border-b border-white/30 pb-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition-colors duration-300 hover:border-amber-400 hover:text-amber-400"
        >
          Discover our story
          <ArrowUpRight
            size={17}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </>
    ),
  },
  {
    title: "Event Regulations",
    subtitle: "Know before you go",
    content: (
      <div className="border-t border-black/10">
        {[
          "Tiket yang digunakan harus valid dan tetap disimpan selama berada di area festival.",
          "Ikuti prosedur pemeriksaan dan instruksi dari petugas saat memasuki venue.",
          "Senjata, benda berbahaya, zat terlarang, dan barang yang dilarang tidak diperbolehkan.",
          "Hormati sesama pengunjung, performer, crew, dan seluruh lingkungan festival.",
          "Ikuti seluruh peraturan dan arahan keselamatan selama acara berlangsung.",
        ].map((rule) => (
          <div key={rule} className="flex gap-5 border-b border-black/10 py-5">
            <Circle
              size={6}
              fill="currentColor"
              className="mt-2 shrink-0 text-amber-400"
            />

            <p className="max-w-2xl text-sm leading-7 text-black/50 md:text-base">
              {rule}
            </p>
          </div>
        ))}
      </div>
    ),
  },
];

export default function FestivalInfoPage() {
  const { scrollY } = useScroll();

  const scrollIndicatorOpacity = useTransform(
    scrollY,
    [0, 100, 220],
    [1, 0.65, 0],
  );

  const scrollIndicatorY = useTransform(scrollY, [0, 220], [0, -12]);

  const scrollTextOpacity = useTransform(scrollY, [50, 140, 230], [1, 0.6, 0]);

  const sloganY = useTransform(scrollY, [0, 450], [0, -100]);

  const sloganRotate = useTransform(scrollY, [0, 450], [0, 7]);

  const sloganOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  const sloganScale = useTransform(scrollY, [0, 450], [1, 0.94]);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen px-6 pb-20 pt-32 md:px-10 md:pt-36 lg:px-16">
        <div className="pointer-events-none absolute right-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-amber-400/[0.06] blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid gap-10 pt-8 lg:grid-cols-[1.15fr_0.85fr]"
          >
            {/* HERO TITLE */}

            <div>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.7,
                }}
                className="mb-7 text-xs uppercase tracking-[0.3em] text-amber-400"
              >
                Z Fest 2026
              </motion.p>

              <motion.div
                style={{
                  y: sloganY,
                  rotateX: sloganRotate,
                  opacity: sloganOpacity,
                  scale: sloganScale,
                  transformOrigin: "bottom left",
                  perspective: 1000,
                }}
              >
                <h1 className="max-w-5xl text-[clamp(3.2rem,7.5vw,7.5rem)] font-semibold uppercase leading-[0.86] tracking-[-0.065em]">
                  More than
                  <br />
                  just a <span className="text-amber-400">festival.</span>
                </h1>
              </motion.div>
            </div>

            {/* HERO DESCRIPTION */}

            <div className="flex items-start gap-7 lg:pt-[3.8rem] xl:gap-10">
              <div className="max-w-lg">
                <RevealText delay={0.2}>
                  <p className="text-base leading-7 text-black/50 md:text-lg">
                    Music, creativity, culture, and people come together in one
                    unforgettable experience. Z Fest is not simply something you
                    attend. It&apos;s something you become part of.
                  </p>
                </RevealText>
              </div>

              {/* SCROLL INDICATOR */}

              <motion.div
                style={{
                  opacity: scrollIndicatorOpacity,
                  y: scrollIndicatorY,
                }}
                className="hidden shrink-0 flex-col items-center md:flex"
              >
                <motion.span
                  style={{
                    opacity: scrollTextOpacity,
                  }}
                  className="text-[12px] font-bold uppercase tracking-[0.25em] text-black [writing-mode:vertical-rl]"
                >
                  Scroll
                </motion.span>

                <motion.div
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mt-4"
                >
                  <ArrowDown size={20} strokeWidth={1.4} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* HERO INFO */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="mt-28 border-t border-black/15"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
              <div className="border-b border-black/10 py-6 md:border-r md:px-6 lg:border-b-0 lg:pl-0">
                <p className="text-[10px] uppercase tracking-[0.25em] text-black/30">
                  Date
                </p>

                <p className="mt-2 text-sm text-black/80">29—30 May 2026</p>
              </div>

              <div className="border-b border-black/10 py-6 md:px-6 lg:border-b-0 lg:border-r">
                <p className="text-[10px] uppercase tracking-[0.25em] text-black/30">
                  Venue
                </p>

                <p className="mt-2 text-sm text-black/80">
                  Jakarta International Expo
                </p>
              </div>

              <div className="border-b border-black/10 py-6 md:border-r md:px-6 lg:border-b-0">
                <p className="text-[10px] uppercase tracking-[0.25em] text-black/30">
                  Doors Open
                </p>

                <p className="mt-2 text-sm text-black/80">15.00 WIB</p>
              </div>

              <div className="py-6 md:px-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-black/30">
                  Tickets
                </p>

                <p className="mt-2 text-sm text-black/80">Regular & VIP</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section className="border-t border-black/10 px-6 py-28 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <RevealText>
            <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.055em]">
              About
              <br />
              <span className="text-black/30">Z Fest.</span>
            </h2>
          </RevealText>

          <div className="max-w-2xl lg:pt-3">
            <RevealText delay={0.1}>
              <p className="text-base leading-8 text-black/55 md:text-lg">
                Z Fest adalah festival musik tahunan yang menghadirkan musisi
                lokal dan internasional lintas genre dalam satu pengalaman
                besar. Lebih dari sekadar konser, Z Fest menjadi ruang berkumpul
                untuk merayakan musik, kreativitas, budaya, dan koneksi antar
                manusia.
              </p>
            </RevealText>

            <RevealText delay={0.2}>
              <p className="mt-8 text-base leading-8 text-black/55 md:text-lg">
                Dari panggung utama hingga ruang kreatif, setiap bagian dari Z
                Fest dirancang untuk menciptakan pengalaman yang tidak hanya
                didengar, tetapi juga dirasakan.
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* =====================================================
          BREAKDOWN
      ====================================================== */}

      <section className="border-t border-black/10 bg-white px-6 py-20 text-black md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="border-t border-black/15">
            {breakdownSections.map((section, index) => (
              <BreakdownItem
                key={section.title}
                section={section}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MANIFESTO
      ====================================================== */}

      <ManifestoSection />

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-amber-400 px-6 py-24 text-black md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid items-center gap-14 lg:grid-cols-[90px_1fr] lg:gap-16">
            {/* =================================================
                BACK TO TOP
            ================================================== */}

            <motion.button
              type="button"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              initial="rest"
              whileHover="hover"
              className="group flex w-fit flex-col items-center self-center"
              aria-label="Back to top"
            >
              {/* ARROW */}

              <motion.div
                variants={{
                  rest: {
                    y: 0,
                  },
                  hover: {
                    y: -4,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-5"
              >
                <ArrowUp size={25} strokeWidth={1.5} />
              </motion.div>

              {/* TEXT REPLACEMENT */}

              <div className="relative flex h-[170px] w-[20px] items-center justify-center overflow-hidden">
                {/* ORIGINAL TEXT */}

                <motion.span
                  variants={{
                    rest: {
                      y: "0%",
                    },
                    hover: {
                      y: "-110%",
                    },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute whitespace-nowrap text-[14px] font-semibold uppercase tracking-[0.18em] [writing-mode:vertical-rl] rotate-180"
                >
                  Back to top
                </motion.span>

                {/* REPLACEMENT TEXT */}

                <motion.span
                  variants={{
                    rest: {
                      y: "110%",
                    },
                    hover: {
                      y: "0%",
                    },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute whitespace-nowrap text-[14px] font-semibold uppercase tracking-[0.18em] [writing-mode:vertical-rl] rotate-180"
                >
                  Back to top
                </motion.span>
              </div>
            </motion.button>

            {/* CTA CONTENT */}

            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em]">
                Z Fest 2026
              </p>

              <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold uppercase leading-[0.82] tracking-[-0.065em]">
                Your next
                <br />
                moment
                <br />
                starts here.
              </h2>

              <div className="mt-12 max-w-sm">
                <p className="mb-8 text-base leading-7 text-black/70">
                  Jangan cuma melihat dari jauh. Jadilah bagian dari pengalaman
                  Z Fest 2026.
                </p>

                <Link
                  href="/Tickets"
                  className="group inline-flex items-center gap-4 border-b-2 border-black pb-3 text-sm font-semibold uppercase tracking-[0.2em]"
                >
                  Order Tickets
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   REVEAL TEXT
============================================================ */

function RevealText({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ============================================================
   BREAKDOWN ITEM
============================================================ */

function BreakdownItem({
  section,
}: {
  section: {
    title: string;
    subtitle: string;
    content: ReactNode;
  };
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/15">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center justify-between gap-8 py-8 text-left md:py-10"
      >
        <div>
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-3 text-[10px] uppercase tracking-[0.3em] text-black/30"
          >
            {section.subtitle}
          </motion.p>

          <div className="overflow-hidden">
            <motion.h3
              initial={{
                y: 45,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(2rem,4.5vw,4.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.05em] transition-colors duration-300 group-hover:text-amber-400"
            >
              {section.title}
            </motion.h3>
          </div>
        </div>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/20 transition-colors duration-300 group-hover:border-amber-400 group-hover:text-amber-400 md:h-16 md:w-16"
        >
          <ArrowDown size={19} strokeWidth={1.5} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{
          duration: 0.55,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="overflow-hidden"
      >
        <motion.div
          initial={{
            y: -20,
          }}
          animate={{
            y: open ? 0 : -20,
          }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-3xl pb-12 pl-0 md:pb-14 md:pl-10"
        >
          {section.content}
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ============================================================
   MANIFESTO SECTION
============================================================ */

function ManifestoSection() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden border-t border-black/10 px-6 py-40 md:px-10"
    >
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={
          inView
            ? {
                scale: 1,
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/[0.07] blur-[150px]"
      />

      <div className="relative text-center">
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
          }}
          className="mb-10 text-[10px] uppercase tracking-[0.35em] text-amber-400"
        >
          The Z Fest experience
        </motion.p>

        <ManifestoLine text="Come for the" inView={inView} />

        <ManifestoLine text="Music." inView={inView} delay={0.12} accent />

        <ManifestoLine text="Stay for the" inView={inView} delay={0.24} />

        <ManifestoLine text="Moment." inView={inView} delay={0.36} muted />
      </div>
    </section>
  );
}

/* ============================================================
   MANIFESTO LINE
============================================================ */

function ManifestoLine({
  text,
  inView,
  delay = 0,
  accent = false,
  muted = false,
}: {
  text: string;
  inView: boolean;
  delay?: number;
  accent?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <motion.h2
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          delay,
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={[
          "text-[clamp(3rem,8vw,8rem)] font-semibold uppercase leading-[0.84] tracking-[-0.065em]",
          accent ? "text-amber-400" : "",
          muted ? "text-black/25" : "",
        ].join(" ")}
      >
        {text}
      </motion.h2>
    </div>
  );
}

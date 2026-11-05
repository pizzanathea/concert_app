"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Plus,
  Search,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const categories = ["ALL", "GENERAL", "TICKETS", "PAYMENT", "VENUE", "RULES"];

const faqData = [
  {
    id: "01",
    category: "GENERAL",
    question: "What is Z Fest?",
    answer:
      "Z Fest is a music festival bringing together music, creativity, artists, and communities in one unforgettable experience.",
  },
  {
    id: "02",
    category: "GENERAL",
    question: "When will Z Fest take place?",
    answer:
      "Z Fest is scheduled for 12–14 December 2026. Please follow our official announcements for the latest festival updates.",
  },
  {
    id: "03",
    category: "GENERAL",
    question: "Where will Z Fest be held?",
    answer:
      "Z Fest will take place in Jakarta, Indonesia. Visit our Venue page for arrival information and venue guidance.",
  },
  {
    id: "04",
    category: "TICKETS",
    question: "How can I purchase tickets?",
    answer:
      "You can purchase tickets through the official Z Fest ticketing platform. Choose your preferred ticket category and follow the checkout process.",
  },
  {
    id: "05",
    category: "TICKETS",
    question: "What ticket categories are available?",
    answer:
      "Z Fest offers Regular and VIP ticket categories. Each category provides a different festival experience.",
  },
  {
    id: "06",
    category: "TICKETS",
    question: "Can I transfer my ticket to someone else?",
    answer:
      "Ticket transfer eligibility depends on the official ticketing terms. Please check the latest ticket policy before making a transfer.",
  },
  {
    id: "07",
    category: "PAYMENT",
    question: "What payment methods are accepted?",
    answer:
      "Available payment methods will be displayed during checkout. Follow the instructions provided by the official payment system.",
  },
  {
    id: "08",
    category: "PAYMENT",
    question: "What should I do if my payment fails?",
    answer:
      "Check your payment status before trying again. If your payment has been deducted but your order is not confirmed, contact the ticketing support team.",
  },
  {
    id: "09",
    category: "PAYMENT",
    question: "Can I request a ticket refund?",
    answer:
      "Refund eligibility follows the official Z Fest ticket refund policy. Please review the applicable terms before purchasing.",
  },
  {
    id: "10",
    category: "VENUE",
    question: "What time do the festival gates open?",
    answer:
      "The scheduled festival gate opening time is 15.00 WIB. Check the latest announcements for any changes.",
  },
  {
    id: "11",
    category: "VENUE",
    question: "Is parking available at the venue?",
    answer:
      "Parking information and available arrangements will be announced through the official Z Fest channels.",
  },
  {
    id: "12",
    category: "VENUE",
    question: "Can I leave and re-enter the festival?",
    answer:
      "Re-entry policies depend on the festival's wristband and admission rules. Please follow the official venue regulations.",
  },
  {
    id: "13",
    category: "RULES",
    question: "Can I bring outside food and drinks?",
    answer:
      "Outside food and drinks may be restricted. Please review the festival regulations before arriving.",
  },
  {
    id: "14",
    category: "RULES",
    question: "Can I bring a professional camera?",
    answer:
      "Professional camera equipment may be restricted unless specifically authorized by the festival organizers.",
  },
  {
    id: "15",
    category: "RULES",
    question: "What should I bring to the festival?",
    answer:
      "Bring your valid ticket, identification, phone, and other personal essentials. Make sure to check the prohibited-items policy.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showTop, setShowTop] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const indicatorOpacity = useTransform(scrollY, [0, 260], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === "ALL" || faq.category === activeCategory;

    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-black px-6 pb-14 pt-36 text-white md:px-10 md:pt-40 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(245,197,24,0.10),transparent_35%)]" />

        <motion.div
          style={{ y: heroY }}
          className="relative z-10 flex flex-1 flex-col justify-between"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-amber-300">
                Z FEST / HELP CENTER
              </p>

              <p className="mt-4 max-w-xs text-[10px] leading-5 tracking-[0.15em] text-white/40">
                Everything you need to know before the music begins.
              </p>
            </div>

            <p className="hidden text-right text-[10px] uppercase leading-6 tracking-[0.2em] text-white/40 md:block">
              12—14 DECEMBER
              <br />
              JAKARTA, INDONESIA
            </p>
          </div>

          <div className="relative mt-24 max-w-7xl">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 text-[10px] uppercase tracking-[0.35em] text-white/45 md:text-xs"
            >
              A little help goes a long way
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[17vw] font-semibold leading-[0.78] tracking-[-0.085em] md:text-[12vw]"
            >
              GOT
              <br />
              QUESTIONS<span className="text-amber-300">?</span>
              <br />
              <span className="text-white/35">WE GOT</span>
              <br />
              ANSWERS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 max-w-md text-sm leading-7 text-white/50 md:text-base"
            >
              From tickets to festival rules, find everything you need to
              prepare for your Z Fest experience.
            </motion.p>
          </div>

          <div className="mt-20 flex items-end justify-between border-t border-white/15 pt-6">
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              FIND YOUR ANSWERS
            </p>

            <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              SCROLL TO EXPLORE
            </p>
          </div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          whileHover="hover"
          initial="initial"
          className="group fixed right-6 top-1/2 z-40 flex -translate-y-1/2 cursor-pointer flex-col items-center gap-7 md:right-8 lg:right-10"
        >
          <motion.span
            variants={{
              initial: { opacity: 0.7, letterSpacing: "0.4em" },
              hover: { opacity: 1, letterSpacing: "0.55em" },
            }}
            transition={{ duration: 0.35 }}
            className="text-[10px] font-medium text-white md:text-xs"
            style={{ writingMode: "vertical-rl" }}
          >
            SCROLL
          </motion.span>

          <motion.div
            variants={{
              initial: { y: 0, opacity: 0.7 },
              hover: { y: 8, opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <ArrowDown
              size={26}
              strokeWidth={1}
              className="text-white transition-colors duration-300 group-hover:text-amber-300"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ INTRO */}
      <section className="px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
              THE HELP DESK
            </p>

            <h2 className="mt-6 text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-7xl">
              BEFORE
              <br />
              YOU GO.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-xl leading-relaxed tracking-[-0.03em] md:text-3xl">
              Got something on your mind? We have gathered the answers to the
              most common questions so you can focus on what matters.
            </p>

            <p className="mt-8 text-sm leading-7 text-black/45">
              Explore the topics below or search for a specific question. Your
              next Z Fest experience starts with being prepared.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section
        id="questions"
        className="bg-[#f3f1ec] px-6 py-24 md:px-10 md:py-36 lg:px-16"
      >
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
              NEED TO KNOW
            </p>

            <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] md:text-8xl">
              THE FAQ<span className="text-amber-600">.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-black/45">
            A collection of answers to help you navigate your festival
            experience.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mb-12 flex items-center gap-4 border-b border-black/20 pb-5">
          <Search size={19} strokeWidth={1.4} className="text-black/40" />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setActiveQuestion(null);
            }}
            placeholder="SEARCH FOR A QUESTION..."
            className="w-full bg-transparent text-xs uppercase tracking-[0.15em] outline-none placeholder:text-black/35 md:text-sm"
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              <X size={17} />
            </button>
          )}
        </div>

        {/* CATEGORY FILTER */}
        <div className="mb-16 flex flex-wrap gap-x-7 gap-y-4 border-b border-black/10 pb-7">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setActiveQuestion(null);
              }}
              className={`relative pb-2 text-[9px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 md:text-[10px] ${
                activeCategory === category
                  ? "text-amber-700"
                  : "text-black/35 hover:text-black"
              }`}
            >
              {category}

              {activeCategory === category && (
                <motion.span
                  layoutId="faq-category"
                  className="absolute bottom-0 left-0 h-px w-full bg-amber-600"
                />
              )}
            </button>
          ))}
        </div>

        {/* QUESTIONS */}
        <div className="border-t border-black/15">
          <AnimatePresence mode="wait">
            {filteredFAQs.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${searchQuery}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {filteredFAQs.map((faq) => {
                  const isOpen = activeQuestion === faq.id;

                  return (
                    <div key={faq.id} className="border-b border-black/15">
                      <button
                        onClick={() =>
                          setActiveQuestion(isOpen ? null : faq.id)
                        }
                        aria-expanded={isOpen}
                        className="group flex w-full items-center justify-between gap-6 py-7 text-left md:py-9"
                      >
                        <div className="flex items-start gap-5 md:gap-10">
                          <span className="mt-1 text-[10px] tracking-[0.2em] text-amber-700">
                            {faq.id}
                          </span>

                          <div>
                            <span className="mb-3 block text-[8px] tracking-[0.2em] text-black/35">
                              {faq.category}
                            </span>

                            <h3
                              className={`text-lg font-medium tracking-[-0.03em] transition-colors duration-300 md:text-2xl ${
                                isOpen
                                  ? "text-amber-700"
                                  : "text-black group-hover:text-amber-700"
                              }`}
                            >
                              {faq.question}
                            </h3>
                          </div>
                        </div>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 md:h-11 md:w-11 ${
                            isOpen
                              ? "rotate-45 border-black bg-black text-white"
                              : "border-black/15 text-black/50 group-hover:border-black"
                          }`}
                        >
                          <Plus size={17} strokeWidth={1.3} />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-2xl pb-8 pl-10 text-sm leading-7 text-black/55 md:pl-[4.5rem] md:text-base">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-24 text-center"
              >
                <p className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                  NO RESULTS<span className="text-amber-600">.</span>
                </p>

                <p className="mt-5 text-sm text-black/45">
                  We couldn't find any questions matching your search.
                </p>

                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("ALL");
                  }}
                  className="mt-8 border-b border-black pb-2 text-[10px] uppercase tracking-[0.2em]"
                >
                  CLEAR FILTERS
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-between text-[9px] uppercase tracking-[0.2em] text-black/35">
          <span>{filteredFAQs.length} QUESTIONS FOUND</span>
          <span>Z FEST / FAQ</span>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden bg-black px-6 py-32 text-white md:px-10 md:py-48 lg:px-16">
        <div className="relative z-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-amber-300">
            STILL NEED HELP?
          </p>

          <h2 className="mt-8 max-w-6xl text-[17vw] font-semibold leading-[0.78] tracking-[-0.08em] md:text-[11vw]">
            LET&apos;S
            <br />
            TALK<span className="text-amber-300">.</span>
          </h2>

          <div className="mt-16 flex flex-col justify-between gap-10 border-t border-white/15 pt-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                WE&apos;RE HERE TO HELP
              </p>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                Still have questions? Reach out to the Z Fest team for further
                assistance.
              </p>
            </div>

            <a
              href="mailto:support@zfest.com"
              className="group flex items-center gap-5 text-xs font-medium uppercase tracking-[0.2em]"
            >
              CONTACT SUPPORT
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-amber-300 group-hover:bg-amber-300 group-hover:text-black">
                <ArrowUpRight size={18} strokeWidth={1.3} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* BACK TO TOP */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
            onClick={scrollToTop}
            whileHover="hover"
            initial="initial"
            className="group fixed bottom-10 right-6 z-40 flex flex-col items-center gap-5 md:bottom-14 md:right-8 lg:right-10"
          >
            <motion.span
              variants={{
                initial: { y: 0 },
                hover: { y: -6 },
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUp
                size={25}
                strokeWidth={1.2}
                className="text-black transition-colors duration-300 group-hover:text-amber-600"
              />
            </motion.span>

            <span
              className="text-[9px] font-medium tracking-[0.3em] text-black transition-colors duration-300 group-hover:text-amber-600"
              style={{ writingMode: "vertical-rl" }}
            >
              BACK TO TOP
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}

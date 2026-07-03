"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE } from "./motion";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, ease: EASE, delay: 0.15 + i * 0.15 },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-ink px-6 text-paper lg:px-8"
    >
      {/* Editorial backdrop: urban fashion shot, held to the monochrome palette */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.07 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          className="relative h-full w-full"
        >
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_32%] opacity-50 grayscale"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
      </div>
      {/* Subtle grain, echoing the urban texture of the logo artwork */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: GRAIN }}
      />

      <div className="relative mx-auto w-full max-w-6xl pt-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="eyebrow mb-6 text-ash"
        >
          Premium Fashion &amp; Lifestyle
        </motion.p>

        <h1 className="font-display uppercase leading-[0.92] tracking-wide text-paper">
          <span className="block overflow-hidden">
            <motion.span
              custom={0}
              variants={lineReveal}
              initial="hidden"
              animate="visible"
              className="block text-[clamp(2.5rem,12vw,10.5rem)]"
            >
              Strada
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              custom={1}
              variants={lineReveal}
              initial="hidden"
              animate="visible"
              className="relative block text-[clamp(2.5rem,12vw,10.5rem)]"
            >
              Collection50
              {/* Signature underline, drawn after the headline settles */}
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: EASE, delay: 1.2 }}
                className="absolute -bottom-[0.06em] left-0 h-[0.03em] w-full origin-left bg-paper"
              />
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}
          className="mt-8 max-w-xl text-base text-ash sm:text-lg"
        >
          Premium products. Fair prices. Founded in Germany, 2026.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.05 }}
          className="mt-10"
        >
          <a
            href="#about"
            className="eyebrow inline-block border border-paper bg-paper px-8 py-4 text-ink transition-colors duration-300 hover:bg-transparent hover:text-paper"
          >
            Explore the Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
}

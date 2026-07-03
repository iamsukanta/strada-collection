"use client";

import { motion } from "framer-motion";
import { drawLine, fadeUp, stagger, VIEWPORT } from "./motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  dark?: boolean;
  align?: "left" | "center";
};

/**
 * Section heading carrying the brand's signature gesture: a thin line
 * that draws itself beneath the title on scroll.
 */
export default function SectionHeading({
  eyebrow,
  title,
  dark = false,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={align === "center" ? "text-center" : ""}
    >
      <motion.p
        variants={fadeUp}
        className={`eyebrow ${dark ? "text-ash" : "text-smoke"}`}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className={`relative mt-4 inline-block pb-5 font-display text-4xl uppercase leading-none tracking-wide sm:text-5xl lg:text-6xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
        <motion.span
          aria-hidden="true"
          variants={drawLine}
          className={`absolute bottom-0 left-0 h-[3px] w-full origin-left ${
            dark ? "bg-paper" : "bg-ink"
          }`}
        />
      </motion.h2>
    </motion.div>
  );
}

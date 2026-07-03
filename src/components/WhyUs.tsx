"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "./motion";

const REASONS = [
  "Carefully selected premium-quality products",
  "Trusted manufacturing and business partners",
  "High production and quality standards",
  "Professional customer support",
  "Reliable international sourcing",
  "Fast communication",
  "Strong focus on customer satisfaction",
  "Passion for fashion, quality, and lifestyle",
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
      <SectionHeading eyebrow="Why Choose Us" title="The Standard" />

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-16 grid gap-x-16 md:grid-cols-2"
      >
        {REASONS.map((reason, i) => (
          <motion.li
            key={reason}
            variants={fadeUp}
            className="flex items-baseline gap-6 border-t border-line py-6"
          >
            <span aria-hidden="true" className="eyebrow shrink-0 text-ash">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="eyebrow text-ink">{reason}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="mt-16 max-w-2xl text-base leading-relaxed text-smoke sm:text-lg"
      >
        We proudly serve customers worldwide and continue expanding our
        international reach.
      </motion.p>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, VIEWPORT } from "./motion";

const CATEGORIES = [
  "Clothing",
  "Watches",
  "Fashion Accessories",
  "Premium Lifestyle Products",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="About Us" title="The Brand" />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-8 max-w-prose text-base leading-relaxed text-smoke sm:text-lg"
          >
            Strada_Collection50 was founded in 2026 by two founders based in
            Germany. Our goal is to provide premium products at competitive
            prices while maintaining the highest standards of quality,
            professionalism, and customer satisfaction. We specialize in
            sourcing and reselling carefully selected products.
          </motion.p>
        </div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 self-center sm:grid-cols-2"
        >
          {CATEGORIES.map((category, i) => (
            <motion.li key={category} variants={fadeUp}>
              <div className="group flex h-full min-h-36 flex-col justify-between border border-line p-6 transition-colors duration-300 hover:border-ink hover:bg-ink">
                <span className="eyebrow text-ash transition-colors duration-300 group-hover:text-ash">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow mt-8 text-ink transition-colors duration-300 group-hover:text-paper">
                  {category}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

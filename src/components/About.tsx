"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, VIEWPORT } from "./motion";

type Category = {
  label: string;
  icon: React.ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-14 w-14",
  "aria-hidden": true,
} as const;

const CATEGORIES: Category[] = [
  {
    label: "Clothing",
    icon: (
      <svg {...iconProps}>
        <path d="M16 3a4 4 0 0 1-8 0L3.5 5.5 6 9.5l2-1V21h8V8.5l2 1 2.5-4L16 3Z" />
      </svg>
    ),
  },
  {
    label: "Watches",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="5.5" />
        <path d="M12 9.5V12l1.8 1.2" />
        <path d="M9.3 7.2 8.6 2.8h6.8l-.7 4.4" />
        <path d="M9.3 16.8 8.6 21.2h6.8l-.7-4.4" />
      </svg>
    ),
  },
  {
    label: "Fashion Accessories",
    icon: (
      <svg {...iconProps}>
        <path d="M5.5 9h13l1.3 9.5a2 2 0 0 1-2 2.5H6.2a2 2 0 0 1-2-2.5L5.5 9Z" />
        <path d="M9 12V7.5a3 3 0 0 1 6 0V12" />
      </svg>
    ),
  },
  {
    label: "Premium Lifestyle Products",
    icon: (
      <svg {...iconProps}>
        <path d="M7.5 4h9L21 9.5 12 20.5 3 9.5 7.5 4Z" />
        <path d="M3 9.5h18" />
        <path d="M9.5 9.5 12 20.5l2.5-11" />
        <path d="M9.5 9.5 8 4" />
        <path d="M14.5 9.5 16 4" />
      </svg>
    ),
  },
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
            Strada Collection was founded in 2026 by two founders based in
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
            <motion.li key={category.label} variants={fadeUp}>
              <div className="group relative flex h-full min-h-52 flex-col items-center justify-center gap-6 border border-line p-6 text-center transition-colors duration-300 hover:border-ink hover:bg-ink">
                <span className="eyebrow absolute right-4 top-4 text-ash">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ink transition-colors duration-300 group-hover:text-paper">
                  {category.icon}
                </span>
                <span className="eyebrow text-ink transition-colors duration-300 group-hover:text-paper">
                  {category.label}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

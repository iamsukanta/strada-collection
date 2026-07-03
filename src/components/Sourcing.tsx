"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "./motion";

const BLOCKS = [
  {
    index: "01",
    title: "Product Sourcing",
    body: "We work with trusted manufacturing companies and established partner companies, primarily located in Italy and France. Every product is sourced through reliable business partners that follow strict production and quality standards, and passes a careful selection process before reaching our customers.",
  },
  {
    index: "02",
    title: "Quality",
    body: "Quality is the foundation of Strada Collection. We do not focus on low-cost or low-quality products. Every item is chosen based on material quality, craftsmanship, durability, comfort, and overall appearance. Premium quality builds trust — and trust is the most valuable part of every customer relationship.",
  },
];

export default function Sourcing() {
  return (
    <section id="quality" className="bg-fog py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="Sourcing & Quality" title="Built on Trust" />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden lg:col-span-5"
          >
            <Image
              src="/images/atelier.jpg"
              alt="Curated garments hanging on a boutique rack"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover grayscale transition-[transform,filter] duration-700 ease-out hover:scale-105 hover:grayscale-0"
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center gap-12 lg:col-span-7"
          >
            {BLOCKS.map((block) => (
              <motion.article key={block.index} variants={fadeUp}>
                <p className="eyebrow text-smoke">{block.index}</p>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-ink sm:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-smoke">
                  {block.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

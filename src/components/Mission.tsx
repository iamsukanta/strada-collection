"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "./motion";

export default function Mission() {
  return (
    <section className="bg-coal px-6 py-24 text-paper sm:py-32 lg:px-8">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto max-w-4xl"
      >
        <motion.p variants={fadeUp} className="eyebrow text-ash">
          Our Mission
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-8 text-2xl font-medium leading-snug text-paper sm:text-3xl lg:text-4xl"
        >
          Our mission is to make premium products more accessible while
          delivering an outstanding customer experience. Customers should never
          have to choose between affordability and quality.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-base leading-relaxed text-ash sm:text-lg"
        >
          Every product we offer is selected with care to meet our high
          standards.
        </motion.p>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, VIEWPORT } from "./motion";

export default function Mission() {
  return (
    <section className="bg-coal py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our Mission" title="The Promise" dark />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:col-span-7"
          >
            <motion.p
              variants={fadeUp}
              className="text-2xl font-medium leading-snug text-paper sm:text-3xl"
            >
              Our mission is to make premium products more accessible while
              delivering an outstanding customer experience.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-2xl font-medium leading-snug text-ash sm:text-3xl"
            >
              Customers should never have to choose between affordability and
              quality.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-12 flex items-center gap-8 border-t border-steel pt-8"
            >
              <span
                aria-hidden="true"
                className="font-display text-6xl leading-none text-steel"
              >
                50
              </span>
              <p className="max-w-md text-base leading-relaxed text-ash">
                Every product we offer is selected with care to meet our high
                standards.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

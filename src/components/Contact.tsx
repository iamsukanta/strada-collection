"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "./motion";

const CHANNELS = [
  {
    label: "Instagram",
    value: "@strada_collection50",
    href: "https://instagram.com/strada_collection50",
    external: true,
  },
  {
    label: "Email",
    value: "strada.collection50@gmail.com",
    href: "mailto:strada.collection50@gmail.com",
    external: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink px-6 py-24 text-paper sm:py-32 lg:px-8"
    >
      {/* Faint editorial backdrop behind the dark overlay */}
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/detail.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_25%] opacity-25 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/75 to-ink" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading eyebrow="Contact" title="Get in Touch" dark />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-4 md:grid-cols-2"
        >
          {CHANNELS.map((channel) => (
            <motion.a
              key={channel.label}
              variants={fadeUp}
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className="group flex min-h-44 flex-col justify-between border border-paper/20 p-8 transition-colors duration-300 hover:border-paper hover:bg-paper"
            >
              <div className="flex items-start justify-between">
                <span className="eyebrow text-ash transition-colors duration-300 group-hover:text-smoke">
                  {channel.label}
                </span>
                <span
                  aria-hidden="true"
                  className="text-xl text-ash transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink"
                >
                  ↗
                </span>
              </div>
              <span className="mt-10 break-all font-display text-xl uppercase tracking-wide text-paper transition-colors duration-300 group-hover:text-ink sm:text-2xl">
                {channel.value}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 max-w-2xl text-base leading-relaxed text-ash"
        >
          Thank you for placing your trust in Strada Collection. Your
          satisfaction is our highest priority.
        </motion.p>
      </div>
    </section>
  );
}

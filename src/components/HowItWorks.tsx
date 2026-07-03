"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, VIEWPORT } from "./motion";

const STEPS = [
  {
    title: "Choose Your Product",
    body: "Browse our collection and select the product you would like to purchase.",
  },
  {
    title: "Select Your Size",
    body: "If applicable, choose the size that best fits your needs.",
  },
  {
    title: "Provide Your Shipping Information",
    body: "For shipped orders, simply provide your delivery address so we can prepare your order.",
  },
  {
    title: "Secure Payment",
    body: "Complete your purchase either through a face-to-face transaction or securely via PayPal.",
  },
  {
    title: "Order Processing & Delivery",
    body: "Once your payment is confirmed, we carefully prepare your order and arrange shipment as quickly and safely as possible.",
  },
  {
    title: "Share Your Feedback",
    body: "Your feedback helps us improve our products, service, and overall shopping experience.",
  },
  {
    title: "Enjoy Your Purchase",
    body: "Thank you for choosing Strada_Collection50. We look forward to serving you again.",
  },
];

export default function HowItWorks() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.6"],
  });

  return (
    <section id="how-it-works" className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="How It Works" title="Seven Steps" dark />

        <ol ref={timelineRef} className="relative mt-20 ml-4 sm:ml-8">
          {/* Timeline rail: static track + scroll-drawn line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 top-0 w-px bg-steel"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: reducedMotion ? 1 : scrollYProgress }}
            className="absolute bottom-0 left-0 top-0 w-px origin-top bg-paper"
          />

          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="relative pb-16 pl-10 last:pb-0 sm:pl-16"
            >
              {/* Marker dot on the rail */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.4em] h-2 w-2 -translate-x-1/2 bg-paper"
              />
              <div className="sm:flex sm:items-start sm:gap-10">
                <span
                  aria-hidden="true"
                  className="block font-display text-5xl leading-none text-smoke sm:w-24 sm:shrink-0 sm:text-6xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-4 sm:mt-1">
                  <h3 className="font-display text-xl uppercase tracking-wide text-paper sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ash">
                    {step.body}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

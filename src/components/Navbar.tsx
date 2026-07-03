"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./motion";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Quality", href: "#quality" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled && !open
          ? "border-b border-line bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8"
      >
        <a
          href="#top"
          aria-label="Strada Collection — back to top"
          className={`relative z-50 transition-opacity duration-300 ${
            open ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src="/logo.png"
            alt="Strada Collection"
            width={815}
            height={780}
            priority
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`link-underline eyebrow transition-colors duration-300 ${
                  scrolled ? "text-ink" : "text-paper"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[7px] transition-colors duration-300 md:hidden ${
            open || !scrolled ? "text-paper" : "text-ink"
          }`}
        >
          <span
            className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${
              open ? "translate-y-[4.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${
              open ? "-translate-y-[4.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                },
              }}
              className="flex flex-col gap-2"
            >
              {LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 32 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: EASE },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-5xl uppercase leading-none tracking-wide text-paper"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
              exit={{ opacity: 0 }}
              className="eyebrow mt-12 text-ash"
            >
              Founded in Germany — 2026
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

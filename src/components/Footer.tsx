"use client";

import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-steel bg-ink px-6 py-16 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6">
          <Image
            src="/logo.png"
            alt="Strada_Collection50"
            width={815}
            height={780}
            className="h-14 w-auto"
          />
          <p className="eyebrow text-smoke">© 2026 Strada_Collection50</p>
        </div>

        <ul className="flex flex-col gap-4 sm:flex-row sm:gap-10">
          <li>
            <a
              href="https://instagram.com/strada_collection50"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline eyebrow text-ash transition-colors duration-300 hover:text-paper"
            >
              @strada_collection50
            </a>
          </li>
          <li>
            <a
              href="mailto:strada.collection50@gmail.com"
              className="link-underline eyebrow text-ash transition-colors duration-300 hover:text-paper"
            >
              strada.collection50@gmail.com
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={scrollToTop}
          className="eyebrow border border-paper/40 px-6 py-3 text-paper transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}

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
            alt="Strada Collection"
            width={815}
            height={780}
            className="h-20 w-auto"
          />
          <p className="eyebrow text-smoke">© 2026 Strada Collection</p>
        </div>

        <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
          <li>
            <a
              href="https://instagram.com/strada_collection50"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 text-ash transition-colors duration-300 hover:text-paper"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.5" fill="currentColor" />
              </svg>
              <span className="link-underline text-[0.625rem] font-semibold uppercase tracking-[0.2em]">
                @strada_collection50
              </span>
            </a>
          </li>
          <li>
            <a
              href="mailto:strada.collection50@gmail.com"
              className="group flex items-center gap-2.5 text-ash transition-colors duration-300 hover:text-paper"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
              </svg>
              <span className="link-underline text-[0.625rem] font-semibold uppercase tracking-[0.2em]">
                strada.collection50@gmail.com
              </span>
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

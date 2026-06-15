"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "/#product", label: "Product" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#scanner", label: "Scanner" },
  { href: "/blog", label: "Blog" },
];

const SIGNUP_URL = "https://app.skope.network/login";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-surface-dark transition-shadow ${
        scrolled || open ? "border-b border-white/[0.08]" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-[17px] font-semibold text-white">
          <Image src="/icon.png" alt="Skope" width={26} height={26} priority />
          skope
        </Link>
        <div className="hidden items-center gap-8 sm:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-track="nav_click"
              data-track-label={l.label.toLowerCase()}
              className="text-sm font-medium text-on-dark-soft transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={SIGNUP_URL}
            data-track="cta_click"
            data-track-cta="nav_get_compliant"
            className="inline-flex h-11 items-center rounded-full bg-primary px-5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-active"
          >
            Get compliant
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/[0.08] sm:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-white/[0.08] bg-surface-dark sm:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col px-6 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-track="nav_click"
                data-track-label={l.label.toLowerCase()}
                className="border-b border-white/[0.06] py-4 text-base font-medium text-on-dark-soft transition-colors last:border-b-0 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

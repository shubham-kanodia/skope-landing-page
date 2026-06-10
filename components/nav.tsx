"use client";

import { useEffect, useState } from "react";
import { ApertureMark } from "@/components/aperture/aperture";

const LINKS = [
  { href: "#product", label: "Product" },
  { href: "#pricing", label: "Pricing" },
  { href: "#scanner", label: "Scanner" },
  { href: "https://docs.skope.network", label: "Docs" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-surface-dark transition-shadow ${
        scrolled ? "border-b border-white/[0.08]" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5 text-[17px] font-semibold text-white">
          <ApertureMark size={26} tone="dark" />
          skope
        </a>
        <div className="hidden items-center gap-8 sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-on-dark-soft transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://app.skope.network/signup"
          className="inline-flex h-11 items-center rounded-full bg-primary px-5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-active"
        >
          Get compliant
        </a>
      </nav>
    </header>
  );
}

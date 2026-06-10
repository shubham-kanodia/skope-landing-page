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
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "border-b border-hairline bg-ink/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-base font-medium text-paper">
          <ApertureMark size={26} />
          skope
        </a>
        <div className="hidden items-center gap-8 sm:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-mist transition-colors hover:text-paper">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://app.skope.network/signup"
          className="rounded-lg bg-lens px-4 py-2 text-sm font-medium text-ink transition-shadow hover:shadow-[0_0_20px_rgba(43,217,199,0.35)]"
        >
          Get compliant →
        </a>
      </nav>
    </header>
  );
}

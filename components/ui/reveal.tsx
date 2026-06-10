"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * The only scroll-reveal allowed (BRAND.md motion rules):
 * opacity + 8px translate, 350ms, 60ms stagger via `index`.
 *
 * Progressive enhancement: content is visible in plain HTML and is only
 * hidden once JS is live, so no-JS visitors and crawlers see everything.
 * `prefers-reduced-motion` is handled in globals.css.
 */
export function Reveal({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal-pending");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-in");
          io.disconnect();
        }
      },
      { rootMargin: "-40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ transitionDelay: `${index * 60}ms` }}>
      {children}
    </div>
  );
}

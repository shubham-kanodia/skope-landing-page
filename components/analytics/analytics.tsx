"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { GA_ID, track } from "@/lib/analytics";

const SCROLL_MILESTONES = [25, 50, 75, 90];

/**
 * GA4 wiring for the whole site:
 * - loads gtag.js and sends a page_view per route (SPA navigations included)
 * - click delegation: any element with data-track fires that event, with
 *   data-track-* attributes as params; external links fire outbound_click
 * - section_view once per named section ([id] or [data-section]) per page
 * - scroll_depth at 25/50/75/90 percent per page
 */
export function Analytics() {
  const pathname = usePathname();

  // Page views on every navigation. send_page_view is off in the config below.
  useEffect(() => {
    track("page_view", { page_title: document.title });
  }, [pathname]);

  // Click delegation for data-track elements and outbound links.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;

      const tracked = target.closest<HTMLElement>("[data-track]");
      if (tracked) {
        const { track: event, ...rest } = tracked.dataset;
        if (!event) return;
        const params: Record<string, string> = {};
        for (const [key, value] of Object.entries(rest)) {
          if (!key.startsWith("track") || value === undefined) continue;
          // dataset camelCase ("trackCtaName") -> snake_case param ("cta_name")
          const name = key
            .slice("track".length)
            .replace(/([A-Z])/g, "_$1")
            .toLowerCase()
            .replace(/^_/, "");
          params[name] = value;
        }
        const href = tracked.closest("a")?.getAttribute("href");
        if (href && !params.destination) params.destination = href;
        track(event, params);
        return;
      }

      const anchor = target.closest("a");
      const href = anchor?.getAttribute("href");
      if (href && /^https?:\/\//.test(href) && !href.includes("skope.network")) {
        track("outbound_click", { destination: href });
      }
    };
    document.addEventListener("click", onClick, { capture: true, passive: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  // Named-section visibility: the landing-page drop-off funnel.
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "section[id], section[data-section]",
    );
    if (sections.length === 0) return;

    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const name = el.dataset.section ?? el.id;
          if (!name || seen.has(name)) continue;
          seen.add(name);
          track("section_view", { section: name });
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  // Scroll depth milestones, reset per page.
  useEffect(() => {
    const fired = new Set<number>();
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = ((window.scrollY + window.innerHeight) / doc.scrollHeight) * 100;
      for (const milestone of SCROLL_MILESTONES) {
        if (percent >= milestone && !fired.has(milestone)) {
          fired.add(milestone);
          track("scroll_depth", { percent: milestone });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}

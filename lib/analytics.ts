export const GA_ID = "G-LQ815CCHXJ";

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fire a GA4 event. Safe to call anywhere on the client, even before gtag.js
 * loads: like the official stub, it queues an `arguments` object on dataLayer,
 * which gtag.js drains on arrival.
 */
export function track(event: string, params: GtagParams = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  const gtag = function (..._args: unknown[]) {
    // gtag.js requires the Arguments object itself, not an array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  gtag("event", event, { page_path: window.location.pathname, ...params });
}

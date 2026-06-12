export type FaqItem = { q: string; a: string };

export type InlinePart =
  | string
  | { link: string; href: string }
  | { strong: string }
  | { code: string };

export type Inline = string | InlinePart[];

export type ContentBlock =
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: Inline }
  | { type: "list"; ordered?: boolean; items: Inline[] }
  | { type: "table"; headers: string[]; rows: Inline[][]; caption?: string }
  | { type: "callout"; tone: "info" | "warning" | "note"; title?: string; text: Inline }
  | { type: "quote"; text: string; cite?: string }
  | { type: "faq"; heading?: string; items: FaqItem[] }
  | { type: "cta"; heading: string; text: string; buttonLabel: string; href: string };

export interface Post {
  /** URL segment under /blog */
  slug: string;
  /** On-page h1, brand voice */
  title: string;
  /** <title> tag, keyword-led, under 60 chars */
  metaTitle: string;
  /** Meta description, 150-160 chars */
  description: string;
  /** ISO date, e.g. "2026-06-12" */
  date: string;
  /** ISO date; falls back to date in JSON-LD */
  updated?: string;
  keywords: string[];
  /** Mono pill label on cards, e.g. "GUIDE" */
  category: string;
  readingMinutes: number;
  /** 1-2 sentence blurb for cards and llms.txt */
  summary: string;
  /** Slugs of related posts, validated by the registry */
  related: string[];
  blocks: ContentBlock[];
}

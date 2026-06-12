import type { FaqItem, Post } from "./types";

import { post as whatIsTheDpdpAct } from "./posts/what-is-the-dpdp-act";
import { post as dpdpComplianceChecklist } from "./posts/dpdp-compliance-checklist";
import { post as dpdpComplianceIn5Steps } from "./posts/dpdp-compliance-in-5-steps";
import { post as dpdpActPenaltiesAndFines } from "./posts/dpdp-act-penalties-and-fines";
import { post as dpdpComplianceTimeline } from "./posts/dpdp-compliance-timeline";
import { post as dpdpComplianceToolsCompared } from "./posts/dpdp-compliance-tools-compared";
import { post as dpdpaVsGdpr } from "./posts/dpdpa-vs-gdpr";
import { post as doesDpdpApplyToSmallBusinesses } from "./posts/does-dpdp-apply-to-small-businesses";
import { post as dpdpConsentRequirements } from "./posts/dpdp-consent-requirements";
import { post as consentManagersUnderDpdp } from "./posts/consent-managers-under-dpdp";

const POSTS: Post[] = [
  whatIsTheDpdpAct,
  dpdpComplianceChecklist,
  dpdpComplianceIn5Steps,
  dpdpActPenaltiesAndFines,
  dpdpComplianceTimeline,
  dpdpComplianceToolsCompared,
  dpdpaVsGdpr,
  doesDpdpApplyToSmallBusinesses,
  dpdpConsentRequirements,
  consentManagersUnderDpdp,
];

// Fail the build on duplicate slugs or dangling related links.
const slugs = new Set<string>();
for (const post of POSTS) {
  if (slugs.has(post.slug)) {
    throw new Error(`Duplicate blog slug: ${post.slug}`);
  }
  slugs.add(post.slug);
}
for (const post of POSTS) {
  for (const rel of post.related) {
    if (!slugs.has(rel)) {
      throw new Error(`Post "${post.slug}" links to unknown related slug "${rel}"`);
    }
  }
}

export function getAllPosts(): Post[] {
  return [...POSTS];
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: Post): Post[] {
  return post.related
    .map((slug) => getPost(slug))
    .filter((p): p is Post => Boolean(p));
}

export function getFaqItems(post: Post): FaqItem[] {
  return post.blocks.flatMap((b) => (b.type === "faq" ? b.items : []));
}

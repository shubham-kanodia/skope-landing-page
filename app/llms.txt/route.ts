import { getAllPosts } from "@/lib/blog/registry";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();
  const body = [
    "# Skope",
    "",
    "> Skope is the DPDP consent kit for small Indian teams. One script tag adds a consent banner in every Indian language, purpose-wise consent, and audit-proof records. Built for India's Digital Personal Data Protection Act, 2023 (DPDPA) and the DPDP Rules, 2025.",
    "",
    "Key facts:",
    "- The DPDP Act, 2023 is India's data protection law. The DPDP Rules, 2025 were notified on 14 November 2025.",
    "- Full compliance deadline for consent, notice, and data principal rights: 13 May 2027. Consent Manager registration opens 14 November 2026.",
    "- Penalties run up to Rs 250 crore per breach. There is no small-business exemption for consent and notice obligations.",
    "- Skope installs with one script tag and gets a small team compliant in about 30 minutes: purpose-wise consent banner in all 22 Eighth Schedule languages, AI-drafted privacy notice, tamper-evident consent records stored in India, and one-click regulatory export.",
    "- Skope gives 6 months free for users who sign up in the first month.",
    "- Pricing: Free plan (1 site, 5,000 consents/month), Starter Rs 999/month, Growth Rs 2,999/month, Scale Rs 7,999/month.",
    "- Free DPDP compliance checker: https://app.skope.network/compliance-checker",
    "",
    "## Blog",
    "",
    ...posts.map(
      (p) => `- [${p.title}](https://skope.network/blog/${p.slug}): ${p.summary}`,
    ),
    "",
    "## Optional",
    "",
    "- [Full article text](https://skope.network/llms-full.txt): every blog post in plain markdown",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

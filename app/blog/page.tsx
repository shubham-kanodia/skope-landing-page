import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { PostCard } from "@/components/blog/post-card";
import { getAllPosts } from "@/lib/blog/registry";

export const metadata: Metadata = {
  title: "DPDP compliance, explained | Skope blog",
  description:
    "Plain-English guides to India's DPDP Act: what the law says, the deadlines, the fines, and the checklist that gets a small team compliant. No legalese.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "DPDP compliance, explained | Skope blog",
    description:
      "Plain-English guides to India's DPDP Act: deadlines, fines, checklists, and how to get compliant without a lawyer on retainer.",
    url: "/blog",
    siteName: "Skope",
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-surface-dark">
          <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-24">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-on-dark-soft">
              The Skope blog
            </p>
            <h1 className="mt-4 max-w-2xl text-[clamp(36px,4.6vw,56px)] leading-[1.05] tracking-[-0.025em] text-white">
              DPDP, without the legalese.
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.6] text-on-dark-soft">
              What India&apos;s data law actually asks of you, what it fines, and how to
              get compliant before the deadlines. Written for founders, not counsel.
            </p>
          </div>
        </section>
        <section className="bg-canvas">
          <div className="mx-auto max-w-[1200px] px-6 py-16 sm:py-20">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { JsonLd } from "@/components/blog/json-ld";
import { PostCard } from "@/components/blog/post-card";
import { PostRenderer } from "@/components/blog/post-renderer";
import { buildBlogPosting, buildBreadcrumbs, buildFaqPage } from "@/lib/blog/json-ld";
import { getAllPosts, getFaqItems, getPost, getRelatedPosts } from "@/lib/blog/registry";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url: `/blog/${post.slug}`,
      siteName: "Skope",
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const faqItems = getFaqItems(post);
  const related = getRelatedPosts(post);

  return (
    <>
      <Nav />
      <main className="flex-1 bg-canvas">
        <JsonLd data={buildBlogPosting(post)} />
        <JsonLd data={buildBreadcrumbs(post)} />
        {faqItems.length > 0 && <JsonLd data={buildFaqPage(faqItems)} />}
        <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <nav className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="transition-colors hover:text-ink">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{post.category}</span>
          </nav>
          <h1 className="mt-8 text-[clamp(32px,4.4vw,48px)] leading-[1.08] tracking-[-0.025em] text-ink">
            {post.title}
          </h1>
          <p className="mt-5 font-mono text-[12px] text-muted">
            {formatDate(post.date)} · {post.readingMinutes} min read
            {post.updated && ` · updated ${formatDate(post.updated)}`}
          </p>
          <div className="mt-2 border-b border-hairline pb-8">
            <p className="mt-4 text-[18px] leading-[1.6] text-body">{post.summary}</p>
          </div>
          <PostRenderer blocks={post.blocks} />
        </article>
        {related.length > 0 && (
          <section className="border-t border-hairline-soft bg-surface-soft">
            <div className="mx-auto max-w-[1200px] px-6 py-16">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-muted">
                Keep reading
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

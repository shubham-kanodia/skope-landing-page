import Link from "next/link";
import type { Post } from "@/lib/blog/types";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      data-track="blog_post_click"
      data-track-slug={post.slug}
      className="group flex flex-col rounded-3xl border border-hairline bg-canvas p-7 transition-colors hover:border-muted-soft"
    >
      <span className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-muted">
        {post.category}
      </span>
      <h2 className="mt-3 text-[20px] leading-[1.25] text-ink transition-colors group-hover:text-primary">
        {post.title}
      </h2>
      <p className="mt-3 flex-1 text-[15px] leading-[1.6] text-body">{post.summary}</p>
      <p className="mt-5 font-mono text-[12px] text-muted">
        {formatDate(post.date)} · {post.readingMinutes} min read
      </p>
    </Link>
  );
}

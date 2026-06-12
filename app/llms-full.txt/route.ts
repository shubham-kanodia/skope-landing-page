import { getAllPosts } from "@/lib/blog/registry";
import { postToMarkdown } from "@/lib/blog/to-text";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();
  const body = [
    "# Skope blog: full article text",
    "",
    "> Skope is the DPDP consent kit for small Indian teams: https://skope.network",
    "",
    ...posts.map((p) => `---\n\n${postToMarkdown(p)}`),
    "",
  ].join("\n\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

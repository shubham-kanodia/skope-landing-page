import type { ContentBlock, Inline, Post } from "./types";

function inlineToText(inline: Inline): string {
  if (typeof inline === "string") return inline;
  return inline
    .map((part) => {
      if (typeof part === "string") return part;
      if ("link" in part) {
        const href = part.href.startsWith("/")
          ? `https://skope.network${part.href}`
          : part.href;
        return `[${part.link}](${href})`;
      }
      if ("strong" in part) return `**${part.strong}**`;
      return `\`${part.code}\``;
    })
    .join("");
}

function blockToMarkdown(block: ContentBlock): string {
  switch (block.type) {
    case "h2":
      return `## ${block.text}`;
    case "h3":
      return `### ${block.text}`;
    case "p":
      return inlineToText(block.text);
    case "list":
      return block.items
        .map((item, i) => (block.ordered ? `${i + 1}. ` : "- ") + inlineToText(item))
        .join("\n");
    case "table": {
      const header = `| ${block.headers.join(" | ")} |`;
      const divider = `| ${block.headers.map(() => "---").join(" | ")} |`;
      const rows = block.rows.map((r) => `| ${r.map(inlineToText).join(" | ")} |`);
      return [header, divider, ...rows].join("\n");
    }
    case "callout":
      return `> ${block.title ? `${block.title}: ` : ""}${inlineToText(block.text)}`;
    case "quote":
      return `> ${block.text}${block.cite ? ` (${block.cite})` : ""}`;
    case "faq":
      return [
        `## ${block.heading ?? "Frequently asked questions"}`,
        ...block.items.map((f) => `### ${f.q}\n\n${f.a}`),
      ].join("\n\n");
    case "cta":
      return `${block.heading}. ${block.text}`;
  }
}

export function postToMarkdown(post: Post): string {
  return [
    `# ${post.title}`,
    "",
    `Published ${post.date}. ${post.summary}`,
    "",
    ...post.blocks.map(blockToMarkdown),
  ].join("\n\n");
}

import type { ContentBlock, Inline } from "@/lib/blog/types";

function InlineText({ inline }: { inline: Inline }) {
  if (typeof inline === "string") return <>{inline}</>;
  return (
    <>
      {inline.map((part, i) => {
        if (typeof part === "string") return <span key={i}>{part}</span>;
        if ("link" in part) {
          const external = !part.href.startsWith("/");
          return (
            <a
              key={i}
              href={part.href}
              className="text-primary underline-offset-4 transition-colors hover:underline"
              {...(external ? { target: "_blank", rel: "noopener" } : {})}
            >
              {part.link}
            </a>
          );
        }
        if ("strong" in part) {
          return (
            <strong key={i} className="font-semibold text-ink">
              {part.strong}
            </strong>
          );
        }
        return (
          <code key={i} className="rounded bg-surface-strong px-1.5 py-0.5 font-mono text-[14px] text-ink">
            {part.code}
          </code>
        );
      })}
    </>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={block.id} className="mt-14 scroll-mt-24 text-[28px] leading-[1.15] text-ink">
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 className="mt-10 text-[20px] font-semibold text-ink">{block.text}</h3>;
    case "p":
      return (
        <p className="mt-5 text-[16px] leading-[1.7] text-body">
          <InlineText inline={block.text} />
        </p>
      );
    case "list": {
      const cls = "mt-5 space-y-2.5 pl-5 text-[16px] leading-[1.7] text-body";
      const items = block.items.map((item, i) => (
        <li key={i} className="pl-1">
          <InlineText inline={item} />
        </li>
      ));
      return block.ordered ? (
        <ol className={`${cls} list-decimal marker:font-mono marker:text-[14px] marker:text-muted`}>{items}</ol>
      ) : (
        <ul className={`${cls} list-disc marker:text-muted`}>{items}</ul>
      );
    }
    case "table":
      return (
        <div className="mt-7 overflow-x-auto rounded-2xl border border-hairline">
          <table className="w-full border-collapse text-left text-[15px]">
            {block.caption && (
              <caption className="border-b border-hairline-soft bg-surface-soft px-5 py-3 text-left font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
                {block.caption}
              </caption>
            )}
            <thead>
              <tr className="bg-surface-soft">
                {block.headers.map((h) => (
                  <th key={h} className="px-5 py-3 font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-hairline-soft">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-5 py-3.5 align-top ${j === 0 ? "text-ink" : "text-body"}`}>
                      <InlineText inline={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div className="mt-7 rounded-2xl border-l-2 border-primary bg-surface-soft p-5">
          {block.title && (
            <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">{block.title}</p>
          )}
          <p className={`text-[15px] leading-[1.65] text-body ${block.title ? "mt-2" : ""}`}>
            <InlineText inline={block.text} />
          </p>
        </div>
      );
    case "quote":
      return (
        <blockquote className="mt-7 border-l-2 border-hairline pl-5">
          <p className="text-[17px] leading-[1.6] text-ink">{block.text}</p>
          {block.cite && (
            <cite className="mt-2 block font-mono text-[12px] not-italic text-muted">{block.cite}</cite>
          )}
        </blockquote>
      );
    case "faq":
      return (
        <section className="mt-14">
          <h2 className="text-[28px] leading-[1.15] text-ink">
            {block.heading ?? "Frequently asked questions"}
          </h2>
          <div className="mt-6 divide-y divide-hairline-soft border-t border-hairline">
            {block.items.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="text-[16px] font-semibold text-ink">{f.q}</h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-body">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      );
    case "cta":
      return (
        <div className="mt-14 rounded-3xl bg-surface-dark p-8 sm:p-10">
          <h2 className="text-[26px] leading-[1.15] text-white">{block.heading}</h2>
          <p className="mt-3 max-w-md text-[15px] leading-[1.65] text-on-dark-soft">{block.text}</p>
          <a
            href={block.href}
            data-track="cta_click"
            data-track-cta="blog_post_cta"
            className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-[15px] font-semibold text-white transition-colors hover:bg-primary-active"
          >
            {block.buttonLabel}
          </a>
        </div>
      );
  }
}

export function PostRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

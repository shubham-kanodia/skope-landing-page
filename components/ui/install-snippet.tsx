"use client";

import { useState } from "react";

const SNIPPET = `<script src="https://cdn.skope.network/skope.js" data-site="sk_live_xxxx" defer></script>`;

export function InstallSnippet() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPET);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — leave the snippet selectable
    }
  };

  return (
    <div className="flex w-full max-w-2xl items-center gap-3 rounded-lg border border-hairline bg-slate px-4 py-3">
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-xs text-mist [scrollbar-width:none]">
        <span className="text-lens">&lt;script</span> src=
        <span className="text-paper">&quot;https://cdn.skope.network/skope.js&quot;</span> data-site=
        <span className="text-paper">&quot;sk_live_xxxx&quot;</span> defer
        <span className="text-lens">&gt;&lt;/script&gt;</span>
      </code>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 rounded-md border border-hairline px-3 py-1.5 font-mono text-xs text-paper transition-colors hover:border-lens hover:text-lens"
        aria-label="Copy install snippet"
      >
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}

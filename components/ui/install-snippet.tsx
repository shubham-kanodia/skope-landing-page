"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

const SNIPPET = `<script src="https://cdn.skope.network/skope.js" data-site="sk_live_xxxx" defer></script>`;

export function InstallSnippet() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPET);
      track("copy_install_snippet");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable, leave the snippet selectable
    }
  };

  return (
    <div className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-[#111418] py-3 pl-4 pr-3">
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-xs text-on-dark-soft [scrollbar-width:none]">
        <span className="text-on-dark-soft">&lt;script</span> src=
        <span className="text-white">&quot;https://cdn.skope.network/skope.js&quot;</span> data-site=
        <span className="text-white">&quot;sk_live_xxxx&quot;</span> defer
        <span className="text-on-dark-soft">&gt;&lt;/script&gt;</span>
      </code>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 rounded-full border border-white/15 px-3.5 py-1.5 font-mono text-xs text-on-dark-soft transition-colors hover:border-white/40 hover:text-white"
        aria-label="Copy install snippet"
      >
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}

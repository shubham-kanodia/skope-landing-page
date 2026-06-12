"use client";

import { useState, useId } from "react";
import { track } from "@/lib/analytics";

export function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => {
          if (!open) track("faq_open", { question });
          setOpen(!open);
        }}
        className="flex w-full items-center justify-between gap-4 py-6 text-left text-base font-semibold text-ink"
      >
        {question}
        <span
          aria-hidden="true"
          className={`shrink-0 text-xl font-normal text-muted transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[64ch] pb-6 text-[15px]">{answer}</p>
        </div>
      </div>
    </div>
  );
}

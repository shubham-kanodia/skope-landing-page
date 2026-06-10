"use client";

import { useState, useId } from "react";

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
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-paper transition-colors hover:text-lens"
      >
        {question}
        <span
          aria-hidden="true"
          className={`shrink-0 font-mono text-mist transition-transform duration-200 ${open ? "rotate-45" : ""}`}
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
          <p className="max-w-[68ch] pb-5 text-sm text-mist">{answer}</p>
        </div>
      </div>
    </div>
  );
}

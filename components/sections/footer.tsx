import { ApertureMark } from "@/components/aperture/aperture";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Product", href: "#product" },
      { label: "Pricing", href: "#pricing" },
      { label: "Scanner", href: "#scanner" },
      { label: "Docs", href: "https://docs.skope.network" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Legal",
    links: [
      // [HUMAN] counsel review before launch
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "DPA", href: "/dpa" },
      { label: "Refunds", href: "/refunds" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Grievance officer", href: "/grievance" },
      { label: "Status", href: "https://status.skope.network" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline-soft bg-canvas">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col justify-between gap-12 sm:flex-row">
          <div>
            <div className="flex items-center gap-2.5 text-[17px] font-semibold text-ink">
              <ApertureMark size={26} tone="light" />
              skope
            </div>
            <p className="mt-4 max-w-xs text-sm">
              The DPDP consent kit for small Indian teams. Made in Pune, India.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-sm font-semibold text-ink">{col.heading}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm transition-colors hover:text-ink">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-16 border-t border-hairline-soft pt-6 text-[13px] text-body">
          © {new Date().getFullYear()} Skope. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

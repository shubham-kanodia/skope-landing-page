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
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-12 sm:flex-row">
          <div>
            <div className="flex items-center gap-2 text-base font-medium text-paper">
              <ApertureMark size={26} />
              skope
            </div>
            <p className="mt-4 max-w-xs text-xs text-mist">
              The DPDP consent kit for small Indian teams. Made in Pune, India.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="font-mono text-xs text-mist">{col.heading}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm text-mist transition-colors hover:text-paper">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-14 border-t border-hairline pt-6 text-xs text-mist">
          © {new Date().getFullYear()} Skope. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

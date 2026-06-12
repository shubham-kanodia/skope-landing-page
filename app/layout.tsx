import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { organization } from "@/lib/blog/json-ld";
import { Analytics } from "@/components/analytics/analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skope.network"),
  title: "Skope, the DPDP consent kit for small teams",
  description:
    "India's data law has teeth — ₹250 crore penalties, no exemption for small teams. One script tag makes you compliant in 30 minutes: consent banner, every Indian language, audit-proof records. Free for six months if you sign up by 12 July 2026.",
  openGraph: {
    title: "Skope, the DPDP consent kit for small teams",
    description:
      "India's data law applies to you. Yes, you. One script tag makes you compliant in 30 minutes — consent banner in every Indian language, purpose-wise consent, audit-proof records.",
    url: "https://skope.network",
    siteName: "Skope",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

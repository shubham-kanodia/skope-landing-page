import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
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
  title: "Skope — the DPDP consent kit for small teams",
  description:
    "One script tag. Bilingual consent banner, purpose-wise consent, audit-proof records. Live in 30 minutes — no demo calls, from ₹999/month.",
  openGraph: {
    title: "Skope — the DPDP consent kit for small teams",
    description:
      "India's data law applies to you. One script tag gets you a compliant bilingual banner, purpose-wise consent, and audit-ready proof.",
    url: "https://skope.network",
    siteName: "Skope",
    locale: "en_IN",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

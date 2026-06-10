import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
  themeColor: "#0b0f1c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrumentSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

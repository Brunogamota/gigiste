import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-canela",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-suisse",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Horst&Co — Arquitetura Contemporânea",
    template: "%s — Horst&Co",
  },
  description:
    "Escritório de arquitetura contemporânea. Projetamos experiências que unem permanência, estética e emoção. São Paulo.",
  keywords: ["arquitetura", "arquitetura contemporânea", "escritório de arquitetura", "São Paulo"],
  metadataBase: new URL("https://horstandco.vercel.app"),
  openGraph: {
    title: "Horst&Co — Arquitetura Contemporânea",
    description: "Escritório de arquitetura contemporânea. São Paulo.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

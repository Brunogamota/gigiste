import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SmoothScroll } from "@/providers/SmoothScroll";
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
    "Horst&Co é um escritório de arquitetura contemporânea com sede em São Paulo. Projetamos experiências que unem permanência, estética e emoção.",
  keywords: ["arquitetura", "arquitetura contemporânea", "São Paulo", "escritório de arquitetura"],
  authors: [{ name: "Horst&Co Arquitetura" }],
  openGraph: {
    title: "Horst&Co — Arquitetura Contemporânea",
    description: "Projetamos experiências que unem permanência, estética e emoção.",
    type: "website",
    locale: "pt_BR",
  },
  metadataBase: new URL("https://horstandco.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

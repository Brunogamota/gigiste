import type { Metadata } from "next";
import { Cormorant_Garamond, Tenor_Sans } from "next/font/google";
import { SmoothScroll } from "@/providers/SmoothScroll";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { BackToHome } from "@/components/layout/BackToHome";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Horst&Co — Beyond Architecture",
    template: "%s — Horst&Co",
  },
  description:
    "Horst&Co é um escritório de arquitetura contemporânea com sede em São Paulo. Projetamos experiências que unem permanência, estética e emoção.",
  keywords: ["arquitetura", "arquitetura contemporânea", "São Paulo", "escritório de arquitetura"],
  authors: [{ name: "Horst&Co Arquitetura" }],
  openGraph: {
    title: "Horst&Co — Beyond Architecture",
    description: "Projetamos experiências que unem permanência, estética e emoção.",
    type: "website",
    locale: "pt_BR",
  },
  metadataBase: new URL("https://horstandco.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${tenor.variable}`}>
      <body>
        <SmoothScroll>
          <CustomCursor />
          <BackToHome />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

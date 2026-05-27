import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
    "Projetamos experiências arquitetônicas que unem permanência, estética e emoção. Escritório de arquitetura contemporânea de alto padrão.",
  keywords: [
    "arquitetura contemporânea",
    "escritório de arquitetura",
    "design arquitetônico",
    "arquitetura de alto padrão",
    "projetos residenciais",
    "arquitetura institucional",
    "Horst&Co arquitetura",
  ],
  authors: [{ name: "Horst&Co Arquitetura" }],
  creator: "Horst&Co Arquitetura",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Horst&Co — Arquitetura Contemporânea",
    description:
      "Projetamos experiências arquitetônicas que unem permanência, estética e emoção.",
    siteName: "Horst&Co Arquitetura",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Horst&Co — Arquitetura Contemporânea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horst&Co — Arquitetura Contemporânea",
    description:
      "Projetamos experiências arquitetônicas que unem permanência, estética e emoção.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  metadataBase: new URL("https://horstandco.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="grain">
        <LenisProvider>
          <LoadingScreen />
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

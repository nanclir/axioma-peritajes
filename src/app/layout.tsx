import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ACUMEN INGENIERÍA | Infraestructura, Decisiones y Territorio",
    template: "%s | ACUMEN INGENIERÍA",
  },
  description: "Soluciones integrales en infraestructura y proyectos complejos: decisiones bajo incertidumbre, movilidad, territorio y peritajes técnicos de arbitraje.",
  keywords: [
    "Infraestructura",
    "Ingeniería Civil",
    "Decisiones bajo Incertidumbre",
    "Movilidad Inteligente",
    "Ordenamiento Territorial",
    "Obras Subterráneas",
    "Túneles",
    "Peritajes Técnicos",
    "Dictámenes de Arbitraje",
    "ACUMEN OS",
    "Colombia"
  ],
  openGraph: {
    title: "ACUMEN INGENIERÍA | Infraestructura, Decisiones y Territorio",
    description: "Soluciones integrales en infraestructura y proyectos complejos: decisiones bajo incertidumbre, movilidad, territorio y peritajes técnicos de arbitraje.",
    url: "https://www.acumeningenieria.com",
    siteName: "ACUMEN INGENIERÍA",
    locale: "es_CO",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ACUMEN INGENIERÍA",
  "alternateName": "Acumen Ingeniería S.A.S.",
  "url": "https://www.acumeningenieria.com",
  "description": "Soluciones integrales en infraestructura y proyectos complejos: decisiones bajo incertidumbre, movilidad, territorio y peritajes técnicos de arbitraje.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CO",
    "addressLocality": "Medellín"
  },
  "knowsAbout": [
    "Infraestructura",
    "Decisiones bajo Incertidumbre",
    "Movilidad Inteligente y Sistemas de Transporte",
    "Ordenamiento Territorial y Planificación Urbana",
    "Obras Subterráneas y Geotecnia",
    "Peritajes Técnicos de Arbitraje y Auditoría Forense"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased selection:bg-zinc-900 selection:text-white">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}

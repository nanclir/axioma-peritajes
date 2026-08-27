import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    default: "ACUMEN INGENIERÍA | Inteligencia Territorial e Ingeniería Aumentada",
    template: "%s | ACUMEN INGENIERÍA",
  },
  description: "Firma boutique especializada en peritajes técnicos, obras subterráneas, decisiones bajo incertidumbre, movilidad 360 y ordenamiento territorial. Tecnología ACUMEN OS.",
  keywords: ["Ingeniería Aumentada", "Inteligencia Territorial", "Peritajes Técnicos", "Obras Subterráneas", "Decisiones bajo Incertidumbre", "Movilidad 360", "Ordenamiento Territorial", "ACUMEN OS", "Colombia"],
  openGraph: {
    title: "ACUMEN INGENIERÍA | Inteligencia Territorial e Ingeniería Aumentada",
    description: "Firma boutique especializada en peritajes técnicos, obras subterráneas, decisiones bajo incertidumbre, movilidad 360 y ordenamiento territorial. Tecnología ACUMEN OS.",
    url: "https://www.acumeningenieria.com",
    siteName: "ACUMEN INGENIERÍA",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans antialiased selection:bg-zinc-900 selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

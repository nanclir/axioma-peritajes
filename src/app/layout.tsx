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
    default: "ACUMEN INGENIERÍA | Peritajes Técnicos y Auditoría Técnica",
    template: "%s | ACUMEN INGENIERÍA",
  },
  description: "Firma experta en peritajes técnicos, dictámenes periciales para litigios, obras subterráneas y gerencia de proyectos de infraestructura en Colombia. Inteligencia territorial aumentada.",
  keywords: ["Peritaje Técnico", "Dictamen Pericial", "Auditoría Técnica", "Obras Subterráneas", "Ingeniería Aumentada", "Colombia", "Infraestructura"],
  openGraph: {
    title: "ACUMEN INGENIERÍA | Peritajes Técnicos de Alta Precisión",
    description: "Dictámenes concluyentes para litigios, arbitrajes y controversias en grandes obras de ingeniería.",
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

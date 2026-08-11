import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Insights | ACUMEN INGENIERÍA S.A.S.",
  description: "Análisis territorial, movilidad e inteligencia artificial aplicada a la infraestructura por los directores de Acumen.",
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" 
            style={{ backgroundImage: "url('/images/auditoria_forense_docs_v2.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-slate-50/20 to-transparent z-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight text-balance">
              Liderazgo Intelectual.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-normal mb-8">
              Análisis profundo sobre el impacto de la Inteligencia Artificial en la ingeniería, la ética del desarrollo territorial y el futuro de la movilidad urbana, escrito por nuestros socios directores.
            </p>
          </div>
        </div>
      </section>

      {/* Artículos (Lienzo en Blanco) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-zinc-400 py-20 border-2 border-dashed border-zinc-200 rounded-sm">
          <p className="text-sm">Lienzo en blanco para las próximas publicaciones e insights estratégicos.</p>
        </div>
      </section>
    </div>
  );
}

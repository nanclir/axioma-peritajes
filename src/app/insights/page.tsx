import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Insights | ACUMEN INGENIERÍA S.A.S.",
  description: "Análisis territorial, movilidad e inteligencia artificial aplicada a la infraestructura por los directores de Acumen.",
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Header */}
      <section className="relative pt-32 pb-24 mb-24 overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 bg-slate-50 z-0" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" 
          style={{ backgroundImage: "url('/images/auditoria_forense_docs_v2.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight text-balance">
              Liderazgo Intelectual.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed font-light mb-8">
              Análisis profundo sobre el impacto de la Inteligencia Artificial en la ingeniería, la ética del desarrollo territorial y el futuro de la movilidad urbana, escrito por nuestros socios directores.
            </p>
          </div>
        </div>
      </section>

      {/* Artículos (Estilo Buro Happold / Arup) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Insight 1 */}
          <article className="group cursor-pointer">
            <div className="aspect-[4/3] bg-zinc-100 overflow-hidden mb-6 relative">
               <div 
                 className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" 
                 style={{ backgroundImage: "url('/images/geotecnico_tunnel.png')" }}
               />
            </div>
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <BookOpen className="h-3 w-3" />
              <span>Ingeniería Digital</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-3 group-hover:text-gold-500 transition-colors">
              La ética de los algoritmos en la toma de decisiones de infraestructura pública.
            </h3>
            <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
              Cómo los modelos probabilísticos y de IA deben ser auditados filosófica y técnicamente para evitar sesgos en el desarrollo territorial. Por Rafael Nanclares.
            </p>
            <span className="text-gold-500 font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Leer artículo <ArrowRight className="h-4 w-4" />
            </span>
          </article>

          {/* Insight 2 */}
          <article className="group cursor-pointer">
            <div className="aspect-[4/3] bg-zinc-100 overflow-hidden mb-6 relative">
               <div 
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 mix-blend-multiply" 
                 style={{ backgroundImage: "url('/images/estructural_wireframe.png')" }}
               />
            </div>
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <BookOpen className="h-3 w-3" />
              <span>Optimización Hídrica</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-3 group-hover:text-gold-500 transition-colors">
              Decisiones con múltiples objetivos e incertidumbre en recursos hidráulicos.
            </h3>
            <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
              Un repaso a la modelación avanzada de sistemas complejos ante la amenaza del cambio climático en Colombia. Basado en las publicaciones del PhD. Ricardo Smith.
            </p>
            <span className="text-gold-500 font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Leer artículo <ArrowRight className="h-4 w-4" />
            </span>
          </article>

        </div>
      </section>

    </div>
  );
}

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

      {/* Artículos (Estilo Buro Happold / Arup) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Whitepaper 1 */}
          <article className="group cursor-pointer">
            <div className="aspect-[4/3] bg-zinc-100 overflow-hidden mb-6 relative border border-zinc-200">
               <div 
                 className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" 
                 style={{ backgroundImage: "url('/images/geotecnico_tunnel.png')" }}
               />
               <div className="absolute top-4 left-4 bg-zinc-900 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                 Whitepaper
               </div>
            </div>
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <BookOpen className="h-3 w-3" />
              <span>Hidrología Estocástica</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-3 transition-colors group-hover:text-gold-500">
              El fin de la estacionariedad: Diseño de infraestructuras frente al cambio climático.
            </h3>
            <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
              Por qué los diseños hidrológicos tradicionales exigen nuevos modelos estocásticos para procesos no estacionarios.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 text-zinc-900 font-bold hover:text-gold-500 transition-colors">
              Descargar Whitepaper <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          {/* Whitepaper 2 */}
          <article className="group cursor-pointer">
            <div className="aspect-[4/3] bg-zinc-100 overflow-hidden mb-6 relative border border-zinc-200">
               <div 
                 className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" 
                 style={{ backgroundImage: "url('/images/auditoria_forense_docs_v2.png')" }}
               />
               <div className="absolute top-4 left-4 bg-zinc-900 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                 Whitepaper
               </div>
            </div>
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <BookOpen className="h-3 w-3" />
              <span>Riesgo y Data Science</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-3 transition-colors group-hover:text-gold-500">
              Reduciendo la incertidumbre en Megaproyectos.
            </h3>
            <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
              Aplicación de Inteligencia Artificial y métodos bayesianos para el análisis de riesgo hidrológico y ambiental.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 text-zinc-900 font-bold hover:text-gold-500 transition-colors">
              Descargar Whitepaper <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

        </div>
      </section>

    </div>
  );
}

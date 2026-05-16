import { FileCheck, Search, Building2, Gavel } from "lucide-react";

export const metadata = {
  title: "Experiencia Forense | ACUMEN INGENIERÍA S.A.S.",
  description: "Historial de peritajes técnicos emitidos por los directores de Acumen en tribunales de arbitramento.",
};

export default function ExperienciaPeritajesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 mb-6 tracking-tight">
            Casos de Estudio y Experiencia Forense.
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed font-light mb-8">
            Nuestro equipo directivo ha actuado como perito imparcial y de parte en algunas de las controversias de infraestructura más relevantes del país, consolidando un récord intachable de precisión técnica.
          </p>
        </div>
      </section>

      {/* Lista de Casos Destacados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          
          <div className="bg-white border border-zinc-200 p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold text-zinc-900">U.T. AIA AIM 2010 vs IDU & Transmilenio</h3>
              <span className="shrink-0 px-3 py-1 bg-slate-100 text-zinc-600 text-xs font-bold uppercase rounded-sm border border-slate-200">2022</span>
            </div>
            <div className="flex items-center gap-2 mb-4 text-sm text-gold-600 font-medium">
              <Gavel className="h-4 w-4" />
              <span>Tribunal Administrativo de Cundinamarca</span>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Peritaje Técnico de parte tendiente a determinar las condiciones técnicas y administrativas por las cuales la U.T. AIA AIM 2010 presentó desequilibrio económico en la ecuación contractual, dentro del contrato de obra 04 de 2011.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold text-zinc-900">Metroplús S.A. vs Pablo Emilio Bocarejo & CEI S.A</h3>
              <span className="shrink-0 px-3 py-1 bg-slate-100 text-zinc-600 text-xs font-bold uppercase rounded-sm border border-slate-200">2019</span>
            </div>
            <div className="flex items-center gap-2 mb-4 text-sm text-gold-600 font-medium">
              <Gavel className="h-4 w-4" />
              <span>Tribunal Administrativo de Antioquia</span>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Peritaje técnico desde la Ingeniería Civil, tendiente a determinar los perjuicios causados a la empresa Metroplús S.A, como consecuencia de la entrega tardía e incompleta de los estudios y diseños de la TRONCAL MEDELLÍN del sistema de transporte público.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold text-zinc-900">Banco Agrario de Colombia vs Comfamiliar Camacol Antioquia</h3>
              <span className="shrink-0 px-3 py-1 bg-slate-100 text-zinc-600 text-xs font-bold uppercase rounded-sm border border-slate-200">2022</span>
            </div>
            <div className="flex items-center gap-2 mb-4 text-sm text-gold-600 font-medium">
              <Gavel className="h-4 w-4" />
              <span>Tribunal de Arbitramento - CCB</span>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Peritaje de Arbitramento tendiente a determinar las condiciones técnicas constructivas de algunas Viviendas de Interés Social Rural, ejecutadas en el marco del contrato de Gerencia Integral GI 006-2012.
            </p>
          </div>

          {/* ... (el resto del historial se cargaría desde la base de datos Excel integrada) ... */}
          <div className="p-8 text-center bg-zinc-50 border border-zinc-200 border-dashed rounded-sm">
             <p className="text-zinc-500 text-sm font-medium">
                [ + 15 dictámenes adicionales consolidados en ACUMEN OS Data Center ]
             </p>
          </div>

        </div>
      </section>

    </div>
  );
}

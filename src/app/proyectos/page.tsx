import { Map, Layers } from "lucide-react";

export const metadata = {
  title: "Portafolio y Proyectos | ACUMEN INGENIERÍA S.A.S.",
  description: "Data storytelling y trazabilidad aplicados a los proyectos de ingeniería estructural y movilidad más relevantes.",
};

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight text-balance">
            Impacto territorial, medido en datos.
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed font-light mb-8">
            Nuestros proyectos no se documentan solo con fotografías; los medimos a través de gemelos digitales, capas SIG y analítica de impacto.
          </p>
        </div>
      </section>

      {/* Grid de Proyectos Data-Driven */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          
          {/* Proyecto 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] bg-zinc-100 border border-zinc-200 overflow-hidden group">
               {/* Usaremos imagen abstracta de SIG o wireframe */}
               <div 
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                 style={{ backgroundImage: "url('/images/auditoria_forense_docs.png')" }}
               />
               <div className="absolute inset-0 bg-blue-900/10" />
            </div>
            
            <div className="order-1 lg:order-2">
               <div className="inline-flex gap-2 items-center text-xs font-mono text-zinc-500 mb-4 border border-zinc-200 px-2 py-1 bg-slate-50">
                 <Map className="h-3 w-3" /> ANÁLISIS SIG
               </div>
               <h3 className="text-3xl font-heading font-bold text-zinc-900 mb-4">
                 Plan Maestro de Movilidad Sostenible - Villavicencio
               </h3>
               <p className="text-zinc-600 leading-relaxed mb-6">
                 Actualización de la formulación del plan maestro y estructuración técnica, legal y financiera del Sistema Estratégico de Transporte Público (SETP). Financiado por el Gobierno Británico.
               </p>
               <div className="grid grid-cols-2 gap-4 border-t border-zinc-200 pt-6">
                  <div>
                    <h5 className="font-bold text-2xl text-zinc-900">100%</h5>
                    <p className="text-sm text-zinc-500">Cobertura Analizada</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-2xl text-zinc-900">SETP</h5>
                    <p className="text-sm text-zinc-500">Estructuración Integral</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] bg-zinc-100 border border-zinc-200 overflow-hidden group">
               {/* Usaremos imagen abstracta de modelo estructural */}
               <div 
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                 style={{ backgroundImage: "url('/images/estructural_wireframe.png')" }}
               />
               <div className="absolute inset-0 bg-gold-900/10" />
            </div>
            
            <div>
               <div className="inline-flex gap-2 items-center text-xs font-mono text-zinc-500 mb-4 border border-zinc-200 px-2 py-1 bg-slate-50">
                 <Layers className="h-3 w-3" /> MODELADO DE RIESGO
               </div>
               <h3 className="text-3xl font-heading font-bold text-zinc-900 mb-4">
                 Adaptación al Cambio Climático Sector Minero Energético
               </h3>
               <p className="text-zinc-600 leading-relaxed mb-6">
                 Herramienta para la valoración y priorización de medidas de adaptación, estructurada con la UPME y Colciencias. Un proyecto estratégico que fusiona planeación energética con analítica de vulnerabilidad climática.
               </p>
               <div className="grid grid-cols-2 gap-4 border-t border-zinc-200 pt-6">
                  <div>
                    <h5 className="font-bold text-2xl text-zinc-900">UPME</h5>
                    <p className="text-sm text-zinc-500">Entidad Gestora</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-2xl text-zinc-900">AI Model</h5>
                    <p className="text-sm text-zinc-500">Toma de Decisiones</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

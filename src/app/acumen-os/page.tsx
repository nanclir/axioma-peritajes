import { ArrowRight, Terminal, Cpu, Network, ShieldCheck, Database } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "ACUMEN OS | Inteligencia Operacional",
  description: "El sistema operativo de la infraestructura. Plataforma de trazabilidad, datos y gemelos digitales de Acumen.",
};

export default function AcumenOSPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pt-28 pb-24 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Grid Background */}
      <div className="fixed inset-0 grid-bg opacity-[0.15] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <section className="pt-12 pb-24 border-b border-zinc-800">
          <div className="flex items-center gap-3 mb-8">
             <div className="h-px w-8 bg-blue-500"></div>
             <span className="font-mono text-xs tracking-widest text-blue-400 uppercase">Architecture Overview</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tight">
              Ingeniería codificada en flujos de datos puros.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-10">
              ACUMEN OS no es un simple software; es el cerebro operativo de la firma. Hemos estructurado el conocimiento empírico de décadas en algoritmos de trazabilidad, dashboards analíticos y flujos de automatización con Inteligencia Artificial.
            </p>
          </div>
        </section>

        {/* Core Modules */}
        <section className="py-24 border-b border-zinc-800">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative aspect-square border border-zinc-800 bg-zinc-900/40 p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/auditoria_forense_docs.png')] bg-cover bg-center opacity-30 mix-blend-screen grayscale" />
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-transparent to-zinc-900/20" />
                
                {/* Abstract UI Elements */}
                <div className="relative z-10 w-full max-w-sm">
                  <div className="flex items-center justify-between border-b border-zinc-700 pb-2 mb-4">
                    <span className="font-mono text-xs text-zinc-500">DATA.STREAM_01</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-zinc-800 rounded overflow-hidden">
                      <div className="h-full bg-blue-500/50 w-[78%]"></div>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded overflow-hidden">
                      <div className="h-full bg-blue-500/30 w-[45%]"></div>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded overflow-hidden">
                      <div className="h-full bg-blue-500/70 w-[92%]"></div>
                    </div>
                  </div>
                </div>
             </div>

             <div className="order-1 md:order-2">
               <h2 className="text-3xl font-heading font-bold text-white mb-6">Trazabilidad Total</h2>
               <p className="text-zinc-400 leading-relaxed mb-8">
                 En proyectos de alta complejidad, la pérdida de información es el mayor riesgo. ACUMEN OS registra cada parámetro de diseño, cada decisión de interventoría y cada cambio contractual en una línea de tiempo inmutable.
               </p>
               <ul className="space-y-6">
                 <li className="flex gap-4">
                   <Database className="h-6 w-6 text-blue-400 shrink-0" />
                   <div>
                     <h4 className="font-bold text-white mb-1 font-mono text-sm">ARCHIVOS UNIFICADOS</h4>
                     <p className="text-sm text-zinc-500">Centralización de planimetría, especificaciones e historial de cambios.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <ShieldCheck className="h-6 w-6 text-emerald-400 shrink-0" />
                   <div>
                     <h4 className="font-bold text-white mb-1 font-mono text-sm">AUDITORÍA FORENSE</h4>
                     <p className="text-sm text-zinc-500">Búsqueda semántica (NLP) sobre miles de documentos técnicos para identificar desviaciones en segundos.</p>
                   </div>
                 </li>
               </ul>
             </div>
           </div>
        </section>

        {/* Intelligence / Dashboards */}
        <section className="py-24">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl font-heading font-bold text-white mb-6">Analítica e Inteligencia Artificial</h2>
               <p className="text-zinc-400 leading-relaxed mb-8">
                 Pasamos de la intuición a la predicción. Implementamos modelos de Machine Learning y dashboards espaciales para mapear el riesgo territorial y la viabilidad de la infraestructura.
               </p>
               <ul className="space-y-6">
                 <li className="flex gap-4">
                   <Network className="h-6 w-6 text-gold-400 shrink-0" />
                   <div>
                     <h4 className="font-bold text-white mb-1 font-mono text-sm">GEMELOS DIGITALES</h4>
                     <p className="text-sm text-zinc-500">Modelado BIM integrado con datos de sensores para simular fallas antes de que ocurran.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <Cpu className="h-6 w-6 text-blue-400 shrink-0" />
                   <div>
                     <h4 className="font-bold text-white mb-1 font-mono text-sm">LLM & PROCESAMIENTO LEGAL</h4>
                     <p className="text-sm text-zinc-500">Asistencia de IA generativa para la estructuración rápida de reclamaciones técnicas y pliegos de condiciones.</p>
                   </div>
                 </li>
               </ul>
             </div>

             <div className="relative aspect-square border border-zinc-800 bg-zinc-900/40 p-8 flex items-center justify-center">
                <div className="absolute inset-0 dot-pattern opacity-10 mix-blend-screen" />
                <Terminal className="h-24 w-24 text-zinc-800 absolute opacity-30" />
                
                <div className="w-full h-full border border-zinc-700/50 p-4 bg-black/40 backdrop-blur-md relative z-10 font-mono text-xs text-blue-300 flex flex-col justify-end">
                   <div className="space-y-1 opacity-70">
                     <p>{">"} INITIALIZING MODEL [ACUMEN_GEO_V4]</p>
                     <p>{">"} LOADING TERRAIN DATA...</p>
                     <p>{">"} 1,402,993 POINTS PROCESSED</p>
                     <p>{">"} RUNNING STRESS SIMULATION</p>
                     <p className="text-emerald-400">{">"} ANALYSIS COMPLETE. STRUCTURAL INTEGRITY: 98.4%</p>
                     <p className="animate-pulse">_</p>
                   </div>
                </div>
             </div>
           </div>
        </section>

      </div>
    </div>
  );
}

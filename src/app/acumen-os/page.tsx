import { ArrowRight, Terminal, Cpu, Network, ShieldCheck, Database } from "lucide-react";

export const metadata = {
  title: "ACUMEN OS | Inteligencia Operacional",
  description: "El sistema operativo de la infraestructura. Plataforma de trazabilidad, datos y gemelos digitales de Acumen.",
};

export default function AcumenOSPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-zinc-900 pb-0 font-sans selection:bg-blue-500/30 selection:text-blue-900">
      
      {/* Grid Background */}
      <div className="fixed inset-0 grid-bg opacity-[0.05] pointer-events-none z-0 filter invert"></div>

      {/* Header Section (Full Width) */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" 
            style={{ backgroundImage: "url('/images/geotecnico_tunnel.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-slate-50/20 to-transparent z-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
             <div className="h-px w-8 bg-blue-600"></div>
             <span className="font-mono text-xs tracking-widest text-blue-600 uppercase font-bold">Architecture Overview</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-zinc-900 mb-8 tracking-tight drop-shadow-sm">
              Ingeniería codificada en flujos de datos puros.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed mb-10 drop-shadow-sm">
              ACUMEN OS no es un simple software; es el cerebro operativo de la firma. Hemos estructurado el conocimiento empírico de décadas en algoritmos de trazabilidad, dashboards analíticos y flujos de automatización con Inteligencia Artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto Section & Flowchart (Full Width) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-zinc-200">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" 
          style={{ backgroundImage: "url('/images/auditoria_forense_docs_v2.png')" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Text Column */}
            <div className="prose prose-zinc max-w-none glass-card p-8 md:p-12 border border-zinc-200">
              <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-6">
                Ingeniería aumentada por inteligencia artificial.
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                ACUMEN OS es la arquitectura operativa e intelectual de ACUMEN Ingeniería S.A.S., diseñada para integrar experiencia técnica, pensamiento estratégico, automatización e inteligencia artificial aplicada en la gestión de proyectos de ingeniería, infraestructura y territorio.
              </p>
              
              <div className="my-10 p-6 border-l-4 border-gold-500 bg-gold-500/10">
                <p className="text-xl font-heading text-zinc-900 italic m-0">
                  "La inteligencia artificial no reemplaza la experiencia ni el criterio técnico; los amplifica."
                </p>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Más que una plataforma tecnológica, ACUMEN OS es un sistema de trabajo que articula: <strong className="text-zinc-900">conocimiento especializado, análisis técnico, metodologías de ingeniería, automatización documental, gestión de información y herramientas contemporáneas de inteligencia artificial</strong>, con el propósito de aumentar la capacidad analítica, operativa y estratégica de los proyectos.
              </p>

              <h3 className="text-zinc-900 font-bold mt-8 mb-4">Un ecosistema evolutivo integrado por:</h3>
              <ul className="text-zinc-600 space-y-2 mb-8">
                <li>• Bases documentales inteligentes y generación asistida de informes.</li>
                <li>• Automatización de flujos operativos y modelación de información.</li>
                <li>• Gestión de proyectos, seguimiento técnico y sistemas de soporte a decisiones.</li>
              </ul>

              <p className="text-zinc-600 leading-relaxed">
                ACUMEN OS representa una nueva forma de ejercer la ingeniería: <strong className="text-zinc-900">más conectada, más analítica, más eficiente y tecnológicamente aumentada</strong>, sin perder el rigor técnico, la comprensión territorial ni el criterio humano que requieren las decisiones complejas. En esencia, es el motor para transformar información en decisiones de alto valor.
              </p>
            </div>

            {/* Architecture Flowchart Visual */}
            <div className="relative flex flex-col items-center justify-center p-8 glass-card border border-zinc-200 rounded-sm overflow-hidden shadow-sm">
              
              {/* Background Image inside flowchart */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" 
                style={{ backgroundImage: "url('/images/geotecnico_tunnel.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/20 pointer-events-none" />

              <div className="absolute inset-0 dot-pattern opacity-10 filter invert pointer-events-none" />

              <h3 className="absolute top-6 left-6 font-mono text-xs tracking-widest text-zinc-500 font-bold">SYSTEM.ARCHITECTURE</h3>

              {/* Input Level */}
              <div className="flex w-full justify-around gap-4 mb-8 mt-12 relative z-10">
                <div className="flex-1 bg-white border border-zinc-200 shadow-sm p-4 text-center rounded-sm">
                  <span className="block text-xs font-mono text-zinc-500 mb-1">INPUT.01</span>
                  <span className="font-bold text-sm text-zinc-900">DATOS DEL PROYECTO</span>
                </div>
                <div className="flex-1 bg-white border border-zinc-200 shadow-sm p-4 text-center rounded-sm">
                  <span className="block text-xs font-mono text-zinc-500 mb-1">INPUT.02</span>
                  <span className="font-bold text-sm text-zinc-900">CRITERIO HUMANO</span>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="flex justify-center w-full relative z-0 h-8 -mt-8 mb-4">
                <div className="w-1/2 border-b border-r border-zinc-300"></div>
                <div className="w-1/2 border-b border-l border-zinc-300"></div>
              </div>
              <div className="w-px h-8 bg-zinc-300 relative z-0"></div>

              {/* Core Engine Level */}
              <div className="w-full bg-blue-50 border border-blue-200 shadow-sm p-6 text-center relative z-10">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600"></div>
                 <h4 className="font-heading font-bold text-xl text-blue-900 mb-2 tracking-widest">ACUMEN OS CORE</h4>
                 <div className="flex justify-center gap-2 text-xs font-mono text-blue-700 font-bold">
                   <span className="px-2 py-1 bg-white border border-blue-200 rounded">IA</span>
                   <span className="px-2 py-1 bg-white border border-blue-200 rounded">BIM / SIG</span>
                   <span className="px-2 py-1 bg-white border border-blue-200 rounded">AUTOMATIZACIÓN</span>
                 </div>
              </div>

              {/* Connecting Line */}
              <div className="w-px h-12 bg-gradient-to-b from-blue-400 to-gold-400 relative z-0">
                <ArrowRight className="absolute bottom-0 -ml-2 text-gold-500 h-4 w-4 rotate-90" />
              </div>

              {/* Output Level */}
              <div className="w-full bg-white border border-gold-400 shadow-sm p-6 text-center relative z-10 mt-2">
                 <h4 className="font-heading font-bold text-lg text-gold-600 mb-1">DECISIONES DE ALTO VALOR</h4>
                 <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Trazabilidad Técnica y Legal</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Core Modules (Full Bleed Background) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-zinc-200">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none" 
          style={{ backgroundImage: "url('/images/auditoria_forense_docs_v2.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/70 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-1 md:order-1 glass-card p-10 border border-zinc-200 shadow-xl">
               <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-6">Trazabilidad Total</h2>
               <p className="text-zinc-600 leading-relaxed mb-8">
                 En proyectos de alta complejidad, la pérdida de información es el mayor riesgo. ACUMEN OS registra cada parámetro de diseño, cada decisión de interventoría y cada cambio contractual en una línea de tiempo inmutable.
               </p>
               <ul className="space-y-6">
                 <li className="flex gap-4">
                   <Database className="h-6 w-6 text-blue-600 shrink-0" />
                   <div>
                     <h4 className="font-bold text-zinc-900 mb-1 font-mono text-sm">ARCHIVOS UNIFICADOS</h4>
                     <p className="text-sm text-zinc-600">Centralización de planimetría, especificaciones e historial de cambios.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <ShieldCheck className="h-6 w-6 text-emerald-500 shrink-0" />
                   <div>
                     <h4 className="font-bold text-zinc-900 mb-1 font-mono text-sm">AUDITORÍA FORENSE</h4>
                     <p className="text-sm text-zinc-600">Búsqueda semántica (NLP) sobre miles de documentos técnicos para identificar desviaciones en segundos.</p>
                   </div>
                 </li>
               </ul>
             </div>

             <div className="order-2 md:order-2 relative aspect-square border border-zinc-200 bg-white shadow-sm p-8 flex items-center justify-center overflow-hidden rounded-sm">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" 
                  style={{ backgroundImage: "url('/images/estructural_wireframe.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
                
                {/* Abstract UI Elements */}
                <div className="relative z-10 w-full max-w-sm">
                  <div className="flex items-center justify-between border-b border-zinc-200 pb-2 mb-4">
                    <span className="font-mono text-xs text-zinc-500 font-bold">DATA.STREAM_01</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-zinc-100 rounded overflow-hidden">
                      <div className="h-full bg-blue-500/70 w-[78%]"></div>
                    </div>
                    <div className="h-2 w-full bg-zinc-100 rounded overflow-hidden">
                      <div className="h-full bg-blue-500/50 w-[45%]"></div>
                    </div>
                    <div className="h-2 w-full bg-zinc-100 rounded overflow-hidden">
                      <div className="h-full bg-blue-500/90 w-[92%]"></div>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Intelligence / Dashboards */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div 
           className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" 
           style={{ backgroundImage: "url('/images/geotecnico_tunnel.png')" }}
         />
         <div className="absolute inset-0 dot-pattern opacity-10 filter invert pointer-events-none z-0" />
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative aspect-square border border-zinc-200 bg-slate-50 p-8 flex items-center justify-center overflow-hidden rounded-sm shadow-sm">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" 
                  style={{ backgroundImage: "url('/images/estructural_wireframe.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/95 via-slate-50/50 to-transparent pointer-events-none" />
                
                <Terminal className="h-24 w-24 text-zinc-200 absolute opacity-50" />
                
                <div className="w-full h-full border border-zinc-300 p-4 bg-slate-900 relative z-10 font-mono text-xs text-blue-300 flex flex-col justify-end rounded-sm shadow-xl overflow-hidden">
                   {/* Terminal Inner Background */}
                   <div 
                     className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" 
                     style={{ backgroundImage: "url('/images/estructural_wireframe.png')", filter: "contrast(1.5) brightness(0.8)" }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none" />
                   
                   <div className="space-y-1 opacity-100 relative z-10">
                     <p>{">"} INITIALIZING MODEL [ACUMEN_GEO_V4]</p>
                     <p>{">"} LOADING TERRAIN DATA...</p>
                     <p>{">"} 1,402,993 POINTS PROCESSED</p>
                     <p>{">"} RUNNING STRESS SIMULATION</p>
                     <p className="text-emerald-400 font-bold">{">"} ANALYSIS COMPLETE. STRUCTURAL INTEGRITY: 98.4%</p>
                     <p className="animate-pulse">_</p>
                   </div>
                </div>
             </div>

             <div className="order-1 md:order-2 glass-card p-8 md:p-12 border border-zinc-200">
               <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-6">Analítica e Inteligencia Artificial</h2>
               <p className="text-zinc-600 leading-relaxed mb-8">
                 Pasamos de la intuición a la predicción. Implementamos modelos de Machine Learning y dashboards espaciales para mapear el riesgo territorial y la viabilidad de la infraestructura.
               </p>
               <ul className="space-y-6">
                 <li className="flex gap-4">
                   <Network className="h-6 w-6 text-gold-500 shrink-0" />
                   <div>
                     <h4 className="font-bold text-zinc-900 mb-1 font-mono text-sm">GEMELOS DIGITALES</h4>
                     <p className="text-sm text-zinc-600">Modelado BIM integrado con datos de sensores para simular fallas antes de que ocurran.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <Cpu className="h-6 w-6 text-blue-600 shrink-0" />
                   <div>
                     <h4 className="font-bold text-zinc-900 mb-1 font-mono text-sm">LLM & PROCESAMIENTO LEGAL</h4>
                     <p className="text-sm text-zinc-600">Asistencia de IA generativa para la estructuración rápida de reclamaciones técnicas y pliegos de condiciones.</p>
                   </div>
                 </li>
               </ul>
             </div>
           </div>
         </div>
      </section>

    </div>
  );
}

import { ArrowRight, Terminal, Cpu, Network, ShieldCheck, Database, Hexagon, Activity, FileText, MapPin, Lock } from "lucide-react";

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
            <p className="text-xl md:text-2xl text-zinc-800 font-normal leading-relaxed mb-10 drop-shadow-sm">
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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/80 to-transparent z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Text Column */}
            <div className="prose prose-zinc max-w-none">
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
            <div className="relative flex flex-col items-center justify-start p-0 h-full w-full pt-2">
              <style>{`
                @keyframes masterDrop {
                  0% { top: 0%; opacity: 0; }
                  10% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { top: 98%; opacity: 0; }
                }
                .animate-master-drop {
                  animation: masterDrop 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }
              `}</style>
              
              <div className="absolute inset-0 dot-pattern opacity-10 filter invert pointer-events-none" />
              <h3 className="absolute top-0 left-0 font-mono text-xs tracking-widest text-zinc-500 font-bold">SYSTEM.ARCHITECTURE_V3</h3>

              {/* Traveling Dot */}
              <div className="absolute w-2 h-2 bg-blue-500 rounded-full left-1/2 -translate-x-1/2 shadow-[0_0_15px_3px_rgba(59,130,246,0.8)] z-30 animate-master-drop pointer-events-none"></div>

              <div className="w-full flex flex-col items-center justify-between h-full relative z-10 mt-8 mb-2">
                
                {/* Level 1: Data Ingestion */}
                <div className="flex w-full justify-between gap-2 md:gap-4">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-emerald-300 bg-emerald-50 shadow-sm flex items-center justify-center mb-1 z-10">
                      <FileText className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500 text-center">DOCS.LEGALES</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-blue-300 bg-blue-50 shadow-sm flex items-center justify-center mb-1 z-10">
                      <MapPin className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-[9px] font-mono text-blue-600 font-bold text-center">GEO.DATA</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-indigo-300 bg-indigo-50 shadow-sm flex items-center justify-center mb-1 z-10">
                      <Activity className="w-4 h-4 text-indigo-500" />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500 text-center">SENSORS.IOT</span>
                  </div>
                </div>

                {/* Level 2: AI Processing (New) */}
                <div className="w-full relative flex flex-col items-center mt-2">
                  {/* Connectors from Level 1 to 2 */}
                  <div className="w-full h-8 flex justify-center pointer-events-none z-0">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                      <path d="M 16% 0 L 16% 100" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-60 animate-pulse" />
                      <path d="M 50% 0 L 50% 100" fill="none" stroke="#60a5fa" strokeWidth="2" className="opacity-80" />
                      <path d="M 84% 0 L 84% 100" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-60 animate-pulse" />
                    </svg>
                  </div>

                  <div className="flex w-full justify-between gap-3 px-2 relative z-10">
                    <div className="flex-1 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm border border-emerald-200 shadow-sm py-4 px-2 rounded-lg min-h-[60px]">
                      <span className="text-[10px] font-mono text-emerald-600 font-bold">NLP.ENGINE</span>
                      <span className="text-[9px] text-zinc-500 leading-tight text-center mt-1">Análisis Semántico</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center bg-blue-50/80 backdrop-blur-sm border border-blue-200 shadow-sm py-4 px-2 rounded-lg min-h-[60px]">
                      <span className="text-[10px] font-mono text-blue-600 font-bold">VISION.AI</span>
                      <span className="text-[9px] text-blue-500 leading-tight text-center mt-1">Fotogrametría</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm border border-indigo-200 shadow-sm py-4 px-2 rounded-lg min-h-[60px]">
                      <span className="text-[10px] font-mono text-indigo-600 font-bold">PREDICTIVE.ML</span>
                      <span className="text-[9px] text-zinc-500 leading-tight text-center mt-1">Simulación</span>
                    </div>
                  </div>
                </div>

                {/* Connectors from Level 2 to 2.5 */}
                <div className="w-full h-8 flex justify-center pointer-events-none z-0 mt-2">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <path d="M 16% 0 L 16% 100" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-60 animate-pulse" />
                    <path d="M 50% 0 L 50% 100" fill="none" stroke="#60a5fa" strokeWidth="2" className="opacity-80" />
                    <path d="M 84% 0 L 84% 100" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-60 animate-pulse" />
                  </svg>
                </div>

                {/* Level 2.5: Structuring Layer (New) */}
                <div className="flex w-full justify-between gap-3 px-2 relative z-10">
                  <div className="flex-1 flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm border border-emerald-200/50 shadow-sm py-2 px-2 rounded-lg">
                    <span className="text-[9px] font-mono text-emerald-700 font-bold">LEGAL.GRAPH</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center bg-blue-50/50 backdrop-blur-sm border border-blue-200/50 shadow-sm py-2 px-2 rounded-lg">
                    <span className="text-[9px] font-mono text-blue-700 font-bold">BIM.CLOUD</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm border border-indigo-200/50 shadow-sm py-2 px-2 rounded-lg">
                    <span className="text-[9px] font-mono text-indigo-700 font-bold">RISK.MATRIX</span>
                  </div>
                </div>

                {/* Connectors from Level 2.5 to Core */}
                <div className="w-full flex-1 min-h-[30px] relative flex justify-center mt-2 mb-2 pointer-events-none z-0">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <path d="M 16% 0 C 16% 50, 50% 50, 50% 100" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-60" />
                    <path d="M 50% 0 L 50% 100" fill="none" stroke="#60a5fa" strokeWidth="2" className="opacity-80" />
                    <path d="M 84% 0 C 84% 50, 50% 50, 50% 100" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-60" />
                  </svg>
                </div>

                {/* Level 3: Center Core (Halved) */}
                <div className="relative flex items-center justify-center mt-2 mb-2 w-full">
                  <div className="absolute w-40 h-40 border border-blue-200 rounded-full animate-[spin_20s_linear_infinite] opacity-50"></div>
                  <div className="absolute w-28 h-28 border border-gold-200 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-50"></div>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center bg-white/40 backdrop-blur-md p-4 w-[60%] min-h-[100px] rounded-2xl border border-white/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]">
                    <Hexagon className="w-10 h-10 text-gold-500 drop-shadow-md mb-2" fill="currentColor" fillOpacity={0.1} strokeWidth={1.5} />
                    <h4 className="font-heading font-bold text-sm text-zinc-900 tracking-widest">ACUMEN CORE</h4>
                    <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                      <span className="text-[8px] font-mono bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-200">LLM.SYNC</span>
                      <span className="text-[8px] font-mono bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-200">BIM.SYNC</span>
                      <span className="text-[8px] font-mono bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded border border-blue-200">KNOWLEDGE.GRAPH</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Layer */}
                <div className="w-px h-6 bg-gradient-to-b from-blue-400 to-emerald-400 relative z-0 mt-1 mb-1">
                  <ArrowRight className="absolute bottom-0 -ml-2 text-emerald-500 h-4 w-4 rotate-90" />
                </div>
                
                <div className="w-full max-w-sm bg-white/80 backdrop-blur-md border border-emerald-300 shadow-lg p-3 text-center relative z-10 rounded-sm mt-0">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <h4 className="font-heading font-bold text-xs text-zinc-900">DICTAMEN VERIFICADO</h4>
                  </div>
                  <p className="text-[8px] font-mono text-zinc-500 break-all">HASH: 0x8F9A2B4C6D8E0F1A3B5C7D9E</p>
                </div>

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
             <div className="order-1 md:order-1">
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

             <div className="order-2 md:order-2 relative flex items-center justify-center h-[400px]">

                
                {/* Abstract UI Elements - Audit Ledger */}
                <div className="relative z-10 w-full max-w-sm bg-white/40 backdrop-blur-sm border border-zinc-200/50 p-6 rounded-lg shadow-2xl">
                  <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3 mb-5">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-emerald-600" />
                      <span className="font-mono text-xs text-zinc-600 font-bold tracking-wider">AUDIT.LEDGER_SYS</span>
                    </div>
                    <div className="flex gap-1.5 items-center">
                      <span className="text-[9px] font-mono text-zinc-400">SYNCING</span>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="relative border-l border-zinc-300 ml-3 space-y-6 pb-2">
                    
                    {/* Node 1 */}
                    <div className="relative pl-6">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-300 border-2 border-white"></div>
                      <span className="text-[10px] font-mono text-zinc-400 block mb-1">T-MINUS 04:12:00</span>
                      <p className="text-xs font-bold text-zinc-900 leading-tight">Modificación Estructural Detectada</p>
                      <p className="text-[9px] font-mono text-zinc-500 mt-1 truncate">REV.01_PL_ESTRUCTURAL_V3.dwg</p>
                    </div>

                    {/* Node 2 */}
                    <div className="relative pl-6">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-white animate-pulse"></div>
                      <span className="text-[10px] font-mono text-blue-500 font-bold block mb-1">PROCESSING NOW</span>
                      <p className="text-xs font-bold text-blue-900 leading-tight">Análisis de Tolerancias vía IA</p>
                      <div className="mt-2 h-1 w-full bg-blue-100 rounded overflow-hidden">
                        <div className="h-full bg-blue-500 w-[68%]"></div>
                      </div>
                    </div>

                    {/* Node 3 */}
                    <div className="relative pl-6 opacity-40">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-zinc-300 bg-white"></div>
                      <span className="text-[10px] font-mono text-zinc-400 block mb-1">PENDING VERIFICATION</span>
                      <p className="text-xs font-bold text-zinc-900 leading-tight">Generación de Sello Criptográfico</p>
                      <p className="text-[9px] font-mono text-zinc-500 mt-1">AWAITING NLP CONSENSUS</p>
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
         <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/80 to-transparent z-0" />
         <div className="absolute inset-0 dot-pattern opacity-10 filter invert pointer-events-none z-0" />
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative flex items-center justify-center h-[450px]">
                {/* Abstract UI Elements - Digital Twin HUD */}
                <div className="relative z-10 w-full max-w-lg bg-slate-900/90 backdrop-blur-md border border-blue-500/30 p-1 rounded-lg shadow-2xl flex overflow-hidden">
                  
                  {/* Left Panel: Console */}
                  <div className="w-1/2 p-5 font-mono text-[10px] text-blue-300 flex flex-col justify-end relative bg-black/40">
                    <div className="absolute top-3 left-3 text-zinc-500 text-[9px] tracking-widest">SYS.CONSOLE</div>
                    <div className="space-y-1.5 opacity-90 mt-8">
                      <p>{">"} INITIALIZING MODEL_GEO_V4</p>
                      <p className="text-zinc-500">{">"} LOADING MESH: 1.4M VERTICES...</p>
                      <p>{">"} CALCULATING STRESS TENSORS</p>
                      <p>{">"} APPLYING NON-LINEAR SOLVER</p>
                      <p className="text-emerald-400 font-bold mt-2">{">"} ANALYSIS COMPLETE. INTEGRITY: 98.4%</p>
                      <p className="animate-pulse">_</p>
                    </div>
                  </div>

                  {/* Right Panel: Radar/Scanner */}
                  <div className="w-1/2 p-5 relative flex items-center justify-center border-l border-blue-500/20">
                    <div className="absolute top-3 left-3 text-zinc-500 text-[9px] tracking-widest">SPATIAL.SCAN</div>
                    <div className="absolute top-3 right-3 text-blue-400 text-[9px] font-mono">LAT:6.2442</div>
                    <div className="absolute bottom-3 right-3 text-blue-400 text-[9px] font-mono">LNG:-75.5812</div>
                    
                    {/* Radar Circles */}
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <div className="absolute inset-0 border border-blue-500/30 rounded-full"></div>
                      <div className="absolute w-24 h-24 border border-blue-400/20 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                      <div className="absolute w-16 h-16 border border-emerald-500/40 rounded-full"></div>
                      
                      {/* Scanning Line */}
                      <div className="absolute w-full h-full animate-[spin_4s_linear_infinite]">
                        <div className="w-1/2 h-px bg-gradient-to-r from-transparent to-emerald-400 absolute top-1/2 left-1/2 origin-left"></div>
                      </div>
                      
                      {/* Blips */}
                      <div className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full top-6 right-8 animate-pulse"></div>
                      <div className="absolute w-1 h-1 bg-blue-400 rounded-full bottom-8 left-10"></div>
                      
                      <Network className="w-5 h-5 text-emerald-500/80 absolute z-10" />
                    </div>
                  </div>
                  
                </div>
             </div>

             <div className="order-1 md:order-2">
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

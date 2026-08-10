import Link from "next/link";
import { ArrowRight, Network, Activity, History, Database, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Decision Intelligence Lab® | ACUMEN INGENIERÍA S.A.S.",
  description: "Diseñamos decisiones que resisten el tiempo, la incertidumbre y el escrutinio técnico. Arquitectura de decisiones basada en datos.",
};

export default function DecisionIntelligenceLabPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none grayscale" 
            style={{ backgroundImage: "url('/images/estructural_wireframe.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/40 to-transparent z-10" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-mono tracking-widest text-zinc-500 uppercase bg-zinc-200 mb-6">
              Línea de Negocio Especializada
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight">
              ACUMEN <br/> Decision Intelligence Lab®.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-normal mb-10">
              Diseñamos decisiones que resisten el tiempo, la incertidumbre y el escrutinio técnico. Estructuramos, organizamos y conectamos de forma lógica todos los elementos que intervienen en una decisión estratégica para grandes proyectos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto" className="inline-flex justify-center items-center px-6 py-3 bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all group">
                Solicitar Asesoría
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares de Especialidad */}
      <section className="bg-slate-50 border-y border-zinc-200 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-12">Dimensiones del Laboratorio</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Network className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Inteligencia Analítica y Territorial</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Convertimos grandes volúmenes de datos en conocimiento mediante IA, aprendizaje automático y sistemas de información geográfica (SIG) para analizar la decisión directamente sobre el territorio.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Modelos espacio-temporales y satelitales</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Ciencia de datos aplicada a la infraestructura</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Activity className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Modelación Multicriterio (MCDA)</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Evaluamos alternativas estructurando restricciones y riesgos bajo metodologías rigurosas (AHP, PROMETHEE, TOPSIS) que permiten resolver balances complejos (trade-offs).
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Optimización multiobjetivo y lógica difusa</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Ponderación científica de criterios socioambientales y técnicos</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <History className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Inteligencia Colaborativa y Consenso</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Diseñamos metodologías participativas que integran expertos, comunidades y autoridades bajo esquemas estructurados, asegurando que las decisiones colectivas estén basadas en evidencia.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Análisis estructurado de actores y dependencias</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Facilitación técnica de decisiones complejas</li>
              </ul>
            </div>

            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Database className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Digital Decision Twin™</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                No entregamos únicamente un informe. Proveemos un Gemelo Digital de Decisiones donde el cliente puede modificar supuestos y simular nuevos escenarios en tiempo real.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Plataformas inteligentes de simulación en vivo</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Trazabilidad del ciclo de vida de la decisión</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Especializado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-4">Liderazgo Técnico y Científico</h2>
        <p className="text-zinc-600 mb-12 max-w-2xl text-lg">
          La máxima jerarquía académica y experimental aplicada al diseño y estructuración de sus decisiones críticas.
        </p>

        <div className="grid md:grid-cols-1 gap-12 items-start">
          {/* Perfil Ricardo Smith */}
          <div className="border border-zinc-200 bg-white p-8 flex flex-col md:flex-row gap-8 shadow-sm">
            <div className="w-full md:w-1/3 lg:w-1/4 relative aspect-[3/4] bg-zinc-100 border border-zinc-200 shrink-0">
              <div 
                className="absolute inset-0 bg-cover bg-[position:center_top] z-0" 
                style={{ backgroundImage: "url('/team/ricardo_smith.jpeg')" }}
              />
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4">
              <h3 className="text-3xl font-heading font-bold text-zinc-900 mb-1">PhD. Ricardo A. Smith Quintero</h3>
              <p className="text-gold-500 font-medium uppercase tracking-widest text-xs mb-6">Director de Decision Intelligence Lab®</p>
              <p className="text-zinc-700 leading-relaxed mb-6">
                Ingeniero Civil con Ph.D. de la Universidad Estatal de Colorado (EE. UU.). Profesor Emérito de la Universidad Nacional de Colombia y referente continental en planificación estratégica, optimización estocástica y toma de decisiones multiobjetivo bajo escenarios de incertidumbre y conflicto.
              </p>
              <div className="bg-slate-50 p-6 border border-zinc-100">
                <h4 className="font-bold text-zinc-900 mb-4 text-sm uppercase tracking-wide">Áreas de Impacto Científico</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3 text-sm text-zinc-600">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Toma de decisiones multiobjetivo y consenso</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Planificación estratégica de infraestructura</li>
                  </ul>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Estructuración de Gemelos Digitales de Decisiones</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Modelación matemática y analítica predictiva</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filosofía IA */}
        <div className="mt-16 bg-zinc-900 text-white p-8 md:p-12 border-l-4 border-gold-500 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/geotecnico_tunnel.png')] opacity-10 bg-cover bg-center pointer-events-none" />
          <div className="relative z-10">
            <h4 className="text-2xl font-heading font-bold mb-4 text-white">
              Sustento Científico y Trazabilidad
            </h4>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-4xl">
              Los marcos de decisión de <strong className="text-gold-500 font-bold tracking-wide">ACUMEN OS</strong> se basan en la rigurosidad analítica del PhD. Ricardo Smith. Cada decisión es explicable, auditable y transparente ante juntas directivas, tribunales y organismos multilaterales.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

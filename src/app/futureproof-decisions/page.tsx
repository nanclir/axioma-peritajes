import Link from "next/link";
import { ArrowRight, TrendingUp, Activity, Compass, Zap, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "FutureProof Decisions® | ACUMEN INGENIERÍA S.A.S.",
  description: "Ingeniería para decisiones bajo incertidumbre. Metodologías predictivas, estocásticas, de escenarios e incertidumbre profunda (DMDU).",
};

export default function FutureProofDecisionsPage() {
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
              FutureProof Decisions®.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-normal mb-10">
              Ingeniería para decisiones bajo incertidumbre. Porque el futuro no se predice: se prepara. Construimos soluciones robustas y adaptativas que continúan funcionando aun cuando el futuro sea diferente al esperado.
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
          <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-12">Niveles de Gestión de la Incertidumbre</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <TrendingUp className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Nivel I: Predicción Inteligente</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Cuando el futuro puede estimarse con suficiente precisión. Aplicamos modelos hidrológicos, hidráulicos, machine learning e inteligencia artificial espacio-temporal para forecasting y nowcasting.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Pronóstico de caudales, inundaciones y demanda de agua</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Modelos predictivos para movilidad y operación</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Activity className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Nivel II: Evaluación Probabilística de Riesgo</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Cuando las incertidumbres se describen mediante distribuciones de probabilidad. Empleamos simulaciones Monte Carlo, análisis Bayesiano, cadenas de Markov y modelos estocásticos avanzados.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Cuantificación de riesgo financiero en APP (VaR)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Optimización estocástica de planes de inversión</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Compass className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Nivel III: Escenarios Estratégicos</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Cuando el horizonte de tiempo hace imposible realizar predicciones confiables. Diseñamos e identificamos futuros alternativos a largo plazo utilizando análisis estructural y morfológico.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Prospectiva minero-energética y territorial</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Hojas de ruta estratégicas de resiliencia</li>
              </ul>
            </div>

            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Zap className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Nivel IV: Incertidumbre Profunda y Cisnes Negros</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Cuando no conocemos las probabilidades ni los modelos del futuro. Aplicamos Robust Decision Making (RDM) y Dynamic Adaptive Policy Pathways (DAPP) ante cisnes negros catastróficos.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Stress testing sistemático de infraestructura</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Planes adaptativos frente a crisis climáticas o geopolíticas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Especializado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-4">Liderazgo Técnico y Científico</h2>
        <p className="text-zinc-600 mb-12 max-w-2xl text-lg">
          La máxima jerarquía académica y experimental aplicada a blindar el futuro de sus proyectos contra la incertidumbre.
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
              <p className="text-gold-500 font-medium uppercase tracking-widest text-xs mb-6">Director de FutureProof Decisions®</p>
              <p className="text-zinc-700 leading-relaxed mb-6">
                Ingeniero Civil con Ph.D. de la Universidad Estatal de Colorado (EE. UU.). Posee más de 50 años de experiencia al más alto nivel académico y técnico. Profesor Emérito de la Universidad Nacional de Colombia y referente continental en planificación de recursos hidráulicos, hidrología estocástica y decisiones bajo escenarios de incertidumbre y riesgo profundo.
              </p>
              <div className="bg-slate-50 p-6 border border-zinc-100">
                <h4 className="font-bold text-zinc-900 mb-4 text-sm uppercase tracking-wide">Áreas de Impacto Científico</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3 text-sm text-zinc-600">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Planificación estocástica de recursos hídricos</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Diseño hidrológico e hidráulico robusto</li>
                  </ul>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Análisis estructural y modelado de escenarios</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Gestión de incertidumbre profunda (DMDU) y cisnes negros</li>
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
              De la Academia al Motor ACUMEN OS
            </h4>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-4xl">
              Los marcos de análisis bajo incertidumbre profunda y estocástica del PhD. Ricardo Smith han sido integrados en los algoritmos predictivos de <strong className="text-gold-500 font-bold tracking-wide">ACUMEN OS</strong>. Esto nos permite simular millones de combinaciones de riesgo en minutos, proveyendo certidumbre científica a su proyecto.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

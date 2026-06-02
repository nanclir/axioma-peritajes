import Link from "next/link";
import { ArrowRight, Waves, Network, ShieldAlert, CheckCircle2, History } from "lucide-react";

export const metadata = {
  title: "Riesgo Hidroclimatológico y Ambiental | ACUMEN INGENIERÍA S.A.S.",
  description: "Análisis estocástico, curvas IDF y reconstrucción algorítmica de datos para la reducción de incertidumbre en infraestructuras.",
};

export default function RiesgoHidroclimatologicoPage() {
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
              Riesgo Hidroclimatológico <br/> y Ambiental.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-normal mb-10">
              Transformamos la complejidad del clima y la escasez de información en decisiones estocásticas precisas. Aplicamos ciencia de datos de vanguardia para mitigar riesgos en megaproyectos y asegurar la resiliencia de su infraestructura.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto" className="inline-flex justify-center items-center px-6 py-3 bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all group">
                Consultar un Peritaje
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares de Especialidad */}
      <section className="bg-slate-50 border-y border-zinc-200 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-12">Nuestras Áreas de Especialidad</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Network className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Modelación Estocástica y Análisis de No-Estacionariedad</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Los registros del pasado ya no predicen el futuro. Implementamos métodos probabilísticos dinámicos para el diseño de infraestructura ante el cambio climático y fenómenos extremos.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Generación de series sintéticas lluvia-escorrentía</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Evaluación de extremos climáticos (Block Maxima y POT)</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Waves className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Diseño Urbano y Drenaje Inteligente</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Protección de ciudades e infraestructuras críticas mediante la evaluación avanzada de sistemas de drenaje y estanques de retención bajo condiciones de incertidumbre.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Curvas de Intensidad-Duración-Frecuencia (IDF)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Análisis de riesgo en sistemas de aguas urbanas</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <History className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Reconstrucción Algorítmica de Datos Faltantes</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                La escasez de datos no es una excusa válida. Recuperamos registros históricos incompletos para asegurar la certidumbre matemática de los estudios de viabilidad.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Imputación y extensión de series climáticas cortas</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Interpolación espacial con Semivariogramas (Kriging)</li>
              </ul>
            </div>

            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <ShieldAlert className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Análisis de Vulnerabilidad y Vida Útil de Embalses</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Auditoría técnica profunda sobre las operaciones y las estructuras hídricas, modelando el riesgo ante fenómenos naturales severos o sequías multianuales.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Análisis de incertidumbre en cargas de sedimentos</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Evaluación de capacidad de almacenamiento bajo sequías</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Especializado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-4">Liderazgo Técnico y Científico</h2>
        <p className="text-zinc-600 mb-12 max-w-2xl text-lg">
          La máxima jerarquía académica y experimental aplicada a la resolución de disputas de ingeniería y mitigación de riesgos.
        </p>

        <div className="grid md:grid-cols-1 gap-12 items-start">
          
          {/* Perfil Ricardo Smith */}
          <div className="border border-zinc-200 bg-white p-8 flex flex-col md:flex-row gap-8 shadow-sm">
            <div className="w-full md:w-1/3 lg:w-1/4 relative aspect-[3/4] bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-200">
              {/* NOTE: Placeholder image until ricardo_smith.jpg is uploaded */}
              <div 
                className="absolute inset-0 bg-cover bg-[position:center_top] z-0" 
                style={{ backgroundImage: "url('/images/auditoria_forense_docs_v2.png')" }}
              />
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4">
              <h3 className="text-3xl font-heading font-bold text-zinc-900 mb-1">PhD. Ricardo A. Smith Quintero</h3>
              <p className="text-gold-500 font-medium uppercase tracking-widest text-xs mb-6">Director de Riesgo Hidroclimatológico</p>
              <p className="text-zinc-700 leading-relaxed mb-6">
                Ingeniero Civil con Ph.D. de la Universidad Estatal de Colorado (EE. UU.). Posee más de 50 años de experiencia al más alto nivel académico y técnico. Profesor Emérito de la Universidad Nacional de Colombia y referente continental en planificación de recursos hidráulicos, hidrología estocástica y decisiones bajo escenarios de incertidumbre.
              </p>
              <div className="bg-slate-50 p-6 border border-zinc-100">
                <h4 className="font-bold text-zinc-900 mb-4 text-sm uppercase tracking-wide">Áreas de Impacto Científico</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3 text-sm text-zinc-600">
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Planificación de recursos hidráulicos</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Planificación estratégica y energética</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Diseño hidrológico y operación de embalses</li>
                    </ul>
                    <ul className="space-y-3 text-sm text-zinc-600">
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Optimización y Simulación (Investigación de Operaciones)</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Toma de decisiones bajo incertidumbre multiobjetivo</li>
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
            <h4 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2 text-white">
              De la Teoría Académica al Motor ACUMEN OS
            </h4>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-4xl">
              Toda la base matemática forjada por el PhD. Ricardo Smith en décadas de investigación sobre análisis espacial (Kriging), curvas de duración e incertidumbre bayesiana, está codificada hoy dentro de los algoritmos de <strong className="text-gold-500 font-bold tracking-wide">ACUMEN OS</strong>. Esto nos permite entregarle a su proyecto un diagnóstico técnico irrebatible en tribunales, licitaciones y mesas de decisión financiera.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

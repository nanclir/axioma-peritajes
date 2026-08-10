import Link from "next/link";
import { ArrowRight, Search, FileLineChart, Database, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Acreditación de Alta Calidad CNA | ACUMEN INGENIERÍA S.A.S.",
  description: "Consultoría especializada en la acreditación de programas de ingeniería ante el CNA. Diagnóstico, autoevaluación y preparación de pares con analítica avanzada.",
};

export default function AcreditacionIngenieriaPage() {
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
              Acreditación CNA <br/> Programas de Ingeniería.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-normal mb-10">
              Transformamos la acreditación en una estrategia de mejoramiento continuo. Acompañamos a las facultades e ingenierías mediante analítica institucional avanzada, inteligencia artificial y estructuración de evidencias con rigor científico.
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
          <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-12">Servicios de Calidad Académica</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Search className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Diagnóstico y Estrategia CNA</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Evaluamos integralmente los programas frente a lineamientos vigentes del CNA. Identificamos brechas, definimos matrices de evidencias e implementamos planes de comunicación institucional.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Diagnóstico de preparación y cumplimiento</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Cronograma de autoevaluación estructurado</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <FileLineChart className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Autoevaluación e Informe de Calidad</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Apoyamos las encuestas participativas (estudiantes, profesores, graduados, empleadores) y redactamos técnicamente el Informe de Autoevaluación y los planes de mejoramiento prioritarios.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Procesamiento estadístico de encuestas y talleres</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Elaboración de planes de mejoramiento multicriterio</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Database className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Evidencias e Indicadores Avanzados</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Diseñamos e implementamos sistemas digitales para gestionar indicadores del programa: Saber Pro, tasas de deserción curricular, empleabilidad y producción científica.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Repositorio digital de evidencias organizado</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Dashboards analíticos de rendimiento académico</li>
              </ul>
            </div>

            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Award className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Simulacro y Preparación de Visita</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Realizamos simulaciones completas de visitas de pares externos, entrevistas simuladas con actores clave del programa y brindamos apoyo directo durante la evaluación externa real.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Entrenamiento de directivos, docentes y estudiantes</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Acompañamiento y soporte técnico durante la visita</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Especializado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-4">Liderazgo Técnico y Científico</h2>
        <p className="text-zinc-600 mb-12 max-w-2xl text-lg">
          La máxima jerarquía académica y experimental aplicada al aseguramiento y acreditación de programas de educación superior.
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
              <p className="text-gold-500 font-medium uppercase tracking-widest text-xs mb-6">Director de Acreditación de Ingeniería</p>
              <p className="text-zinc-700 leading-relaxed mb-6">
                Ingeniero Civil con Ph.D. de la Universidad Estatal de Colorado (EE. UU.). Profesor Emérito y ex-Vicerrector de la Universidad Nacional de Colombia. Cuenta con amplia experiencia liderando procesos de autoevaluación, planeación curricular y acreditación institucional en el sector de educación superior en Colombia.
              </p>
              <div className="bg-slate-50 p-6 border border-zinc-100">
                <h4 className="font-bold text-zinc-900 mb-4 text-sm uppercase tracking-wide">Áreas de Impacto Científico y Académico</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3 text-sm text-zinc-600">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Autoevaluación e informes de acreditación CNA</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Planificación y dirección universitaria</li>
                  </ul>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Diseño curricular de programas de ingeniería</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Análisis institucional apoyado en minería de datos</li>
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
              De la Burocracia Documental a la Inteligencia Académica
            </h4>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-4xl">
              Nuestros procesos de acreditación se apoyan en el motor analítico de <strong className="text-gold-500 font-bold tracking-wide">ACUMEN OS</strong>. Dejamos atrás las metodologías tradicionales para procesar encuestas de forma ágil y generar tableros de control interactivos que encantan a los pares académicos del CNA.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

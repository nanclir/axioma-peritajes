import ContactForm from "@/components/ContactForm";
import { CheckCircle2, Landmark } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Peritaje Estructural | Axioma Peritajes",
  description: "Servicios expertos de peritaje estructural. Análisis patológico y evaluación de vulnerabilidad sísmica para procesos legales.",
};

export default function PeritajeEstructural() {
  return (
    <div className="min-h-screen bg-navy-900 pb-24">
      {/* Hero */}
      <div className="relative pt-20 pb-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/60 z-10" />
          <div className="absolute inset-0 bg-[url('/images/estructural_wireframe.png')] bg-cover bg-center opacity-60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-gold-500 font-semibold mb-4 text-sm tracking-wide uppercase">
              <Landmark className="h-5 w-5" /> Especialidad Técnica
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Peritaje Estructural</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Brindamos certeza técnica irrefutable sobre el estado, patologías y fallas constructivas en edificaciones y obras de infraestructura, respaldando su posición legal con evidencia científica sólida.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Content */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Alcance del Dictamen Pericial</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Nuestro equipo de ingenieros especialistas en estructuras emplea metodologías rigurosas y equipos de diagnóstico avanzado para determinar causas raíz de siniestros, fallas en materiales y errores de diseño o construcción.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Análisis patológico de estructuras en concreto y acero.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Evaluación de vulnerabilidad sísmica y cumplimiento normativo (NSR-10).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Determinación de causas en colapsos o fallas de servicio.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Revisión experta de memorias de cálculo y planos estructurales.</span>
              </li>
            </ul>

            <div className="bg-navy-800/50 p-6 border-l-4 border-gold-500 rounded-r-sm">
              <h3 className="text-lg font-heading font-bold text-white mb-2">Contradicción del Dictamen</h3>
              <p className="text-slate-400 text-sm">
                Actuamos como peritos de parte para refutar y contradecir dictámenes aportados por la contraparte que carezcan de rigor técnico, exponiendo falencias metodológicas frente a los tribunales.
              </p>
            </div>
            
            <div className="mt-8">
              <Link href="/servicios" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                ← Volver a todos los servicios
              </Link>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="sticky top-28">
              <ContactForm serviceName="Peritaje Estructural" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

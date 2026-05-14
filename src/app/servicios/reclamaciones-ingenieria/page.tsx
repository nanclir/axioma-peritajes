import ContactForm from "@/components/ContactForm";
import { CheckCircle2, Scale } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Reclamaciones en Ingeniería | Axioma Peritajes",
  description: "Asesoría experta en reclamaciones de ingeniería, cuantificación de daños y desequilibrio económico en contratos de obra.",
};

export default function ReclamacionesIngenieria() {
  return (
    <div className="min-h-screen bg-navy-900 pb-24">
      {/* Hero */}
      <div className="bg-navy-800 border-b border-slate-800 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-gold-500 font-semibold mb-4 text-sm tracking-wide uppercase">
              <Scale className="h-5 w-5" /> Especialidad Técnica
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Reclamaciones en Ingeniería</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Cuantificamos el impacto técnico y financiero de alteraciones contractuales, brindando el soporte pericial necesario para tribunales de arbitramento y litigios de alta complejidad.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Content */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Protección de sus Intereses Contractuales</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Los proyectos de infraestructura son susceptibles a imprevistos que alteran la ecuación económica inicial. Nuestro equipo interdisciplinario (ingenieros, peritos financieros y planificadores) documenta metódicamente las disrupciones para demostrar nexos de causalidad irrefutables.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Análisis y cuantificación de sobrecostos y mayor permanencia en obra.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Dictámenes sobre desequilibrio económico del contrato (Ecuación Contractual).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Evaluación de impactos por retrasos y análisis de cronogramas (Delay Analysis).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Acompañamiento técnico experto en Tribunales de Arbitramento Nacionales e Internacionales.</span>
              </li>
            </ul>

            <div className="bg-navy-800/50 p-6 border-l-4 border-gold-500 rounded-r-sm">
              <h3 className="text-lg font-heading font-bold text-white mb-2">Visión 360 Grados</h3>
              <p className="text-slate-400 text-sm">
                No solo entendemos la ingeniería; hablamos el lenguaje jurídico y financiero. Nuestros peritajes están diseñados para ser entendidos y valorados por abogados y jueces, garantizando que el rigor técnico se traduzca en éxito procesal.
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
              <ContactForm serviceName="Reclamaciones en Ingeniería" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

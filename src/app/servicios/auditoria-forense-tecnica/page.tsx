import ContactForm from "@/components/ContactForm";
import { CheckCircle2, Search } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Auditoría Forense Técnica | Axioma Peritajes",
  description: "Investigación exhaustiva e interdisciplinaria para detectar anomalías, fallas ocultas y responsabilidades en grandes proyectos de ingeniería.",
};

export default function AuditoriaForenseTecnica() {
  return (
    <div className="min-h-screen bg-navy-900 pb-24">
      {/* Hero */}
      <div className="bg-navy-800 border-b border-slate-800 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-gold-500 font-semibold mb-4 text-sm tracking-wide uppercase">
              <Search className="h-5 w-5" /> Especialidad Técnica
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Auditoría Forense Técnica</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Aplicamos métodos de investigación profunda para desentrañar la verdad oculta detrás de siniestros, sobrecostos injustificados y fallas catastróficas en megaproyectos.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Content */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-6">La Verdad Detrás de la Infraestructura</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Una auditoría forense en ingeniería va mucho más allá de una simple revisión de obra. Es una investigación interdisciplinaria y exhaustiva orientada a identificar desviaciones normativas, errores de diseño encubiertos, uso inadecuado de materiales y la cadena de responsabilidades (técnicas y administrativas) que llevaron a un fallo o a un detrimento patrimonial.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Análisis retrospectivo de diseños frente al desempeño real de la estructura.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Trazabilidad de ensayos de laboratorio y control de calidad de materiales.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Investigación de sobrecostos mediante análisis de presupuestos y actas de obra.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Dictámenes de responsabilidad profesional en fallas constructivas.</span>
              </li>
            </ul>

            <div className="bg-navy-800/50 p-6 border-l-4 border-gold-500 rounded-r-sm">
              <h3 className="text-lg font-heading font-bold text-white mb-2">Para Casos de Alta Complejidad</h3>
              <p className="text-slate-400 text-sm">
                Nuestros hallazgos se documentan siguiendo la estricta cadena de custodia de la evidencia técnica, garantizando que el dictamen final sea una pieza clave e irrefutable ante órganos de control, aseguradoras o tribunales penales y administrativos.
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
              <ContactForm serviceName="Auditoría Forense Técnica" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

import ContactForm from "@/components/ContactForm";
import { CheckCircle2, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Peritaje Geotécnico | Acumen Peritajes",
  description: "Dictámenes periciales en geotecnia, fallas de taludes, cimentaciones y túneles. Asesoría técnica para controversias legales.",
};

export default function PeritajeGeotecnico() {
  return (
    <div className="min-h-screen bg-navy-900 pb-24">
      {/* Hero */}
      <div className="relative pt-20 pb-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('/images/geotecnico_tunnel.png')] bg-cover bg-center opacity-80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-gold-500 font-semibold mb-4 text-sm tracking-wide uppercase">
              <FileText className="h-5 w-5" /> Especialidad Técnica
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Peritaje Geotécnico</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Análisis experto de las condiciones del suelo, fallas en cimentaciones y túneles para determinar causalidades precisas en controversias de obras civiles e infraestructura.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Content */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Objetividad en el Subsuelo</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Las fallas geotécnicas suelen presentar las controversias más complejas en los megaproyectos. Nuestro equipo posee la trayectoria necesaria para transformar datos geotécnicos complejos en argumentos técnicos concluyentes para jueces o árbitros.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Investigación de inestabilidad y falla de taludes en infraestructura vial.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Dictámenes sobre asentamientos diferenciales y fallas de cimentación.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Análisis experto en proyectos de excavación subterránea y túneles.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                <span className="text-slate-300">Revisión de estudios de suelos y su idoneidad para el proyecto ejecutado.</span>
              </li>
            </ul>

            <div className="bg-navy-800/50 p-6 border-l-4 border-gold-500 rounded-r-sm">
              <h3 className="text-lg font-heading font-bold text-white mb-2">Importancia de la Evidencia Temprana</h3>
              <p className="text-slate-400 text-sm">
                En geotecnia, las condiciones cambian rápidamente tras una falla. Actuar con prontitud para asegurar el levantamiento probatorio es crítico para el éxito de cualquier reclamación posterior.
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
              <ContactForm serviceName="Peritaje Geotécnico" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

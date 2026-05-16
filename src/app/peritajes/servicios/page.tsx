import Link from "next/link";
import { ArrowRight, FileText, Landmark, Scale, Search } from "lucide-react";

export const metadata = {
  title: "Servicios de Peritaje | Acumen Peritajes",
  description: "Servicios especializados en peritajes estructurales, geotécnicos y reclamaciones en ingeniería.",
};

const services = [
  {
    id: "peritaje-estructural",
    title: "Peritaje Estructural",
    description: "Evaluación técnica de fallas estructurales, vulnerabilidad sísmica y análisis patológico para procesos legales.",
    icon: Landmark,
    href: "/peritajes/servicios/peritaje-estructural"
  },
  {
    id: "peritaje-geotecnico",
    title: "Peritaje Geotécnico",
    description: "Análisis de inestabilidad de taludes, fallas en cimentaciones y túneles basado en evidencia científica.",
    icon: FileText,
    href: "/peritajes/servicios/peritaje-geotecnico"
  },
  {
    id: "reclamaciones-ingenieria",
    title: "Reclamaciones en Ingeniería",
    description: "Cuantificación del desequilibrio económico, daños y sobrecostos en contratos de infraestructura pública y privada.",
    icon: Scale,
    href: "/peritajes/servicios/reclamaciones-ingenieria"
  },
  {
    id: "auditoria-forense",
    title: "Auditoría Forense Técnica",
    description: "Investigación exhaustiva para detectar anomalías técnicas, desviaciones y responsabilidades en el desarrollo de grandes obras.",
    icon: Search,
    href: "/peritajes/servicios/auditoria-forense-tecnica"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Hero */}
      <div className="relative pt-24 pb-24 border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-slate-50/80 to-slate-50/50 z-10" />
          <div className="absolute inset-0 bg-[url('/images/estructural_wireframe.png')] bg-cover bg-center opacity-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos análisis especializados para resolver las controversias técnicas más exigentes en el sector de la ingeniería y la infraestructura.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 glow-bg relative z-10 pattern-bg py-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
          {services.map((service) => (
            <div key={service.id} className="glass-card p-10 group border-t-4 border-t-transparent hover:border-t-gold-500 rounded-sm">
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-sm shrink-0 group-hover:bg-gold-500/10 transition-colors">
                  <service.icon className="h-8 w-8 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center gap-2 text-gold-500 font-medium hover:text-gold-400 transition-colors group/link"
                  >
                    Conocer Detalles 
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-20 bg-gradient-to-r from-white to-slate-50 border border-slate-200 p-12 rounded-sm text-center">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">¿Su caso requiere una especialidad diferente?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-8">
            Nuestra red de peritos y nuestro enfoque interdisciplinario nos permite abordar retos complejos de ingeniería en diversas áreas.
          </p>
          <Link
            href="/peritajes/contacto"
            className="inline-block bg-white text-slate-900 px-8 py-3 rounded-sm font-bold hover:bg-slate-200 transition-colors shadow-lg"
          >
            Consultar Viabilidad del Caso
          </Link>
        </div>
        
      </div>
    </div>
  );
}

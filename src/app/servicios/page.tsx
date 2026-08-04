import Link from "next/link";
import { ArrowRight, Search, Activity, Network, HardHat, FileLineChart, Database, Pickaxe, Waves, MapPin } from "lucide-react";

export const metadata = {
  title: "Servicios | ACUMEN INGENIERÍA S.A.S.",
  description: "Ingeniería aumentada. Peritajes, PMO, Movilidad, SIG y Evaluación de Riesgos.",
};

const services = [
  {
    title: "Peritajes Técnicos Forenses",
    description: "División forense altamente especializada. Dictámenes técnicos concluyentes para litigios, tribunales de arbitramento y controversias contractuales complejas en megaobras.",
    icon: <Search className="h-6 w-6" />,
    href: "/peritajes",
    highlight: true,
  },
  {
    title: "Riesgo Hidroclimatológico y Ambiental",
    description: "Modelación de datos hídricos, escenarios de cambio climático y evaluación estocástica de riesgos para infraestructuras.",
    icon: <Waves className="h-6 w-6" />,
    href: "/riesgo-hidroclimatologico",
    highlight: true,
  },
  {
    title: "Obras Subterráneas",
    description: "Túneles, estabilización de taludes e infraestructura compleja. Experiencia demostrada en megaproyectos viales, mineros e hidroeléctricos.",
    icon: <Pickaxe className="h-6 w-6" />,
    href: "/obras-subterraneas",
    highlight: true,
  },
  {
    title: "Ordenamiento Territorial y Planificación Estratégica",
    description: "Planeación a escala municipal y metropolitana. Instrumentos de gestión del suelo, modelos de ciudad sostenible y vivienda de interés social.",
    icon: <MapPin className="h-6 w-6" />,
    href: "/ordenamiento-territorial",
    highlight: true,
  },
  {
    title: "Movilidad y Dinámica Urbana",
    description: "Planificación estratégica del transporte. Estudios de tránsito, modelos de demanda, logística urbana y estructuración de sistemas integrados de transporte público.",
    icon: <Activity className="h-6 w-6" />,
    href: "/contacto",
    highlight: false,
  },
  {
    title: "SIG y Analítica Territorial",
    description: "Inteligencia espacial pura. Levantamiento, procesamiento y visualización de datos georreferenciados para la toma de decisiones a escala de ciudad y región.",
    icon: <Network className="h-6 w-6" />,
    href: "/contacto",
    highlight: false,
  },
  {
    title: "Evaluación de Riesgos y Vulnerabilidad",
    description: "Análisis determinísticos y probabilísticos para evaluar fragilidad estructural, riesgos geotécnicos y resiliencia ante amenazas naturales y antrópicas.",
    icon: <FileLineChart className="h-6 w-6" />,
    href: "/contacto",
    highlight: false,
  },
  {
    title: "PMO Técnica y Trazabilidad",
    description: "Gerencia de proyectos (Project Management Office) basada en datos. Control de presupuestos, cronogramas y trazabilidad contractual mediante plataformas digitales.",
    icon: <Database className="h-6 w-6" />,
    href: "/acumen-os",
    highlight: false,
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Header Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" 
            style={{ backgroundImage: "url('/images/estructural_wireframe.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-slate-50/20 to-transparent z-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-mono tracking-widest text-zinc-500 uppercase bg-zinc-200 mb-6">
              Áreas de Práctica
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight">
              Soluciones críticas para infraestructuras complejas.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-normal">
              Integramos rigor técnico tradicional con analítica de datos e inteligencia artificial. Nuestras líneas de servicio operan bajo un mismo núcleo: la reducción de incertidumbre.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 border-y border-zinc-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={service.href}
                className={`group block p-10 border transition-all duration-300 ${
                  service.highlight 
                    ? "bg-zinc-900 border-zinc-800 text-white hover:border-gold-500" 
                    : "bg-white border-zinc-200 text-zinc-900 hover:border-zinc-400 shadow-sm hover:shadow-md"
                }`}
              >
                <div className={`mb-8 p-3 inline-block rounded-sm ${service.highlight ? "bg-zinc-800 text-gold-500" : "bg-slate-100 text-zinc-900"}`}>
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-heading font-bold mb-4 ${service.highlight ? "text-white" : "text-zinc-900"}`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${service.highlight ? "text-zinc-400" : "text-zinc-600"}`}>
                  {service.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                  <span className={service.highlight ? "text-gold-500" : "text-zinc-900"}>Explorar</span>
                  <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${service.highlight ? "text-gold-500" : "text-zinc-900"}`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Integration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-6">Todos nuestros servicios están respaldados por ACUMEN OS.</h2>
        <p className="text-zinc-600 max-w-2xl mx-auto mb-10">
          Garantizamos la trazabilidad completa de cada variable, plano y decisión tomada durante la consultoría. Conozca cómo nuestro ecosistema digital protege su inversión.
        </p>
        <Link
          href="/acumen-os"
          className="inline-flex justify-center items-center gap-2 bg-zinc-900 text-white px-8 py-4 font-medium transition-colors hover:bg-gold-500"
        >
          Explorar ACUMEN OS <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

    </div>
  );
}

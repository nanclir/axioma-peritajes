import Link from "next/link";
import { ArrowRight, BrainCircuit, Cpu, Network, Briefcase, FileSearch } from "lucide-react";

export const metadata = {
  title: "Acumen Ingeniería | Firma Aumentada por IA",
  description: "Una arquitectura inteligente de ingeniería, conocimiento y automatización. Transformamos el conocimiento técnico y estratégico en activos operacionales.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 glow-bg pattern-bg">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/80 to-navy-900/40 z-10" />
          {/* We can use a generic AI / tech background image later, for now we use a gradient */}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 mb-8">
              <BrainCircuit className="h-4 w-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Ingeniería Aumentada por IA</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6 text-white">
              Sistemas de Ingeniería <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Inteligente y Estratégica</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              ACUMEN OS 1.0 no es una empresa tradicional. Somos una arquitectura de conocimiento, automatización e inteligencia artificial aplicada a la resolución de problemas técnicos complejos en infraestructura y obras civiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#lineas-negocio"
                className="inline-flex justify-center items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-4 rounded-sm font-semibold transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] text-lg"
              >
                Nuestras Líneas <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/nosotros"
                className="inline-flex justify-center items-center px-8 py-4 rounded-sm font-semibold text-white border border-slate-600 hover:bg-slate-800 hover:border-slate-500 transition-all text-lg"
              >
                Filosofía Operativa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía Section */}
      <section className="py-24 border-y border-slate-800 bg-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">El Conocimiento como <span className="text-gold-500">Activo</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                La Inteligencia Artificial no reemplaza nuestro criterio, experiencia ni pensamiento estratégico. Los amplifica.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-navy-700 p-2 rounded-sm text-gold-500">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Productividad Aumentada</h4>
                    <p className="text-slate-400 text-sm">Flujos de trabajo documentados y automatizados para máxima eficiencia.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-navy-700 p-2 rounded-sm text-gold-500">
                    <Network className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Arquitectura Organizacional</h4>
                    <p className="text-slate-400 text-sm">Gestión del conocimiento centralizada en ACUMEN OS.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="glass-card p-10 rounded-sm relative">
              <div className="absolute inset-0 bg-[url('/images/geotecnico_tunnel.png')] bg-cover bg-center opacity-20 grayscale" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-heading text-white mb-6">Liderazgo</h3>
                <div className="space-y-6">
                  <div className="border-b border-slate-700 pb-6">
                    <p className="text-gold-500 font-bold text-lg">Ing. Ricardo Smith Quintero, PhD.</p>
                    <p className="text-slate-400 text-sm">Director de Estrategia e Infraestructura</p>
                  </div>
                  <div>
                    <p className="text-gold-500 font-bold text-lg">Ing. Rafael Nanclares</p>
                    <p className="text-slate-400 text-sm">Director de Operaciones e Inteligencia Territorial</p>
                  </div>
                </div>
                <Link href="/nosotros" className="mt-8 inline-block text-gold-500 hover:text-gold-400 font-medium flex items-center gap-2 group">
                  Conocer al equipo <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Líneas de Negocio */}
      <section id="lineas-negocio" className="py-24 bg-navy-900 glow-bg pattern-bg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Líneas de Negocio</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Soluciones hiper-especializadas respaldadas por rigor científico y tecnológico.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/peritajes" className="glass-card p-10 group block hover:border-gold-500 transition-all cursor-pointer">
              <div className="h-16 w-16 bg-navy-800 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                <FileSearch className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Acumen Peritajes</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Nuestra división de investigaciones forenses, reclamaciones contractuales y dictámenes técnicos para grandes proyectos de infraestructura.
              </p>
              <span className="text-gold-500 font-medium inline-flex items-center gap-2">
                Ingresar a la división <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <div className="glass-card p-10 border-slate-800/40 opacity-80 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-navy-800 text-slate-400 text-xs px-3 py-1 rounded-full font-semibold border border-slate-700">En desarrollo</div>
              <div className="h-16 w-16 bg-navy-800 rounded-sm flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-slate-500" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-300 mb-4">PMO & Infraestructura</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Gestión estructurada de proyectos, flujos operativos y administración eficiente de megaproyectos.
              </p>
            </div>

            <div className="glass-card p-10 border-slate-800/40 opacity-80 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-navy-800 text-slate-400 text-xs px-3 py-1 rounded-full font-semibold border border-slate-700">En desarrollo</div>
              <div className="h-16 w-16 bg-navy-800 rounded-sm flex items-center justify-center mb-6">
                <BrainCircuit className="h-8 w-8 text-slate-500" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-300 mb-4">Estrategia Territorial</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Consultoría para movilidad, sistemas de transporte masivo y planificación inteligente de ciudades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

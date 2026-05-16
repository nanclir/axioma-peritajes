import Link from "next/link";
import { ArrowRight, BrainCircuit, Shield, Zap, GraduationCap, Building2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Acumen Ingeniería | Inteligencia Aumentada",
  description: "Firma de ingeniería aumentada por Inteligencia Artificial.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-900 pb-24 glow-bg pattern-bg">
      {/* Hero */}
      <div className="relative pt-20 pb-32 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/80 to-navy-900 z-10" />
           <div className="absolute inset-0 bg-[url('/images/hero_home_peritaje.png')] bg-cover bg-center opacity-40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/80 border border-gold-500/30 text-gold-500 text-sm font-semibold mb-8 backdrop-blur-sm">
            <BrainCircuit className="h-4 w-4" /> ACUMEN OS 1.0
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight drop-shadow-xl">
            Ingeniería Aumentada <br />
            <span className="text-gold-500">por Inteligencia Artificial</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 drop-shadow-md">
            No construimos una empresa tradicional. Estructuramos conocimiento técnico, estratégico y legal sobre una arquitectura inteligente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/peritajes"
              className="inline-flex justify-center items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-4 rounded-sm font-bold transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              Acumen Peritajes <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#liderazgo"
              className="inline-flex justify-center items-center gap-2 bg-navy-800/80 hover:bg-navy-700 text-white px-8 py-4 rounded-sm font-medium border border-slate-700 transition-colors backdrop-blur-sm"
            >
              Liderazgo Estratégico
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        
        {/* Filosofía */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">La Evolución de la Ingeniería</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-10 hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-navy-900/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-slate-700 group-hover:border-gold-500/50 transition-colors">
                <BrainCircuit className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Conocimiento Estructurado</h3>
              <p className="text-slate-400 leading-relaxed">
                El verdadero activo es nuestra estructura de conocimiento. Documentamos, iteramos y automatizamos metodologías complejas de infraestructura, creando nuestro sistema operativo interno.
              </p>
            </div>
            
            <div className="glass-card p-10 hover:-translate-y-2 transition-all duration-300 group border-gold-500/20">
              <div className="bg-navy-900/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-slate-700 group-hover:border-gold-500/50 transition-colors">
                <Zap className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">IA Operativa</h3>
              <p className="text-slate-400 leading-relaxed">
                La Inteligencia Artificial no reemplaza nuestro criterio o experiencia; los amplifica. Aumenta nuestra capacidad analítica, productividad técnica y la velocidad de estructuración forense.
              </p>
            </div>
            
            <div className="glass-card p-10 hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-navy-900/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-slate-700 group-hover:border-gold-500/50 transition-colors">
                <Shield className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Rigor Metodológico</h3>
              <p className="text-slate-400 leading-relaxed">
                Integración de protocolos internos, Standard Operating Procedures (SOPs) y flujos organizacionales estrictos para garantizar resultados irrefutables en tribunales y megaproyectos.
              </p>
            </div>
          </div>
        </div>

        {/* Liderazgo Directivo */}
        <div id="liderazgo" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Dirección Estratégica</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
              Nuestros directores acumulan décadas de experiencia liderando las entidades e infraestructuras más complejas del país.
            </p>
          </div>

          <div className="space-y-12">
            {/* Ricardo Smith */}
            <div className="glass-card rounded-sm overflow-hidden flex flex-col lg:flex-row group border border-slate-700/50 hover:border-gold-500/30 transition-colors">
              <div className="lg:w-1/3 bg-navy-800 flex flex-col items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-slate-700/50 min-h-[300px]">
                <GraduationCap className="h-24 w-24 text-slate-600 mb-4" />
              </div>
              <div className="lg:w-2/3 p-8 md:p-12 relative">
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gold-500 mb-2">Ing. Ricardo Agustín Smith Quintero, PhD.</h3>
                  <p className="text-white font-medium mb-6 text-lg">Ingeniero Civil, Master of Science y PhD. Civil Engineering</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 text-slate-200 font-semibold mb-3">
                        <Building2 className="h-5 w-5 text-gold-500" /> Cargos Principales
                      </h4>
                      <p className="text-slate-400 leading-relaxed">
                        Ex Director del Área Metropolitana del Valle de Aburrá, Secretario de Tránsito y Transporte de Medellín, y Alcalde (e) de Medellín. 
                      </p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-slate-200 font-semibold mb-3">
                        <Shield className="h-5 w-5 text-gold-500" /> Consultoría y Experticia
                      </h4>
                      <p className="text-slate-400 leading-relaxed">
                        Consultor experto para entidades como The Nature Conservancy, el Banco Interamericano de Desarrollo (BID), Findeter y Nippon KOEI LAC. Perito técnico activo ante el Tribunal Administrativo de Antioquia en procesos de alta complejidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rafael Nanclares */}
            <div className="glass-card rounded-sm overflow-hidden flex flex-col lg:flex-row group border border-slate-700/50 hover:border-gold-500/30 transition-colors">
              <div className="lg:w-1/3 relative min-h-[300px] bg-navy-800">
                <Image 
                  src="/team/rafael.jpg" 
                  alt="Rafael Nanclares" 
                  fill 
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="lg:w-2/3 p-8 md:p-12 relative">
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gold-500 mb-2">Ing. Rafael Andrés Nanclares Ospina</h3>
                  <p className="text-white font-medium mb-6 text-lg">Ingeniero Civil, Especialista en Gerencia de Construcciones, Magíster en Filosofía</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 text-slate-200 font-semibold mb-3">
                        <Building2 className="h-5 w-5 text-gold-500" /> Cargos Principales
                      </h4>
                      <p className="text-slate-400 leading-relaxed">
                        Secretario de Infraestructura del Departamento de Antioquia. Ex Secretario de Transportes y Tránsito de la ciudad de Medellín. Gerente de Bienestar Económico en Comfenalco Antioquia.
                      </p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-slate-200 font-semibold mb-3">
                        <BrainCircuit className="h-5 w-5 text-gold-500" /> Formación Adicional
                      </h4>
                      <p className="text-slate-400 leading-relaxed">
                        Cuenta con estudios y formación en Inteligencia Artificial aplicada en la Universidad de California, Berkeley. Combina un enfoque analítico, filosófico y tecnológico para la creación de soluciones sustentables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Líneas de Negocio CTA */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/peritajes" className="glass-card p-8 border border-gold-500/30 hover:bg-navy-800/80 transition-all group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2 relative z-10">Acumen Peritajes</h3>
            <p className="text-slate-400 text-sm mb-6 relative z-10">División forense y de experticia técnica en procesos judiciales y de arbitraje.</p>
            <div className="inline-flex items-center text-gold-500 font-semibold text-sm relative z-10 group-hover:translate-x-2 transition-transform">
              Ver División Operativa <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>

          <div className="glass-card p-8 border border-slate-700/50 opacity-70 relative overflow-hidden">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">Proyectos y PMO</h3>
            <p className="text-slate-400 text-sm mb-6">Administración delegada y gerencia de proyectos de infraestructura.</p>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
              Próximamente
            </span>
          </div>

          <div className="glass-card p-8 border border-slate-700/50 opacity-70 relative overflow-hidden">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">Consultoría</h3>
            <p className="text-slate-400 text-sm mb-6">Asesoría estratégica de alto nivel para entidades públicas y privadas.</p>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
              Próximamente
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

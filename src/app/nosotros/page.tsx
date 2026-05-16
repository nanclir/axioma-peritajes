import Link from "next/link";
import { ArrowRight, BrainCircuit, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "Filosofía | Acumen Ingeniería",
  description: "Nuestra filosofía operativa como firma de ingeniería aumentada por inteligencia artificial.",
};

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-navy-900 pt-20 pb-24 glow-bg pattern-bg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            La Ingeniería <span className="text-gold-500">Aumentada</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Acumen Ingeniería S.A.S no es una empresa tradicional. Somos una firma tecnológica de infraestructura. Construimos soluciones técnicas estructuradas sobre un núcleo de conocimiento documentado, automatización e Inteligencia Artificial.
          </p>
        </div>

        {/* Filosofía Core */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="glass-card p-8 group">
            <BrainCircuit className="h-10 w-10 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-heading font-bold text-white mb-4">Conocimiento como Activo</h3>
            <p className="text-slate-400 leading-relaxed">
              El verdadero activo no es el software, sino la estructura de conocimiento técnico y estratégico. Documentamos, iteramos y automatizamos metodologías para crear "Acumen OS".
            </p>
          </div>
          <div className="glass-card p-8 group">
            <Zap className="h-10 w-10 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-heading font-bold text-white mb-4">IA Operativa</h3>
            <p className="text-slate-400 leading-relaxed">
              La IA no reemplaza nuestro criterio o experiencia; los amplifica. Aumenta nuestra productividad, velocidad y capacidad de análisis documental y de ingeniería forense.
            </p>
          </div>
          <div className="glass-card p-8 group">
            <Shield className="h-10 w-10 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-heading font-bold text-white mb-4">Rigor Metodológico</h3>
            <p className="text-slate-400 leading-relaxed">
              Integración de protocolos internos, Standard Operating Procedures (SOPs) y flujos organizacionales estrictos para garantizar resultados impecables en disputas y proyectos.
            </p>
          </div>
        </div>

        {/* Liderazgo */}
        <div className="bg-navy-800/80 border border-slate-700 rounded-sm p-12 text-center mb-20">
          <h2 className="text-3xl font-heading font-bold text-white mb-10">Liderazgo Estratégico</h2>
          <p className="text-slate-300 max-w-3xl mx-auto mb-10">
            Nuestros directores acumulan décadas de experiencia liderando las entidades e infraestructuras más grandes de Colombia. Hoy, esa experiencia está integrada en la arquitectura de Acumen.
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left">
            <div className="glass-card p-6 border-l-4 border-l-gold-500">
              <h4 className="text-gold-500 font-bold text-xl mb-1">Ing. Ricardo Smith Quintero, PhD.</h4>
              <p className="text-slate-400 text-sm mb-4">Ingeniero Civil, MS.c., PhD. Civil Engineering</p>
              <p className="text-slate-300 text-sm">
                Ex Director del Área Metropolitana y Ex Secretario de Tránsito. Amplia trayectoria en alta consultoría de infraestructura y movilidad para entidades como el BID, Findeter, Túnel de Oriente y Nippon KOEI LAC.
              </p>
            </div>
            <div className="glass-card p-6 border-l-4 border-l-gold-500">
              <h4 className="text-gold-500 font-bold text-xl mb-1">Ing. Rafael Andrés Nanclares Ospina</h4>
              <p className="text-slate-400 text-sm mb-4">Ingeniero Civil, Especialista en Gerencia de Construcciones, Magíster en Filosofía</p>
              <p className="text-slate-300 text-sm">
                Ex Gerente del Túnel de Oriente y del Túnel del Toyo, y Gerente de Bienestar Económico en Comfenalco Antioquia. Más de 24 años de experiencia estructurando megaproyectos de alto impacto nacional.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">Conozca nuestra primera división operativa</h2>
          <Link
            href="/peritajes"
            className="inline-flex justify-center items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-4 rounded-sm font-bold transition-all shadow-xl text-lg"
          >
            Acumen Peritajes <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}

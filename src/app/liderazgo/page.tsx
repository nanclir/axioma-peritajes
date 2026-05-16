import { ArrowRight, BookOpen, Globe2, BrainCircuit } from "lucide-react";

export const metadata = {
  title: "Liderazgo | ACUMEN INGENIERÍA S.A.S.",
  description: "Conozca a los directores de Acumen: Intelectualidad, rigor técnico y visión global aplicada a la infraestructura.",
};

export default function LiderazgoPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight">
            Pensamiento estratégico aplicado al territorio.
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed font-light">
            Acumen no es una estructura burocrática tradicional. Somos una firma boutique donde el liderazgo intelectual de nuestros socios interviene directamente en los desafíos más complejos de cada proyecto.
          </p>
        </div>
      </section>

      {/* Perfil Ricardo Smith */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 relative aspect-[3/4] bg-zinc-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholder until real photo is defined or linked */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-mono text-xs">
              [ FOTOGRAFÍA RICARDO SMITH ]
            </div>
          </div>
          
          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 mb-2">Ricardo A. Smith Quintero</h2>
            <p className="text-gold-500 font-medium uppercase tracking-widest text-sm mb-8">Socio Director / PhD. en Recursos Hidráulicos</p>
            
            <div className="prose prose-zinc max-w-none text-zinc-600 leading-relaxed font-light mb-8">
              <p>
                Ph.D. y Master of Science por la Colorado State University, e Ingeniero Civil por la Universidad Nacional de Colombia. Con más de 40 años de experiencia, es una de las voces más autorizadas en Colombia en materia de recursos hídricos, planificación energética y movilidad.
              </p>
              <p>
                En el ámbito académico e institucional, ha sido Profesor Emérito, Decano de la Facultad de Minas y Director del programa de Doctorado en Ingeniería de la Universidad Nacional. Ha ocupado cargos de altísima responsabilidad pública como Secretario de Transportes y Tránsito y Alcalde Encargado de Medellín, además de Director del Área Metropolitana del Valle de Aburrá.
              </p>
              <p>
                Como consultor de alto nivel, ha dirigido proyectos críticos para el BID, Banco Mundial, Findeter, y múltiples concesiones viales, aplicando siempre modelos matemáticos avanzados y optimización para la toma de decisiones con múltiples objetivos.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-200">
              <div>
                <BookOpen className="h-5 w-5 text-zinc-900 mb-3" />
                <h4 className="font-bold text-zinc-900 text-sm mb-1">Rigor Académico</h4>
                <p className="text-xs text-zinc-500">Más de 270 artículos y 18 libros publicados en ingeniería y optimización.</p>
              </div>
              <div>
                <Globe2 className="h-5 w-5 text-zinc-900 mb-3" />
                <h4 className="font-bold text-zinc-900 text-sm mb-1">Impacto Global</h4>
                <p className="text-xs text-zinc-500">Asesorías técnicas estructuradas para el BID y el Banco Mundial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfil Rafael Nanclares */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 md:order-last relative aspect-[3/4] bg-zinc-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
             {/* Placeholder using existing photo */}
             <div 
               className="absolute inset-0 bg-cover bg-center z-0" 
               style={{ backgroundImage: "url('/team/rafael.jpg')" }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent z-10" />
          </div>
          
          <div className="md:col-span-8 md:order-first">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 mb-2">Rafael Nanclares Ospina</h2>
            <p className="text-gold-500 font-medium uppercase tracking-widest text-sm mb-8">Socio Director / Magíster en Filosofía</p>
            
            <div className="prose prose-zinc max-w-none text-zinc-600 leading-relaxed font-light mb-8">
              <p>
                Ingeniero Civil, Especialista en Gerencia de Construcciones y Magíster en Filosofía. Su perfil híbrido fusiona la gerencia de alta complejidad en infraestructura con el pensamiento crítico, la ética tecnológica y la inteligencia artificial, formación consolidada con sus estudios en Inteligencia Artificial en la Universidad de Berkeley.
              </p>
              <p>
                Con más de 20 años de experiencia, ha fungido como Secretario de Infraestructura Física de Antioquia y Secretario de Tránsito y Transporte de la ciudad de Medellín, teniendo bajo su responsabilidad estructuraciones estratégicas a gran escala. A nivel internacional, ha sido Asesor de infraestructura del Secretario de Infraestructura del estado de Nuevo León (México).
              </p>
              <p>
                En Acumen, es el arquitecto principal de <strong>ACUMEN OS</strong>, integrando el conocimiento técnico profundo con herramientas de análisis de datos, visualización y trazabilidad para transformar la manera en que la consultoría de infraestructura opera en el siglo XXI.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-200">
              <div>
                <BrainCircuit className="h-5 w-5 text-zinc-900 mb-3" />
                <h4 className="font-bold text-zinc-900 text-sm mb-1">Filosofía e IA</h4>
                <p className="text-xs text-zinc-500">Integración de pensamiento crítico, ética y modelos de Inteligencia Artificial (Berkeley).</p>
              </div>
              <div>
                <Globe2 className="h-5 w-5 text-zinc-900 mb-3" />
                <h4 className="font-bold text-zinc-900 text-sm mb-1">Asesoría Internacional</h4>
                <p className="text-xs text-zinc-500">Experiencia estratégica en estructuración técnica en México (Nuevo León) y Colombia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

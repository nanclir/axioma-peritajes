import Link from "next/link";
import { ArrowRight, Scale, Search, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Peritajes Técnicos Forenses | ACUMEN INGENIERÍA S.A.S.",
  description: "División forense especializada en dictámenes técnicos para litigios y tribunales de arbitramento.",
};

export default function PeritajesPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" 
            style={{ backgroundImage: "url('/images/auditoria_forense_docs_v2.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-slate-50/20 to-transparent z-10" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-mono tracking-widest text-zinc-500 uppercase bg-zinc-200 mb-6">
              Línea de Negocio Especializada
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight">
              Peritaje Técnico Forense.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-normal mb-10">
              Cuando la infraestructura falla, las implicaciones técnicas, legales y financieras exigen una investigación con rigor científico. Proveemos dictámenes periciales concluyentes para tribunales, cortes y litigios de alta complejidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/peritajes/experiencia" className="inline-flex justify-center items-center px-6 py-3 bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all group">
                Casos de Estudio y Experiencia
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contacto" className="inline-flex justify-center items-center px-6 py-3 border border-zinc-300 bg-white text-zinc-900 font-medium hover:bg-zinc-50 transition-colors">
                Solicitar Evaluación
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Actuación */}
      <section className="bg-slate-50 border-y border-zinc-200 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-12">Áreas de Actuación Forense</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8">
              <Scale className="h-8 w-8 text-gold-500 mb-6" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Tribunales de Arbitramento</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Conceptos técnicos imparciales y sustentación experta en audiencias para resolución de controversias entre concesionarios, contratistas y el Estado.
              </p>
            </div>
            
            <div className="glass-card p-8">
              <Search className="h-8 w-8 text-gold-500 mb-6" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Auditoría Estructural y Geotécnica</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Identificación de patologías, fallas de diseño o errores constructivos mediante ensayos no destructivos y modelamiento retrospectivo.
              </p>
            </div>
            
            <div className="glass-card p-8">
              <FileText className="h-8 w-8 text-gold-500 mb-6" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Reclamaciones y Desequilibrios</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Análisis de cronogramas, presupuestos y matrices de riesgo para determinar responsabilidades en sobrecostos o retrasos de megaobras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Especializado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-4">El Equipo de Peritajes</h2>
        <p className="text-zinc-600 mb-12 max-w-2xl">
          Esta división está liderada directamente por los directores de la firma, apoyados por expertos en visualización e ingeniería creativa para garantizar que la evidencia técnica sea concluyente y comprensible para jueces y abogados.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Perfil Juan David Naranjo */}
          <div className="border border-zinc-200 bg-white p-8 flex flex-col md:flex-row gap-8 shadow-sm">
            <div className="w-full md:w-1/3 relative aspect-[3/4] bg-zinc-100 grayscale">
              <div 
                className="absolute inset-0 bg-cover bg-center z-0" 
                style={{ backgroundImage: "url('/team/juan-david-naranjo.jpeg')" }}
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-1">Juan David Naranjo</h3>
              <p className="text-gold-500 font-medium uppercase tracking-widest text-xs mb-4">Especialista en Visualización / Perspectógrafo</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Ingeniero y experto en "Ingeniería Creativa". Su rol dentro de la división de peritajes es traducir hallazgos matemáticos, fallas estructurales y modelos complejos en material visual 3D, diagramas interactivos y exposiciones gráficas de alto impacto que permiten a las cortes comprender la verdad técnica de manera inequívoca.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500" /> Modelado 3D Forense</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500" /> Exposición Visual en Audiencias</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500" /> Reconstrucción Digital de Fallas</li>
              </ul>
            </div>
          </div>

          {/* Perfil Ricardo Smith */}
          <div className="border border-zinc-200 bg-white p-8 flex flex-col md:flex-row gap-8 shadow-sm">
            <div className="w-full md:w-1/3 relative aspect-[3/4] bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-500">
              <div 
                className="absolute inset-0 bg-cover bg-center z-0" 
                style={{ backgroundImage: "url('/images/ricardo_smith.jpg')" }}
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-1">Ricardo A. Smith Quintero</h3>
              <p className="text-gold-500 font-medium uppercase tracking-widest text-xs mb-4">Socio Director / Dirección Técnica</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Ph.D. por Colorado State University y ex-Decano de la Facultad de Minas. Su rol en peritajes asegura un respaldo intelectual inobjetable, aplicando modelos matemáticos avanzados y rigor metodológico para garantizar la solidez de cada dictamen ante tribunales.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500" /> Dirección Técnica Central</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500" /> Sustentación en Tribunales</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500" /> Modelamiento Avanzado</li>
              </ul>
            </div>
          </div>

          {/* Perfil Rafael Nanclares */}
          <div className="border border-zinc-200 bg-white p-8 flex flex-col md:flex-row gap-8 shadow-sm">
            <div className="w-full md:w-1/3 relative aspect-[3/4] bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-500">
              <div 
                className="absolute inset-0 bg-cover bg-center z-0" 
                style={{ backgroundImage: "url('/team/rafael-nanclares.jpg')" }}
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-1">Rafael Nanclares Ospina</h3>
              <p className="text-gold-500 font-medium uppercase tracking-widest text-xs mb-4">Socio Director / Estratega Forense</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Ingeniero Civil y Magíster en Filosofía. Su rol es integrar el análisis técnico profundo con herramientas tecnológicas (ACUMEN OS) y estructurar el peritaje para asegurar que la evidencia soporte estratégicamente la teoría del caso del equipo jurídico.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500" /> Estructuración Forense</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500" /> Integración Tecnológica (IA/BIM)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500" /> Estrategia con Firmas Legales</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

import Link from "next/link";
import { ArrowRight, Scale, Search, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Peritajes Técnicos Forenses | ACUMEN INGENIERÍA S.A.S.",
  description: "División forense especializada en dictámenes técnicos para litigios y tribunales de arbitramento.",
};

export default function PeritajesPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-zinc-200 bg-slate-50 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-600">
            Línea de Negocio Especializada
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight text-balance">
            Peritaje Técnico Forense.
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed font-light mb-8">
            Cuando la infraestructura falla, las implicaciones técnicas, legales y financieras exigen una investigación con rigor científico. Proveemos dictámenes periciales concluyentes para tribunales, cortes y litigios de alta complejidad.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/peritajes/experiencia"
              className="inline-flex justify-center items-center gap-2 bg-zinc-900 text-white px-6 py-3 font-medium transition-colors hover:bg-gold-500"
            >
              Casos de Estudio y Experiencia <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex justify-center items-center gap-2 bg-white text-zinc-900 px-6 py-3 font-medium border border-zinc-200 transition-colors hover:border-zinc-900"
            >
              Solicitar Evaluación
            </Link>
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
          Esta división está liderada directamente por los directores de la firma, apoyados por expertos en visualización e ingeniería creativa para garantizar que la evidencia técnica sea irrefutable y comprensible para jueces y abogados.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Perfil Juan David Naranjo */}
          <div className="border border-zinc-200 bg-white p-8 flex flex-col md:flex-row gap-8 shadow-sm">
            <div className="w-full md:w-1/3 relative aspect-[3/4] bg-zinc-100 grayscale">
              <div className="absolute inset-0 bg-[url('/foto%20juan%20david%20naranjo.jpeg')] bg-cover bg-center z-0" />
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

          {/* Liderazgo Matriz */}
          <div className="border border-zinc-200 bg-slate-50 p-8 flex flex-col justify-center shadow-sm h-full">
            <ShieldAlert className="h-10 w-10 text-zinc-400 mb-6" />
            <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Dirección Técnica Central</h3>
            <p className="text-zinc-600 text-sm leading-relaxed mb-6">
              Todos los peritajes de esta línea de negocio son auditados, firmados y sustentados por <strong>Ricardo Smith</strong> y <strong>Rafael Nanclares</strong>. Garantizamos que el peso intelectual e institucional de nuestra firma matriz respalda cada dictamen.
            </p>
            <Link href="/liderazgo" className="text-zinc-900 font-bold text-sm hover:text-gold-500 transition-colors inline-flex items-center gap-2">
              Ver perfiles directivos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

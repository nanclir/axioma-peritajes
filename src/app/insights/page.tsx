import InsightsClient from "./InsightsClient";

export const metadata = {
  title: "Insights | ACUMEN INGENIERÍA S.A.S.",
  description: "Liderazgo intelectual en infraestructura, territorio, movilidad y decisiones. Publicaciones científicas y artículos por los socios directores.",
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      
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
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight text-balance">
              Liderazgo Intelectual.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-normal">
              Análisis profundo sobre el impacto de la Inteligencia Artificial en la ingeniería, la planeación territorial y el futuro de la movilidad urbana, respaldado por nuestra producción científica.
            </p>
          </div>
        </div>
      </section>

      {/* Render Interactivo de Cliente */}
      <InsightsClient />

    </div>
  );
}

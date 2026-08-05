import { Map, Layers } from "lucide-react";

export const metadata = {
  title: "Portafolio y Proyectos | ACUMEN INGENIERÍA S.A.S.",
  description: "Data storytelling y trazabilidad aplicados a los proyectos de ingeniería estructural y movilidad más relevantes.",
};

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <section className="relative pt-32 pb-24 mb-24 overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" 
            style={{ backgroundImage: "url('/images/geotecnico_tunnel.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-slate-50/20 to-transparent z-10" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight text-balance">
              Impacto territorial, medido en datos.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-normal mb-8">
              Nuestros proyectos no se documentan solo con fotografías; los medimos a través de gemelos digitales, capas SIG y analítica de impacto.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Proyectos Data-Driven */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          
          {/* Los nuevos proyectos se insertarán aquí */}

        </div>
      </section>

    </div>
  );
}

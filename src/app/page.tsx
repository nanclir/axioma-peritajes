import Link from "next/link";
import { ArrowRight, Hexagon, BarChart3, Database, Workflow, Map, Waves, Network, History, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Cinematográfico (Arup style) */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" 
            style={{ backgroundImage: "url('/images/geotecnico_tunnel.png')" }} 
          />
          {/* Soft gradient to keep text readable without hiding the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-slate-50/20 to-transparent z-10" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-zinc-200 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest text-zinc-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              Firma de Ingeniería
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-zinc-900 leading-[1.1] mb-8 tracking-tight text-balance drop-shadow-sm">
              Ingeniería aumentada por datos, experiencia e inteligencia territorial.
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-800 mb-12 max-w-2xl font-normal leading-relaxed">
              No somos una empresa de planos tradicional. Transformamos la complejidad estructural, del territorio y la incertidumbre climática en decisiones estratégicas de alta precisión y certidumbre matemática.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/servicios"
                className="inline-flex justify-center items-center gap-2 bg-zinc-900 text-white px-8 py-4 font-medium transition-colors hover:bg-gold-500"
              >
                Nuestra Expertise <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/acumen-os"
                className="inline-flex justify-center items-center gap-2 bg-white text-zinc-900 px-8 py-4 font-medium border border-zinc-200 transition-colors hover:border-zinc-900"
              >
                Conocer ACUMEN OS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Statement */}
      <section className="py-32 bg-white relative z-10 border-t border-zinc-100 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" 
          style={{ backgroundImage: "url('/images/auditoria_forense_docs_v2.png')" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 mb-8 leading-tight">
                El rigor técnico se encuentra con la inteligencia operativa.
              </h2>
              <p className="text-lg text-zinc-800 mb-6 leading-relaxed">
                Nuestros directores acumulan décadas liderando las entidades e infraestructuras más complejas de Colombia. Hoy, toda esa trayectoria se ha sistematizado en protocolos estrictos, apoyados por Inteligencia Artificial y analítica espacial.
              </p>
              <p className="text-lg text-zinc-800 leading-relaxed mb-10">
                El resultado es una firma boutique capaz de proveer dictámenes, diseños y gerencia con un nivel de trazabilidad y certidumbre único en el mercado.
              </p>
              <Link href="/liderazgo#directores" className="text-zinc-900 font-bold border-b border-zinc-900 pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors inline-flex items-center gap-2">
                Conozca a nuestros directores <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Link href="/acumen-os" className="bg-slate-50 p-8 flex flex-col justify-end aspect-square border border-zinc-100 hover:border-gold-500 transition-colors group cursor-pointer block">
                <Hexagon className="h-8 w-8 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-xl text-zinc-900 mb-2 group-hover:text-gold-500 transition-colors">Ingeniería Digital</h3>
                <p className="text-zinc-500 text-sm">Modelado, Dashboards y Gemelos Digitales.</p>
              </Link>
              <Link href="/servicios" className="bg-slate-50 p-8 flex flex-col justify-end aspect-square border border-zinc-100 hover:border-gold-500 transition-colors group cursor-pointer block mt-12">
                <Map className="h-8 w-8 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-xl text-zinc-900 mb-2 group-hover:text-gold-500 transition-colors">SIG y Analítica</h3>
                <p className="text-zinc-500 text-sm">Inteligencia espacial aplicada a grandes proyectos.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Markets / Services (Arup structure) */}
      <section className="py-32 bg-slate-50 relative border-t border-zinc-200 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" 
          style={{ backgroundImage: "url('/images/estructural_wireframe.png')" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 mb-4">Líneas de Negocio</h2>
              <p className="text-xl text-zinc-800 max-w-2xl">Intervenciones técnicas de alta precisión para el desarrollo y protección de la infraestructura.</p>
            </div>
            <Link href="/servicios" className="text-zinc-900 font-bold hover:text-gold-500 transition-colors inline-flex items-center gap-2 shrink-0">
              Ver todos los servicios <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/peritajes" className="glass-card p-10 group block bg-zinc-900 border-zinc-800 hover:border-gold-500 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/auditoria_forense_docs_v2.png')] opacity-[0.03] bg-cover bg-center pointer-events-none" />
              <div className="mb-8 border-b border-zinc-800 pb-8 flex justify-between items-start relative z-10">
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-gold-500 transition-colors">Peritajes Técnicos</h3>
                <ArrowRight className="h-5 w-5 text-zinc-500 group-hover:text-gold-500 group-hover:-rotate-45 transition-all" />
              </div>
              <p className="text-zinc-400 relative z-10">
                División pericial altamente especializada. Dictámenes concluyentes para litigios, arbitrajes y controversias en grandes obras de ingeniería.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-800 relative z-10">
                <h4 className="text-sm font-bold text-white mb-2">Peritaje Técnico Hidroclimatológico</h4>
                <p className="text-sm text-zinc-500">
                  Análisis retrospectivo y estadístico de eventos extremos para determinar causas de fallos de infraestructura, integrando sistemas hídricos, variabilidad hidrológica y efectos antrópicos.
                </p>
              </div>
            </Link>

            <Link href="/riesgo-hidroclimatologico" className="glass-card p-10 group block bg-zinc-900 border-zinc-800 hover:border-gold-500 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/estructural_wireframe.png')] opacity-[0.03] bg-cover bg-center pointer-events-none" />
              <div className="mb-8 border-b border-zinc-800 pb-8 flex justify-between items-start relative z-10">
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-gold-500 transition-colors">Riesgo Hidroclimatológico y Ambiental</h3>
                <Waves className="h-6 w-6 text-zinc-500 group-hover:text-gold-500 transition-all" />
              </div>
              <p className="text-zinc-400 relative z-10">
                Modelación de datos hídricos, escenarios de cambio climático y evaluación de riesgos para la resiliencia de la infraestructura.
              </p>
            </Link>
            
            <Link href="/obras-subterraneas" className="glass-card p-10 group block bg-zinc-900 border-zinc-800 hover:border-gold-500 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/geotecnico_tunnel.png')] opacity-[0.03] bg-cover bg-center pointer-events-none" />
              <div className="mb-8 border-b border-zinc-800 pb-8 flex justify-between items-start relative z-10">
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-gold-500 transition-colors">Obras Subterráneas</h3>
                <ArrowRight className="h-5 w-5 text-zinc-500 group-hover:text-gold-500 group-hover:-rotate-45 transition-all" />
              </div>
              <p className="text-zinc-400 relative z-10">
                Infraestructura compleja, estabilización de taludes y túneles. Experiencia demostrada en megaproyectos viales, mineros e hidroeléctricos.
              </p>
            </Link>

            <Link href="/ordenamiento-territorial" className="glass-card p-10 group block bg-zinc-900 border-zinc-800 hover:border-gold-500 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/estructural_wireframe.png')] opacity-[0.03] bg-cover bg-center pointer-events-none" />
              <div className="mb-8 border-b border-zinc-800 pb-8 flex justify-between items-start relative z-10">
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-gold-500 transition-colors">Ordenamiento Territorial</h3>
                <MapPin className="h-6 w-6 text-zinc-500 group-hover:text-gold-500 transition-all" />
              </div>
              <p className="text-zinc-400 relative z-10">
                Planificación urbana y metropolitana, política de vivienda e instrumentos de financiación de suelo para el desarrollo de ciudades sostenibles.
              </p>
            </Link>

            <Link href="/servicios" className="glass-card p-10 group block">
              <div className="mb-8 border-b border-zinc-200 pb-8 flex justify-between items-start">
                <h3 className="text-2xl font-heading font-bold text-zinc-900 group-hover:text-gold-500 transition-colors">Movilidad y Territorio</h3>
                <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-gold-500 group-hover:-rotate-45 transition-all" />
              </div>
              <p className="text-zinc-800">
                Planificación urbana estratégica. Estudios de tránsito, evaluación de impacto y modelos integrados de ciudad inteligente.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-100">
                <h4 className="text-sm font-bold text-zinc-900 mb-2">Diseño Urbano y Drenaje Inteligente</h4>
                <p className="text-sm text-zinc-600">
                  Evaluación de sistemas de drenaje urbano y estanques de retención mediante el análisis de curvas de Intensidad-Duración-Frecuencia (IDF) para ciudades resilientes.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ACUMEN OS Section (Light Mode) */}
      <section className="py-32 bg-white text-zinc-900 relative overflow-hidden border-t-4 border-gold-500">
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none z-0 filter invert"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none z-0" 
          style={{ backgroundImage: "url('/images/geotecnico_tunnel.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-zinc-200 bg-slate-50 rounded-full text-xs font-mono text-zinc-500 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span>SYSTEM ONLINE</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight text-zinc-900">
                ACUMEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">OS 1.0</span>
              </h2>
              <p className="text-xl text-zinc-600 mb-8 font-light leading-relaxed">
                El sistema operativo de nuestra firma. Hemos codificado décadas de conocimiento en ingeniería dentro de flujos de trabajo automatizados.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4">
                  <div className="bg-slate-50 p-2 rounded-sm border border-zinc-200 shrink-0 shadow-sm">
                    <Database className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Trazabilidad Total de Datos</h4>
                    <p className="text-zinc-600 text-sm">Auditoría continua sobre cada parámetro de diseño y cálculo.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-50 p-2 rounded-sm border border-zinc-200 shrink-0 shadow-sm">
                    <BarChart3 className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Dashboards Interactivos</h4>
                    <p className="text-zinc-600 text-sm">Visualización en tiempo real del estado de controversias y proyectos.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-50 p-2 rounded-sm border border-zinc-200 shrink-0 shadow-sm">
                    <Workflow className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Inteligencia Operacional</h4>
                    <p className="text-zinc-600 text-sm">Análisis de grandes volúmenes de documentos legales y técnicos vía IA.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-50 p-2 rounded-sm border border-zinc-200 shrink-0 shadow-sm">
                    <Network className="h-5 w-5 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Motor de Probabilidad y Gemelos Digitales Hídricos</h4>
                    <p className="text-zinc-600 text-sm">Codificación algorítmica de modelación estocástica y simulaciones espaciales (Kriging). Generación de dashboards interactivos en tiempo real para análisis de redes hídricas, predicción de rendimientos y evaluación de proyectos de recursos hídricos bajo variabilidad climática.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-50 p-2 rounded-sm border border-zinc-200 shrink-0 shadow-sm">
                    <History className="h-5 w-5 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Reconstrucción Estocástica de Datos</h4>
                    <p className="text-zinc-600 text-sm">Algoritmos avanzados para la imputación, extensión y reconstrucción de series climatológicas e hidrológicas incompletas o de corto registro.</p>
                  </div>
                </li>
              </ul>
              
              <Link href="/acumen-os" className="inline-flex items-center gap-2 text-zinc-900 font-mono font-bold hover:text-blue-600 transition-colors">
                [ DESCUBRIR LA ARQUITECTURA ] <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            {/* Abstract Tech Visual */}
            <div className="relative h-[500px] w-full flex items-center justify-center">
               <div className="text-center z-10">
                 <div className="w-24 h-24 mx-auto border border-blue-500/30 rounded-full flex items-center justify-center mb-4 relative shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                   <div className="absolute inset-0 border border-blue-400 rounded-full animate-[spin_4s_linear_infinite] border-t-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                   <Hexagon className="h-8 w-8 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                 </div>
                 <p className="text-blue-400 font-mono text-sm tracking-widest drop-shadow-md font-bold">ANALÍTICA TERRITORIAL ACTIVA</p>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

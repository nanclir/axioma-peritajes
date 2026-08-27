import Link from "next/link";
import { ArrowRight, Hexagon, BarChart3, Database, Workflow, Map, Waves, Network, History, MapPin, TrendingUp, Award, Activity, Scale, Pickaxe, BrainCircuit, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Cinematográfico (Arup style) */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-24 md:pt-32 pb-12 overflow-hidden">
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
              <Link href="/ai-lab" className="bg-slate-50 p-8 flex flex-col justify-end aspect-square border border-zinc-100 hover:border-gold-500 transition-colors group cursor-pointer block">
                <BrainCircuit className="h-8 w-8 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-xl text-zinc-900 mb-2 group-hover:text-gold-500 transition-colors">AI Lab (I+D)</h3>
                <p className="text-zinc-500 text-sm">Modelos y agentes en desarrollo para ingeniería.</p>
              </Link>
              <Link href="/proyectos" className="bg-slate-50 p-8 flex flex-col justify-end aspect-square border border-zinc-100 hover:border-gold-500 transition-colors group cursor-pointer block mt-12">
                <Map className="h-8 w-8 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-xl text-zinc-900 mb-2 group-hover:text-gold-500 transition-colors">Proyectos e Impacto</h3>
                <p className="text-zinc-500 text-sm">Trayectoria técnica en megaproyectos de infraestructura y territorio.</p>
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
            {/* 1. FutureProof Decisions */}
            <div className="glass-card p-10 bg-zinc-900 border-zinc-800 border hover:border-gold-500 transition-all relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="mb-8 border-b border-zinc-800 pb-6 flex justify-between items-start">
                  <h3 className="text-2xl font-heading font-bold text-white">FutureProof Decisions®</h3>
                  <TrendingUp className="h-6 w-6 text-gold-500" />
                </div>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Ingeniería avanzada para la toma de decisiones robustas bajo incertidumbre profunda, variabilidad climática y riesgos complejos.
                </p>
                <div className="space-y-4 border-t border-zinc-800 pt-6">
                  <div>
                    <Link href="/futureproof-decisions" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Modelación de Riesgo y RDM</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Evaluación estocástica y Robust Decision Making (RDM) para mitigar riesgos.</p>
                  </div>
                  <div>
                    <Link href="/decision-intelligence-lab" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Decision Intelligence Lab®</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">IA, lógica de datos y matrices multicriterio para decisiones defendibles.</p>
                  </div>
                  <div>
                    <Link href="/riesgo-hidroclimatologico" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Riesgo Hidroclimatológico y Ambiental</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Modelación de extremos climáticos, curvas IDF y tránsito de avenidas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Movilidad 360 */}
            <div className="glass-card p-10 bg-zinc-900 border-zinc-800 border hover:border-gold-500 transition-all relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="mb-8 border-b border-zinc-800 pb-6 flex justify-between items-start">
                  <h3 className="text-2xl font-heading font-bold text-white">Movilidad 360</h3>
                  <Activity className="h-6 w-6 text-gold-500" />
                </div>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Modelación avanzada, simulación dinámica y gemelos de tránsito para optimizar la infraestructura y operación del transporte.
                </p>
                <div className="space-y-4 border-t border-zinc-800 pt-6">
                  <div>
                    <Link href="/movilidad-360" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Modelación y Simulación Vial</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Microsimulación y asignación dinámica de tráfico vehicular y peatonal (ABM/DTA).</p>
                  </div>
                  <div>
                    <Link href="/movilidad-360" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Seguridad Vial Operacional</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Enfoque de Sistema Seguro (Visión Cero) y mitigación de siniestralidad vial.</p>
                  </div>
                  <div>
                    <Link href="/movilidad-360" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Logística Urbana e ITS</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Distribución de carga sostenible de última milla e integración de sistemas inteligentes (ITS).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Obras Subterráneas */}
            <div className="glass-card p-10 bg-zinc-900 border-zinc-800 border hover:border-gold-500 transition-all relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="mb-8 border-b border-zinc-800 pb-6 flex justify-between items-start">
                  <h3 className="text-2xl font-heading font-bold text-white">Obras Subterráneas</h3>
                  <Pickaxe className="h-6 w-6 text-gold-500" />
                </div>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Diseño geomecánico, estabilidad de taludes y dirección de megaproyectos viales, mineros e hidroeléctricos.
                </p>
                <div className="space-y-4 border-t border-zinc-800 pt-6">
                  <div>
                    <Link href="/obras-subterraneas" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Diseño de Túneles y Estructuras</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Diseño estructural de sostenimiento y modelado de comportamiento geomecánico.</p>
                  </div>
                  <div>
                    <Link href="/obras-subterraneas" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Estabilidad de Taludes y Anclajes</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Cálculo de estabilidad bajo lluvias extremas y diseño de medidas de mitigación.</p>
                  </div>
                  <div>
                    <Link href="/obras-subterraneas" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Gerencia e Interventoría de Obra</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Dirección estratégica de proyectos y PMO técnica para erradicar incertidumbre.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Ordenamiento Territorial */}
            <div className="glass-card p-10 bg-zinc-900 border-zinc-800 border hover:border-gold-500 transition-all relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="mb-8 border-b border-zinc-800 pb-6 flex justify-between items-start">
                  <h3 className="text-2xl font-heading font-bold text-white">Ordenamiento Territorial</h3>
                  <MapPin className="h-6 w-6 text-gold-500" />
                </div>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Planeación metropolitana, planes de ordenamiento (POT), vivienda de interés social e instrumentos de suelo.
                </p>
                <div className="space-y-4 border-t border-zinc-800 pt-6">
                  <div>
                    <Link href="/ordenamiento-territorial" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Planes de Ordenamiento (POT)</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Ajuste de planes directores y formulación de políticas territoriales metropolitanas.</p>
                  </div>
                  <div>
                    <Link href="/ordenamiento-territorial" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Gestión y Financiación de Suelo</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Reparto de cargas y beneficios, plusvalías e instrumentos financieros del suelo.</p>
                  </div>
                  <div>
                    <Link href="/ordenamiento-territorial" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Ciudades Caminables e Inclusivas</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Modelos de desarrollo urbano sostenible, movilidad activa y vivienda social.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Peritajes Técnicos */}
            <div className="glass-card p-10 bg-zinc-900 border-zinc-800 border hover:border-gold-500 transition-all relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="mb-8 border-b border-zinc-800 pb-6 flex justify-between items-start">
                  <h3 className="text-2xl font-heading font-bold text-white">Peritajes Técnicos</h3>
                  <Scale className="h-6 w-6 text-gold-500" />
                </div>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Ingeniería forense y dictámenes periciales concluyentes para litigios judiciales, tribunales y controversias contractuales.
                </p>
                <div className="space-y-4 border-t border-zinc-800 pt-6">
                  <div>
                    <Link href="/peritajes" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Peritajes y Tribunales de Arbitramento</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Dictámenes forenses imparciales para controversias en megaproyectos de infraestructura.</p>
                  </div>
                  <div>
                    <Link href="/peritajes" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Auditoría de Patologías y Fallos</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Investigación y modelamiento retrospectivo de fallos geotécnicos y estructurales.</p>
                  </div>
                  <div>
                    <Link href="/peritajes" className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-gold-500 transition-colors">
                      <span>Peritaje Técnico Hidroclimatológico</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <p className="text-xs text-zinc-500 mt-1">Análisis retrospectivo y estadístico de eventos climáticos extremos en obras civiles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Capacidades Transversales */}
          <div className="mt-16 border-t border-zinc-800 pt-16">
            <h3 className="text-sm font-mono font-bold text-zinc-400 mb-8 uppercase tracking-widest">Capacidades Transversales y Analítica Activa</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/acreditacion-ingenieria" className="glass-card p-8 group block bg-zinc-900/50 border-zinc-800 hover:border-gold-500 border transition-all relative overflow-hidden">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-zinc-800 text-gold-500 rounded-sm">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-white group-hover:text-gold-500 transition-colors mb-2">Acreditación de Ingeniería (CNA)</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Acompañamiento en autoevaluación, diseño de evidencias e informes CNA potenciados por analítica de datos e IA para programas de alta calidad.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/acumen-os" className="glass-card p-8 group block bg-zinc-900/50 border-zinc-800 hover:border-gold-500 border transition-all relative overflow-hidden">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-zinc-800 text-gold-500 rounded-sm">
                    <Map className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-white group-hover:text-gold-500 transition-colors mb-2">Ingeniería Digital y Analítica SIG</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Estructuración de tableros de control interactivos, geoprocesamiento avanzado y gemelos digitales integrados con ACUMEN OS.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Proyectos Destacados */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">Impacto Real</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 mt-2">Proyectos Destacados</h2>
            </div>
            <Link href="/proyectos" className="text-zinc-900 font-bold hover:text-gold-500 transition-colors inline-flex items-center gap-2">
              Ver todos los proyectos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Proyecto 1: Túnel del Toyo */}
            <div className="border border-zinc-200 bg-slate-50 p-8 flex flex-col justify-between hover:border-zinc-400 transition-all shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-gold-600 uppercase">Obras Subterráneas</span>
                <h3 className="text-xl font-bold text-zinc-900 mt-2 mb-3">Túnel del Toyo</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Estabilización geotécnica profunda y asesoría de excavación para el túnel vial más largo de América (9.73 km), mitigando riesgos geológicos complejos en la cordillera.
                </p>
              </div>
              <div className="border-t border-zinc-200 pt-4 mt-auto">
                <span className="text-xs font-bold text-zinc-500 block">CLIENTE</span>
                <span className="text-sm font-semibold text-zinc-800">Consorcio Constructor / GOB</span>
              </div>
            </div>

            {/* Proyecto 2: SIMM Medellín */}
            <div className="border border-zinc-200 bg-slate-50 p-8 flex flex-col justify-between hover:border-zinc-400 transition-all shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-gold-600 uppercase">Movilidad 360</span>
                <h3 className="text-xl font-bold text-zinc-900 mt-2 mb-3">Sistema Inteligente de Movilidad (SIMM)</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Modelación avanzada, simulación dinámica de tráfico y estructuración de la viabilidad técnica y financiera para la concesión del SIMM a 10 años.
                </p>
              </div>
              <div className="border-t border-zinc-200 pt-4 mt-auto">
                <span className="text-xs font-bold text-zinc-500 block">CLIENTE</span>
                <span className="text-sm font-semibold text-zinc-800">Alcaldía de Medellín</span>
              </div>
            </div>

            {/* Proyecto 3: Ciudad de Panamá */}
            <div className="border border-zinc-200 bg-slate-50 p-8 flex flex-col justify-between hover:border-zinc-400 transition-all shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-gold-600 uppercase">Ordenamiento Territorial</span>
                <h3 className="text-xl font-bold text-zinc-900 mt-2 mb-3">Plan Estratégico Ciudad de Panamá</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Estructuración de políticas urbanas metropolitanas, reparto de cargas y beneficios y modelos de desarrollo orientado al transporte (TOD).
                </p>
              </div>
              <div className="border-t border-zinc-200 pt-4 mt-auto">
                <span className="text-xs font-bold text-zinc-500 block">CLIENTE</span>
                <span className="text-sm font-semibold text-zinc-800">BID / Municipio de Panamá</span>
              </div>
            </div>

            {/* Proyecto 4: UPME */}
            <div className="border border-zinc-200 bg-slate-50 p-8 flex flex-col justify-between hover:border-zinc-400 transition-all shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-gold-600 uppercase">FutureProof Decisions®</span>
                <h3 className="text-xl font-bold text-zinc-900 mt-2 mb-3">Escenarios Energéticos UPME</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Estructuración metodológica y modelado estocástico de expansión de la red de energía nacional ante escenarios de cambio climático e incertidumbre profunda.
                </p>
              </div>
              <div className="border-t border-zinc-200 pt-4 mt-auto">
                <span className="text-xs font-bold text-zinc-500 block">CLIENTE</span>
                <span className="text-sm font-semibold text-zinc-800">Unidad de Planeación Minero Energética</span>
              </div>
            </div>

            {/* Proyecto 5: Peritajes Complejos */}
            <div className="border border-zinc-200 bg-slate-50 p-8 flex flex-col justify-between hover:border-zinc-400 transition-all shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-gold-600 uppercase">Peritajes Técnicos</span>
                <h3 className="text-xl font-bold text-zinc-900 mt-2 mb-3">Dictámenes Forenses Contractuales</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Desarrollo de más de 30 dictámenes periciales concluyentes ante tribunales de arbitramento para controversias en megaproyectos viales e hídricos.
                </p>
              </div>
              <div className="border-t border-zinc-200 pt-4 mt-auto">
                <span className="text-xs font-bold text-zinc-500 block">CLIENTE</span>
                <span className="text-sm font-semibold text-zinc-800">Firmas Legales y Concesionarios</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Credibilidad Académica */}
      <section className="py-20 bg-zinc-900 text-white border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/estructural_wireframe.png')] opacity-[0.03] bg-cover bg-center pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-mono font-bold tracking-widest text-gold-500 uppercase">Rigor Académico</span>
              <h2 className="text-3xl font-heading font-bold text-white mt-2 mb-4">Ciencia Aplicada a la Ingeniería</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Nuestra trayectoria no solo se mide en metros construidos, sino en conocimiento publicado y validado por pares internacionales.
              </p>
              <Link href="/insights" className="text-gold-500 font-bold hover:text-white transition-colors text-sm inline-flex items-center gap-2 mt-6">
                Explorar nuestra producción científica <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="p-6 border border-zinc-800 bg-zinc-950/40 rounded-sm">
                <span className="text-5xl font-heading font-bold text-gold-500">270</span>
                <h4 className="text-sm font-bold text-zinc-200 mt-2 mb-1">Ponencias y Artículos</h4>
                <p className="text-zinc-500 text-xs">Presentados en congresos científicos nacionales e internacionales.</p>
              </div>
              <div className="p-6 border border-zinc-800 bg-zinc-950/40 rounded-sm">
                <span className="text-5xl font-heading font-bold text-gold-500">70+</span>
                <h4 className="text-sm font-bold text-zinc-200 mt-2 mb-1">Artículos Indexados</h4>
                <p className="text-zinc-500 text-xs">Publicados en revistas como Water Resources Research y Energy Policy.</p>
              </div>
              <div className="p-6 border border-zinc-800 bg-zinc-950/40 rounded-sm">
                <span className="text-5xl font-heading font-bold text-gold-500">18</span>
                <h4 className="text-sm font-bold text-zinc-200 mt-2 mb-1">Libros Técnicos</h4>
                <p className="text-zinc-500 text-xs">Publicados en inglés y español sobre sistemas hídricos, planeación y transporte.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Demos Interactivos */}
      <section className="py-24 bg-slate-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">Tecnología ACUMEN OS</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 mt-2 mb-4">Simuladores WebGL en Vivo</h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              Pruebe de primera mano los algoritmos de nuestro sistema operativo. Hemos desplegado tres demos interactivas en 3D que puede operar directamente desde su navegador.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Demo 1: Geotecnia */}
            <div className="bg-white border border-zinc-200 hover:border-zinc-400 transition-all rounded-sm overflow-hidden flex flex-col shadow-sm">
              <div className="h-48 bg-zinc-900 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/images/geotecnico_tunnel.jpg')] bg-cover bg-center opacity-40" />
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    DEMO ONLINE
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Simulador de Excavación Geotécnica</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed mb-6">
                    Ajuste dinámicamente el perfil del terreno y los coeficientes de sostenimiento para visualizar el comportamiento geomecánico de un túnel en tiempo real.
                  </p>
                </div>
                <Link href="/os/visor_webar_produccion.html" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-zinc-950 font-bold text-sm uppercase tracking-wider hover:text-gold-600 transition-colors">
                  Iniciar Simulador <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Demo 2: RDM */}
            <div className="bg-white border border-zinc-200 hover:border-zinc-400 transition-all rounded-sm overflow-hidden flex flex-col shadow-sm">
              <div className="h-48 bg-zinc-900 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/images/estructural_wireframe.jpg')] bg-cover bg-center opacity-40" />
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    DEMO ONLINE
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Evaluación Robust Decision Making (RDM)</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed mb-6">
                    Simule múltiples escenarios de demanda y fallos estructurales para encontrar alternativas de diseño vial inmunes a la incertidumbre del futuro.
                  </p>
                </div>
                <Link href="/os/visor_futureproof.html" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-zinc-950 font-bold text-sm uppercase tracking-wider hover:text-gold-600 transition-colors">
                  Iniciar Simulador <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Demo 3: Embalse */}
            <div className="bg-white border border-zinc-200 hover:border-zinc-400 transition-all rounded-sm overflow-hidden flex flex-col shadow-sm">
              <div className="h-48 bg-zinc-900 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/images/embalse_simulador.jpg')] bg-cover bg-center opacity-40" />
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                    DEMO ONLINE
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Gemelo Hidrológico de Embalses</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed mb-6">
                    Interactúe con un modelo 3D de represa, simulando variabilidad climática y sedimentos mediante interpolación Kriging geoespacial en vivo.
                  </p>
                </div>
                <Link href="/os/visor_embalse.html" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-zinc-950 font-bold text-sm uppercase tracking-wider hover:text-gold-600 transition-colors">
                  Iniciar Simulador <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
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

import Link from "next/link";
import { ArrowRight, Workflow, TrendingUp, FileLineChart, ShieldAlert, Database, MapPin, Users, Zap, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Movilidad 360 | ACUMEN INGENIERÍA S.A.S.",
  description: "Modelación avanzada, gemelos digitales y simulación de transporte inteligente bajo incertidumbre estratégica.",
};

export default function Movilidad360Page() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" 
            style={{ backgroundImage: "url('/images/estructural_wireframe.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-slate-50/20 to-transparent z-10" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-mono tracking-widest text-zinc-500 uppercase bg-zinc-200 mb-6">
              Línea de Negocio Especializada
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight">
              Movilidad 360
            </h1>
            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-normal mb-10">
              Evolucionamos la planificación de transporte tradicional mediante Gemelos Digitales y modelación avanzada de tráfico. Representamos dinámicamente el comportamiento de ciudades y redes viales para optimizar la toma de decisiones, mitigar la congestión y reducir riesgos bajo variabilidad estratégica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto" className="inline-flex justify-center items-center px-6 py-3 bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all group">
                Solicitar Asesoría
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares de Especialidad */}
      <section className="bg-slate-50 border-y border-zinc-200 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-12">Nuestras Áreas de Especialidad</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Movilidad Inteligente 360 */}
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col hover:border-zinc-300 transition-colors">
              <Workflow className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Movilidad Inteligente 360</h3>
              <p className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase mb-3">Gemelos Digitales y Simulación Avanzada</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Modelación y simulación de transporte mediante Gemelos Digitales, Modelos Basados en Agentes (ABM) y Asignación Dinámica de Tráfico (DTA) para predecir dinámicamente el comportamiento de redes urbanas complejas.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto pt-4 border-t border-zinc-100">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Modelos Basados en Agentes (ABM)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Asignación Dinámica de Tráfico (DTA)</li>
              </ul>
            </div>
            
            {/* 2. Movilidad 2050 */}
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col hover:border-zinc-300 transition-colors">
              <TrendingUp className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Movilidad 2050</h3>
              <p className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase mb-3">Estrategia e Inteligencia de Decisión</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Fortalecemos la toma de decisiones estratégicas urbanas y regionales integrando gobernanza, Inteligencia de Decisión (Decision Intelligence), prospectiva y resiliencia para estructurar hojas de ruta robustas bajo incertidumbre profunda.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto pt-4 border-t border-zinc-100">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Arquitectura de decisiones estratégicas</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Criterios multicriterio y resiliencia</li>
              </ul>
            </div>
            
            {/* 3. Movilidad de Valor */}
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col hover:border-zinc-300 transition-colors">
              <FileLineChart className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Movilidad de Valor</h3>
              <p className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase mb-3">Economía, Sostenibilidad e Impacto</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Evaluamos de manera integral el impacto económico, ambiental y social de proyectos viales y de transporte, analizando costos de ciclo de vida, externalidades de congestión, siniestralidad, ruido y huella de carbono.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto pt-4 border-t border-zinc-100">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Análisis Costo-Beneficio y Costo-Efectividad</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Valoración de externalidades de transporte</li>
              </ul>
            </div>

            {/* 4. Movilidad Segura */}
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col hover:border-zinc-300 transition-colors">
              <ShieldAlert className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Movilidad Segura</h3>
              <p className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase mb-3">Inteligencia y Prevención del Riesgo Vial</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Anticipamos y reducimos los siniestros viales mediante un enfoque preventivo de Sistema Seguro y Visión Cero, aplicando analítica de datos georreferenciados, auditorías de seguridad vial y videoanalítica con inteligencia artificial.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto pt-4 border-t border-zinc-100">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Enfoque preventivo Visión Cero / Sistema Seguro</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Videoanalítica predictiva de conflictos</li>
              </ul>
            </div>

            {/* 5. Logística Urbana Inteligente */}
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col hover:border-zinc-300 transition-colors">
              <Database className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Logística Urbana Inteligente</h3>
              <p className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase mb-3">Carga, Última Milla y Distribución Sostenible</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Planificamos y optimizamos el transporte urbano de mercancías (City Logistics) mediante el diseño de microhubs, optimización de rutas, zonas de cargue/descargue e integración de flotas eléctricas.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto pt-4 border-t border-zinc-100">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Planificación estratégica de City Logistics</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Diseño de microhubs y consolidación urbana</li>
              </ul>
            </div>

            {/* 6. Movilidad Activa */}
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col hover:border-zinc-300 transition-colors">
              <MapPin className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Movilidad Activa</h3>
              <p className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase mb-3">Ciudades Caminables, Ciclables e Inclusivas</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Planificación y diseño de redes peatonales, carriles de micromovilidad y espacio urbano inclusivo, integrando indicadores de caminabilidad (walkability) y ciclabilidad (bikeability) con SIG espacial.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto pt-4 border-t border-zinc-100">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Redes de caminabilidad (walkability)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Infraestructura y diseño de calles completas</li>
              </ul>
            </div>

            {/* 7. Transporte Público Inteligente */}
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col hover:border-zinc-300 transition-colors">
              <Users className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Transporte Público Inteligente</h3>
              <p className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase mb-3">Integración, Optimización y Experiencia</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Estructuración, optimización de frecuencias, cobertura y alternativas energéticas para sistemas de transporte masivo (BRT, metros, cables) apoyados en modelación predictiva basada en Big Data y sistemas ITS.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto pt-4 border-t border-zinc-100">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Modelación de demanda y Big Data (GPS/ITS)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Integración tarifaria, física y operacional</li>
              </ul>
            </div>

            {/* 8. Operación Vial Inteligente */}
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col hover:border-zinc-300 transition-colors">
              <Zap className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Operación Vial Inteligente</h3>
              <p className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase mb-3">Optimización, Capacidad y Gestión Dinámica</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Diagnóstico y optimización de corredores viales, semaforización adaptativa y diseño de intersecciones viales dinámicas utilizando microsimulación para maximizar la capacidad vial existente.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto pt-4 border-t border-zinc-100">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Microsimulación y asignación dinámica</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Semaforización dinámica y coordinación adaptativa</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Liderazgo Técnico y Científico */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-4">Liderazgo Técnico y Científico</h2>
        <p className="text-zinc-600 mb-12 max-w-2xl">
          Nuestra división de Movilidad 360 cuenta con la dirección experta de ingenieros y especialistas con amplia trayectoria liderando la planeación y operación de sistemas urbanos de transporte en Colombia y Latinoamérica.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Perfil Ricardo Smith */}
          <div className="border border-zinc-200 bg-white p-8 flex flex-col md:flex-row gap-8 shadow-sm h-full">
            <div className="w-full md:w-1/3 relative aspect-[3/4] bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-500 shrink-0">
              <div 
                className="absolute inset-0 bg-cover bg-center z-0" 
                style={{ backgroundImage: "url('/team/ricardo_smith.jpeg')" }}
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-1">Dr. Ricardo Agustín Smith Q.</h3>
                <p className="text-gold-500 font-medium uppercase tracking-widest text-[10px] mb-4">Director Científico / Ph.D. en Recursos Hidráulicos</p>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Ex-Secretario de Transportes y Tránsito de Medellín y Ex-Director del Área Metropolitana del Valle de Aburrá. Ph.D. de Colorado State University y Profesor Emérito de la Universidad Nacional de Colombia. Ha liderado la estructuración del Plan Maestro de Movilidad de Villavicencio, la integración del SITP de Barranquilla (para la FDN) y la creación de la Agencia Nacional de Seguridad Vial (ANSV) para el Banco Mundial y el Ministerio de Transporte.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-zinc-500 pt-4 border-t border-zinc-100 mt-auto">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Ex-Secretario de Tránsito de Medellín</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Plan Maestro de Movilidad de Villavicencio</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Estructuración de la ANSV (Banco Mundial)</li>
              </ul>
            </div>
          </div>

          {/* Perfil Rafael Nanclares */}
          <div className="border border-zinc-200 bg-white p-8 flex flex-col md:flex-row gap-8 shadow-sm h-full">
            <div className="w-full md:w-1/3 relative aspect-[3/4] bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-500 shrink-0">
              <div 
                className="absolute inset-0 bg-cover bg-center z-0" 
                style={{ backgroundImage: "url('/team/rafael-nanclares.jpg')" }}
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-1">Ing. Rafael Andrés Nanclares O.</h3>
                <p className="text-gold-500 font-medium uppercase tracking-widest text-[10px] mb-4">Director Técnico / Especialista en Gerencia de Construcciones</p>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Ex-Secretario de Transportes y Tránsito de Medellín y Ex-Secretario de Infraestructura Física de Antioquia. Ingeniero Civil de la Universidad Nacional con estudios de Inteligencia Artificial en Berkeley. Estructuró, contrató e implementó el Sistema Inteligente de Movilidad de Medellín (SIMM). Ha sido Presidente de la Junta Directiva de Metroplús S.A., del Aeropuerto Olaya Herrera y de la Terminal de Transporte de Medellín, y ha coordinado la formulación de los Planes de Seguridad Vial para Bello, Itagüí, Popayán y Rionegro, así como el estudio de impacto y riesgo operacional del uso de teléfonos móviles en el Túnel de Oriente.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-zinc-500 pt-4 border-t border-zinc-100 mt-auto">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Implementador del SIMM (Sistemas ITS)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Planes de Seguridad Vial Municipales</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Consultoría de Seguridad - Túnel de Oriente</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Filosofía IA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 text-white p-8 border-l-4 border-gold-500 rounded-r-md shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/estructural_wireframe.png')] opacity-10 bg-cover bg-center pointer-events-none" />
          <div className="relative z-10">
            <h4 className="text-xl font-heading font-bold mb-3 flex items-center gap-2 text-white">
              Ecosistema Digital ACUMEN OS en Movilidad
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-4xl">
              Nuestra metodología en <strong className="text-gold-500 font-semibold tracking-wide">Movilidad 360</strong> no se reduce al modelamiento tradicional. En ACUMEN integramos nuestro ecosistema digital <strong className="text-gold-500 font-semibold tracking-wide">ACUMEN OS</strong> para interconectar modelos de micro y macro-simulación de tráfico con variables de cambio climático, economía urbana e ingeniería de riesgos. Al procesar millones de registros de GPS, sensores ITS y datos geoespaciales mediante algoritmos avanzados, brindamos a los tomadores de decisiones un entorno predictivo interactivo en tiempo real de máxima confiabilidad técnica y científica.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

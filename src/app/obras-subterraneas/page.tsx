import Link from "next/link";
import { ArrowRight, Mountain, ShieldAlert, Pickaxe, CheckCircle2, Waves } from "lucide-react";

export const metadata = {
  title: "Obras Subterráneas e Infraestructura Compleja | ACUMEN INGENIERÍA S.A.S.",
  description: "Ingeniería de precisión para túneles, geotecnia y desafíos imprevistos del terreno.",
};

export default function ObrasSubterraneasPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" 
            style={{ backgroundImage: "url('/images/geotecnico_tunnel.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-slate-50/20 to-transparent z-10" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-mono tracking-widest text-zinc-500 uppercase bg-zinc-200 mb-6">
              Línea de Negocio Especializada
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight">
              Obras Subterráneas e <br/> Infraestructura Compleja.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-normal mb-10">
              Ingeniería de precisión para desafíos imprevistos del terreno. Ofrecemos asesoría técnico-estratégica para la optimización de recursos, estabilización de taludes y dirección de proyectos subterráneos. Transformamos la incertidumbre geológica en viabilidad técnica y financiera.
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
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Pickaxe className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Túneles y Obras Subterráneas</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Optimización de métodos de excavación, sistemas de pre-soporte, pozos profundos y chimeneas de equilibrio (Raise Boring).
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Sistemas de ventilación y bombeo</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Planeación de emportalamientos</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Mountain className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Estabilización de Taludes</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Tratamiento de terrenos mediante alternativas de contención y bioingeniería para materiales de alta humedad.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Vigas de reparto y anclajes</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Estabilización química (cal viva)</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <ShieldAlert className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Soporte Técnico y Reclamaciones</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Justificación técnica y financiera de sobrecostos o retrasos por externalidades y condiciones logísticas extremas.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Auditoría de rendimientos</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Defensa de equilibrio económico</li>
              </ul>
            </div>

            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Waves className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Auditoría Ambiental y Análisis de Riesgo Estocástico</h3>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Análisis estadístico y detección de cambios en la calidad del agua, suelo y aire</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Análisis de incertidumbre de cargas de sedimentos y sedimentación de embalses</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Modelación de vulnerabilidad, resiliencia y riesgo en estructuras</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Especializado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-4">Liderazgo Técnico</h2>
        <p className="text-zinc-600 mb-12 max-w-2xl">
          Nuestra división de Obras Subterráneas cuenta con la dirección experta de ingenieros con trayectoria demostrada en megaproyectos hidroeléctricos, viales y mineros del país.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Perfil David Ruiz */}
          <div className="border border-zinc-200 bg-white p-8 flex flex-col md:flex-row gap-8 shadow-sm">
            <div className="w-full md:w-1/3 relative aspect-[3/4] bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-500">
              <div 
                className="absolute inset-0 bg-cover bg-[position:65%_top] z-0" 
                style={{ backgroundImage: "url('/team/david_ruiz.jpeg')" }}
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-1">Ing. David Fernando Ruiz V.</h3>
              <p className="text-gold-500 font-medium uppercase tracking-widest text-xs mb-4">Asesor Obras Subterráneas e Infraestructura Compleja</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Especialista en Gerencia de Proyectos con más de dos décadas liderando obras de máxima exigencia (Hidroeléctricas Porce III, Amoyá, Concesiones Viales y Desarrollo Minero). Su visión 360°, forjada desde la residencia de obra hasta la gerencia técnica, le permite identificar con precisión el origen operativo de desviaciones en cronogramas.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500" /> Dirección de Túneles y Geotecnia</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500" /> Tecnología Raise Boring</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500" /> Sustentación de Reclamaciones</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Filosofía IA */}
        <div className="mt-16 bg-zinc-900 text-white p-8 border-l-4 border-gold-500 rounded-r-md shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/geotecnico_tunnel.png')] opacity-10 bg-cover bg-center pointer-events-none" />
          <div className="relative z-10">
            <h4 className="text-xl font-heading font-bold mb-3 flex items-center gap-2 text-white">
              Ingeniería Aumentada en Obras Subterráneas
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-4xl">
              En ACUMEN, la profunda experiencia en campo de nuestro equipo se potencia con el ecosistema <strong className="text-gold-500 font-semibold tracking-wide">ACUMEN OS</strong>. Procesamos historiales de avance de obra, bitácoras y modificaciones estructurales mediante Inteligencia Artificial para auditar rendimientos e identificar desviaciones en segundos, blindando legal y financieramente sus proyectos subterráneos.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

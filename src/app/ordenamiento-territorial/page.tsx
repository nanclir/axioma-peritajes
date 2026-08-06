import Link from "next/link";
import { ArrowRight, Map, Home, Building2, Trees, CheckCircle2, MapPin } from "lucide-react";

export const metadata = {
  title: "Ordenamiento Territorial y Planificación Estratégica | ACUMEN INGENIERÍA S.A.S.",
  description: "Planeación a escala municipal y metropolitana. Instrumentos de gestión del suelo, modelos de ciudad sostenible y vivienda de interés social.",
};

export default function OrdenamientoTerritorialPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none grayscale" 
            style={{ backgroundImage: "url('/images/estructural_wireframe.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/40 to-transparent z-10" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-mono tracking-widest text-zinc-500 uppercase bg-zinc-200 mb-6">
              Línea de Negocio Especializada
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight">
              Ordenamiento Territorial <br/> y Planificación Estratégica.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-normal mb-10">
              Transformamos la complejidad urbana y regional en estrategias de desarrollo. Aplicamos rigor técnico para la estructuración de territorios compactos, equitativos y sostenibles.
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
              <MapPin className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Ordenamiento Territorial Multiescalar</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Visión integral del territorio conectando las escalas municipal, metropolitana y regional para asegurar la coherencia en el desarrollo.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Formulación, revisión y ajuste de POT</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Planificación estratégica metropolitana y supramunicipal</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Home className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Política de Suelo y Vivienda</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Estrategias habitacionales orientadas a reducir déficits y garantizar acceso equitativo en territorios urbanos, rurales y de borde.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Mejoramiento integral de barrios y asentamientos informales</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Formulación de políticas de vivienda de interés social (VIS)</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Building2 className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Instrumentos de Gestión y Financiación Urbana</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Diseño de mecanismos financieros y normativos que garantizan el reparto equitativo de cargas y beneficios en el desarrollo urbano.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Captura de valor y plusvalías urbanas</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Planes parciales y modelos de gestión de suelo</li>
              </ul>
            </div>

            <div className="glass-card p-8 bg-white border border-zinc-100 shadow-sm flex flex-col">
              <Trees className="h-8 w-8 text-gold-500 mb-6 shrink-0" />
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-3">Modelos de Ciudad Sostenible</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Articulación de la participación ciudadana con la planificación técnica para consolidar modelos de ciudad compacta, resiliente y humana.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500 mt-auto">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Planificación estratégica participativa e inclusiva</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" /> Modelos de intervención para entornos en posconflicto</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Especializado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-heading font-bold text-zinc-900 mb-4">Liderazgo Técnico y Estratégico</h2>
        <p className="text-zinc-600 mb-12 max-w-2xl text-lg">
          Dirección ejecutiva con experiencia real transformando políticas públicas en infraestructura y ciudad.
        </p>

        <div className="grid md:grid-cols-1 gap-12 items-start">
          
          {/* Perfil Beatriz Rave */}
          <div className="border border-zinc-200 bg-white p-8 flex flex-col md:flex-row gap-8 shadow-sm">
            <div className="w-full md:w-1/3 lg:w-1/4 relative aspect-[3/4] bg-zinc-100 transition-all duration-500 border border-zinc-200">
              <div 
                className="absolute inset-0 bg-cover bg-[position:center_top] z-0" 
                style={{ backgroundImage: "url('/team/beatriz_rave.jpeg')" }}
              />
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4">
              <h3 className="text-3xl font-heading font-bold text-zinc-900 mb-1">Mag. Beatriz Elena Rave Herrera</h3>
              <p className="text-gold-500 font-medium uppercase tracking-widest text-xs mb-6">Directora de Ordenamiento Territorial y Gestión Urbana</p>
              <p className="text-zinc-700 leading-relaxed mb-6">
                Arquitecta y Magíster en Desarrollo de la Universidad Pontificia Bolivariana (UPB). Ex-Gerente General de la Empresa de Vivienda e Infraestructura de Antioquia (VIVA) y Ex-Subdirectora de Planeación del Área Metropolitana del Valle de Aburrá. Decana de la Escuela de Arquitectura y Diseño de la UPB. Con más de dos décadas liderando el desarrollo territorial y políticas de hábitat a escala metropolitana y departamental en Colombia.
              </p>
              <div className="bg-slate-50 p-6 border border-zinc-100">
                <h4 className="font-bold text-zinc-900 mb-4 text-sm uppercase tracking-wide">Áreas de Impacto Técnico</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3 text-sm text-zinc-600">
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Ordenamiento territorial a escala municipal y regional</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Estructuración de instrumentos de gestión urbana</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Diseño y ejecución de políticas de vivienda pública</li>
                    </ul>
                    <ul className="space-y-3 text-sm text-zinc-600">
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Liderazgo en redes académicas globales (GPEAN)</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Mejoramiento integral de asentamientos informales</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Filosofía IA */}
        <div className="mt-16 bg-zinc-900 text-white p-8 md:p-12 border-l-4 border-gold-500 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/geotecnico_tunnel.png')] opacity-10 bg-cover bg-center pointer-events-none" />
          <div className="relative z-10">
            <h4 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2 text-white">
              De la Visión Urbana al Ecosistema Digital ACUMEN OS
            </h4>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-4xl">
              Toda la inteligencia territorial y visión estratégica liderada por la Magíster Beatriz Rave se integra con la capacidad analítica de <strong className="text-gold-500 font-bold tracking-wide">ACUMEN OS</strong>. Esto nos permite estructurar proyectos urbanos y planes de ordenamiento donde cada variable normativa, demográfica y financiera está respaldada por datos trazables y simulaciones geoespaciales de alta precisión.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

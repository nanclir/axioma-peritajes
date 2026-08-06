import { 
  Map, Layers, Bus, Droplets, Globe, Zap, 
  LineChart, HardHat, FileText, Pickaxe, 
  MapPin, Cable, Home, Scale, ShieldCheck, Network
} from "lucide-react";

const proyectos = [
  {
    title: "Plan Maestro de Movilidad Sostenible - Villavicencio",
    tag: "ESTRUCTURACIÓN INTEGRAL",
    icon: Bus,
    description: "Actualización de la formulación del Plan Maestro de Movilidad Sostenible y Segura, y estructuración Técnica, Legal, Financiera y Social del Sistema Estratégico de Transporte Público (SETP) de Villavicencio (2022-2023).",
    stats: [
      { value: "100%", label: "Cobertura Analizada" },
      { value: "SETP", label: "Estructuración Integral" }
    ],
    image: "/images/villavicencio_mobility_1786042561203.jpg",
    bgAccent: "bg-blue-900/10",
  },
  {
    title: "Integración del Transporte Público y SITM - Barranquilla",
    tag: "ÁREA METROPOLITANA",
    icon: Network,
    description: "Estructuración técnica, legal y financiera del diseño de la integración del Transporte Público Colectivo de pasajeros de Barranquilla y su Área Metropolitana y el SITM, incluyendo el diseño conceptual de los equipamientos del SITP (2016-2020).",
    stats: [
      { value: "SITM", label: "Diseño e Integración" },
      { value: "SITP", label: "Equipamientos" }
    ],
    image: "/images/barranquilla_transit_1786042570363.jpg",
    bgAccent: "bg-gold-900/10",
  },
  {
    title: "Plan de Manejo Integral - Río Bogotá",
    tag: "RECURSO HÍDRICO",
    icon: Droplets,
    description: "Planificación de Recursos Hidráulicos para el Plan de Manejo Integral del Recurso Hídrico en la Cuenca del Río Bogotá, integrando soluciones de saneamiento y sostenibilidad (2015).",
    stats: [
      { value: "SIG", label: "Cuenca Hidrográfica" },
      { value: "Ambiental", label: "Planeación" }
    ],
    image: "/images/rio_bogota_water_1786042578592.jpg",
    bgAccent: "bg-cyan-900/10",
  },
  {
    title: "Plan Estratégico de Gobierno - Ciudad de Panamá (BID)",
    tag: "PLAN QUINQUENAL",
    icon: Globe,
    description: "Asesoría y acompañamiento a la Alcaldía de la Ciudad de Panamá en la elaboración de su plan quinquenal y en la construcción de su plan estratégico de gobierno, financiado por el Banco Interamericano de Desarrollo - BID (2024-2025).",
    stats: [
      { value: "BID", label: "Entidad Financiadora" },
      { value: "5 Años", label: "Proyección Estratégica" }
    ],
    image: "/images/panama_strategy_1786042585977.jpg",
    bgAccent: "bg-indigo-900/10",
  },
  {
    title: "Infraestructura de Alta Calidad (HQI) - Suramérica",
    tag: "POLÍTICA PÚBLICA",
    icon: ShieldCheck,
    description: "Estudio sobre mejoramiento de movilidad urbana y aplicabilidad de los Principios de Infraestructura de Alta Calidad (HQI) en tres ciudades de Sur América (2021).",
    stats: [
      { value: "3", label: "Ciudades Analizadas" },
      { value: "HQI", label: "Estándares Globales" }
    ],
    image: "/images/hqi_infrastructure_1786042622321.jpg",
    bgAccent: "bg-emerald-900/10",
  },
  {
    title: "Escenarios Energéticos para el Siglo XXI - UPME",
    tag: "PROYECCIÓN ENERGÉTICA",
    icon: Zap,
    description: "Desarrollo de escenarios energéticos para Colombia bajo el liderazgo de la Unidad de Planeamiento Minero Energético (UPME), Ministerio de Minas y Energía (1999-2000).",
    stats: [
      { value: "UPME", label: "Sector Nacional" },
      { value: "Energía", label: "Proyección Estratégica" }
    ],
    image: "/images/upme_energy_1786042631100.jpg",
    bgAccent: "bg-amber-900/10",
  },
  {
    title: "Priorización de Inversiones en Acueducto - BID",
    tag: "METODOLOGÍA DE INVERSIÓN",
    icon: LineChart,
    description: "Diseño e implementación de una metodología de priorización de inversiones en empresas de acueducto y alcantarillado en Colombia para el Banco Interamericano de Desarrollo (2019-2020).",
    stats: [
      { value: "BID", label: "Financiador" },
      { value: "Data", label: "Priorización" }
    ],
    image: "/images/bid_aqueduct_1786042641361.jpg",
    bgAccent: "bg-teal-900/10",
  },
  {
    title: "Túnel del Toyo y Gestión Vial (Antioquia)",
    tag: "MEGAOBRA DE INFRAESTRUCTURA",
    icon: HardHat,
    description: "Estructuración, presupuestación y contratación del Túnel del Toyo y recuperación de la red vial del departamento de Antioquia, pasando de un 15% a un 85% en buen estado. Premio Presidencial por ejecución de regalías.",
    stats: [
      { value: "$1.14B", label: "Valor de Contratación" },
      { value: "85%", label: "Red Vial Óptima" }
    ],
    image: "/images/tunel_toyo_concept_1786023543800.jpg",
    bgAccent: "bg-orange-900/10",
  },
  {
    title: "Programa Mejoremos Tu Cuadra",
    tag: "INFRAESTRUCTURA COMUNITARIA",
    icon: Pickaxe,
    description: "Ambicioso proyecto de pavimentación comunitaria en conjunto con las Alcaldías del departamento de Antioquia, ejecutado bajo el rol de Secretaría de Infraestructura.",
    stats: [
      { value: "125", label: "Municipios" },
      { value: ">1.500", label: "Cuadras Pavimentadas" }
    ],
    image: "/images/mejoremos_cuadra_1786042649737.jpg",
    bgAccent: "bg-zinc-900/10",
  },
  {
    title: "Reestructuración y Sistematización del ICANH",
    tag: "VIRTUALIZACIÓN E INSTITUCIONALIDAD",
    icon: FileText,
    description: "Consultoría técnica para el Instituto Colombiano de Antropología e Historia. Diseño del plan de reestructuración institucional y sistematización de servicios (virtualización e IA) adaptados a las nuevas demandas del patrimonio cultural (2020).",
    stats: [
      { value: "ICANH", label: "Patrimonio Nacional" },
      { value: "IA & TIC", label: "Transformación Digital" }
    ],
    image: "/images/icanh_restructure_1786042677047.jpg",
    bgAccent: "bg-purple-900/10",
  },
  {
    title: "PETI Topo Chico - Monterrey, México",
    tag: "TRANSFORMACIÓN INTEGRAL",
    icon: MapPin,
    description: "Asesoría del Plan Estratégico de Transformación Integral (PETI) para la planeación, diseño y socialización de proyectos de transformación urbana y social del Polígono 51 en Nuevo León.",
    stats: [
      { value: "México", label: "Cooperación Internacional" },
      { value: "Urbano", label: "Desarrollo Sostenible" }
    ],
    image: "/images/peti_topochico_1786042685216.jpg",
    bgAccent: "bg-sky-900/10",
  },
  {
    title: "PETI Alianza Real - Nuevo León, México",
    tag: "DESARROLLO SOSTENIBLE",
    icon: Layers,
    description: "Plan Estratégico de Transformación Integral para los municipios de Escobedo, El Carmen y García. Una herramienta integral para concentrar las capacidades del Estado y mejorar el tejido social.",
    stats: [
      { value: "3", label: "Municipios Integrados" },
      { value: "Tejido Social", label: "Impacto Comunitario" }
    ],
    image: "/images/peti_alianzareal_1786042694192.jpg",
    bgAccent: "bg-rose-900/10",
  },
  {
    title: "Sistema Inteligente de Movilidad de Medellín (SIMM)",
    tag: "TECNOLOGÍAS ITS",
    icon: Map,
    description: "Estructuración, contratación e implementación de herramientas de Sistemas Inteligentes de Transporte únicas en Colombia, complementadas con modelamiento financiero a 10 años.",
    stats: [
      { value: "ITS", label: "Infraestructura Tecnológica" },
      { value: "10 Años", label: "Modelamiento Financiero" }
    ],
    image: "/images/simm_concept_1786023553652.jpg",
    bgAccent: "bg-slate-900/10",
  },
  {
    title: "Modernización de Cables Aéreos - Antioquia",
    tag: "TRANSPORTE NO CONVENCIONAL",
    icon: Cable,
    description: "Actualización y puesta en marcha del sistema de cables aéreos del departamento de Antioquia, alcanzando una ejecución presupuestal perfecta (Gerencia Operativa, 2012-2014).",
    stats: [
      { value: "100%", label: "Ejecución Presupuestal" },
      { value: "Cable", label: "Sistemas Aéreos" }
    ],
    image: "/images/cables_aereos_1786042703328.jpg",
    bgAccent: "bg-stone-900/10",
  },
  {
    title: "Megaproyectos de Hábitat Social - Comfenalco",
    tag: "INFRAESTRUCTURA Y VIVIENDA",
    icon: Home,
    description: "Gerencia integral de grandes proyectos de vivienda (Manglares de Turbo, PDMI Montesol, FAI Volare) y adecuaciones de infraestructura para el Nodo de Bienestar Económico (2024-2025).",
    stats: [
      { value: "$14.3B", label: "Inversión en Sedes" },
      { value: "100%", label: "Certificación Habitacional" }
    ],
    image: "/images/comfenalco_habitat_1786042761412.jpg",
    bgAccent: "bg-green-900/10",
  },
  {
    title: "Asesoría Pericial - Túnel de La Línea",
    tag: "INGENIERÍA FORENSE",
    icon: Scale,
    description: "Asesoría técnica en ingeniería forense al perito independiente sobre los sobrecostos y perjuicios en la terminación del Túnel Piloto y de Rescate del Cruce de la Cordillera Central.",
    stats: [
      { value: "Forense", label: "Dictamen Independiente" },
      { value: "Megaobra", label: "Infraestructura Nacional" }
    ],
    image: "/images/tunel_linea_forense_1786043664626.jpg",
    bgAccent: "bg-red-900/10",
  }
];

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
          
          {proyectos.map((proyecto, idx) => {
            const isEven = idx % 2 === 1;
            const IconComponent = proyecto.icon;
            return (
              <div key={idx} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`relative aspect-[4/3] bg-zinc-100 border border-zinc-200 overflow-hidden group ${isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                   <div 
                     className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                     style={{ backgroundImage: `url('${proyecto.image}')` }}
                   />
                   <div className={`absolute inset-0 ${proyecto.bgAccent}`} />
                </div>
                
                <div className={isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                   <div className="inline-flex gap-2 items-center text-xs font-mono text-zinc-500 mb-4 border border-zinc-200 px-2 py-1 bg-slate-50">
                     <IconComponent className="h-3 w-3" /> {proyecto.tag}
                   </div>
                   <h3 className="text-3xl font-heading font-bold text-zinc-900 mb-4">
                     {proyecto.title}
                   </h3>
                   <p className="text-zinc-600 leading-relaxed mb-6">
                     {proyecto.description}
                   </p>
                   <div className="grid grid-cols-2 gap-4 border-t border-zinc-200 pt-6">
                      {proyecto.stats.map((stat, i) => (
                        <div key={i}>
                          <h5 className="font-bold text-2xl text-zinc-900">{stat.value}</h5>
                          <p className="text-sm text-zinc-500">{stat.label}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

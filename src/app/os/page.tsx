"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface SubService {
  name: string;
  desc: string;
}

interface MegaProject {
  title: string;
  detail: string;
}

interface SliderConfig {
  name: string;
  min: number;
  max: number;
  val: number;
  unit: string;
  key: string;
}

interface Division {
  number: string;
  title: string;
  tagline: string;
  category: string;
  subservices: SubService[];
  megaproject: MegaProject;
  pdf: string;
  sim: {
    title: string;
    sliders: SliderConfig[];
  };
}

const divisions: Division[] = [
  {
    number: "01",
    title: "FutureProof Decisions®",
    tagline: "Modelación estocástica y decisiones inteligentes bajo incertidumbre",
    category: "INGENIERÍA BAJO INCERTIDUMBRE",
    subservices: [
      {
        name: "Decision Intelligence Lab®",
        desc: "Desarrollo de modelos cuantitativos, análisis multicriterio y algoritmos de optimización para respaldar decisiones viales y ambientales complejas y auditables."
      },
      {
        name: "Riesgo Hidroclimatológico y Ambiental",
        desc: "Modelamiento avanzado de eventos extremos, balances hídricos dinámicos, cálculo de curvas IDF y simulaciones de tránsito de avenidas ante el cambio climático."
      },
      {
        name: "Modelación Estocástica y No-Estacionariedad",
        desc: "Análisis probabilístico no estacionario enfocado en modelar la variabilidad y el cambio en series temporales lluvia-escorrentía."
      }
    ],
    megaproject: {
      title: "Escenarios Energéticos para el Siglo XXI - UPME",
      detail: "Desarrollo de escenarios energéticos para Colombia bajo el liderazgo de la Unidad de Planeamiento Minero Energético (UPME), Ministerio de Minas y Energía (1999-2000)."
    },
    pdf: "/pdf/ficha_tecnica_futureproof.pdf",
    sim: {
      title: "Curva Hidrográfica Dinámica",
      sliders: [
        { name: "Caudal Máximo (Q)", min: 100, max: 4000, val: 2500, unit: "m³/s", key: "peakQ" },
        { name: "Tiempo al Pico (Tp)", min: 4, max: 24, val: 12, unit: "hrs", key: "timeP" }
      ]
    }
  },
  {
    number: "02",
    title: "Movilidad 360",
    tagline: "Modelación avanzada y analítica activa de sistemas urbanos de transporte",
    category: "TRANSPORTE INTELIGENTE",
    subservices: [
      {
        name: "Gemelos Digitales y Simulación DTA/ABM",
        desc: "Modelos de asignación dinámica de tráfico (DTA) y simulación multiagente (ABM) para evaluar la demanda y capacidad de redes de transporte urbano a nivel micro y macro."
      },
      {
        name: "Seguridad Vial Operacional",
        desc: "Auditorías viales, análisis predictivo de colisiones y modelación bajo el enfoque de Sistema Seguro / Visión Cero para prevenir la siniestralidad."
      },
      {
        name: "Logística y Operación Vial",
        desc: "Diseño de esquemas de distribución urbana de mercancías de última milla y estructuración operativa e integración de sistemas ITS."
      }
    ],
    megaproject: {
      title: "Sistema Inteligente de Movilidad de Medellín (SIMM)",
      detail: "Estructuración, contratación e implementación de herramientas de Sistemas Inteligentes de Transporte únicas en Colombia, complementadas con modelamiento financiero a 10 años."
    },
    pdf: "/os/visor_futureproof.html",
    sim: {
      title: "Flujo de Intersección Vial",
      sliders: [
        { name: "Volumen de Tráfico", min: 300, max: 2000, val: 1200, unit: "veh/h", key: "trafficV" },
        { name: "Congestión de Red", min: 1, max: 10, val: 4, unit: "/10", key: "congest" }
      ]
    }
  },
  {
    number: "03",
    title: "Obras Subterráneas",
    tagline: "Diseño geomecánico y auditoría técnica de túneles y taludes complejos",
    category: "GEOTECNIA E INFRAESTRUCTURA",
    subservices: [
      {
        name: "Diseño Estructural de Túneles",
        desc: "Cálculo analítico y numérico por elementos finitos de sostenimiento de túneles viales e hidráulicos en suelos y rocas (métodos de excavación convencional y mecanizada)."
      },
      {
        name: "Estabilidad de Taludes y Anclajes",
        desc: "Modelación de fallas geotécnicas bajo condiciones de saturación por lluvias extremas y diseño de medidas activas y pasivas de estabilización."
      },
      {
        name: "Gerencia de Proyectos y Auditoría",
        desc: "Estructuración de planes de aseguramiento técnico (PMO), interventoría de excavaciones complejas y auditoría forense de desvíos presupuestarios."
      }
    ],
    megaproject: {
      title: "Túnel del Toyo y Gestión Vial (Antioquia)",
      detail: "Estructuración, presupuestación y contratación del Túnel del Toyo y recuperación de la red vial del departamento de Antioquia, pasando de un 15% a un 85% en buen estado. Premio Presidencial por ejecución de regalías."
    },
    pdf: "/pdf/ficha_tecnica_taludes.pdf",
    sim: {
      title: "Esfuerzos Radiales del Túnel",
      sliders: [
        { name: "Radio del Túnel (R)", min: 4, max: 10, val: 6, unit: "m", key: "radius" },
        { name: "Número de Pernos de Roca", min: 6, max: 24, val: 16, unit: "unidades", key: "bolts" }
      ]
    }
  },
  {
    number: "04",
    title: "Ordenamiento Territorial",
    tagline: "Planificación urbana a escala regional, metropolitana y municipal",
    category: "PLANIFICACIÓN URBANA",
    subservices: [
      {
        name: "Ajustes de POT y Planes Maestros",
        desc: "Estructuración técnica y jurídica para la formulación, revisión y concertación de los Planes de Ordenamiento Territorial y parciales."
      },
      {
        name: "Estructuración y Gestión del Suelo",
        desc: "Modelación financiera y de reparto equitativo de cargas y beneficios, captura de plusvalías y financiación urbana sostenible."
      },
      {
        name: "Vivienda y Ciudades Sostenibles",
        desc: "Planes estratégicos de hábitat y modelos urbanísticos orientados al transporte masivo y resiliencia climática urbana."
      }
    ],
    megaproject: {
      title: "Plan Estratégico de Gobierno - Ciudad de Panamá (BID)",
      detail: "Asesoría y acompañamiento a la Alcaldía de la Ciudad de Panamá en la elaboración de su plan quinquenal y en la construcción de su plan estratégico de gobierno, financiado por el Banco Interamericano de Desarrollo - BID (2024-2025)."
    },
    pdf: "/pdf/ficha_tecnica_taludes.pdf",
    sim: {
      title: "Zonificación y Edificabilidad",
      sliders: [
        { name: "Densidad Habitacional", min: 50, max: 300, val: 150, unit: "viv/ha", key: "density" },
        { name: "Espacio Público Libre", min: 10, max: 40, val: 20, unit: "%", key: "greenS" }
      ]
    }
  },
  {
    number: "05",
    title: "Peritajes Técnicos",
    tagline: "Dictámenes periciales concluyentes ante controversias y litigios arbitrales",
    category: "INGENIERÍA FORENSE",
    subservices: [
      {
        name: "Peritaje Técnico Judicial y Arbitral",
        desc: "Estudios patológicos de fallos y sustentación oral experta ante tribunales de arbitramento nacionales e internacionales."
      },
      {
        name: "Auditoría de Patologías y Fallos",
        desc: "Análisis forense de patologías estructurales y fallos geotécnicos en infraestructura vial colapsada o con daños severos."
      },
      {
        name: "Peritaje Técnico Hidroclimatológico",
        desc: "Determinación por métodos de ingeniería de las causas de fallos geotécnicos o estructurales en megaproyectos viales."
      }
    ],
    megaproject: {
      title: "Peritajes Técnicos en Megaobras",
      detail: "Consolidación de dictámenes técnicos concluyentes para litigios y controversias contractuales complejas en megaobras. Incluye auditoría estructural, evaluación geotécnica y análisis determinístico de desequilibrios económicos y cronogramas."
    },
    pdf: "/pdf/ficha_tecnica_embalse.pdf",
    sim: {
      title: "Esfuerzos Flectores en Viga",
      sliders: [
        { name: "Carga Puntual (P)", min: 50, max: 400, val: 180, unit: "kN", key: "loadP" },
        { name: "Longitud de la Luz (L)", min: 10, max: 50, val: 30, unit: "m", key: "spanL" }
      ]
    }
  }
];

export default function AcumenOSMicrosite() {
  const [activeColumn, setActiveColumn] = useState<number | null>(null);
  const [mobileActive, setMobileActive] = useState<number | null>(null);
  const [souvenirOpen, setSouvenirOpen] = useState(false);

  const [simulations, setSimulations] = useState([
    { peakQ: 2500, timeP: 12 },   // FP
    { trafficV: 1200, congest: 4 }, // MV
    { radius: 6, bolts: 16 },      // OB
    { density: 150, greenS: 20 },  // OT
    { loadP: 180, spanL: 30 }      // PR
  ]);

  const updateSimulationSlider = (divIndex: number, key: string, val: number) => {
    setSimulations(prev => {
      const copy = [...prev];
      copy[divIndex] = { ...copy[divIndex], [key]: val };
      return copy;
    });
  };


  const openWhatsAppSolve = (divIndex: number) => {
    const div = divisions[divIndex];
    if (!div) return;
    const phone = "573005771484";
    const message = `Hola, estuve revisando la división de ${div.title} (${div.category}) en ACUMEN OS y me gustaría consultar la estructuración técnica o evaluación de un proyecto.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Grid style variables for offline CSS reliability
  const gridStyle = {
    backgroundColor: "#fcfdfe",
    backgroundImage: `
      linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)
    `,
    backgroundSize: "20px 20px"
  };

  const gridMajorStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(148, 163, 184, 0.14) 1.5px, transparent 1.5px),
      linear-gradient(to bottom, rgba(148, 163, 184, 0.14) 1.5px, transparent 1.5px)
    `,
    backgroundSize: "100px 100px"
  };

  // SVGs render mapping for preview columns
  const renderPreviewSVG = (index: number) => {
    switch (index) {
      case 0:
        return (
          <svg viewBox="0 0 300 200" className="w-5/6 h-36 stroke-[1.5] transition-colors duration-300">
            <line x1="40" y1="160" x2="280" y2="160" stroke="#cbd5e1" strokeDasharray="3 3" />
            <line x1="40" y1="20" x2="40" y2="160" stroke="#cbd5e1" strokeDasharray="3 3" />
            <path d="M 40 160 Q 120 40 180 120 T 280 160" stroke="currentColor" fill="none" strokeWidth="2" />
            <path d="M 40 160 Q 120 40 180 120 T 280 160 L 280 160 L 40 160 Z" fill="currentColor" fillOpacity="0.03" stroke="none" />
            <text x="270" y="180" className="font-mono text-[9px] fill-slate-400" stroke="none">t(h)</text>
            <text x="15" y="30" className="font-mono text-[9px] fill-slate-400" stroke="none">Q</text>
          </svg>
        );
      case 1:
        return (
          <svg viewBox="0 0 300 200" className="w-5/6 h-36 stroke-[1.5] transition-colors duration-300">
            <circle cx="150" cy="100" r="30" stroke="currentColor" fill="none" strokeDasharray="4 2" />
            <circle cx="150" cy="100" r="45" stroke="currentColor" fill="none" />
            <line x1="40" y1="100" x2="260" y2="100" stroke="currentColor" />
            <line x1="150" y1="20" x2="150" y2="180" stroke="currentColor" />
            <line x1="40" y1="75" x2="260" y2="75" stroke="#cbd5e1" strokeDasharray="2 2" />
            <line x1="40" y1="125" x2="260" y2="125" stroke="#cbd5e1" strokeDasharray="2 2" />
            <path d="M 90 90 L 105 100 L 90 110 Z" fill="currentColor" fillOpacity="0.1" stroke="none" />
            <path d="M 210 110 L 195 100 L 210 90 Z" fill="currentColor" fillOpacity="0.1" stroke="none" />
          </svg>
        );
      case 2:
        return (
          <svg viewBox="0 0 300 200" className="w-5/6 h-36 stroke-[1.5] transition-colors duration-300">
            <path d="M 60 160 A 90 90 0 0 1 240 160" stroke="currentColor" fill="none" strokeWidth="2" />
            <path d="M 75 160 A 75 75 0 0 1 225 160" stroke="currentColor" fill="none" />
            <line x1="50" y1="160" x2="250" y2="160" stroke="currentColor" />
            <line x1="150" y1="85" x2="150" y2="40" stroke="#cbd5e1" strokeDasharray="2 2" />
            <line x1="100" y1="105" x2="65" y2="80" stroke="#cbd5e1" strokeDasharray="2 2" />
            <line x1="200" y1="105" x2="235" y2="80" stroke="#cbd5e1" strokeDasharray="2 2" />
            <circle cx="150" cy="40" r="2" fill="#cbd5e1" stroke="none" />
            <circle cx="65" cy="80" r="2" fill="#cbd5e1" stroke="none" />
            <circle cx="235" cy="80" r="2" fill="#cbd5e1" stroke="none" />
          </svg>
        );
      case 3:
        return (
          <svg viewBox="0 0 300 200" className="w-5/6 h-36 stroke-[1.5] transition-colors duration-300">
            <rect x="40" y="30" width="80" height="60" stroke="currentColor" fill="none" strokeDasharray="3 3" />
            <rect x="180" y="30" width="80" height="60" stroke="currentColor" fill="none" />
            <rect x="40" y="110" width="80" height="60" stroke="currentColor" fill="none" />
            <rect x="180" y="110" width="80" height="60" stroke="currentColor" fill="none" strokeDasharray="3 3" />
            <text x="65" y="65" className="font-mono text-[8px] fill-slate-400" stroke="none">ZONA RES-1</text>
            <text x="205" y="65" className="font-mono text-[8px] fill-slate-400" stroke="none">COM-02</text>
          </svg>
        );
      case 4:
        return (
          <svg viewBox="0 0 300 200" className="w-5/6 h-36 stroke-[1.5] transition-colors duration-300">
            <line x1="40" y1="100" x2="260" y2="100" stroke="currentColor" strokeWidth="2.5" />
            <polygon points="40,100 30,115 50,115" stroke="currentColor" fill="none" />
            <polygon points="260,100 250,115 270,115" stroke="currentColor" fill="none" />
            <path d="M 40 100 Q 150 170 260 100" stroke="#cbd5e1" fill="none" strokeDasharray="3 3" />
            <path d="M 150 50 L 150 100 M 150 100 L 145 90 M 150 100 L 155 90" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <text x="145" y="45" className="font-mono text-[9px] fill-slate-400" stroke="none">P</text>
          </svg>
        );
      default:
        return null;
    }
  };

  // Render expanded detail SVGs with real-time state variable binding
  const renderDetailSVG = (colIndex?: number) => {
    const targetCol = colIndex !== undefined ? colIndex : activeColumn;
    if (targetCol === null) return null;
    const data = simulations[targetCol];
    
    if (targetCol === 0) { // FutureProof (Hydrograph)
      const peak = data.peakQ ?? 2500;
      const time = data.timeP ?? 12;
      const peakY = 160 - (peak / 4000) * 120;
      const peakX = 40 + (time / 24) * 200;
      
      return (
        <svg viewBox="0 0 300 200" className="w-5/6 h-48 stroke-slate-900 fill-none stroke-[1.5]">
          <line x1="40" y1="160" x2="280" y2="160" stroke="#cbd5e1" strokeDasharray="3 3" />
          <line x1="40" y1="20" x2="40" y2="160" stroke="#cbd5e1" strokeDasharray="3 3" />
          <line x1="40" y1="60" x2="280" y2="60" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="4 2" />
          <text x="210" y="52" className="font-mono text-[7px] fill-red-500" stroke="none">LIMITE DE DESBORDAMIENTO</text>
          <path d={`M 40 160 Q ${peakX - 30} ${peakY - 10} ${peakX} ${peakY} T 280 160`} stroke="#d97706" strokeWidth="2.5" />
          <path d={`M 40 160 Q ${peakX - 30} ${peakY - 10} ${peakX} ${peakY} T 280 160 L 280 160 L 40 160 Z`} fill="#d97706" fillOpacity="0.08" stroke="none" />
          <circle cx={peakX} cy={peakY} r="4" fill="#b45309" stroke="none" />
          <text x={peakX + 8} y={peakY - 4} className="font-mono text-[9px] fill-slate-900 font-bold" stroke="none">Qmax</text>
          <text x="270" y="180" className="font-mono text-[9px] fill-slate-500" stroke="none">t(h)</text>
          <text x="15" y="30" className="font-mono text-[9px] fill-slate-500" stroke="none">Q</text>
        </svg>
      );
    } 
    else if (targetCol === 1) { // Movilidad 360 (Traffic)
      const traffic = data.trafficV ?? 1200;
      const congest = data.congest ?? 4;
      const circleSize = 30 + congest * 2;
      const pathCount = Math.min(Math.floor(traffic / 300) + 1, 5);
      
      return (
        <svg viewBox="0 0 300 200" className="w-5/6 h-48 stroke-slate-900 fill-none stroke-[1.5]">
          <line x1="40" y1="100" x2="260" y2="100" stroke="#cbd5e1" strokeWidth="2.5" />
          <line x1="150" y1="20" x2="150" y2="180" stroke="#cbd5e1" strokeWidth="2.5" />
          {Array.from({ length: pathCount }).map((_, i) => (
            <circle key={i} cx="150" cy="100" r={25 + i * 8} stroke="#d97706" strokeWidth="1" strokeDasharray="6 4" strokeOpacity="0.75" />
          ))}
          <circle cx="150" cy="100" r={circleSize} stroke="#d97706" strokeWidth="2" fill="white" fillOpacity="0.8" />
          <circle cx="150" cy="100" r="10" fill="#d97706" stroke="none" />
          <text x="138" y="103" className="font-mono text-[8px] fill-white" stroke="none">ITS</text>
        </svg>
      );
    } 
    else if (targetCol === 2) { // Obras Subterráneas (Tunnel)
      const radius = data.radius ?? 6;
      const bolts = data.bolts ?? 16;
      const drawRadius = radius * 9;
      
      return (
        <svg viewBox="0 0 300 200" className="w-5/6 h-48 stroke-slate-900 fill-none stroke-[1.5]">
          <path d="M 40 40 Q 150 15 260 40" stroke="#e2e8f0" strokeDasharray="3 3" />
          <path d="M 40 160 Q 150 135 260 160" stroke="#e2e8f0" strokeDasharray="3 3" />
          <circle cx="150" cy="100" r={drawRadius + 5} stroke="#cbd5e1" strokeWidth="4" />
          <circle cx="150" cy="100" r={drawRadius} stroke="#1e293b" strokeWidth="2.5" />
          <circle cx="150" cy="100" r="3" fill="#94a3b8" stroke="none" />
          {Array.from({ length: bolts }).map((_, i) => {
            const angle = (i * (360 / bolts)) * (Math.PI / 180);
            const xStart = 150 + Math.cos(angle) * drawRadius;
            const yStart = 100 + Math.sin(angle) * drawRadius;
            const xEnd = 150 + Math.cos(angle) * (drawRadius + 18);
            const yEnd = 100 + Math.sin(angle) * (drawRadius + 18);
            return (
              <g key={i}>
                <line x1={xStart} y1={yStart} x2={xEnd} y2={yEnd} stroke="#d97706" strokeWidth="1" />
                <circle cx={xEnd} cy={yEnd} r="1.5" fill="#d97706" stroke="none" />
              </g>
            );
          })}
          <line x1={150 - drawRadius} y1="100" x2={150 + drawRadius} y2="100" stroke="#cbd5e1" strokeWidth="0.8" />
          <text x="142" y="96" className="font-mono text-[8px] fill-slate-400" stroke="none">{`D=${radius * 2}m`}</text>
        </svg>
      );
    } 
    else if (targetCol === 3) { // Ordenamiento (POT Layout)
      const density = data.density ?? 150;
      const green = data.greenS ?? 20;
      const gridSpacing = 40 - (density / 10);
      const greenScale = green / 100;
      
      return (
        <svg viewBox="0 0 300 200" className="w-5/6 h-48 stroke-slate-900 fill-none stroke-[1.5]">
          <rect x="40" y="30" width="220" height="140" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="50" y="40" width={200 * greenScale} height="120" fill="#10b981" fillOpacity="0.08" stroke="#10b981" strokeWidth="1.2" />
          <text x="58" y="55" className="font-mono text-[7px] fill-emerald-700" stroke="none">{`RESERVA AMB (${green}%)`}</text>
          <g stroke="#d97706" strokeWidth="1.2">
            <rect x="140" y="50" width="40" height="40" strokeDasharray={gridSpacing > 15 ? "none" : "2 2"} />
            <rect x="190" y="50" width="40" height="40" />
            <rect x="140" y="100" width="40" height="40" />
            <rect x="190" y="100" width="40" height="40" strokeDasharray={gridSpacing > 15 ? "none" : "2 2"} />
          </g>
          <text x="145" y="73" className="font-mono text-[7px] fill-amber-700" stroke="none">RESTR: 4P</text>
          <text x="195" y="73" className="font-mono text-[7px] fill-amber-700" stroke="none">MAX DENS</text>
        </svg>
      );
    } 
    else if (targetCol === 4) { // Peritajes (Structural Beam)
      const load = data.loadP ?? 180;
      const span = data.spanL ?? 30;
      const arrowLength = 20 + (load / 400) * 40;
      const beamHeight = 100;
      
      return (
        <svg viewBox="0 0 300 200" className="w-5/6 h-48 stroke-slate-900 fill-none stroke-[1.5]">
          <line x1="40" y1={beamHeight} x2="260" y2={beamHeight} stroke="#1e293b" strokeWidth="3" />
          <polygon points={`40,${beamHeight} 30,${beamHeight + 15} 50,${beamHeight + 15}`} stroke="#1e293b" fill="#f1f5f9" />
          <polygon points={`260,${beamHeight} 250,${beamHeight + 15} 270,${beamHeight + 15}`} stroke="#1e293b" fill="#f1f5f9" />
          <path d={`M 150 ${beamHeight - arrowLength} L 150 ${beamHeight} M 150 ${beamHeight} L 145 ${beamHeight - 8} M 150 ${beamHeight} L 155 ${beamHeight - 8}`} stroke="#d97706" strokeWidth="2.5" fill="none" />
          <text x="140" y={beamHeight - arrowLength - 8} className="font-mono text-[10px] fill-slate-900 font-bold" stroke="none">{`P=${load}kN`}</text>
          <path d={`M 40 ${beamHeight} Q 150 ${beamHeight + (arrowLength * 1.5)} 260 ${beamHeight}`} stroke="#3b82f6" strokeWidth="1.8" strokeDasharray="4 2" />
          <text x="156" y={beamHeight + (arrowLength * 1.5) + 12} className="font-mono text-[9px] fill-blue-600" stroke="none">{`Mmax = ${((load * span) / 4).toFixed(1)} kNm`}</text>
          <line x1="40" y1={beamHeight + 25} x2="260" y2={beamHeight + 25} stroke="#cbd5e1" strokeWidth="0.8" />
          <text x="138" y={beamHeight + 36} className="font-mono text-[8px] fill-slate-400" stroke="none">{`L = ${span}m`}</text>
        </svg>
      );
    }
    return null;
  };



  return (
    <div style={gridStyle} className="font-sans text-slate-900 min-h-screen flex flex-col overflow-x-hidden relative select-none">
      <div style={gridMajorStyle} className="absolute inset-0 pointer-events-none z-0"></div>

      {/* HEADER */}
      <header className="relative z-10 border-b border-slate-200/80 bg-white/70 backdrop-blur-md px-6 py-4 flex justify-between items-center shrink-0">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <svg viewBox="0 0 100 100" className="w-7 h-7 stroke-slate-900 fill-none stroke-[6]">
            <polygon points="50,15 85,35 85,65 50,85 15,65 15,35"/>
          </svg>
          <div>
            <span className="font-bold tracking-tight text-slate-900 text-sm uppercase block leading-none">ACUMEN OS</span>
            <span className="font-mono text-[9px] text-amber-700 block tracking-widest mt-0.5">CORE VERSION 1.0</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSouvenirOpen(true)} 
            className="bg-amber-600/10 hover:bg-amber-600/20 text-amber-700 border border-amber-600/30 px-3 py-1.5 rounded-sm text-[10px] font-mono tracking-widest uppercase transition-all"
          >
            [ QUIÉNES SOMOS ]
          </button>
          <Link href="/" className="text-xs text-slate-500 hover:text-slate-950 font-mono tracking-wider">
            ← WEB
          </Link>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 flex-1 flex flex-col md:flex-row w-full overflow-hidden">
        
        {/* DESKTOP VIEW: 5 FLEX COLUMNS */}
        <div id="desktop-grid" className="hidden md:flex flex-1 w-full h-full divide-x divide-slate-200/80 overflow-hidden group">
          {divisions.map((div, index) => (
            <div 
              key={index} 
              onClick={() => setActiveColumn(index)} 
              className="col-item flex-1 h-full flex flex-col justify-between p-6 cursor-pointer bg-white/40 hover:bg-white/95 opacity-90 transition-all duration-500 ease-out hover:flex-[2.5] hover:opacity-100 group-hover:opacity-60 group-hover:flex-[0.6] group-hover:bg-white/10 hover:text-amber-700"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-slate-400 font-medium">{`[ 0${div.number} ]`}</span>
                <h3 className="font-bold text-lg text-slate-950 tracking-tight leading-none uppercase">{div.title}</h3>
                <p className="text-[10px] font-mono text-amber-700 tracking-widest uppercase">{div.category}</p>
              </div>
              
              <div className="w-full py-8 flex justify-center items-center overflow-hidden">
                {renderPreviewSVG(index)}
              </div>

              <div className="border-t border-slate-200/50 pt-4 flex justify-between items-center text-slate-900">
                <span className="font-mono text-[10px] text-slate-400">STATUS: ACTIVE</span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider">{`ABRIR CAPA →`}</span>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW: ACCORDIONS */}
        <div id="mobile-accordion" className="flex md:hidden flex-col w-full divide-y divide-slate-200/80 overflow-y-auto z-10">
          {divisions.map((div, index) => {
            const isAccordionActive = mobileActive === index;
            return (
              <div key={index} className="bg-white/40 border-b border-slate-200/80">
                <button 
                  onClick={() => setMobileActive(isAccordionActive ? null : index)} 
                  className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-slate-400 font-medium">{`[ 0${div.number} ]`}</span>
                    <h3 className="font-bold text-base text-slate-950 uppercase">{div.title}</h3>
                    <span className="text-[9px] font-mono text-amber-700 tracking-wider uppercase">{div.category}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono transition-transform duration-300">
                    {isAccordionActive ? "✕" : "▼"}
                  </span>
                </button>
                
                {isAccordionActive && (
                  <div className="p-6 border-t border-slate-100 bg-white flex flex-col gap-6 animate-fadeIn">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 italic mb-4">{`"${div.tagline}"`}</p>

                      {/* Gráfica interactiva en iPhone / Móvil */}
                      <div className="w-full border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm rounded-sm mb-6 flex flex-col justify-center items-center relative overflow-hidden">
                        <span className="self-start font-mono text-[8px] text-slate-400 mb-2 uppercase">CAD OUTPUT: SIMULACIÓN EN VIVO</span>
                        {renderDetailSVG(index)}
                        
                        {/* Sliders táctiles en Móvil */}
                        <div className="w-full border-t border-slate-200/60 pt-3 mt-3">
                          <span className="font-mono text-[8px] text-slate-400 tracking-wider uppercase mb-2 block">Parámetros Físicos Dinámicos</span>
                          <div className="flex flex-col gap-3">
                            {div.sim.sliders.map((slider, sIdx) => {
                              const currentVal = (simulations[index] as any)[slider.key];
                              return (
                                <div key={sIdx}>
                                  <div className="flex justify-between font-mono text-[9px] text-slate-500 mb-0.5">
                                    <span className="uppercase">{slider.name}</span>
                                    <span className="font-bold text-slate-950">{currentVal} {slider.unit}</span>
                                  </div>
                                  <input 
                                    type="range" 
                                    min={slider.min} 
                                    max={slider.max} 
                                    value={currentVal} 
                                    className="w-full accent-amber-600" 
                                    onChange={(e) => updateSimulationSlider(index, slider.key, parseFloat(e.target.value))}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <h4 className="font-mono text-[9px] text-slate-400 tracking-wider uppercase mb-2">Sub-servicios</h4>
                      <div className="flex flex-col gap-3">
                        {div.subservices.map((sub, sIdx) => (
                          <div key={sIdx}>
                            <h5 className="font-bold text-xs text-slate-950">{sub.name}</h5>
                            <p className="text-[11px] text-slate-500 leading-normal">{sub.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-amber-600/5 border border-amber-600/10 p-4 rounded-sm">
                      <span className="font-mono text-[9px] text-amber-700 tracking-wider uppercase font-bold block mb-1">PROYECTO DESTACADO</span>
                      <h4 className="font-bold text-xs text-slate-950 leading-tight">{div.megaproject.title}</h4>
                      <p className="text-[11px] text-slate-600 mt-1">{div.megaproject.detail}</p>
                    </div>

                    <div className="flex flex-col gap-4 pt-4 border-t border-slate-100">
                      <button 
                        onClick={() => openWhatsAppSolve(index)} 
                        className="w-full py-3 bg-slate-950 hover:bg-amber-700 text-white font-mono text-[10px] tracking-widest uppercase text-center transition-colors"
                      >
                        Resolver Necesidad vía WhatsApp →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* DETAILED PANEL VIEW (DESKTOP EXPANDED) */}
        {activeColumn !== null && (
          <div id="detailed-panel" className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md flex flex-col md:flex-row overflow-hidden">
            <div style={gridStyle} className="absolute inset-0 pointer-events-none z-0"></div>
            <div style={gridMajorStyle} className="absolute inset-0 pointer-events-none z-0"></div>
            
            {/* Left Info Panel */}
            <div className="relative z-10 w-full md:w-3/5 border-r border-slate-200/80 flex flex-col overflow-y-auto no-scrollbar justify-between p-8 md:p-12">
              <div>
                <button 
                  onClick={() => setActiveColumn(null)} 
                  className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-950 uppercase"
                >
                  ← Volver al Ecosistema OS
                </button>
                
                <span className="font-mono text-[11px] text-amber-700 tracking-widest uppercase mb-1 block">CAPÍTULO TÉCNICO</span>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 uppercase mb-3">
                  {divisions[activeColumn].title}
                </h1>
                <p className="text-sm font-medium text-slate-500 mb-8 italic">
                  {`"${divisions[activeColumn].tagline}"`}
                </p>
                
                <div className="border-t border-b border-slate-200/60 py-6 mb-8">
                  <h4 className="font-mono text-[10px] text-slate-400 tracking-widest uppercase mb-4">Mapeo de Sub-servicios Activos</h4>
                  <div className="flex flex-col gap-6">
                    {divisions[activeColumn].subservices.map((sub, sIdx) => (
                      <div key={sIdx} className="flex flex-col gap-1">
                        <h5 className="font-bold text-sm text-slate-950">{sub.name}</h5>
                        <p className="text-xs text-slate-600 leading-relaxed">{sub.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-600/5 border border-amber-600/10 p-5 rounded-sm">
                  <span className="font-mono text-[9px] text-amber-700 tracking-widest uppercase font-bold block mb-1">PROYECTO EMBLEMÁTICO</span>
                  <h4 className="font-bold text-sm text-slate-950 leading-tight">{divisions[activeColumn].megaproject.title}</h4>
                  <p className="text-xs text-slate-600 mt-1">{divisions[activeColumn].megaproject.detail}</p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200/60 pt-6 flex flex-col md:flex-row justify-end items-start md:items-center gap-4">
                <button 
                  onClick={() => openWhatsAppSolve(activeColumn as number)} 
                  className="px-6 py-3 bg-slate-950 hover:bg-amber-700 text-white font-mono text-[11px] tracking-widest uppercase transition-colors"
                >
                  Resolver Necesidad vía WhatsApp →
                </button>
              </div>
            </div>

            {/* Right Interactive Graphic Panel */}
            <div className="relative z-10 w-full md:w-2/5 flex flex-col bg-slate-50/50 justify-between p-8 md:p-12 overflow-y-auto no-scrollbar border-t md:border-t-0 border-slate-200">
              <div className="w-full flex-1 flex flex-col justify-center items-center">
                <div className="w-full border border-slate-200/80 bg-white p-6 shadow-sm rounded-sm mb-8 flex justify-center items-center relative overflow-hidden">
                  <span className="absolute top-2 left-3 font-mono text-[9px] text-slate-400">CAD OUTPUT: VECTOR LIVE SIMULATION</span>
                  {renderDetailSVG()}
                </div>

                <div className="w-full border-t border-slate-200/60 pt-6">
                  <h4 className="font-mono text-[10px] text-slate-400 tracking-widest uppercase mb-4">Parámetros Físicos de la Simulación</h4>
                  <div className="flex flex-col gap-5">
                    {divisions[activeColumn].sim.sliders.map((slider, sIdx) => {
                      const currentVal = (simulations[activeColumn as number] as any)[slider.key];
                      return (
                        <div key={sIdx}>
                          <div className="flex justify-between font-mono text-[10px] text-slate-500 mb-1">
                            <span className="uppercase">{slider.name}</span>
                            <span>{currentVal} {slider.unit}</span>
                          </div>
                          <input 
                            type="range" 
                            min={slider.min} 
                            max={slider.max} 
                            value={currentVal} 
                            className="w-full accent-amber-600" 
                            onChange={(e) => updateSimulationSlider(activeColumn as number, slider.key, parseFloat(e.target.value))}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200/40 pt-4 flex justify-between text-[10px] font-mono text-slate-400">
                <span>COORDS: REF_ZONE_5</span>
                <span>TENSION: ACTIVE</span>
              </div>
            </div>

          </div>
        )}



        {/* EXECUTIVE LEADERSHIP & CONTACT MODAL (FICHA DE IDENTIDAD) */}
        {souvenirOpen && (
          <div id="souvenir-overlay" className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-md flex justify-center items-center p-4 md:p-6 overflow-y-auto">
            <div style={gridStyle} className="w-full max-w-4xl bg-white border border-slate-300 p-6 md:p-8 shadow-2xl relative rounded-sm my-auto max-h-[92vh] flex flex-col overflow-y-auto">
              <div style={gridMajorStyle} className="absolute inset-0 pointer-events-none z-0"></div>
              
              <button 
                onClick={() => setSouvenirOpen(false)} 
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-950 font-mono text-base z-20"
                aria-label="Cerrar modal"
              >
                ✕
              </button>
              
              <div className="relative z-10 flex flex-col gap-6">
                {/* Modal Header */}
                <div className="border-b border-slate-200/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-amber-700 font-bold tracking-widest uppercase">ACUMEN INGENIERÍA S.A.S.</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-mono text-[10px] text-slate-400 uppercase">QUIÉNES SOMOS</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-950 uppercase mt-1">
                    Liderazgo Técnico & Directores
                  </h2>
                  <p className="text-xs md:text-sm text-slate-600 mt-1 font-medium">
                    Inteligencia de Ingeniería y Reducción de Incertidumbre
                  </p>
                </div>

                {/* Partners Grid: Both Ricardo Smith & Rafael Nanclares together */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Partner 1: Ricardo Smith */}
                  <div className="border border-slate-200 bg-white/90 p-5 rounded-sm flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex gap-4 items-start mb-4">
                        <div className="w-20 h-24 shrink-0 bg-zinc-100 rounded-sm overflow-hidden border border-slate-200 relative">
                          <img 
                            src="/team/ricardo_smith.jpeg" 
                            alt="PhD. Ricardo A. Smith Quintero" 
                            className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" 
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="font-bold text-base text-slate-950 leading-tight">Ricardo A. Smith Quintero</h3>
                          <span className="font-mono text-[10px] text-amber-700 font-semibold uppercase tracking-wider mt-0.5">
                            Socio Director / PhD. en Recursos Hidráulicos
                          </span>
                          <p className="text-[11px] text-slate-500 font-medium mt-1 leading-snug">
                            Ph.D. y M.Sc. por Colorado State University. Ingeniero Civil por la Universidad Nacional de Colombia.
                          </p>
                        </div>
                      </div>

                      <div className="text-xs text-slate-600 leading-relaxed font-light space-y-2 border-t border-slate-100 pt-3">
                        <p>
                          Con más de 40 años de experiencia, es una de las voces más autorizadas en Colombia en materia de recursos hídricos, planificación energética y movilidad.
                        </p>
                        <p>
                          Ha sido Profesor Emérito, Decano de la Facultad de Minas y Director del programa de Doctorado en Ingeniería de la Universidad Nacional. Ha ocupado cargos como Secretario de Transportes y Tránsito y Alcalde Encargado de Medellín, además de Director del Área Metropolitana del Valle de Aburrá.
                        </p>
                        <p>
                          Consultor de alto nivel para el BID, Banco Mundial, Findeter y múltiples concesiones viales, aplicando modelos matemáticos avanzados y optimización para la toma de decisiones con múltiples objetivos.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-100">
                        <span className="bg-slate-100 text-slate-700 font-mono text-[9px] px-2 py-1 rounded">
                          +270 Artículos & 18 Libros
                        </span>
                        <span className="bg-slate-100 text-slate-700 font-mono text-[9px] px-2 py-1 rounded">
                          Asesor BID & Banco Mundial
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex gap-2">
                      <a 
                        href="https://wa.me/573005771484?text=Hola%20Dr.%20Ricardo%20Smith%2C%20le%20contacto%20a%20trav%C3%A9s%20de%20ACUMEN%20OS..." 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 py-2 bg-slate-950 hover:bg-amber-700 text-white font-mono text-[10px] tracking-wider uppercase text-center transition-colors"
                      >
                        WhatsApp Directo
                      </a>
                      <a 
                        href="/vcard/ricardo-smith.vcf" 
                        download="Ricardo_Smith_ACUMEN.vcf"
                        className="px-3 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 font-mono text-[10px] uppercase transition-colors text-center inline-block"
                        title="Descargar contacto individual"
                      >
                        vCard ↓
                      </a>
                    </div>
                  </div>

                  {/* Partner 2: Rafael Nanclares */}
                  <div className="border border-slate-200 bg-white/90 p-5 rounded-sm flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex gap-4 items-start mb-4">
                        <div className="w-20 h-24 shrink-0 bg-zinc-100 rounded-sm overflow-hidden border border-slate-200 relative">
                          <img 
                            src="/team/rafael-nanclares.jpg" 
                            alt="Rafael Nanclares Ospina" 
                            className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" 
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="font-bold text-base text-slate-950 leading-tight">Rafael Nanclares Ospina</h3>
                          <span className="font-mono text-[10px] text-amber-700 font-semibold uppercase tracking-wider mt-0.5">
                            Socio Director / Magíster en Filosofía
                          </span>
                          <p className="text-[11px] text-slate-500 font-medium mt-1 leading-snug">
                            Ingeniero Civil, Especialista en Gerencia de Construcciones y Magíster en Filosofía.
                          </p>
                        </div>
                      </div>

                      <div className="text-xs text-slate-600 leading-relaxed font-light space-y-2 border-t border-slate-100 pt-3">
                        <p>
                          Su perfil híbrido fusiona la gerencia de alta complejidad en infraestructura con el pensamiento crítico, la ética tecnológica y la inteligencia artificial, formación consolidada con sus estudios en Inteligencia Artificial en la Universidad de Berkeley.
                        </p>
                        <p>
                          Con más de 20 años de experiencia, ha fungido como Secretario de Infraestructura Física de Antioquia y Secretario de Tránsito y Transporte de Medellín. A nivel internacional, ha sido Asesor de infraestructura del Secretario de Infraestructura del estado de Nuevo León (México).
                        </p>
                        <p>
                          En Acumen, es el arquitecto principal de <strong>ACUMEN OS</strong>, integrando el conocimiento técnico profundo con herramientas de análisis de datos, visualización y trazabilidad para transformar la consultoría de infraestructura.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-100">
                        <span className="bg-slate-100 text-slate-700 font-mono text-[9px] px-2 py-1 rounded">
                          Filosofía e IA (Berkeley)
                        </span>
                        <span className="bg-slate-100 text-slate-700 font-mono text-[9px] px-2 py-1 rounded">
                          Arquitecto ACUMEN OS
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex gap-2">
                      <a 
                        href="https://wa.me/573005771484?text=Hola%20Ing.%20Rafael%20Nanclares%2C%20le%20contacto%20a%20trav%C3%A9s%20de%20ACUMEN%20OS..." 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 py-2 bg-slate-950 hover:bg-amber-700 text-white font-mono text-[10px] tracking-wider uppercase text-center transition-colors"
                      >
                        WhatsApp Directo
                      </a>
                      <a 
                        href="/vcard/rafael-nanclares.vcf" 
                        download="Rafael_Nanclares_ACUMEN.vcf"
                        className="px-3 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 font-mono text-[10px] uppercase transition-colors text-center inline-block"
                        title="Descargar contacto individual"
                      >
                        vCard ↓
                      </a>
                    </div>
                  </div>

                </div>

                {/* Shared Contact & 1-Tap Conversion Bar */}
                <div className="bg-slate-50 border border-slate-200/90 p-5 rounded-sm flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center sm:text-left">
                    <div>
                      <span className="font-mono text-[9px] text-slate-400 uppercase block">Celular / WhatsApp</span>
                      <a href="tel:+573005771484" className="font-mono text-xs font-bold text-slate-950 hover:text-amber-700">
                        +57 300 577 1484
                      </a>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-slate-400 uppercase block">Correo Institucional</span>
                      <a href="mailto:contacto@acumeningenieria.com" className="font-mono text-xs font-bold text-slate-950 hover:text-amber-700">
                        contacto@acumeningenieria.com
                      </a>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-slate-400 uppercase block">Portal Oficial</span>
                      <Link href="/" className="font-mono text-xs font-bold text-slate-950 hover:text-amber-700">
                        acumeningenieria.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <a 
                      href="/vcard/directores-acumen.vcf" 
                      download="Directores_ACUMEN.vcf"
                      className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-mono text-[11px] font-bold tracking-wider uppercase transition-colors shadow-sm text-center inline-block"
                    >
                      Guardar Ambos Contactos (.vcf)
                    </a>
                    <a 
                      href="https://wa.me/573005771484" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-mono text-[11px] tracking-wider uppercase transition-colors text-center"
                    >
                      WhatsApp Institucional
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-200/80 bg-white/70 backdrop-blur-md px-6 py-3 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-slate-400 shrink-0 gap-2 md:gap-0">
        <span>© 2026 ACUMEN INGENIERÍA S.A.S. • NTAG213 ACTIVE</span>
        <div className="flex gap-4">
          <span className="text-amber-700 font-bold">• CONNECTED TO ACUMEN OS CORE</span>
          <span className="text-slate-400">LATENCY: 12ms</span>
        </div>
      </footer>
    </div>
  );
}

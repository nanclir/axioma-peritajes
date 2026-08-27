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
      title: "Escenarios Energéticos UPME",
      detail: "Estructuración de simulaciones estocásticas a gran escala y escenarios de abastecimiento para el sector energético nacional."
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
      title: "SIMM Medellín",
      detail: "Modelación de flujos vehiculares a 10 años e integración financiera del Sistema Inteligente de Movilidad de la ciudad."
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
      title: "Túnel del Toyo",
      detail: "Estabilización y control geomecánico del portal de acceso del túnel más largo de América, con presupuestos controlados."
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
      title: "Plan Estratégico Ciudad de Panamá",
      detail: "Estructuración de políticas de ordenación territorial financieras y supervisadas por el BID para el área metropolitana de Panamá."
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
      title: "Dictámenes de Litigio de Megaproyectos",
      detail: "Más de 30 dictámenes periciales presentados exitosamente en disputas de infraestructura vial nacional por fallos en túneles y puentes."
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
  const [visitorName, setVisitorName] = useState("ING. RAFAEL NANCLARES");
  const [souvenirVars, setSouvenirVars] = useState({
    fc: 35,
    fs: 2.1,
    diagram: "tunnel"
  });

  const [simulations, setSimulations] = useState([
    { peakQ: 2500, timeP: 12 },   // FP
    { trafficV: 1200, congest: 4 }, // MV
    { radius: 6, bolts: 16 },      // OB
    { density: 150, greenS: 20 },  // OT
    { loadP: 180, spanL: 30 }      // PR
  ]);

  const [certId, setCertId] = useState("");

  useEffect(() => {
    // Generate unique cert id on client side once
    const randomCode = Math.floor(Math.random() * 9000 + 1000);
    setCertId(`ACM-2026-X8F${randomCode}`);
  }, []);

  const updateSimulationSlider = (divIndex: number, key: string, val: number) => {
    setSimulations(prev => {
      const copy = [...prev];
      copy[divIndex] = { ...copy[divIndex], [key]: val };
      return copy;
    });
  };

  const updateSouvenirSlider = (key: string, val: number) => {
    setSouvenirVars(prev => ({ ...prev, [key]: val }));
  };

  const handleSolveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("PARÁMETROS ENVIADOS AL CORE: Requerimientos técnicos catalogados exitosamente en la base de datos.");
    const overlay = document.getElementById("solve-overlay");
    if (overlay) overlay.classList.add("hidden");
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
  const renderDetailSVG = () => {
    if (activeColumn === null) return null;
    const data = simulations[activeColumn];
    
    if (activeColumn === 0) { // FutureProof (Hydrograph)
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
    else if (activeColumn === 1) { // Movilidad 360 (Traffic)
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
    else if (activeColumn === 2) { // Obras Subterráneas (Tunnel)
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
    else if (activeColumn === 3) { // Ordenamiento (POT Layout)
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
    else if (activeColumn === 4) { // Peritajes (Structural Beam)
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

  // Render souvenir card dynamic diagram based on user selection
  const renderSouvenirCardSVG = () => {
    const type = souvenirVars.diagram;
    if (type === "tunnel") {
      const drawRadius = 30 + (souvenirVars.fc - 21) * 0.8;
      return (
        <svg viewBox="0 0 300 200" className="w-5/6 h-28 stroke-slate-900 fill-none stroke-[1.2]">
          <circle cx="150" cy="100" r={drawRadius} stroke="#94a3b8" strokeWidth="1" />
          <circle cx="150" cy="100" r={drawRadius + 6} stroke="#0f172a" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="150" y1="100" x2="150" y2="40" stroke="#d97706" strokeWidth="1" />
          <line x1="150" y1="100" x2="90" y2="100" stroke="#d97706" strokeWidth="1" />
          <text x="156" y="55" className="font-mono text-[8px] fill-amber-700" stroke="none">{`FS=${souvenirVars.fs}`}</text>
        </svg>
      );
    } 
    else if (type === "hydro") {
      const peakVal = 40 + (souvenirVars.fc - 21) * 2;
      return (
        <svg viewBox="0 0 300 200" className="w-5/6 h-28 stroke-slate-900 fill-none stroke-[1.2]">
          <line x1="40" y1="160" x2="260" y2="160" stroke="#94a3b8" />
          <line x1="40" y1="40" x2="40" y2="160" stroke="#94a3b8" />
          <path d={`M 40 160 Q 120 ${160 - peakVal} 180 120 T 260 160`} stroke="#0f172a" stroke-width="1.8" />
          <circle cx="120" cy={160 - peakVal} r="3" fill="#d97706" stroke="none" />
          <text x="128" y={165 - peakVal} className="font-mono text-[8px] fill-slate-900" stroke="none">Q100</text>
        </svg>
      );
    } 
    else if (type === "beam") {
      const drawLoad = 40 + (souvenirVars.fc - 21) * 1.5;
      return (
        <svg viewBox="0 0 300 200" className="w-5/6 h-28 stroke-slate-900 fill-none stroke-[1.2]">
          <line x1="40" y1="100" x2="260" y2="100" stroke="#0f172a" strokeWidth="2.5" />
          <polygon points="40,100 32,112 48,112" stroke="#0f172a" fill="none" />
          <polygon points="260,100 252,112 268,112" stroke="#0f172a" fill="none" />
          <path d="M 150 40 L 150 100 M 150 100 L 146 92 M 150 100 L 154 92" stroke="#d97706" strokeWidth="1.8" fill="none" />
          <path d={`M 40 100 Q 150 ${100 + drawLoad} 260 100`} stroke="#94a3b8" strokeDasharray="3 3" />
          <text x="156" y="55" className="font-mono text-[8px] fill-amber-700" stroke="none">Mmax</text>
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
            [ FICHA DE IDENTIDAD ]
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
                      <a href={div.pdf} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 bg-slate-950 text-white font-mono text-[10px] tracking-widest uppercase text-center block">
                        Descargar Ficha Técnica (.PDF)
                      </a>
                      <button 
                        onClick={() => {
                          const overlay = document.getElementById("solve-overlay");
                          if (overlay) overlay.classList.remove("hidden");
                        }} 
                        className="w-full py-2.5 border border-slate-300 text-slate-950 font-mono text-[10px] tracking-widest uppercase text-center"
                      >
                        Resolver Necesidad
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

              <div className="mt-8 border-t border-slate-200/60 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <a 
                  href={divisions[activeColumn].pdf} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-5 py-2.5 bg-slate-950 hover:bg-amber-700 text-white font-mono text-[11px] tracking-widest uppercase transition-colors"
                >
                  Descargar Ficha Técnica (.PDF)
                </a>
                <button 
                  onClick={() => {
                    const overlay = document.getElementById("solve-overlay");
                    if (overlay) overlay.classList.remove("hidden");
                  }} 
                  className="px-5 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-950 font-mono text-[11px] tracking-widest uppercase transition-colors"
                >
                  Resolver Necesidad
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

        {/* SOLVER / CONTACT OVERLAY */}
        <div id="solve-overlay" className="hidden fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm flex justify-center items-center p-6">
          <div style={gridStyle} className="w-full max-w-md bg-white border border-slate-200 p-8 shadow-2xl relative rounded-sm">
            <div style={gridMajorStyle} className="absolute inset-0 pointer-events-none z-0"></div>
            <button 
              onClick={() => {
                const overlay = document.getElementById("solve-overlay");
                if (overlay) overlay.classList.add("hidden");
              }} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-950 font-mono text-sm"
            >
              ✕
            </button>
            
            <div className="relative z-10">
              <span className="font-mono text-[9px] text-amber-700 tracking-widest uppercase">ACUMEN SOLVER</span>
              <h3 className="text-xl font-bold tracking-tight text-slate-950 uppercase mb-1">Diagnosticar Proyecto</h3>
              <p className="text-xs text-slate-500 mb-6">Envíe los requerimientos específicos a nuestro laboratorio y nos comunicaremos en menos de 24h.</p>
              
              <form onSubmit={handleSolveSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-slate-400 uppercase mb-1">Nombre Completo</label>
                  <input required type="text" className="w-full px-3 py-2 border border-slate-200 focus:outline-none focus:border-amber-600 font-mono text-xs" placeholder="ING. ALBERTO GOMEZ" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-slate-400 uppercase mb-1">Correo Institucional</label>
                  <input required type="email" className="w-full px-3 py-2 border border-slate-200 focus:outline-none focus:border-amber-600 font-mono text-xs" placeholder="AGOMEZ@EMPRESA.COM" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-slate-400 uppercase mb-1">Descripción del Desafío</label>
                  <textarea required rows={3} className="w-full px-3 py-2 border border-slate-200 focus:outline-none focus:border-amber-600 font-mono text-xs" placeholder="Describa el fallo, la modelación o el peritaje requerido..."></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-slate-950 hover:bg-amber-700 text-white font-mono text-xs tracking-wider uppercase transition-colors mt-2">
                  Enviar Parámetros de Solución →
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* SPEC SHEET / SOUVENIR OVERLAY */}
        {souvenirOpen && (
          <div id="souvenir-overlay" className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm flex justify-center items-center p-6 overflow-y-auto">
            <div style={gridStyle} className="w-full max-w-2xl bg-white border border-slate-300 p-8 shadow-2xl relative rounded-sm my-8">
              <div style={gridMajorStyle} className="absolute inset-0 pointer-events-none z-0"></div>
              <button onClick={() => setSouvenirOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-950 font-mono text-sm">✕</button>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Spec Configurator */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] text-amber-700 tracking-widest uppercase">ACUMEN OS 1.0</span>
                    <h3 className="text-xl font-bold tracking-tight text-slate-950 uppercase mb-1">Ficha de Identidad Técnica</h3>
                    <p className="text-xs text-slate-500 mb-6">Personalice y exporte su ficha de especificaciones técnicas parametrizada por ACUMEN OS.</p>
                    
                    <div className="flex flex-col gap-4 mb-6">
                      <div>
                        <label className="block font-mono text-[9px] text-slate-400 uppercase mb-1">Nombre del Profesional</label>
                        <input 
                          type="text" 
                          onInput={(e) => setVisitorName((e.target as HTMLInputElement).value.toUpperCase())} 
                          className="w-full px-3 py-2 border border-slate-200 focus:outline-none focus:border-amber-600 font-mono text-xs" 
                          value={visitorName} 
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[9px] text-slate-400 uppercase mb-1">Esquema Técnico Base</label>
                        <select 
                          value={souvenirVars.diagram} 
                          onChange={(e) => setSouvenirVars(prev => ({ ...prev, diagram: e.target.value }))} 
                          className="w-full px-3 py-2 border border-slate-200 focus:outline-none focus:border-amber-600 font-mono text-xs bg-white"
                        >
                          <option value="tunnel">Sección de Túnel (Obras Subterráneas)</option>
                          <option value="hydro">Curva de Caudales (FutureProof)</option>
                          <option value="beam">Viga Estructural (Peritajes)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[9px] text-slate-400 uppercase mb-1">Resistencia del Concreto (f'c)</label>
                        <div className="flex gap-4 items-center">
                          <input 
                            type="range" 
                            min="21" 
                            max="45" 
                            value={souvenirVars.fc} 
                            className="flex-1 accent-amber-600" 
                            onInput={(e) => updateSouvenirSlider("fc", parseInt((e.target as HTMLInputElement).value))} 
                          />
                          <span className="font-mono text-xs w-12 text-right">{souvenirVars.fc} MPa</span>
                        </div>
                      </div>
                      <div>
                        <label className="block font-mono text-[9px] text-slate-400 uppercase mb-1">Factor de Seguridad (F.S.)</label>
                        <div className="flex gap-4 items-center">
                          <input 
                            type="range" 
                            min="1.0" 
                            max="3.0" 
                            step="0.1" 
                            value={souvenirVars.fs} 
                            className="flex-1 accent-amber-600" 
                            onInput={(e) => updateSouvenirSlider("fs", parseFloat((e.target as HTMLInputElement).value))} 
                          />
                          <span className="font-mono text-xs w-12 text-right">{souvenirVars.fs}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button onClick={() => window.print()} className="w-full py-3 bg-slate-950 hover:bg-amber-700 text-white font-mono text-xs tracking-wider uppercase transition-colors">
                    Exportar Ficha Técnica (Imprimir)
                  </button>
                </div>

                {/* Right Display Spec Card */}
                <div id="print-area" className="border border-slate-300 bg-white p-6 shadow-sm rounded-sm flex flex-col justify-between h-[340px] relative overflow-hidden">
                  <div style={gridStyle} className="absolute inset-0 opacity-30 z-0"></div>
                  <div style={gridMajorStyle} className="absolute inset-0 opacity-30 z-0"></div>
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-xs tracking-wider text-slate-950 uppercase leading-none">ACUMEN OS</h4>
                      <span className="font-mono text-[8px] text-slate-400 tracking-widest block uppercase">ESPECIFICACIONES B2B</span>
                    </div>
                    <svg viewBox="0 0 100 100" className="w-5 h-5 stroke-slate-900 fill-none stroke-[6]">
                      <polygon points="50,15 85,35 85,65 50,85 15,65 15,35"/>
                    </svg>
                  </div>

                  <div className="relative z-10 flex-1 flex justify-center items-center my-4 overflow-hidden border border-slate-200 bg-white/50 backdrop-blur-sm rounded-sm">
                    {renderSouvenirCardSVG()}
                  </div>

                  <div className="relative z-10 font-mono text-[8px] text-slate-600 border-t border-slate-200 pt-3">
                    <div className="flex justify-between">
                      <span className="uppercase">ID CERTIFICADO:</span>
                      <span className="font-bold text-slate-950">{certId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase">PROFESIONAL:</span>
                      <span className="font-bold text-slate-950">{visitorName || "RICARDO SMITH"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase">PARÁMETROS:</span>
                      <span className="font-bold text-slate-950">
                        f'c={souvenirVars.fc}MPa / FS={souvenirVars.fs}
                      </span>
                    </div>
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

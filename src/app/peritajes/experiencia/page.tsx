import { ArrowLeft, Scale, Building2, Gavel, FileCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Experiencia en Peritajes Técnicos | ACUMEN INGENIERÍA S.A.S.",
  description: "Historial completo de casos de estudio y dictámenes periciales desarrollados por nuestros socios.",
};

const casos = [
  {
    id: 1,
    año: "2018",
    accionante: "Piedad Cecilia Torres y otros",
    accionado: "Empresas Públicas de Medellín",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje técnico relacionado con la red de alcantarillado del colector de la quebrada La Volcana, sus capacidades, tipo de colector y su afectación a la propiedad."
  },
  {
    id: 2,
    año: "2018",
    accionante: "Inciviles Ltda.",
    accionado: "Empresas Públicas de Medellín",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje técnico relacionado con el cumplimiento del contrato para la construcción del colector de aguas residuales del costado sur de la quebrada La Hueso y obras complementarias."
  },
  {
    id: 3,
    año: "2019",
    accionante: "Constructora el Cóndor S.A.",
    accionado: "Gobernación de Antioquia",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje técnico desde la Ingeniería Civil, que determinó todos y cada uno de los perjuicios causados durante el desarrollo de la construcción de la vía denominada La Cortada (1995-2007)."
  },
  {
    id: 4,
    año: "2019",
    accionante: "Metroplús S.A.",
    accionado: "Pablo Emilio Bocarejo & CEI S.A Contratistas Consultores",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje técnico tendiente a determinar los perjuicios causados como consecuencia de la entrega tardía e incompleta de los estudios y diseños de la TRONCAL MEDELLÍN del sistema de transporte público."
  },
  {
    id: 5,
    año: "2019",
    accionante: "Sonia Isabel Urrea Quintero",
    accionado: "Ingenio Vegachí, Gobernación de Antioquia, IDEA, Fabrica de Licores de Antioquia",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje técnico desde la Ingeniería Agrícola, tendiente a determinar los perjuicios causados como consecuencia de la cancelación unilateral de un contrato de suministro de caña de azúcar."
  },
  {
    id: 6,
    año: "2019",
    accionante: "Constructora Cuellar Serrano Gómez S.A.",
    accionado: "Empresa para el Desarrollo Urbano - EDU",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje desde la Ingeniería Civil, que determinó el perjuicio económico causado a CUSEGO S.A. durante la construcción del Parque Biblioteca La Quintana, en la ciudad de Medellín."
  },
  {
    id: 7,
    año: "2020",
    accionante: "Inversiones LIMI S.A.S.",
    accionado: "Alcaldía de Urrao y FONVIVIENDA",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje técnico desde la Ingeniería Administrativa, que cuantificó los perjuicios causados durante el desarrollo de las etapas A y B del proyecto de vivienda Urraeños Sembrando el Progreso."
  },
  {
    id: 8,
    año: "2021",
    accionante: "Construcciones Escobar Ortega S.A.S.",
    accionado: "Municipio de Bello",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje técnico tendiente a determinar los perjuicios causados como consecuencia del no pago de dos actas de obra del contrato 406 de 2017 para repotenciar la Institución Educativa Tomás Cadavid Restrepo."
  },
  {
    id: 9,
    año: "2021",
    accionante: "Urbanización Las Casas del Camino",
    accionado: "Municipio de Envigado",
    jurisdiccion: "Extrajudicial / Pre-Jurídico",
    descripcion: "Peritaje tendiente a determinar las causas del asentamiento de un muro de cerramiento en la Urbanización Las Casas del Camino, y conexiones de estas fallas con las obras de ampliación vial adelantadas en 2017 por la Alcaldía de Envigado."
  },
  {
    id: 10,
    año: "2021",
    accionante: "Inversiones Alternova S.A.S.",
    accionado: "Municipio de Rionegro",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje técnico desde la Ingeniería Civil, tendiente a determinar el avalúo de una propiedad en el Municipio de Rionegro, antes de ser sujeta de proceso de valorización y la viabilidad técnica de dicho proceso."
  },
  {
    id: 11,
    año: "2021",
    accionante: "Banco Agrario de Colombia",
    accionado: "Comfamiliar Camacol Antioquia",
    jurisdiccion: "Comité de Reclamaciones",
    descripcion: "Peritaje tendiente a determinar las condiciones técnicas constructivas de Viviendas de Interés Social Rural, ejecutadas en el marco de un contrato de administración."
  },
  {
    id: 12,
    año: "2022",
    accionante: "Julián A. Bolívar, Luis A. Mejía y Claribel Rendón",
    accionado: "Municipio de Itagüí y Ruiz Sánchez S.A.S.",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje Técnico tendiente a determinar las condiciones técnicas de construcción de la zona comercial del edificio Babilonia, demolido por amenaza de colapso y declaratoria de ruina."
  },
  {
    id: 13,
    año: "2022",
    accionante: "Familia Mejía Guerrero",
    accionado: "Municipio de Rionegro",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje Técnico tendiente a determinar las condiciones por las cuales el Municipio de Rionegro adelantó el cobro del impuesto Efecto Plusvalía en el predio propiedad de los demandantes, en medio del cambio del Plan de Ordenamiento Territorial."
  },
  {
    id: 14,
    año: "2022",
    accionante: "U.T. AIA AIM 2010 & Otros",
    accionado: "IDU & Transmilenio",
    jurisdiccion: "Tribunal Administrativo de Cundinamarca",
    descripcion: "Peritaje Técnico de parte tendiente a determinar las condiciones técnicas y administrativas por las cuales se presentó desequilibrio económico en la ecuación contractual, dentro del contrato de obra 04 de 2011."
  },
  {
    id: 15,
    año: "2022",
    accionante: "Banco Agrario de Colombia",
    accionado: "Comfamiliar Camacol Antioquia",
    jurisdiccion: "Cámara de Comercio de Bogotá",
    descripcion: "Peritaje tendiente a determinar las condiciones técnicas constructivas de algunas Viviendas de Interés Social Rural, ejecutadas en el marco del contrato de Gerencia Integral GI 006-2012."
  },
  {
    id: 16,
    año: "2023",
    accionante: "Inversiones DIRMA Ltda.",
    accionado: "Municipio de Rionegro",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje Técnico tendiente a determinar las condiciones por las cuales el Municipio adelantó el cobro del impuesto Efecto Plusvalía en el predio propiedad de los demandantes."
  },
  {
    id: 17,
    año: "2023",
    accionante: "Grupo Empresarial SPO S.A.S.",
    accionado: "Municipio de Dabeiba",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje Técnico tendiente a determinar los supuestos incumplimientos que se aducen en la demanda, los errores en la planeación del contrato LP-002 de 2019 y el cumplimiento efectivo del contratista."
  },
  {
    id: 18,
    año: "2024",
    accionante: "COMFENALCO ANTIOQUIA",
    accionado: "ISVIMED",
    jurisdiccion: "COMFENALCO ANTIOQUIA",
    descripcion: "Revisión documental para verificar y determinar el estado de cumplimiento de las obligaciones a cargo de Comfenalco en el marco del convenio 521 del 2017 para desarrollar un proyecto mixto de VIS y VIP denominado Colinas de Occidente."
  },
  {
    id: 19,
    año: "2025",
    accionante: "Consorcio Génesis",
    accionado: "Distrito de Medellín",
    jurisdiccion: "Tribunal Administrativo de Antioquia",
    descripcion: "Peritaje Técnico para analizar si los requisitos exigidos por la entidad contratante para con el proponente en todos los términos se cumplían cabalmente y que la propuesta se encontraba habilitada."
  },
  {
    id: 20,
    año: "2026",
    accionante: "Arquitectos e Ingenieros Asociados AIA",
    accionado: "Fondo de Adaptación",
    jurisdiccion: "Tribunal Administrativo de Sucre",
    descripcion: "Peritaje Técnico tendiente a determinar si se generaron mayores costos para el contratista en la etapa de diseños y reconstrucción de la infraestructura educativa (I.E. El Palomar y San José) en el Departamento de Sucre."
  }
];

export default function ExperienciaPeritajes() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/peritajes" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Peritajes
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 mb-4 tracking-tight">
            Base de Casos y Experiencia.
          </h1>
          <p className="text-lg text-zinc-600 max-w-3xl leading-relaxed">
            Un registro detallado de los dictámenes técnicos y peritajes forenses liderados por nuestros expertos ante los principales tribunales administrativos y centros de arbitraje del país.
          </p>
        </div>

        {/* Tabla de Casos */}
        <div className="bg-white border border-zinc-200 shadow-sm overflow-hidden rounded-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200">
                  <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Año</th>
                  <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Jurisdicción</th>
                  <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Partes Involucradas</th>
                  <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Objeto del Dictamen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {casos.map((caso) => (
                  <tr key={caso.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="py-5 px-6 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200">
                        {caso.año}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center text-sm font-medium text-zinc-900">
                        <Scale className="h-4 w-4 text-gold-500 mr-2 flex-shrink-0" />
                        {caso.jurisdiccion}
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-zinc-900 flex items-start gap-2">
                          <span className="text-xs font-mono text-zinc-400 mt-0.5 w-6">Vs.</span>
                          <span>{caso.accionante}</span>
                        </div>
                        <div className="text-sm text-zinc-500 pl-8">
                          {caso.accionado}
                        </div>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <p className="text-sm text-zinc-600 leading-relaxed max-w-md">
                        {caso.descripcion}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

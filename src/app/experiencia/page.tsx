import { Award, Briefcase, Building, Scale, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Experiencia y Casos de Éxito | Axioma Peritajes",
  description: "Registro histórico detallado de nuestra participación en controversias de alta complejidad y peritajes técnicos ante estrados judiciales.",
};

const peritajes = [
  { id: 1, text: "Constructora el Cóndor S.A. vs Gobernación de Antioquia (Vía La Cortada) - Tribunal Administrativo de Antioquia (2019)." },
  { id: 2, text: "Metroplús S.A. vs Pablo Emilio Bocarejo & CEI S.A (Troncal Medellín) - Tribunal Administrativo de Antioquia (2019)." },
  { id: 3, text: "Sonia Isabel Urrea vs Ingenio Vegachí, Gobernación de Antioquia, IDEA, FLA - Tribunal Administrativo de Antioquia (2019)." },
  { id: 4, text: "Constructora Cuellar Serrano Gómez S.A. vs EDU (Parque Biblioteca La Quintana) - Tribunal Administrativo de Antioquia (2020)." },
  { id: 5, text: "Inversiones LIMI S.A.S. vs Alcaldía de Urrao y FONVIVIENDA - Tribunal Administrativo de Antioquia (2020)." },
  { id: 6, text: "Construcciones Escobar Ortega S.A.S. vs Municipio de Bello (I.E. Tomás Cadavid) - Tribunal Administrativo de Antioquia (2021)." },
  { id: 7, text: "Urbanización Las Casas del Camino vs Municipio de Envigado (Asentamiento de muro) - Villegas Jaramillo Abogados (2021)." },
  { id: 8, text: "Inversiones Alternova S.A.S. vs Municipio de Rionegro (Impuesto de valorización) - Tribunal Administrativo de Antioquia (2021)." },
  { id: 9, text: "Banco Agrario de Colombia vs Comfamiliar Camacol Antioquia (VIS Rural) - Comité de Reclamaciones (2022)." },
  { id: 10, text: "Julián Alberto Bolívar & Otros vs Municipio de Itagüí y Ruiz Sánchez (Edificio Babilonia) - Tribunal Administrativo de Antioquia (2022)." },
  { id: 11, text: "Familia Guerrero Mejía vs Municipio de Rionegro (Efecto Plusvalía) - Tribunal Administrativo de Antioquia (2022)." },
  { id: 12, text: "Banco Agrario de Colombia vs Comfamiliar Camacol Antioquia (VIS Rural) - Centro de Arbitraje CCB (2022)." },
  { id: 13, text: "U.T. AIA AIM 2010 & Otros vs IDU & Transmilenio (Desequilibrio económico) - Tribunal Administrativo de Cundinamarca (2022)." },
  { id: 14, text: "Juan Camilo Aristizábal vs Héctor Darío Arbeláez (Vivienda en Tarso) - Juzgado 01 Civil Laboral La Ceja (2022)." },
  { id: 15, text: "Seguros del Estado S.A. vs Municipio de Dabeiba (Escenarios deportivos) - Tribunal Administrativo de Antioquia (2023)." },
  { id: 16, text: "Inversiones DIRMA S.A.S. vs Municipio de Rionegro (Efecto Plusvalía POT) - Tribunal Administrativo de Antioquia (2024)." },
  { id: 17, text: "Consorcio Génesis & Otros vs Distrito de Medellín (Licitación pavimentación) - Tribunal Administrativo de Antioquia (2024)." },
];

export default function Experiencia() {
  return (
    <div className="min-h-screen bg-navy-900 pb-24">
      {/* Hero */}
      <div className="relative pt-20 pb-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('/images/auditoria_forense_docs.png')] bg-cover bg-center opacity-80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-gold-500 font-semibold mb-4 text-sm tracking-wide uppercase">
              <BookOpen className="h-5 w-5" /> Trayectoria Probada
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Registro Histórico de Peritajes</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              La solidez de Axioma Peritajes se fundamenta en un historial demostrable ante los más altos tribunales. Nuestra participación en controversias de infraestructura, disputas civiles y fallos administrativos nos ha consolidado como una autoridad técnica irrefutable en Colombia.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative">
        
        {/* Context Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10">
          <div className="glass-card p-8 rounded-sm group">
            <Scale className="h-10 w-10 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-heading font-bold text-white mb-2">Tribunales Administrativos</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Extensa participación ante el Tribunal Administrativo de Antioquia y Cundinamarca, sustentando peritajes ante magistrados y jueces.
            </p>
          </div>
          <div className="glass-card p-8 rounded-sm group">
            <Building className="h-10 w-10 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-heading font-bold text-white mb-2">Grandes Constructoras</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Peritajes desarrollados en disputas que involucran a las principales firmas constructoras y proyectos de infraestructura del país.
            </p>
          </div>
          <div className="glass-card p-8 rounded-sm group">
            <Briefcase className="h-10 w-10 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-heading font-bold text-white mb-2">Entidades Públicas</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Análisis técnico y forense sobre actuaciones de Alcaldías, Gobernaciones, EDU, IDU y sistemas de transporte masivo (Metroplús, Transmilenio).
            </p>
          </div>
        </div>

        {/* Detailed List */}
        <div className="bg-navy-800 border border-slate-700 rounded-sm p-8 md:p-12 mb-16 glow-bg relative z-10 shadow-2xl">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-700 pb-6">
            <Award className="h-8 w-8 text-gold-500" />
            <h2 className="text-2xl font-heading font-bold text-white">Detalle de Casos (2019 - 2024)</h2>
          </div>
          
          <div className="space-y-6">
            {peritajes.map((p) => (
              <div key={p.id} className="flex flex-col sm:flex-row gap-4 p-6 bg-navy-900 rounded-sm hover:border-gold-500 border border-transparent transition-colors">
                <div className="sm:w-16 shrink-0 flex items-center justify-center bg-navy-800 rounded-full h-16 w-16 border border-slate-700">
                  <span className="text-gold-500 font-bold font-heading text-xl">{p.id}</span>
                </div>
                <div className="flex-1">
                  <p className="text-slate-300 text-base leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gold-500 p-12 rounded-sm text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-4">¿Requiere un análisis similar para su proyecto?</h2>
          <p className="text-navy-800 text-lg mb-8 max-w-2xl mx-auto">
            Nuestros líderes han participado directamente en la formulación de estos dictámenes. Hablemos sobre cómo blindar técnicamente su caso.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-navy-900 text-white px-8 py-4 rounded-sm font-bold hover:bg-navy-800 transition-colors shadow-lg"
          >
            Contactar a los Expertos
          </Link>
        </div>
      </div>
    </div>
  );
}

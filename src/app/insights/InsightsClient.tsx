"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Award, FileText, Network, ExternalLink, User } from "lucide-react";

// List of publications with author field to make future additions easy
const books = [
  {
    title: "Vehículos Eléctricos Livianos en Colombia",
    subtitle: "Oportunidades y retos para una movilidad sostenible e incluyente en las ciudades del país",
    author: "Smith R.A.",
    publisher: "Asomovilidad",
    year: "2016",
    info: "ISBN 978-958-59494-7-8",
  },
  {
    title: "Subalimentación",
    subtitle: "Una Estrategia para Fortalecer los Sistemas de Transporte Público y para la Disminución de la Pobreza",
    author: "Smith R.A. y Frasser H.",
    publisher: "Asomovilidad",
    year: "2015",
    info: "ISBN 978-958-58983-1-8",
  },
  {
    title: "Movilidad en Zonas Rurales de Colombia",
    subtitle: "Estudio de conectividad y desarrollo para el campo colombiano",
    author: "Smith R.A. y Gómez L.",
    publisher: "Asomovilidad",
    year: "2015",
    info: "ISBN 978-958-58983-0-1",
  },
  {
    title: "El Sector Eléctrico Colombiano",
    subtitle: "Orígenes, Evolución y Retos. Un Siglo de Desarrollo",
    author: "Smith R.A., Ochoa F. y Villegas L.J.",
    publisher: "Interconexión Eléctrica S.A. E.S.P. – ISA -",
    year: "2002",
    info: "Medellín, Colombia",
  },
  {
    title: "Decisiones con Múltiples Objetivos e Incertidumbre",
    subtitle: "Segunda edición ampliada y corregida. Serie Aperiódica No. 13",
    author: "Smith R.A., Mesa O.J., Dyner I., Jaramillo G.P., Poveda G. y Valencia D.",
    publisher: "Posgrado en Aprovechamiento de los Recursos Hidráulicos, Facultad de Minas, Universidad Nacional de Colombia",
    year: "2000",
    info: "Medellín, Colombia",
  },
  {
    title: "Futuros para una Energía Sostenible en Colombia",
    subtitle: "Planificación energética y prospectiva de sostenibilidad",
    author: "Smith R.A., A.I. Cadena, F. Betancourt, J.P. Bonolla, G. Corredor, I. Dyner, C. Fonseca, J. Pinto y D. Vesga, Larsen E., Boman U. y Knecht F.",
    publisher: "Unidad de Planeación Minero Energética – UPME -",
    year: "2000",
    info: "Mayo, 2000",
  },
  {
    title: "Hidrología de Antioquia",
    subtitle: "Diseño de Obras Civiles con Énfasis en Información Escasa",
    author: "Vélez M.V. y Smith R.A.",
    publisher: "Gobernación de Antioquia",
    year: "1997",
    info: "Medellín, Colombia",
  },
  {
    title: "Statistical Computer Techniques in Hydrology and Water Resources",
    subtitle: "Computer programming applications in water resources engineering",
    author: "Salas J.D., Smith R.A., Tabios G.Q. y Heo J.H.",
    publisher: "Department of Civil Engineering, Colorado State University",
    year: "1992",
    info: "Fort Collins, Colorado, EE. UU.",
  },
  {
    title: "Operation of Complex Water Systems",
    subtitle: "Capítulo IV: Disaggregation and aggregation of water systems",
    author: "Salas J.D., W.A. Hall y R.A. Smith (Editado por E. Guggino, G. Rossi y D. Hendricks)",
    publisher: "The Hague, Netherlands",
    year: "1983",
    info: "Edición internacional",
  },
];

const articles = [
  {
    title: "Energy Technology Options for Sustainable Rural Livelihoods: A Participatory Multi-Criteria Decision-Support-System",
    author: "J Cherni, F. Henao, P. Jaramillo, R. Smith, and I. Dyner",
    journal: "Energy Policy (Accepted)",
    year: "2006",
  },
  {
    title: "Multi-Decision-Maker Equalizer: A Multiobjective Decision Support System for Multiple Decision Makers",
    author: "Jaramillo P., Smith R. y Andréu J.",
    journal: "Annals of Operations Research",
    info: "Vol. 138, No. 1, pp 97 - 111, ISSN 02545330",
    year: "2005",
  },
  {
    title: "Energy Scenarios for Colombia: process and content",
    author: "Smith R.A., Vesga D.R.A., Cadena A.I., Boman U., Larsen E. y Dyner I.",
    journal: "FUTURES",
    info: "Vol. 37, pp 1 – 17",
    year: "2005",
  },
  {
    title: "Metodología para priorización de zonas de intervención en proyectos de inversión en una cuenca",
    author: "Jaramillo G.P., Smith R.A. y Vélez J.I.",
    journal: "Gestión y Ambiente",
    info: "Vol. 6, No. 1, pp. 25-38",
    year: "2003",
  },
  {
    title: "Aplicación de Optimización Multiobjetivo con Algoritmos Genéticos a un Problema de Electrificación Rural",
    author: "Pulgarín A. y Smith R.A.",
    journal: "Energética",
    info: "No. 26",
    year: "2001",
  },
  {
    title: "A Comparative Analysis of Various Optimization Expansion Models",
    author: "Smith R.A. y Villegas A.M.",
    journal: "International Transactions of Operational Research (ITOR)",
    info: "Vol. 4, No. 1, pp. 35-44, Gran Bretaña",
    year: "1997",
  },
  {
    title: "A Rural Electrification Expansion Model",
    author: "Smith R.A. y Mesa O.J.",
    journal: "International Transactions of Operational Research (ITOR)",
    info: "Vol. 3, No. 3/4, pp. 319-325, Gran Bretaña",
    year: "1996",
  },
  {
    title: "System Dynamics Modelling for Residential Energy Efficiency Analysis and Management",
    author: "Dyner I., Smith R.A. y Peña G.E.",
    journal: "Journal of The Operational Research Society",
    info: "Vol. 46, pp 1163-1173",
    year: "1995",
  },
  {
    title: "Análisis Económico, Social y Ambiental de los Planes de Expansión del Sector Eléctrico Colombiano",
    author: "Nicholls C.M., Smith R.A. y Mesa O.J.",
    journal: "Revista Energética",
    info: "No. 6, Medellín",
    year: "1990",
  },
  {
    title: "Physical Basis of Stochastic Models of Annual Flows",
    author: "Salas J.D. y R.A. Smith",
    journal: "Water Resources Research",
    info: "Vol. 17, No. 2, pp 428-430, Washington, EE. UU.",
    year: "1981",
  },
];

export default function InsightsClient() {
  const [activeTab, setActiveTab] = useState<"blog" | "academic">("academic");
  const [selectedAuthor, setSelectedAuthor] = useState<string>("all");

  const filteredBooks = selectedAuthor === "all" 
    ? books 
    : books.filter(b => b.author.includes(selectedAuthor));

  const filteredArticles = selectedAuthor === "all" 
    ? articles 
    : articles.filter(a => a.author.includes(selectedAuthor));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24">
      
      {/* Stats Strip */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-8 mb-12 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/estructural_wireframe.png')] opacity-5 bg-cover bg-center pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          <div className="py-4 md:py-0">
            <span className="block text-4xl md:text-5xl font-heading font-bold text-gold-500 mb-2">18</span>
            <span className="text-zinc-400 text-xs font-mono uppercase tracking-widest">Libros Publicados</span>
          </div>
          <div className="py-4 md:py-0">
            <span className="block text-4xl md:text-5xl font-heading font-bold text-gold-500 mb-2">70+</span>
            <span className="text-zinc-400 text-xs font-mono uppercase tracking-widest">Artículos en Revistas</span>
          </div>
          <div className="py-4 md:py-0">
            <span className="block text-4xl md:text-5xl font-heading font-bold text-gold-500 mb-2">270+</span>
            <span className="text-zinc-400 text-xs font-mono uppercase tracking-widest">Ponencias en Congresos</span>
          </div>
        </div>
      </div>

      {/* Tabs Controller */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-b border-zinc-200 pb-6 mb-12 gap-6">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("academic")}
            className={`px-6 py-3 font-medium transition-all text-sm uppercase tracking-wider rounded-sm ${
              activeTab === "academic"
                ? "bg-zinc-900 text-white shadow-sm"
                : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300"
            }`}
          >
            Biblioteca Científica
          </button>
          <button
            onClick={() => setActiveTab("blog")}
            className={`px-6 py-3 font-medium transition-all text-sm uppercase tracking-wider rounded-sm ${
              activeTab === "blog"
                ? "bg-zinc-900 text-white shadow-sm"
                : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300"
            }`}
          >
            Artículos y Divulgación
          </button>
        </div>

        {/* Dynamic Author Filter (for future expansion) */}
        {activeTab === "academic" && (
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-white border border-zinc-200 px-3 py-2 rounded-sm">
            <User className="h-3 w-3 text-zinc-400" />
            <span>Autor:</span>
            <select
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
              className="bg-transparent font-bold text-zinc-800 focus:outline-none cursor-pointer"
            >
              <option value="all">Todos los directores</option>
              <option value="Ricardo Smith">Dr. Ricardo Smith</option>
              {/* Option to add the user's publications later */}
              {/* <option value="Rafael Nanclares">Ing. Rafael Nanclares</option> */}
            </select>
          </div>
        )}
      </div>

      {/* Content Rendering */}
      {activeTab === "blog" ? (
        <div className="text-center text-zinc-400 py-24 border-2 border-dashed border-zinc-200 rounded-sm bg-white shadow-sm">
          <FileText className="h-12 w-12 text-zinc-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-zinc-700 mb-2">Lienzo en Blanco</h3>
          <p className="text-sm max-w-md mx-auto text-zinc-500">
            Próximamente publicaremos artículos de opinión, análisis del sector de infraestructura y guías tecnológicas escritas por nuestros directores.
          </p>
        </div>
      ) : (
        <div className="space-y-16">
          
          <div className="text-zinc-700 text-base leading-relaxed bg-white border border-zinc-200 p-6 rounded-sm max-w-4xl shadow-sm">
            La producción científica e intelectual de nuestros directores comprende <strong>270 artículos</strong> presentados en congresos nacionales e internacionales, más de <strong>70 artículos</strong> en revistas nacionales e internacionales y <strong>18 libros</strong> en inglés y español. A continuación se listan las publicaciones más importantes y/o más recientes:
          </div>
          
          {/* Books Sub-section */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-zinc-200 pb-4">
              <BookOpen className="h-6 w-6 text-gold-500" />
              <h2 className="text-2xl font-heading font-bold text-zinc-900">Libros Publicados</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book, index) => (
                <div 
                  key={index}
                  className="bg-white border border-zinc-200 p-8 rounded-sm shadow-sm flex flex-col justify-between hover:border-gold-500 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl group-hover:bg-gold-500/10 transition-colors" />
                  <div>
                    <span className="inline-block text-[10px] font-mono font-bold text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider mb-4">
                      {book.year}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-zinc-900 mb-2 group-hover:text-gold-500 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-zinc-500 text-xs italic mb-4">
                      {book.subtitle}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-zinc-100 text-xs font-mono text-zinc-600 space-y-1">
                    <p><span className="text-zinc-400">Autor:</span> {book.author}</p>
                    <p><span className="text-zinc-400">Edición:</span> {book.publisher}</p>
                    {book.info && <p className="text-[10px] text-zinc-400">{book.info}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Articles Sub-section */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-zinc-200 pb-4">
              <Network className="h-6 w-6 text-gold-500" />
              <h2 className="text-2xl font-heading font-bold text-zinc-900">Artículos Científicos Indexados</h2>
            </div>

            <div className="bg-white border border-zinc-200 rounded-sm divide-y divide-zinc-100 shadow-sm overflow-hidden">
              {filteredArticles.map((art, index) => (
                <div 
                  key={index}
                  className="p-6 md:p-8 hover:bg-slate-50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group"
                >
                  <div className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-bold text-zinc-400">
                        {art.year}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-200"></span>
                      <span className="text-xs font-mono text-gold-500 font-bold uppercase tracking-wider">
                        {art.journal}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-gold-500 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono">
                      Autores: {art.author} {art.info && `| ${art.info}`}
                    </p>
                  </div>
                  
                  <Link 
                    href="/contacto" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600 hover:text-gold-500 transition-colors uppercase tracking-wider shrink-0"
                  >
                    <span>Solicitar copia</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}

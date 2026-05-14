import { Award, Target, Briefcase, GraduationCap, Building2, Gavel, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Nosotros | Axioma Peritajes",
  description: "Conozca nuestro equipo de ingenieros expertos con más de 40 años de experiencia combinada y nuestro historial de dictámenes periciales irrefutables.",
};


export default function Nosotros() {
  return (
    <div className="min-h-screen bg-navy-900 pb-24">
      {/* Hero */}
      <div className="relative pt-20 pb-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Nuestra Experiencia</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Nuestro principal activo es la vasta trayectoria de nuestro equipo directivo. Con más de 40 años de experiencia combinada en consultoría de ingeniería y administración pública, transformamos la complejidad técnica en certezas legales irrefutables.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        
        {/* Perfiles del Equipo */}
        <div className="mb-24">
          <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">Líderes Expertos</h2>
          <div className="space-y-12">
            
            {/* Ricardo Smith */}
            <div className="glass rounded-sm overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/3 bg-navy-800 flex flex-col items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-slate-700 min-h-[300px]">
                <User className="h-24 w-24 text-slate-600 mb-4" />
                <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider text-center">Foto pendiente</p>
              </div>
              <div className="lg:w-2/3 p-8 md:p-10 relative">
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                  <GraduationCap className="h-40 w-40 text-gold-500" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold text-gold-500 mb-2">Ing. Ricardo Agustín Smith Quintero, PhD.</h3>
                  <p className="text-white font-medium mb-6">Ingeniero Civil, Master of Science y PhD. Civil Engineering</p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-slate-200 font-semibold mb-3 border-b border-slate-700 pb-2">
                        <Building2 className="h-5 w-5 text-gold-500" /> Cargos Significativos
                      </h4>
                      <ul className="space-y-2 text-slate-400 text-sm list-disc list-inside">
                        <li>Director del Área Metropolitana del Valle de Aburrá.</li>
                        <li>Secretario de Tránsito y Transporte del Municipio de Medellín.</li>
                        <li>Alcalde (e) de Medellín.</li>
                        <li>Miembro de la Junta Directiva del Metro de Medellín y Presidente de la Junta Directiva de Metroplús (fase de construcción).</li>
                        <li>Director de la Escuela de Geociencias y Medio Ambiente, y del programa de Doctorado en Ingeniería (UNAL Medellín).</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-slate-200 font-semibold mb-3 border-b border-slate-700 pb-2">
                        <Gavel className="h-5 w-5 text-gold-500" /> Experticia Pericial y Consultoría
                      </h4>
                      <p className="text-slate-400 text-sm mb-3">
                        Ha participado destacadamente en la estructuración del plan de infraestructura del Metro de Medellín, Metroplús y Transmetro de Barranquilla.
                      </p>
                      <p className="text-slate-400 text-sm font-semibold">
                        Ha liderado la realización de más de 18 peritajes técnicos de ingeniería para el Tribunal Administrativo de Antioquia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rafael Nanclares */}
            <div className="glass rounded-sm overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/3 relative min-h-[400px]">
                <Image 
                  src="/team/rafael.jpg" 
                  alt="Rafael Nanclares" 
                  fill 
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="lg:w-2/3 p-8 md:p-10 relative">
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                  <Briefcase className="h-40 w-40 text-gold-500" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold text-gold-500 mb-2">Ing. Rafael Andrés Nanclares Ospina</h3>
                  <p className="text-white font-medium mb-6">Ingeniero Civil, Especialista en Gerencia de Construcciones, Magíster en Filosofía y Ética</p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-slate-200 font-semibold mb-3 border-b border-slate-700 pb-2">
                        <Building2 className="h-5 w-5 text-gold-500" /> Cargos Significativos
                      </h4>
                      <ul className="space-y-2 text-slate-400 text-sm list-disc list-inside">
                        <li>Gerente de Bienestar Económico en Comfenalco Antioquia.</li>
                        <li>Secretario de Infraestructura del Departamento de Antioquia.</li>
                        <li>Gerente Técnico en FUREL S.A.</li>
                        <li>Asesor Estratégico Grupo Empresarial OMEGA ENLACES (México) y del Estado de Nuevo León.</li>
                        <li>Secretario de Tránsito de Medellín.</li>
                        <li>Miembro suplente de Junta Directiva de Hidroituango.</li>
                        <li>Presidente de las Juntas Directivas de Metroplús, Aeropuerto Olaya Herrera y Terminal de Transporte de Medellín.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-slate-200 font-semibold mb-3 border-b border-slate-700 pb-2">
                        <Gavel className="h-5 w-5 text-gold-500" /> Experticia Pericial y Consultoría
                      </h4>
                      <p className="text-slate-400 text-sm mb-3">
                        Más de 24 años de experiencia liderando megaproyectos. Estructuró técnica y contractualmente el Túnel del Toyo.
                      </p>
                      <p className="text-slate-400 text-sm font-semibold mb-3">
                        Lideró la estructuración técnica, ambiental y financiera del Túnel de Oriente, garantizando su viabilidad operativa y financiera.
                      </p>
                      <p className="text-slate-400 text-sm font-bold text-gold-500">
                        Ha participado activamente en la realización de la totalidad de los peritajes listados en el registro histórico de la firma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Juan David Naranjo */}
            <div className="glass rounded-sm overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/3 bg-navy-800 flex flex-col items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-slate-700 min-h-[300px]">
                <User className="h-24 w-24 text-slate-600 mb-4" />
                <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider text-center">Foto pendiente</p>
              </div>
              <div className="lg:w-2/3 p-8 md:p-10 relative">
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                  <Target className="h-40 w-40 text-gold-500" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold text-gold-500 mb-2">Ing. Juan David Naranjo Sierra</h3>
                  <p className="text-white font-medium mb-6">Ingeniero Administrador, Especialista en Gerencia, Magíster en Gerencia de Proyectos</p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-slate-200 font-semibold mb-3 border-b border-slate-700 pb-2">
                        <Building2 className="h-5 w-5 text-gold-500" /> Cargos Significativos
                      </h4>
                      <ul className="space-y-2 text-slate-400 text-sm list-disc list-inside">
                        <li>Gerente y director de empresas consultoras y constructoras de ingeniería.</li>
                        <li>Más de 21 años de experiencia en dirección administrativa, técnica y financiera.</li>
                        <li>Formulador de proyectos de infraestructura para Fundación Fraternidad y Fundación Bertha Martínez de Jaramillo.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-slate-200 font-semibold mb-3 border-b border-slate-700 pb-2">
                        <Gavel className="h-5 w-5 text-gold-500" /> Experticia Pericial y Consultoría
                      </h4>
                      <p className="text-slate-400 text-sm mb-3">
                        Su trayectoria como Gerente Técnico y Administrativo le otorga una visión integral invaluable. Posee amplia experticia en el análisis, procesamiento y recolección de información técnica, financiera y administrativa en contratos de infraestructura.
                      </p>
                      <p className="text-slate-400 text-sm font-semibold mb-3">
                        Se ha desempeñado como analista experto de costos y presupuestos ante el Tribunal Administrativo de Antioquia y otras entidades.
                      </p>
                      <p className="text-slate-400 text-sm font-bold text-gold-500">
                        Ha participado activamente en la realización de la totalidad de los peritajes listados en el registro histórico de la firma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Redirección a Experiencia */}
        <div className="mb-24">
          <div className="bg-navy-800 border border-slate-700 rounded-sm p-8 md:p-12 text-center">
            <Award className="h-12 w-12 text-gold-500 mx-auto mb-4" />
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Registro Histórico de Peritajes</h2>
            <p className="text-slate-400 max-w-3xl mx-auto mb-8">
              La solidez de Axioma Peritajes no se basa en promesas, sino en una extensa participación demostrable en controversias de alta complejidad y estrados judiciales. Lo invitamos a conocer el detalle de los casos en los que hemos intervenido.
            </p>
            <Link
              href="/experiencia"
              className="inline-block bg-transparent border-2 border-gold-500 text-gold-500 px-8 py-3 rounded-sm font-bold hover:bg-gold-500 hover:text-navy-900 transition-colors"
            >
              Ver Casos de Éxito y Experiencia
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gold-500 p-12 rounded-sm text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">El rigor técnico que su caso necesita</h2>
          <p className="text-navy-800 text-lg mb-8 max-w-2xl mx-auto">
            Cuente con la experticia de nuestro equipo directivo para estructurar dictámenes o controvertir argumentos en tribunales.
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

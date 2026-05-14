import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Landmark, Scale } from "lucide-react";

export const metadata = {
  title: "Axioma Peritajes | Dictámenes Periciales en Ingeniería",
  description: "Firma especializada en peritajes técnicos, evaluación estructural, geotecnia y reclamaciones en grandes obras de infraestructura. Asegure su verdad técnica.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/60 z-10" />
          <div className="absolute inset-0 bg-[url('/images/hero_home_peritaje.png')] bg-cover bg-center opacity-60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
              La Verdad Técnica para <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Decisiones Críticas</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Somos la autoridad irrefutable en dictámenes periciales y reclamaciones de ingeniería. Protegemos sus intereses en proyectos de alta complejidad con rigor científico y seguridad jurídica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex justify-center items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-4 rounded-sm font-semibold transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] text-lg"
              >
                Solicitar Dictamen <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex justify-center items-center px-8 py-4 rounded-sm font-semibold text-white border border-slate-600 hover:bg-slate-800 hover:border-slate-500 transition-all text-lg"
              >
                Conocer Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-y border-slate-800 bg-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
            <div>
              <p className="text-4xl font-heading font-bold text-white mb-2">13+</p>
              <p className="text-slate-400 text-sm uppercase tracking-wider">Años de Experiencia</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-bold text-white mb-2">Casos</p>
              <p className="text-slate-400 text-sm uppercase tracking-wider">Historial Demostrable</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-bold text-white mb-2">100%</p>
              <p className="text-slate-400 text-sm uppercase tracking-wider">Rigor Técnico</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-bold text-white mb-2">Alto</p>
              <p className="text-slate-400 text-sm uppercase tracking-wider">Impacto Financiero</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-navy-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-navy-800/50 via-navy-900 to-navy-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Especialidades <span className="text-gold-500">Técnicas</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Abordamos cada caso con metodología científica para asegurar conclusiones definitivas en disputas legales y contractuales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-14 w-14 bg-navy-700 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                <Landmark className="h-7 w-7 text-gold-500" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">Peritaje Estructural</h3>
              <p className="text-slate-400 mb-6 line-clamp-3">
                Análisis patológico de estructuras, evaluación de vulnerabilidad sísmica y determinación de causas en fallas constructivas para procesos judiciales.
              </p>
              <Link href="/servicios/peritaje-estructural" className="text-gold-500 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Saber más <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="glass p-8 group hover:-translate-y-2 transition-transform duration-300 border-gold-500/30">
              <div className="h-14 w-14 bg-gold-500/10 rounded-sm flex items-center justify-center mb-6">
                <Scale className="h-7 w-7 text-gold-500" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">Reclamaciones en Ingeniería</h3>
              <p className="text-slate-400 mb-6 line-clamp-3">
                Cuantificación de daños, sobrecostos y desequilibrios económicos en contratos de obra pública y privada. Acompañamiento en tribunales de arbitramento.
              </p>
              <Link href="/servicios/reclamaciones-ingenieria" className="text-gold-500 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Saber más <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="glass p-8 group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-14 w-14 bg-navy-700 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                <FileText className="h-7 w-7 text-gold-500" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">Peritaje Geotécnico</h3>
              <p className="text-slate-400 mb-6 line-clamp-3">
                Dictámenes sobre inestabilidad de taludes, fallas en cimentaciones y movimientos de tierra. Experticia en proyectos de túneles y vías.
              </p>
              <Link href="/servicios/peritaje-geotecnico" className="text-gold-500 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Saber más <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
            No deje su reputación en la incertidumbre
          </h2>
          <p className="text-navy-800 text-xl mb-10 max-w-2xl mx-auto">
            Garantice la solidez técnica de su defensa o reclamación con un dictamen irrefutable.
          </p>
          <Link
            href="/contacto"
            className="inline-flex justify-center items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-10 py-4 rounded-sm font-bold transition-all text-lg shadow-xl"
          >
            Contactar a un Experto
          </Link>
        </div>
      </section>
    </div>
  );
}

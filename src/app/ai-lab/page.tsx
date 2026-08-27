import Link from "next/link";
import { ArrowRight, BrainCircuit, ShieldAlert, Cpu, ChevronRight, FileSearch } from "lucide-react";

export default function AILab() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-500/30">
      
      {/* Navbar Minimalista */}
      <nav className="fixed w-full z-50 top-0 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-blue-500/50 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.3)]">
              <BrainCircuit className="h-4 w-4 text-blue-400" />
            </div>
            <span className="font-heading font-bold tracking-widest text-sm text-zinc-100">
              ACUMEN <span className="text-blue-500">AI LAB</span>
            </span>
          </div>
          <Link href="/" className="text-xs font-mono text-zinc-400 hover:text-white transition-colors">
            VOLVER A ACUMEN CORE
          </Link>
        </div>
      </nav>

      {/* Hero Section (Dark/Tech) */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-blue-500/30 bg-blue-500/10 rounded-full text-xs font-mono tracking-widest text-blue-300">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            INFRASTRUCTURE INTELLIGENCE PLATFORM
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            Decisiones de ingeniería <br/> impulsadas por <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Inteligencia Artificial.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            El laboratorio de I+D de ACUMEN S.A.S. Construimos los "Gemelos Digitales Legales" y agentes cognitivos que aseguran la viabilidad climática y normativa de la infraestructura en LATAM.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#prototipos"
              className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 font-bold rounded hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            >
              Probar Prototipos IA <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#arquitectura"
              className="inline-flex justify-center items-center gap-2 bg-zinc-900 text-white px-8 py-4 font-medium border border-zinc-700 hover:border-blue-500/50 hover:bg-zinc-800 transition-colors rounded"
            >
              Ver Arquitectura Cloud
            </Link>
          </div>
        </div>
      </section>

      {/* The Enjambre Section */}
      <section id="prototipos" className="py-24 relative bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">El Enjambre de Agentes</h2>
            <p className="text-zinc-400">Modelos Fundacionales (LLMs) entrenados con 74 años de experiencia en infraestructura.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* GeoRisk AI Card */}
            <div className="tech-card p-8 rounded-lg relative overflow-hidden group border-zinc-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>
              <ShieldAlert className="h-10 w-10 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 text-white">
                GeoRisk AI <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded border border-emerald-500/30">SANDBOX LISTO</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Inteligencia Territorial y Resiliencia Climática. Cruzamos datos hidro-meteorológicos con GIS para simular el impacto en grandes infraestructuras antes de la inversión.
              </p>
              <Link href="/georisk-ai" className="text-emerald-400 text-sm font-mono flex items-center gap-1 hover:text-emerald-300 transition-colors">
                ABRIR TERMINAL <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            {/* NSR AI Card */}
            <div className="tech-card p-8 rounded-lg relative overflow-hidden group border-zinc-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
              <Cpu className="h-10 w-10 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 text-white">
                NSR AI <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30">SANDBOX LISTO</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Evaluador normativo automatizado. Revisa diseños estructurales contra la Norma Sismo Resistente (NSR-10) y POTs locales para acelerar trámites de curaduría.
              </p>
              <Link href="/nsr-ai" className="text-blue-400 text-sm font-mono flex items-center gap-1 hover:text-blue-300 transition-colors">
                ABRIR TERMINAL <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* InquiryIA Card */}
            <div className="tech-card p-8 rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
              <FileSearch className="h-10 w-10 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                InquiryIA <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30">SANDBOX LISTO</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Agente técnico para revisión documental. Procesa cientos de folios de contratos, actas y pólizas usando NLP para extraer inconsistencias y generar líneas de tiempo periciales en arbitramentos.
              </p>
              <Link href="/inquiry-ia" className="text-blue-400 text-sm font-mono flex items-center gap-1 hover:text-blue-300 transition-colors">
                ABRIR TERMINAL <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-8 text-center border-t border-zinc-900 mt-auto">
        <p className="text-xs font-mono text-zinc-600">ACUMEN INGENIERÍA S.A.S © 2026 // POWERED BY GOOGLE CLOUD VERTEX AI</p>
      </footer>
    </div>
  );
}

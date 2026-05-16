import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contacto | ACUMEN INGENIERÍA S.A.S.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Info */}
          <div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 mb-6 tracking-tight">
              Inicie una conversación.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed font-light mb-12">
              Para estructuraciones complejas, peritajes técnicos o implementación de inteligencia territorial, nuestro equipo directivo está a su disposición.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-gold-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Oficina Principal</h4>
                  <p className="text-zinc-600">Calle 20B sur #38-76 Interior 202<br/>Medellín, Colombia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-gold-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Comunicaciones</h4>
                  <p className="text-zinc-600">contacto@acumeningenieria.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Form */}
          <div className="bg-white border border-zinc-200 p-8 md:p-12 shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">Nombre Corporativo</label>
                <input type="text" className="w-full bg-slate-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Empresa o Entidad" />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">Contacto</label>
                  <input type="text" className="w-full bg-slate-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Nombre completo" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="correo@empresa.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">Asunto Principal</label>
                <select className="w-full bg-slate-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors text-zinc-600">
                  <option>Peritaje Forense</option>
                  <option>Estructuración de Infraestructura</option>
                  <option>Modelado SIG y Analítica</option>
                  <option>ACUMEN OS / Trazabilidad</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">Detalles del Requerimiento</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none" placeholder="Describa brevemente el alcance..."></textarea>
              </div>

              <button type="button" className="w-full bg-zinc-900 text-white font-bold py-4 hover:bg-gold-500 transition-colors">
                ENVIAR MENSAJE
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

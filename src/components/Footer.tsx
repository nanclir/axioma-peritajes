import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <ShieldCheck className="h-8 w-8 text-gold-500" />
              <span className="font-heading font-bold text-2xl tracking-tight text-slate-900">
                ACUMEN <span className="text-gold-500 font-light">Ingeniería</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              Firma de ingeniería aumentada por Inteligencia Artificial. Centralizamos la experiencia y el conocimiento para resolver retos complejos en infraestructura y estructuración técnica a nivel nacional e internacional.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-slate-900 mb-4">Líneas de Negocio</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/peritajes" className="text-slate-500 hover:text-gold-400 text-sm transition-colors">
                  Acumen Peritajes
                </Link>
              </li>
              <li>
                <span className="text-slate-500 text-sm">
                  PMO & Infraestructura <span className="text-xs bg-white px-2 py-0.5 rounded-sm border border-slate-300 ml-2">Próximamente</span>
                </span>
              </li>
              <li>
                <span className="text-slate-500 text-sm">
                  Consultoría Estratégica <span className="text-xs bg-white px-2 py-0.5 rounded-sm border border-slate-300 ml-2">Próximamente</span>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-slate-900 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-500 text-sm">
                <MapPin className="h-5 w-5 text-gold-500 shrink-0" />
                <span>Calle 20B sur #38-76 Interior 202<br/>Medellín, Colombia</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <Phone className="h-5 w-5 text-gold-500 shrink-0" />
                <span>3005771484</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <Mail className="h-5 w-5 text-gold-500 shrink-0" />
                <span>contacto@acumenperitajes.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Acumen Peritajes. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link href="/privacidad" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <ShieldCheck className="h-8 w-8 text-gold-500" />
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                AXIOMA <span className="text-gold-500 font-light">Peritajes</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Especialistas en dictámenes periciales técnicos en ingeniería. Brindamos la verdad técnica e irrefutable necesaria para la toma de decisiones críticas y la resolución de disputas en grandes proyectos de infraestructura.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicios/peritaje-estructural" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                  Peritaje Estructural
                </Link>
              </li>
              <li>
                <Link href="/servicios/peritaje-geotecnico" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                  Peritaje Geotécnico
                </Link>
              </li>
              <li>
                <Link href="/servicios/reclamaciones-ingenieria" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                  Reclamaciones en Ingeniería
                </Link>
              </li>
              <li>
                <Link href="/servicios/auditoria-forense-tecnica" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                  Auditoría Forense Técnica
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="h-5 w-5 text-gold-500 shrink-0" />
                <span>Calle 42 # 63 - 107<br/>Medellín, Colombia</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="h-5 w-5 text-gold-500 shrink-0" />
                <span>+57 313 685 9878</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="h-5 w-5 text-gold-500 shrink-0" />
                <span>contacto@axiomaperitajes.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Axioma Peritajes. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link href="/privacidad" className="text-slate-500 hover:text-white text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-slate-500 hover:text-white text-sm transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

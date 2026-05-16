import Link from "next/link";
import { Hexagon, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 pt-20 pb-10 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-zinc-800 pb-16">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <Hexagon className="h-8 w-8 text-white" />
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                ACUMEN
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-8 text-zinc-400">
              Firma boutique de inteligencia territorial e ingeniería aumentada. 
              Transformamos la complejidad técnica en decisiones estratégicas 
              a través de datos y rigor metodológico.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/servicios" className="hover:text-white transition-colors">Infraestructura</Link></li>
              <li><Link href="/servicios" className="hover:text-white transition-colors">Movilidad</Link></li>
              <li><Link href="/acumen-os" className="hover:text-white transition-colors">Ingeniería Digital</Link></li>
              <li><Link href="/peritajes" className="hover:text-white transition-colors">Peritajes Técnicos</Link></li>
              <li><Link href="/servicios" className="hover:text-white transition-colors">Analítica Territorial (SIG)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Oficinas</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-zinc-500" />
                <span>Calle 20B sur #38-76 Interior 202<br/>Medellín, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-zinc-500" />
                <span>contacto@acumeningenieria.com</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} ACUMEN INGENIERÍA S.A.S. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Términos Legales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

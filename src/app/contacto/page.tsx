import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contacto | Axioma Peritajes",
  description: "Contacte a nuestros expertos para solicitar un dictamen pericial o asesoría en reclamaciones de ingeniería.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-navy-900 pt-10 pb-24 pattern-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 glow-bg">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Contacto Confidencial</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Comuníquese con nosotros para evaluar su caso. Garantizamos absoluta reserva y rigor profesional desde el primer contacto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-6 rounded-sm border-l-4 border-l-gold-500">
              <h3 className="text-xl font-heading font-bold text-white mb-6">Información Directa</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-navy-800 p-3 rounded-sm text-gold-500">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Oficina Principal</p>
                    <p className="text-slate-400 text-sm mt-1">Calle 42 # 63 - 107<br/>Medellín, Colombia</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-navy-800 p-3 rounded-sm text-gold-500">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Línea de Atención</p>
                    <p className="text-slate-400 text-sm mt-1">+57 313 685 9878</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-navy-800 p-3 rounded-sm text-gold-500">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Correo Electrónico</p>
                    <p className="text-slate-400 text-sm mt-1">contacto@axiomaperitajes.com</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy-800/50 border border-slate-800 p-6 rounded-sm">
              <h4 className="text-white font-semibold mb-2">Horario de Atención</h4>
              <p className="text-slate-400 text-sm">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p className="text-slate-400 text-sm">Sábados: Con cita previa para casos urgentes.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
        </div>
      </div>
    </div>
  );
}

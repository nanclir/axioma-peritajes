import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contacto | Acumen Peritajes",
  description: "Contacte a nuestros expertos para solicitar un dictamen pericial o asesoría en reclamaciones de ingeniería.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-24 pattern-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 glow-bg">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Contacto Confidencial</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Comuníquese con nosotros para evaluar su caso. Garantizamos absoluta reserva y rigor profesional desde el primer contacto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-6 rounded-sm border-l-4 border-l-gold-500">
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-6">Información Directa</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-sm text-gold-500">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">Oficina Principal</p>
                    <p className="text-slate-500 text-sm mt-1">Calle 20B sur #38-76 Interior 202<br/>Medellín, Colombia</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-sm text-gold-500">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">Línea de Atención</p>
                    <p className="text-slate-500 text-sm mt-1">3005771484</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-sm text-gold-500">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">Correo Electrónico</p>
                    <p className="text-slate-500 text-sm mt-1">contacto@acumenperitajes.com</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/50 border border-slate-200 p-6 rounded-sm">
              <h4 className="text-slate-900 font-semibold mb-2">Horario de Atención</h4>
              <p className="text-slate-500 text-sm">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p className="text-slate-500 text-sm">Sábados: Con cita previa para casos urgentes.</p>
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

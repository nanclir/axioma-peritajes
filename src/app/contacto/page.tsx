"use client";

import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    empresa: "",
    contacto: "",
    email: "",
    asunto: "Peritaje Forense",
    mensaje: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ empresa: "", contacto: "", email: "", asunto: "Peritaje Forense", mensaje: "" });
      } else {
        alert("Hubo un error al enviar el mensaje. Por favor intente más tarde.");
      }
    } catch (error) {
      alert("Hubo un error de conexión.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-500 mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Mensaje Recibido</h3>
                <p className="text-zinc-600">Nos pondremos en contacto con usted a la mayor brevedad posible.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-8 text-sm font-bold text-gold-500 uppercase tracking-widest hover:text-zinc-900 transition-colors">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">Nombre Corporativo</label>
                  <input required name="empresa" value={formData.empresa} onChange={handleChange} type="text" className="w-full bg-slate-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Empresa o Entidad" />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">Contacto</label>
                    <input required name="contacto" value={formData.contacto} onChange={handleChange} type="text" className="w-full bg-slate-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Nombre completo" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">Email</label>
                    <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-slate-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="correo@empresa.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">Asunto Principal</label>
                  <select name="asunto" value={formData.asunto} onChange={handleChange} className="w-full bg-slate-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors text-zinc-600">
                    <option>Peritaje Forense</option>
                    <option>Estructuración de Infraestructura</option>
                    <option>Modelado SIG y Analítica</option>
                    <option>ACUMEN OS / Trazabilidad</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">Detalles del Requerimiento</label>
                  <textarea required name="mensaje" value={formData.mensaje} onChange={handleChange} rows={4} className="w-full bg-slate-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none" placeholder="Describa brevemente el alcance..."></textarea>
                </div>

                <button disabled={isSubmitting} type="submit" className="w-full bg-zinc-900 text-white font-bold py-4 hover:bg-gold-500 transition-colors disabled:opacity-50">
                  {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

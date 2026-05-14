"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm({ serviceName = "Asesoría General" }: { serviceName?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="glass p-8 text-center rounded-sm">
        <CheckCircle className="h-16 w-16 text-gold-500 mx-auto mb-6" />
        <h3 className="text-2xl font-heading font-bold text-white mb-2">Mensaje Enviado Exitosamente</h3>
        <p className="text-slate-400">
          Un especialista de Axioma Peritajes se pondrá en contacto con usted en breve para discutir los detalles de su caso.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass p-8 rounded-sm">
      <h3 className="text-2xl font-heading font-bold text-white mb-6">
        Solicite una Evaluación Confidencial
      </h3>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full bg-navy-900 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
              placeholder="Ej. Juan Pérez"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
              Empresa / Organización
            </label>
            <input
              type="text"
              id="company"
              className="w-full bg-navy-900 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
              placeholder="Ej. Constructora Andina"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Correo Electrónico Corporativo
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full bg-navy-900 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
              placeholder="ejemplo@empresa.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
              Teléfono de Contacto
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full bg-navy-900 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
              placeholder="+57 300 000 0000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
            Motivo de la Consulta
          </label>
          <input
            type="text"
            id="service"
            readOnly
            value={serviceName}
            className="w-full bg-navy-800 border border-slate-700 rounded-sm px-4 py-3 text-slate-400 cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
            Descripción Breve del Caso
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full bg-navy-900 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all resize-none"
            placeholder="Por favor, provea detalles generales sin incluir información altamente sensible aún."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-4 rounded-sm font-bold transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed text-lg"
        >
          {isSubmitting ? (
            "Procesando..."
          ) : (
            <>
              Enviar Solicitud <Send className="h-5 w-5" />
            </>
          )}
        </button>
        
        <p className="text-xs text-slate-500 text-center mt-4">
          Toda la información proporcionada será tratada bajo estricto acuerdo de confidencialidad y secreto profesional.
        </p>
      </div>
    </form>
  );
}

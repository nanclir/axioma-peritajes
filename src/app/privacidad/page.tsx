import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Política de Privacidad | Acumen Ingeniería",
  description: "Políticas de privacidad y tratamiento de datos personales de Acumen Ingeniería S.A.S.",
};

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <ShieldAlert className="h-12 w-12 text-gold-500 mb-6" />
          <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">Política de Privacidad</h1>
          <p className="text-slate-500">Última actualización: Mayo de 2026</p>
        </div>

        <div className="prose  prose-slate max-w-none">
          <h2 className="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">1. Introducción</h2>
          <p className="text-slate-500 leading-relaxed mb-6">
            En Acumen Ingeniería S.A.S. valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos, protegemos y compartimos la información personal de nuestros clientes y visitantes a través de nuestro sitio web y en el marco de nuestros servicios de consultoría, gerencia de proyectos y dictámenes periciales.
          </p>

          <h2 className="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">2. Información que recopilamos</h2>
          <p className="text-slate-500 leading-relaxed mb-6">
            Podemos recopilar información personal que usted nos proporcione voluntariamente al contactarnos a través de nuestros formularios, solicitar una asesoría o contratar nuestros servicios. Esto incluye, pero no se limita a: nombre, correo electrónico, número de teléfono, empresa, cargo y detalles del caso o proyecto (siempre manejados bajo estricto acuerdo de confidencialidad).
          </p>

          <h2 className="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">3. Uso de la información</h2>
          <p className="text-slate-500 leading-relaxed mb-6">
            La información recopilada se utiliza exclusivamente para los siguientes propósitos:
          </p>
          <ul className="list-disc list-inside text-slate-500 mb-6 space-y-2">
            <li>Proveer, operar y mantener nuestros servicios de ingeniería, consultoría y peritajes.</li>
            <li>Mejorar, personalizar y expandir nuestro sitio web.</li>
            <li>Comprender y analizar cómo utiliza nuestra plataforma.</li>
            <li>Comunicarnos con usted para responder consultas, enviar cotizaciones y proveer servicio al cliente.</li>
            <li>Cumplir con obligaciones legales y regulatorias de la República de Colombia.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">4. Confidencialidad y Seguridad</h2>
          <p className="text-slate-500 leading-relaxed mb-6">
            Dada la naturaleza crítica, técnica y legal de los servicios de Acumen Ingeniería S.A.S., toda la información operativa, forense y financiera de sus proyectos es tratada con el más alto nivel de confidencialidad (Secreto Profesional). Implementamos estrictas medidas de seguridad diseñadas para proteger su información corporativa contra acceso no autorizado, alteración o filtración.
          </p>

          <h2 className="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">5. Sus Derechos (Ley 1581 de 2012)</h2>
          <p className="text-slate-500 leading-relaxed mb-6">
            De acuerdo con la legislación colombiana (Habeas Data), usted tiene derecho a conocer, actualizar, rectificar y solicitar la eliminación de sus datos personales de nuestras bases de datos en cualquier momento.
          </p>

          <h2 className="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">6. Contacto</h2>
          <p className="text-slate-500 leading-relaxed mb-8">
            Si tiene alguna pregunta sobre esta Política de Privacidad o sobre el tratamiento de sus datos, puede contactarnos a:
            <br />
            <strong>Email:</strong> gerencia@acumeningenieria.com
          </p>

          <Link href="/" className="inline-block mt-8 text-gold-500 hover:text-gold-400 font-medium transition-colors">
            ← Volver al inicio
          </Link>
        </div>

      </div>
    </div>
  );
}

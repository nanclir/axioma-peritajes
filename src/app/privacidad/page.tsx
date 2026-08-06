import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidad | ACUMEN INGENIERÍA S.A.S.",
  description: "Políticas de tratamiento de datos personales y privacidad de ACUMEN INGENIERÍA.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al Inicio
        </Link>

        <h1 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 mb-8 tracking-tight">
          Política de Privacidad y Tratamiento de Datos.
        </h1>
        
        <div className="prose prose-zinc prose-lg max-w-none text-zinc-600 font-light leading-relaxed">
          <p>
            En <strong>ACUMEN INGENIERÍA S.A.S.</strong> (en adelante, "la Firma"), estamos comprometidos con la seguridad y privacidad de la información técnica, jurídica y personal de nuestros clientes, socios y usuarios de nuestras plataformas, incluyendo ACUMEN OS.
          </p>

          <h3 className="text-zinc-900 font-bold font-heading mt-8 mb-4">1. Identidad del Responsable</h3>
          <p>
            ACUMEN INGENIERÍA S.A.S. es una sociedad comercial debidamente constituida bajo las leyes de la República de Colombia, con domicilio principal en la ciudad de Medellín. Somos los responsables del tratamiento de los datos que recabamos a través de nuestros servicios de consultoría, peritaje técnico e inteligencia territorial.
          </p>

          <h3 className="text-zinc-900 font-bold font-heading mt-8 mb-4">2. Finalidad del Tratamiento de Datos</h3>
          <p>
            Los datos personales e información técnica suministrada serán utilizados con los siguientes propósitos:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Estructuración de dictámenes periciales e investigaciones periciales de infraestructura.</li>
            <li>Gestión y trazabilidad de proyectos mediante nuestra plataforma ACUMEN OS.</li>
            <li>Contacto técnico o comercial relacionado con nuestros servicios de consultoría e ingeniería digital.</li>
            <li>Cumplimiento de obligaciones legales y contractuales vigentes en el territorio colombiano.</li>
          </ul>

          <h3 className="text-zinc-900 font-bold font-heading mt-8 mb-4">3. Seguridad de la Información (ACUMEN OS)</h3>
          <p>
            Entendemos que los proyectos de infraestructura y los litigios técnicos manejan información altamente sensible. Los datos cargados o gestionados a través de ACUMEN OS están protegidos mediante protocolos de encriptación y control de acceso estricto. La información de los peritajes técnicos goza de confidencialidad y reserva profesional.
          </p>

          <h3 className="text-zinc-900 font-bold font-heading mt-8 mb-4">4. Derechos de los Titulares</h3>
          <p>
            De conformidad con la Ley Estatutaria 1581 de 2012, el titular de los datos personales tiene derecho a conocer, actualizar y rectificar su información, así como solicitar la prueba de la autorización otorgada y la supresión de sus datos cuando no exista un deber legal o contractual que lo impida.
          </p>

          <h3 className="text-zinc-900 font-bold font-heading mt-8 mb-4">5. Contacto</h3>
          <p>
            Para el ejercicio de sus derechos, puede contactarse con nosotros a través del correo electrónico: <strong>contacto@acumeningenieria.com</strong>.
          </p>

          <div className="mt-12 p-6 bg-slate-50 border border-zinc-200 text-sm">
            <p className="mb-0">Última actualización: Mayo de 2026</p>
          </div>
        </div>

      </div>
    </div>
  );
}

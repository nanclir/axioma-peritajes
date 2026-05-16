import Link from "next/link";
import { Scale } from "lucide-react";

export const metadata = {
  title: "Términos y Condiciones | Acumen Ingeniería",
  description: "Términos y condiciones de uso del sitio web y servicios de Acumen Ingeniería S.A.S.",
};

export default function Terminos() {
  return (
    <div className="min-h-screen bg-navy-900 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <Scale className="h-12 w-12 text-gold-500 mb-6" />
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Términos y Condiciones</h1>
          <p className="text-slate-400">Última actualización: Mayo de 2026</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">1. Aceptación de los Términos</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Al acceder y utilizar el sitio web de Acumen Ingeniería S.A.S. (en adelante, "la Firma"), usted acepta cumplir y estar sujeto a estos Términos y Condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">2. Naturaleza de los Servicios</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            La información proporcionada en este sitio web es de carácter informativo y general. No constituye asesoramiento legal, financiero ni de ingeniería definitivo para un caso específico. La relación consultor-cliente solo se establece tras la firma de un contrato de prestación de servicios o acuerdo de confidencialidad y peritaje correspondiente.
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">3. Propiedad Intelectual</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Todo el contenido presente en este sitio, incluyendo pero no limitado a textos, gráficos, logotipos, íconos, imágenes, metodologías descritas (Acumen OS) y código fuente, es propiedad exclusiva de Acumen Ingeniería S.A.S. o de sus licenciantes y está protegido por las leyes de propiedad intelectual de Colombia e internacionales. Queda estrictamente prohibida su reproducción sin autorización escrita.
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">4. Exactitud de la Información</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Aunque nos esforzamos por mantener la información de este sitio actualizada y correcta, no realizamos declaraciones ni garantías de ningún tipo, expresas o implícitas, sobre la integridad, exactitud, fiabilidad o disponibilidad del sitio o la información, productos, servicios o gráficos relacionados.
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">5. Limitación de Responsabilidad</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            En ningún caso Acumen Ingeniería S.A.S. será responsable por cualquier pérdida o daño, incluyendo sin limitación, pérdida o daño indirecto o consecuente, o cualquier pérdida o daño derivado de la pérdida de datos o beneficios que surjan de, o en conexión con, el uso de este sitio web.
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">6. Ley Aplicable</h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de la República de Colombia. Cualquier disputa que surja en relación con este sitio web estará sujeta a la jurisdicción exclusiva de los tribunales competentes en Medellín, Colombia.
          </p>

          <Link href="/" className="inline-block mt-8 text-gold-500 hover:text-gold-400 font-medium transition-colors">
            ← Volver al inicio
          </Link>
        </div>

      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Términos Legales | ACUMEN INGENIERÍA S.A.S.",
  description: "Términos legales y condiciones de uso de ACUMEN INGENIERÍA.",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al Inicio
        </Link>

        <h1 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 mb-8 tracking-tight">
          Términos Legales y de Servicio.
        </h1>
        
        <div className="prose prose-zinc prose-lg max-w-none text-zinc-600 font-light leading-relaxed">
          <p>
            El acceso y uso del sitio web de <strong>ACUMEN INGENIERÍA S.A.S.</strong>, así como la contratación de sus servicios especializados en infraestructura, peritajes y trazabilidad, se rigen por los siguientes términos.
          </p>

          <h3 className="text-zinc-900 font-bold font-heading mt-8 mb-4">1. Naturaleza de los Servicios</h3>
          <p>
            ACUMEN proporciona servicios de consultoría técnica de alto nivel, inteligencia territorial y modelado forense. Toda la información contenida en nuestro sitio web, en la sección de *Insights* o en los resúmenes de *Proyectos*, es de carácter informativo y no constituye, por sí sola, una relación de consultoría vinculante ni asesoría legal directa hasta que no medie un contrato formal.
          </p>

          <h3 className="text-zinc-900 font-bold font-heading mt-8 mb-4">2. Propiedad Intelectual</h3>
          <p>
            Los textos, metodologías gráficas, marcas (incluyendo *ACUMEN OS*), logotipos y bases de código presentadas en este portal son propiedad exclusiva de ACUMEN INGENIERÍA S.A.S. Queda estrictamente prohibida la reproducción parcial o total, modificación o uso comercial de nuestro contenido sin autorización previa y por escrito.
          </p>

          <h3 className="text-zinc-900 font-bold font-heading mt-8 mb-4">3. Limitación de Responsabilidad</h3>
          <p>
            Nuestros dictámenes técnicos y modelos predictivos (SIG, BIM, IA) se emiten con el más alto estándar de rigor científico y metodológico del estado del arte aplicable a la ingeniería. No obstante, en ningún caso la firma garantiza la eliminación absoluta de todo riesgo en infraestructuras complejas, sino la rigurosa *reducción de incertidumbre* basada en datos y evidencia técnica disponible.
          </p>

          <h3 className="text-zinc-900 font-bold font-heading mt-8 mb-4">4. Confidencialidad de Dictámenes y Peritajes</h3>
          <p>
            Dado nuestro rol en arbitrajes y litigios, la información proporcionada por nuestros clientes se rige bajo estrictos acuerdos de confidencialidad (NDA). Los Casos de Estudio referenciados en este portal han sido debidamente anonimizados en las partes sensibles o provienen de fallos y laudos de carácter público.
          </p>

          <h3 className="text-zinc-900 font-bold font-heading mt-8 mb-4">5. Ley Aplicable</h3>
          <p>
            Estos términos se rigen e interpretan de acuerdo con las leyes de la República de Colombia. Cualquier controversia será sometida a la jurisdicción de los jueces competentes en la ciudad de Medellín.
          </p>

          <div className="mt-12 p-6 bg-slate-50 border border-zinc-200 text-sm">
            <p className="mb-0">Última actualización: Mayo de 2026</p>
          </div>
        </div>

      </div>
    </div>
  );
}

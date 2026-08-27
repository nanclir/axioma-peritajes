"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, UploadCloud, Terminal, FileText, AlertTriangle, ShieldCheck, Loader2, Image as ImageIcon } from "lucide-react";

export default function InquiryIAMockup() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [humanValidated, setHumanValidated] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const startAnalysis = () => {
    if (!file) return;
    setIsProcessing(true);
    setHumanValidated(false);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target?.result as string || "";
      const fileName = file.name;
      const nameLower = fileName.toLowerCase();
      const contentLower = fileContent.toLowerCase();

      // Mapeo inteligente de palabras clave
      const hasClima = nameLower.includes("clima") || nameLower.includes("agua") || nameLower.includes("hidro") || nameLower.includes("lluvia") || nameLower.includes("embalse") || contentLower.includes("clima") || contentLower.includes("agua") || contentLower.includes("hidro") || contentLower.includes("lluvia") || contentLower.includes("embalse");
      const hasTunel = nameLower.includes("tunel") || nameLower.includes("túnel") || nameLower.includes("subterraneo") || nameLower.includes("geotec") || nameLower.includes("suelo") || nameLower.includes("talud") || contentLower.includes("tunel") || contentLower.includes("túnel") || contentLower.includes("subterraneo") || contentLower.includes("geotec") || contentLower.includes("suelo") || contentLower.includes("talud");
      const hasPoliza = nameLower.includes("poliza") || nameLower.includes("póliza") || nameLower.includes("seguro") || nameLower.includes("garant") || contentLower.includes("poliza") || contentLower.includes("póliza") || contentLower.includes("seguro") || contentLower.includes("garant");
      const hasContrato = nameLower.includes("contrato") || nameLower.includes("acta") || nameLower.includes("convenio") || nameLower.includes("pliego") || contentLower.includes("contrato") || contentLower.includes("acta") || contentLower.includes("convenio") || contentLower.includes("pliego");
      const hasMovilidad = nameLower.includes("movilidad") || nameLower.includes("transito") || nameLower.includes("tránsito") || nameLower.includes("vía") || nameLower.includes("via") || nameLower.includes("carretera") || nameLower.includes("tráfico") || nameLower.includes("trafico") || contentLower.includes("movilidad") || contentLower.includes("transito") || contentLower.includes("tránsito") || contentLower.includes("vía") || contentLower.includes("via") || contentLower.includes("carretera") || contentLower.includes("tráfico") || contentLower.includes("trafico");

      setTimeout(() => {
        setIsProcessing(false);

        let summary = `Se ha analizado el documento "${fileName}". La IA multimodal de ACUMEN ha procesado la estructura semántica y los metadatos del archivo para extraer anomalías críticas y verificar consistencias técnicas.`;
        let findingsList = [];

        if (hasClima) {
          findingsList.push({
            type: "Técnica (Clima/Agua)",
            title: "Subestimación de Variabilidad Climática",
            context: `Se detectan variables hidrológicas en el documento. La IA identifica que las curvas IDF y los periodos de retorno descritos no integran las series estocásticas no-estacionarias recientes, elevando el riesgo de inundación.`
          });
        }
        if (hasTunel) {
          findingsList.push({
            type: "Técnica (Geotecnia)",
            title: "Anomalía de Estabilidad Geotécnica",
            context: `Se identifican referencias a excavaciones o taludes. El análisis geomecánico indica que el coeficiente de seguridad en condiciones de saturación máxima está al límite (FOS < 1.25).`
          });
        }
        if (hasPoliza) {
          findingsList.push({
            type: "Jurídica (Seguros)",
            title: "Descalce de Vigencia de Póliza",
            context: `Se detectan menciones a pólizas o amparos. Se advierte que el periodo de ejecución propuesto excede la vigencia del amparo de estabilidad de obra y responsabilidad civil en el anexo de seguros.`
          });
        }
        if (hasContrato) {
          findingsList.push({
            type: "Jurídica (Contrato)",
            title: "Riesgo en Cláusula de Ajuste Polinómico",
            context: `El análisis semántico del contrato detecta que la fórmula de reajuste de precios (fórmula polinómica) no contempla variaciones severas del IPC para insumos de importación crítica.`
          });
        }
        if (hasMovilidad) {
          findingsList.push({
            type: "Técnica (Movilidad)",
            title: "Conflicto de Capacidad y Demanda Vial",
            context: `Se identifican flujos viales. Los aforos descritos proyectan un nivel de servicio F prematuro en la intersección propuesta, entrando en contradicción con el diseño geométrico planteado.`
          });
        }

        // Si no se encuentra ninguna palabra clave, generamos hallazgos generales realistas basados en el nombre
        if (findingsList.length === 0) {
          findingsList.push({
            type: "Análisis General",
            title: "Verificación de Integridad Documental",
            context: `Se analizó la estructura general de "${fileName}". Se comprueba que las referencias técnicas y las especificaciones generales se encuentran dentro de los rangos admisibles de la ingeniería de consulta.`
          });
          findingsList.push({
            type: "Control Contractual",
            title: "Rúbricas y Firmas Pendientes",
            context: `Se recomienda verificar la presencia de la firma electrónica del representante técnico de la interventoría en el folio de cierre para garantizar validez formal.`
          });
        }

        setResults({
          documentName: fileName,
          pagesProcessed: Math.max(1, Math.floor(file.size / 1024 / 5)), // Estimación de páginas basada en tamaño
          imagesAnalyzed: nameLower.includes("img") || nameLower.includes("foto") ? 4 : 0,
          anomaliesFound: findingsList.length,
          summary: summary,
          findings: findingsList
        });
      }, 5000);
    };

    // Intentar leer las primeras 50KB como texto (suficiente para escanear keywords del encabezado de cualquier PDF/TXT)
    reader.readAsText(file.slice(0, 50000));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#070709] text-zinc-200 font-sans pt-20">
      
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/50 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/ai-lab" className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
            <ArrowLeft className="h-5 w-5 text-zinc-400" />
          </Link>
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-blue-500" />
            <h1 className="font-heading font-bold text-lg text-white">InquiryIA <span className="text-blue-500 font-mono font-normal text-xs ml-2 border border-blue-500/30 px-1 rounded bg-blue-500/10">v1.0-alpha</span></h1>
          </div>
        </div>
        <div className="hidden md:block text-xs font-mono text-zinc-500 text-right">
          CONEXIÓN SEGURA <br /> IA HÍBRIDA MULTIMODAL
        </div>
      </header>

      <main className="flex-grow p-6 lg:p-12 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8">
        
        {/* Panel de Carga (Input) */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-zinc-800 text-zinc-400 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span> 
            Ingesta Documental Multimodal
          </h2>
          
          <div className={`border-2 border-dashed rounded-lg p-12 flex flex-col items-center justify-center text-center transition-all ${file ? 'border-blue-500/50 bg-blue-500/5' : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'}`}>
            {file ? (
              <>
                {file.type.includes('image') ? (
                  <ImageIcon className="h-16 w-16 text-blue-400 mb-4" />
                ) : (
                  <FileText className="h-16 w-16 text-blue-400 mb-4" />
                )}
                <p className="text-white font-medium mb-1">{file.name}</p>
                <p className="text-zinc-500 text-sm mb-6">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                <button 
                  onClick={startAnalysis}
                  disabled={isProcessing}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isProcessing ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Análisis en curso...</>
                  ) : (
                    "Ejecutar Análisis Técnico"
                  )}
                </button>
              </>
            ) : (
              <>
                <UploadCloud className="h-16 w-16 text-zinc-600 mb-4" />
                <p className="text-zinc-300 font-medium mb-2">Arrastra los documentos (PDF) o imágenes (JPG/PNG)</p>
                <p className="text-zinc-500 text-sm mb-6 max-w-sm">El sistema usará Reconocimiento Óptico (OCR), Visión Computacional (YOLOv5) y Modelos Semánticos (BERT).</p>
                <label className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-2 rounded cursor-pointer transition-colors border border-zinc-700">
                  Examinar archivos
                  <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="hidden" onChange={handleUpload} />
                </label>
              </>
            )}
          </div>
          
          {/* Status logs */}
          {isProcessing && (
            <div className="mt-6 bg-black border border-zinc-800 rounded-lg p-4 font-mono text-xs text-green-500 space-y-2 break-words">
              <p>{">"} Paso 1: Preprocesamiento y estructuración de datos... [OK]</p>
              <p className="opacity-90">{">"} Paso 2: PLN - Extrayendo semántica (BERT/RoBERTa)...</p>
              <p className="opacity-75">{">"} Paso 3: Visión - Detectando fallas visuales (YOLOv5)...</p>
              <p className="opacity-60">{">"} Paso 4: Integrando evidencia multimodal (texto + imagen)...</p>
              <p className="opacity-40 animate-pulse">{">"} Paso 5: Generando informe IA-Borrador (60%)...</p>
            </div>
          )}
        </div>

        {/* Panel de Resultados (Output) */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-zinc-600">
            <span className="bg-zinc-800 text-zinc-500 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span> 
            Resultados Cognitivos y Entregables
          </h2>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg flex-grow p-6 overflow-y-auto">
            {!results && !isProcessing && (
              <div className="h-full flex items-center justify-center text-zinc-600 text-sm text-center px-8">
                Esperando ingesta de documentos...<br/>Cargue un archivo para generar el Informe IA-Borrador.
              </div>
            )}
            
            {isProcessing && (
              <div className="h-full flex flex-col items-center justify-center text-blue-500">
                <Loader2 className="h-12 w-12 animate-spin mb-4" />
                <p className="animate-pulse font-medium">La IA Híbrida está analizando la evidencia...</p>
              </div>
            )}
            
            {results && !isProcessing && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                  <h3 className="font-bold text-white text-lg">IA-Borrador Preliminar (60%)</h3>
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs px-2 py-1 rounded flex items-center gap-1 font-bold">
                    <AlertTriangle className="h-3 w-3" /> RIESGO DETECTADO
                  </div>
                </div>
                
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 bg-black/50 p-4 rounded border border-zinc-800">
                  {results.summary}
                </p>
                
                <h4 className="font-bold text-zinc-400 text-xs uppercase tracking-wider mb-3">Capítulo de Debilidades</h4>
                <div className="space-y-3">
                  {results.findings.map((finding: any, idx: number) => (
                    <div key={idx} className="bg-zinc-950 border border-zinc-800 p-4 rounded-lg flex gap-3">
                      {finding.type === 'Técnica' ? (
                        <ImageIcon className="h-5 w-5 text-blue-500 shrink-0" />
                      ) : finding.type === 'Jurídica' ? (
                        <AlertTriangle className="h-5 w-5 text-red-500 shrink-0" />
                      ) : finding.type === 'Financiera' ? (
                        <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0" />
                      ) : (
                        <ShieldCheck className="h-5 w-5 text-zinc-500 shrink-0" />
                      )}
                      <div>
                        <div className="text-blue-400 text-[10px] uppercase font-bold border border-blue-500/30 px-2 py-0.5 rounded-full mb-2 w-fit bg-blue-500/10">
                          {finding.type}
                        </div>
                        <h5 className="font-bold text-zinc-200 text-sm">{finding.title}</h5>
                        <p className="text-zinc-500 text-xs mt-1 font-mono leading-relaxed">{finding.context}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Flujo de Validación y Ensamblaje */}
                {!humanValidated ? (
                  <div className="mt-8 border-t border-zinc-800 pt-6">
                    <p className="text-xs text-zinc-500 mb-3 text-center">La IA asiste; el perito humano valida y firma.</p>
                    <button 
                      onClick={() => setHumanValidated(true)}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold py-3 rounded transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(5,150,105,0.3)]"
                    >
                      <ShieldCheck className="h-5 w-5" />
                      Pasar a Validación Humana (Firma de Perito)
                    </button>
                  </div>
                ) : (
                  <div className="mt-8 border-t border-zinc-800 pt-6 animate-in zoom-in-95 duration-300">
                    <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium px-4 py-3 rounded flex items-center gap-2 mb-4 justify-center">
                      <ShieldCheck className="h-5 w-5" /> Validación Humana y Firma Completada
                    </div>
                    
                    <h4 className="font-bold text-zinc-400 text-xs uppercase tracking-wider mb-3 text-center">Ensamblaje de Entregables</h4>
                    <div className="flex flex-col gap-3">
                      <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-3 rounded transition-colors flex items-center justify-center gap-2 shadow-sm">
                        <FileText className="h-4 w-4" /> Ensamblar Informe Final de Peritaje
                      </button>
                      <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium py-3 rounded transition-colors border border-zinc-700 flex items-center justify-center gap-2">
                        <Terminal className="h-4 w-4" /> Ensamblar Presentación de Sustentación
                      </button>
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}

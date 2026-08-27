"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Terminal, Loader2, CheckCircle2, AlertTriangle, FileSpreadsheet, Percent } from "lucide-react";

export default function NSRAISandbox() {
  const [floors, setFloors] = useState(5);
  const [seismicZone, setSeismicZone] = useState("Alta");
  const [material, setMaterial] = useState("Concreto");
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const startAnalysis = () => {
    setIsProcessing(true);
    setResults(null);

    // Simular el procesamiento estructural NSR-10
    setTimeout(() => {
      setIsProcessing(false);

      // Datos calculados dinámicos
      let aa = "0.25";
      let av = "0.25";
      let status = "APROBADO";
      let colorClass = "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      let checkLog = "";

      if (seismicZone === "Alta") {
        aa = "0.25";
        av = "0.25";
        if (floors > 10) {
          status = "NO CUMPLE (Derivas Excesivas)";
          colorClass = "text-red-400 bg-red-500/10 border-red-500/20";
          checkLog = "La deriva máxima en el piso 8 excede el límite del 1.0% para concreto reforzado (calculado: 1.14%). Se requiere rigidizar la estructura mediante muros de cortante o disipadores de energía.";
        } else {
          status = "APROBADO";
          colorClass = "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
          checkLog = "Derivas de entrepiso conformes con el límite de 1.0% de la NSR-10. La deriva máxima calculada fue de 0.88% en el piso 4.";
        }
      } else if (seismicZone === "Media") {
        aa = "0.15";
        av = "0.20";
        status = "APROBADO";
        checkLog = "Derivas conformes. Aceleraciones y coeficientes sísmicos moderados. Deriva máxima calculada de 0.65% en el último nivel.";
      } else {
        // Baja
        aa = "0.05";
        av = "0.10";
        status = "APROBADO";
        checkLog = "Diseño estructural seguro y holgado para zona de amenaza sísmica baja. Coeficiente de importancia estándar cumplido.";
      }

      setResults({
        floors: floors,
        zone: seismicZone,
        material: material,
        aa: aa,
        av: av,
        status: status,
        colorClass: colorClass,
        checkLog: checkLog,
        driftLimit: "1.00%",
        maxDrift: seismicZone === "Alta" && floors > 10 ? "1.14%" : "0.88%",
      });
    }, 4500);
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
            <Cpu className="h-5 w-5 text-blue-500" />
            <h1 className="font-heading font-bold text-lg text-white">NSR AI <span className="text-blue-500 font-mono font-normal text-xs ml-2 border border-blue-500/30 px-1 rounded bg-blue-500/10">v1.0-alpha</span></h1>
          </div>
        </div>
        <div className="hidden md:block text-xs font-mono text-zinc-500 text-right">
          EVALUADOR DE DISEÑO SÍSMICO <br /> NORMA NSR-10 COLOMBIA
        </div>
      </header>

      <main className="flex-grow p-6 lg:p-12 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8">
        
        {/* Panel de Ingesta (Inputs) */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-zinc-800 text-zinc-400 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span> 
            Parámetros Estructurales
          </h2>
          
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-lg space-y-6">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">Número de Pisos / Altura</label>
              <input 
                type="number" 
                value={floors} 
                onChange={(e) => setFloors(parseInt(e.target.value) || 0)}
                className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                min="1"
                max="50"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">Zona de Amenaza Sísmica</label>
              <select 
                value={seismicZone} 
                onChange={(e) => setSeismicZone(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="Alta">Alta (Ej: Bucaramanga, Pasto)</option>
                <option value="Media">Media (Ej: Medellín, Cali)</option>
                <option value="Baja">Baja (Ej: Barranquilla, Riohacha)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">Material Estructural Principal</label>
              <select 
                value={material} 
                onChange={(e) => setMaterial(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="Concreto">Concreto Reforzado</option>
                <option value="Acero">Acero Estructural</option>
                <option value="Mamposteria">Mampostería Estructural</option>
              </select>
            </div>

            <button 
              onClick={startAnalysis}
              disabled={isProcessing}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Verificando normatividad NSR-10...</>
              ) : (
                "Validar Diseño Estructural NSR-10"
              )}
            </button>
          </div>
        </div>

        {/* Panel de Resultados */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-zinc-800 text-zinc-400 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span> 
            Scorecard de Cumplimiento Normativo
          </h2>

          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 flex-1 flex flex-col justify-between min-h-[300px]">
            {isProcessing && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <Loader2 className="h-10 w-10 text-blue-500 animate-spin mb-4" />
                <p className="font-mono text-xs text-blue-400 mb-2 animate-pulse">&gt; CORRIENDO ANÁLISIS DE DERIVAS SÍSMICAS...</p>
                <p className="text-zinc-500 text-xs max-w-xs">Efectuando comprobación de espectro de diseño, cálculo sísmico de cortante y derivas límites de entrepiso.</p>
              </div>
            )}

            {!isProcessing && !results && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border border-dashed border-zinc-800 rounded">
                <FileSpreadsheet className="h-12 w-12 text-zinc-700 mb-4" />
                <p className="text-zinc-500 text-sm">Ingrese los parámetros de la estructura a la izquierda y presione "Validar" para simular el chequeo normativo NSR-10.</p>
              </div>
            )}

            {!isProcessing && results && (
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-zinc-500">ESTADO DEL CHEQUEO</span>
                    <span className={`px-3 py-1 rounded text-xs font-bold border ${results.colorClass}`}>
                      {results.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    {results.status === "APROBADO" ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-red-500 shrink-0" />
                    )}
                    Edificio de {results.floors} Pisos ({results.material})
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {results.checkLog}
                  </p>

                  <div className="border-t border-zinc-800 pt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-zinc-500 block">LÍMITE DE DERIVA NSR-10</span>
                        <span className="text-zinc-300 font-mono">{results.driftLimit}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">DERIVA MÁXIMA CALCULADA</span>
                        <span className="text-zinc-300 font-mono">{results.maxDrift}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-zinc-500 block">COEFICIENTE Aa</span>
                        <span className="text-zinc-300 font-mono">{results.aa}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">COEFICIENTE Av</span>
                        <span className="text-zinc-300 font-mono">{results.av}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs font-mono text-zinc-500">NÚCLEO EVALUADOR: NSR-10 CAPÍTULO A.5</span>
                </div>
              </div>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}

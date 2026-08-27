"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, Terminal, Loader2, CheckCircle2, AlertTriangle, Layers, MapPin } from "lucide-react";

export default function GeoRiskAISandbox() {
  const [coords, setCoords] = useState("6.2084, -75.5670");
  const [dept, setDept] = useState("Antioquia");
  const [riskType, setRiskType] = useState("Deslizamiento");
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const startAnalysis = () => {
    setIsProcessing(true);
    setResults(null);

    // Simular el procesamiento GIS/Meteorológico
    setTimeout(() => {
      setIsProcessing(false);

      // Datos dinámicos según el tipo de riesgo
      let score = "MEDIO";
      let colorClass = "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
      let details = "";

      if (riskType === "Deslizamiento") {
        score = dept === "Chocó" || dept === "Antioquia" ? "ALTO" : "MEDIO";
        details = `Susceptibilidad de talud crítica detectada en el departamento de ${dept}. Las precipitaciones acumuladas de los últimos 15 días exceden el umbral histórico en un 24%, elevando el riesgo de remoción en masa en zonas con pendientes mayores a 30 grados.`;
      } else if (riskType === "Inundación") {
        score = dept === "Chocó" ? "CRÍTICO" : dept === "Atlántico" ? "ALTO" : "BAJO";
        details = `Modelación hidráulica de drenajes y llanuras de inundación finalizada para ${dept}. El incremento proyectado del nivel de escorrentía superficial indica un riesgo de desbordamiento en infraestructuras aledañas a cuerpos hídricos activos.`;
      } else {
        // Sismicidad
        score = dept === "Cundinamarca" || dept === "Antioquia" ? "ALTO" : "MEDIO";
        details = `Aceleración pico efectiva en roca (Aa) estimada según NSR-10 para la zona de ${dept}. Se recomienda cimentación profunda y análisis sismo-resistente avanzado debido a la presencia de sistemas de fallas activas regionales.`;
      }

      if (score === "ALTO" || score === "CRÍTICO") {
        colorClass = "text-red-400 bg-red-500/10 border-red-500/20";
      } else if (score === "BAJO") {
        colorClass = "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      }

      setResults({
        coordinates: coords,
        department: dept,
        risk: riskType,
        score: score,
        colorClass: colorClass,
        details: details,
        krigingStatus: "COMPLETADA (14 estaciones IDEAM interpoladas)",
        geomorphology: "Pendientes fuertes, rocas sedimentarias fracturadas",
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
            <ShieldAlert className="h-5 w-5 text-emerald-500" />
            <h1 className="font-heading font-bold text-lg text-white">GeoRisk AI <span className="text-emerald-500 font-mono font-normal text-xs ml-2 border border-emerald-500/30 px-1 rounded bg-emerald-500/10">v1.0-alpha</span></h1>
          </div>
        </div>
        <div className="hidden md:block text-xs font-mono text-zinc-500 text-right">
          SISTEMA DE PREVISIÓN GIS <br /> INTELIGENCIA TERRITORIAL
        </div>
      </header>

      <main className="flex-grow p-6 lg:p-12 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8">
        
        {/* Panel de Entrada (Parámetros) */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-zinc-800 text-zinc-400 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span> 
            Parámetros del Territorio
          </h2>
          
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-lg space-y-6">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">Coordenadas del Proyecto (Lat, Lon)</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-zinc-600" />
                <input 
                  type="text" 
                  value={coords} 
                  onChange={(e) => setCoords(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 p-3 pl-10 rounded text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">Departamento (Colombia)</label>
              <select 
                value={dept} 
                onChange={(e) => setDept(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
              >
                <option value="Antioquia">Antioquia</option>
                <option value="Chocó">Chocó</option>
                <option value="Cundinamarca">Cundinamarca</option>
                <option value="Atlántico">Atlántico</option>
                <option value="Valle del Cauca">Valle del Cauca</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">Variable de Riesgo</label>
              <div className="grid grid-cols-3 gap-2">
                {["Deslizamiento", "Inundación", "Sismicidad"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setRiskType(type)}
                    className={`p-3 text-xs font-bold uppercase rounded border transition-all ${riskType === type ? 'bg-emerald-600/20 border-emerald-500 text-white' : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-700'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={startAnalysis}
              disabled={isProcessing}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Procesando capas espaciales...</>
              ) : (
                "Simular Análisis de Riesgo"
              )}
            </button>
          </div>
        </div>

        {/* Panel de Resultados */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-zinc-800 text-zinc-400 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span> 
            Reporte de Riesgo Espacial
          </h2>

          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 flex-1 flex flex-col justify-between min-h-[300px]">
            {isProcessing && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <Loader2 className="h-10 w-10 text-emerald-500 animate-spin mb-4" />
                <p className="font-mono text-xs text-emerald-400 mb-2 animate-pulse">&gt; CONSULTANDO CAPAS RASTER Y ESTACIONES IDEAM...</p>
                <p className="text-zinc-500 text-xs max-w-xs">Interpolando registros climatológicos y calculando inclinación de taludes mediante elevación digital.</p>
              </div>
            )}

            {!isProcessing && !results && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border border-dashed border-zinc-800 rounded">
                <Layers className="h-12 w-12 text-zinc-700 mb-4" />
                <p className="text-zinc-500 text-sm">Configure los parámetros a la izquierda y haga clic en "Simular Análisis" para iniciar la predicción de riesgo territorial.</p>
              </div>
            )}

            {!isProcessing && results && (
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-zinc-500">RIESGO DETECTADO</span>
                    <span className={`px-3 py-1 rounded text-xs font-bold border ${results.colorClass}`}>
                      NIVEL {results.score}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0" />
                    Riesgo de {results.risk} en {results.department}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {results.details}
                  </p>

                  <div className="border-t border-zinc-800 pt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-zinc-500 block">COORDENADAS</span>
                        <span className="text-zinc-300 font-mono">{results.coordinates}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">INTERPOLACIÓN CLIMA</span>
                        <span className="text-zinc-300 font-mono">{results.krigingStatus}</span>
                      </div>
                    </div>
                    <div className="text-xs">
                      <span className="text-zinc-500 block">GEOMORFOLOGÍA</span>
                      <span className="text-zinc-300">{results.geomorphology}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-mono text-zinc-500">CORRELACIÓN DE MODELOS: 94.2%</span>
                </div>
              </div>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}

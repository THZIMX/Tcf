import { motion } from "framer-motion";
import { Sun, Wind, Waves, Zap } from "lucide-react";
import { useState } from "react";

// Componente principal para exibir os tipos de energia
export default function Energias() {
  const [energiaAtiva, setEnergiaAtiva] = useState("eolica");

  const tiposDeEnergia = [
    { id: "eolica", nome: "Eólica", icon: <Wind className="w-6 h-6 text-blue-400" /> },
    { id: "solar", nome: "Solar", nomeCompleto: "Solar", icon: <Sun className="w-6 h-6 text-yellow-400" /> },
    { id: "hidro", nome: "Hidrelétrica", nomeCompleto: "Hidrelétrica", icon: <Waves className="w-6 h-6 text-cyan-400" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Como Funciona Cada Tipo de Energia ⚡</h1>

      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {tiposDeEnergia.map((tipo) => (
          <button
            key={tipo.id}
            onClick={() => setEnergiaAtiva(tipo.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition ${
              energiaAtiva === tipo.id ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
            aria-pressed={energiaAtiva === tipo.id}
          >
            {tipo.icon}
            {tipo.nome}
          </button>
        ))}
      </div>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-3xl flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
        {energiaAtiva === "eolica" && <EolicaAnimacao />}
        {energiaAtiva === "solar" && <SolarAnimacao />}
        {energiaAtiva === "hidro" && <HidroAnimacao />}
      </div>
    </div>
  );
}

// Componente para a animação eólica
function EolicaAnimacao() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
      {/* Mastro */}
      <div className="w-3 h-40 bg-gray-500 rounded-full"></div>

      {/* Pás girando */}
      <motion.div
        className="absolute top-[35%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        aria-label="Pás de turbina eólica girando"
      >
        <div className="w-28 h-28 border-4 border-blue-400 rounded-full flex items-center justify-center">
          <div className="absolute w-2 h-16 bg-blue-300 rounded-full origin-bottom"></div>
          <div className="absolute w-2 h-16 bg-blue-300 rounded-full rotate-120 origin-bottom"></div>
          <div className="absolute w-2 h-16 bg-blue-300 rounded-full -rotate-120 origin-bottom"></div>
        </div>
      </motion.div>

      {/* Luz acendendo (energia gerada) */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Indicador de energia sendo gerada"
      >
        <Zap className="w-10 h-10 text-yellow-400" />
        <p className="text-sm text-gray-300">Energia sendo gerada</p>
      </motion.div>

      <p className="absolute bottom-2 text-sm opacity-70 text-center max-w-xs mt-4">
        O vento gira as pás da turbina, que movem um gerador e produzem eletricidade.
      </p>
    </div>
  );
}

// Componente para a animação solar
function SolarAnimacao() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-end p-4">
      {/* Sol girando */}
      <motion.div
        className="absolute top-10 left-1/2 -translate-x-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        aria-label="Sol girando"
      >
        <Sun className="w-20 h-20 text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]" />
      </motion.div>

      {/* Painel solar */}
      <div className="relative mt-28 w-48 h-16 bg-blue-500/60 rounded-lg border-2 border-blue-400 transform -skew-x-12" aria-label="Painel solar"></div>

      {/* Raios de energia */}
      <motion.div
        className="absolute top-24 w-2 h-24 bg-yellow-400 rounded-full"
        animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-label="Raios de energia solar"
      />

      {/* Lâmpada acendendo */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Indicador de energia sendo convertida"
      >
        <Zap className="w-10 h-10 text-yellow-400" />
        <p className="text-sm text-gray-300">Painel convertendo luz em energia</p>
      </motion.div>

      <p className="absolute bottom-2 text-sm opacity-70 text-center max-w-xs mt-4">
        A luz solar é convertida em energia elétrica através das células fotovoltaicas.
      </p>
    </div>
  );
}

// Componente para a animação hidrelétrica
function HidroAnimacao() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-end p-4">
      {/* Queda d’água */}
      <motion.div
        className="absolute top-0 w-32 h-48 bg-blue-500 rounded-t-lg overflow-hidden"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Queda d'água"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-700"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </motion.div>

      {/* Turbina girando */}
      <motion.div
        className="absolute bottom-24 w-20 h-20 border-4 border-cyan-400 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        aria-label="Turbina girando"
      />

      {/* Luz (energia gerada) */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Indicador de energia sendo gerada"
      >
        <Zap className="w-10 h-10 text-yellow-400" />
        <p className="text-sm text-gray-300">Turbina gerando energia</p>
      </motion.div>

      <p className="absolute bottom-2 text-sm opacity-70 text-center max-w-xs mt-4">
        A água movimenta as turbinas, que giram um gerador e produzem eletricidade.
      </p>
    </div>
  );
}


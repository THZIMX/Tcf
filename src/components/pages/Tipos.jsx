import { motion } from "framer-motion";
import { Sun, Wind, Waves, Zap } from "lucide-react";
import { useState } from "react";

export default function Energias() {
  const [energia, setEnergia] = useState("eolica");

  const botoes = [
    { id: "eolica", nome: "Eólica", icon: <Wind className="w-6 h-6 text-blue-400" /> },
    { id: "solar", nome: "Solar", icon: <Sun className="w-6 h-6 text-yellow-400" /> },
    { id: "hidro", nome: "Hidrelétrica", icon: <Waves className="w-6 h-6 text-cyan-400" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Como Funciona Cada Tipo de Energia ⚡</h1>

      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {botoes.map((b) => (
          <button
            key={b.id}
            onClick={() => setEnergia(b.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition ${
              energia === b.id ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {b.icon}
            {b.nome}
          </button>
        ))}
      </div>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-3xl flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
        {energia === "eolica" && <Eolica />}
        {energia === "solar" && <Solar />}
        {energia === "hidro" && <Hidro />}
      </div>
    </div>
  );
}

/* 🌬️ Energia EÓLICA */
function Eolica() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Mastro */}
      <div className="w-3 h-40 bg-gray-500 rounded-full"></div>

      {/* Pás girando */}
      <motion.div
        className="absolute top-[35%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
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
      >
        <Zap className="w-10 h-10 text-yellow-400" />
        <p className="text-sm text-gray-300">Energia sendo gerada</p>
      </motion.div>

      <p className="absolute bottom-2 text-sm opacity-70 text-center max-w-xs">
        O vento gira as pás da turbina, que movem um gerador e produzem eletricidade.
      </p>
    </div>
  );
}

/* ☀️ Energia SOLAR */
function Solar() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-end">
      {/* Sol girando */}
      <motion.div
        className="absolute top-10 left-1/2 -translate-x-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <Sun className="w-20 h-20 text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]" />
      </motion.div>

      {/* Painel solar */}
      <div className="relative mt-28 w-48 h-16 bg-blue-500/60 rounded-lg border-2 border-blue-400 transform -skew-x-12"></div>

      {/* Raios de energia */}
      <motion.div
        className="absolute top-24 w-2 h-24 bg-yellow-400 rounded-full"
        animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Lâmpada acendendo */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Zap className="w-10 h-10 text-yellow-400" />
        <p className="text-sm text-gray-300">Painel convertendo luz em energia</p>
      </motion.div>

      <p className="absolute bottom-2 text-sm opacity-70 text-center max-w-xs">
        A luz solar é convertida em energia elétrica através das células fotovoltaicas.
      </p>
    </div>
  );
}

/* 💧 Energia HIDRELÉTRICA */
function Hidro() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-end">
      {/* Queda d’água */}
      <motion.div
        className="absolute top-0 w-32 h-48 bg-blue-500 rounded-t-lg overflow-hidden"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
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
      />

      {/* Luz (energia gerada) */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Zap className="w-10 h-10 text-yellow-400" />
        <p className="text-sm text-gray-300">Turbina gerando energia</p>
      </motion.div>

      <p className="absolute bottom-2 text-sm opacity-70 text-center max-w-xs">
        A água movimenta as turbinas, que giram um gerador e produzem eletricidade.
      </p>
    </div>
  );
}

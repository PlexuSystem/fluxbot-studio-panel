import { TrainingStudio } from "@/components/training-studio";

export default function TrainingPage() {
  return (
    <div className="space-y-8">
      <header className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6c8b74]">Configuración del agente</p><h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">Entrenamiento, límites y prueba de alcance.</h1><p className="mt-4 leading-7 text-[#526a76]">Carga la configuración de un tenant autorizado antes de modificarla. Las credenciales no se guardan en el navegador.</p></header>
      <TrainingStudio />
    </div>
  );
}

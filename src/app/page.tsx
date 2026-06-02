import Link from "next/link";

export default function Home() {
  const items = [
    "Configurar propósito, temas permitidos y bloqueados.",
    "Auditar conversaciones y decisiones de política.",
    "Gestionar tenants, cuotas y entrenamiento.",
  ];

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm text-sky-200">
          Panel operativo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Gestiona la operativa del chatbot en un panel separado
        </h1>
        <p className="max-w-3xl text-slate-300">
          Este espacio está pensado para administración interna: entrenamiento, reglas,
          auditoría y control de clientes. La web pública de ventas vive en el frontend.
        </p>
      </section>

      <section className="card space-y-4">
        <h2 className="text-2xl font-semibold">Funciones principales</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 p-4 text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="card space-y-4">
        <h2 className="text-2xl font-semibold">Entrenamiento</h2>
        <p className="text-slate-300">
          Configura el alcance del bot, el fallback fuera de tema y el comportamiento de seguridad.
        </p>
        <Link href="/training" className="inline-block rounded-lg bg-sky-500 px-4 py-2 font-medium text-white hover:bg-sky-400">
          Abrir panel de entrenamiento
        </Link>
      </section>
    </div>
  );
}

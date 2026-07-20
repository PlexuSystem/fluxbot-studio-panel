import Link from "next/link";

const operatingAreas = [
  ["01", "Comercio Seguro ES", "Evidencia, políticas y revisión humana antes de afirmar algo sensible."],
  ["02", "Chat accesible", "Accesibilidad por teclado, foco y lectura asistida como criterio de salida."],
  ["03", "Catálogo autorreparable", "Convierte dudas recurrentes en propuestas que un equipo aprueba."],
  ["04", "Guardián de acciones", "Clasifica riesgos y exige aprobación antes de modificar el comercio."],
  ["05", "WhatsApp Commerce", "Mantiene contexto comercial sin perder trazabilidad ni consentimiento."],
  ["06", "Sales Lab", "Mide el efecto incremental de una conversación, no solo clics."],
];

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] bg-[#173b4d] px-7 py-11 text-white shadow-[0_26px_70px_rgba(23,59,77,0.22)] md:px-11 md:py-14">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#d9654b]/25 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f6bf73]">Centro de operaciones</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Convierte criterio comercial en una operación repetible.</h1>
            <p className="mt-4 max-w-2xl leading-7 text-[#d4e0e4]">Aquí se configura el agente, se revisan sus límites y se inspecciona la trazabilidad. Conecta una cuenta para empezar a ver datos reales.</p>
          </div>
          <Link href="/training" className="inline-flex h-fit items-center justify-center rounded-full bg-[#d9654b] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#bd5039]">Configurar agente</Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="card"><p className="text-sm font-semibold text-[#6c8b74]">Paso 1</p><h2 className="mt-3 text-xl font-semibold">Conecta una cuenta</h2><p className="mt-2 text-sm leading-6 text-[#526a76]">Introduce el tenant y una credencial de administración para cargar su configuración.</p><Link href="/training" className="mt-5 inline-flex text-sm font-semibold text-[#d9654b] hover:underline">Ir a entrenamiento →</Link></article>
        <article className="card"><p className="text-sm font-semibold text-[#6c8b74]">Paso 2</p><h2 className="mt-3 text-xl font-semibold">Define límites</h2><p className="mt-2 text-sm leading-6 text-[#526a76]">Revisa propósito, temas, dominios y cuotas antes de poner el agente a trabajar.</p><Link href="/training" className="mt-5 inline-flex text-sm font-semibold text-[#d9654b] hover:underline">Revisar políticas →</Link></article>
        <article className="card"><p className="text-sm font-semibold text-[#6c8b74]">Paso 3</p><h2 className="mt-3 text-xl font-semibold">Audita decisiones</h2><p className="mt-2 text-sm leading-6 text-[#526a76]">Consulta los eventos disponibles cuando la cuenta esté conectada; no mostramos métricas inventadas.</p><Link href="/audit" className="mt-5 inline-flex text-sm font-semibold text-[#d9654b] hover:underline">Abrir auditoría →</Link></article>
      </section>

      <section>
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6c8b74]">Hoja de ruta operativa</p><h2 className="mt-2 text-3xl font-semibold tracking-tight">Las seis capas que activaremos con datos y contratos.</h2></div><p className="text-sm text-[#526a76]">Planificado · no activo todavía</p></div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{operatingAreas.map(([number, title, detail]) => <article key={title} className="card group transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(23,59,77,0.12)]"><p className="text-sm font-semibold text-[#d9654b]">{number}</p><h3 className="mt-4 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#526a76]">{detail}</p><span className="mt-5 inline-flex rounded-full bg-[#f4f7f5] px-3 py-1 text-xs font-semibold text-[#526a76]">Requiere backend y contrato</span></article>)}</div>
      </section>
    </div>
  );
}

import Link from "next/link";

const areas = [
  ["Comercio Seguro ES", "12 respuestas sensibles pendientes de evidencia", "Revisar promesas"],
  ["Chat accesible", "La revisión de teclado está lista para validar", "Abrir auditoría"],
  ["Catálogo autorreparable", "4 mejoras propuestas desde conversaciones reales", "Revisar mejoras"],
  ["Guardian de acciones", "3 solicitudes esperan aprobación humana", "Ver aprobaciones"],
  ["WhatsApp Commerce", "Canal preparado para conectar cuando se apruebe el contrato", "Configurar canal"],
  ["Sales Lab", "Diseña el primer experimento antes de activar campañas", "Crear experimento"],
];

export default function Home() {
  return <div className="space-y-8">
    <section className="rounded-3xl bg-[#173b4d] px-7 py-10 text-white md:px-10"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f6bf73]">Centro de operaciones</p><div className="mt-4 flex flex-col justify-between gap-6 md:flex-row"><div><h1 className="text-4xl font-semibold tracking-tight">Haz que cada conversación mejore la siguiente venta.</h1><p className="mt-3 max-w-2xl text-[#d4e0e4]">Prioriza seguridad, conocimiento y decisiones comerciales. Las capacidades se activarán cuando sus contratos y datos estén listos.</p></div><Link href="/training" className="h-fit rounded-full bg-[#d9654b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#bd5039]">Configurar agente</Link></div></section>
    <section className="grid gap-4 md:grid-cols-3"><div className="card"><p className="text-sm text-[#526a76]">Estado del agente</p><p className="mt-2 text-3xl font-semibold">Protegido</p><p className="mt-2 text-sm text-[#426d50]">Las reglas activas requieren evidencia.</p></div><div className="card"><p className="text-sm text-[#526a76]">Próxima acción</p><p className="mt-2 text-xl font-semibold">Revisar 4 mejoras de catálogo</p><p className="mt-2 text-sm text-[#526a76]">Basadas en preguntas repetidas.</p></div><div className="card"><p className="text-sm text-[#526a76]">Principio operativo</p><p className="mt-2 text-xl font-semibold">Nada se publica sin aprobación.</p></div></section>
    <section><div className="mb-5 flex items-end justify-between"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6c8b74]">Las seis áreas de producto</p><h2 className="mt-2 text-3xl font-semibold tracking-tight">Decide qué activar después.</h2></div><span className="text-sm text-[#526a76]">Planificado · sin datos simulados</span></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{areas.map(([title, detail, action], index) => <article key={title} className="card"><span className="text-sm font-semibold text-[#d9654b]">0{index + 1}</span><h3 className="mt-4 text-xl font-semibold">{title}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-[#526a76]">{detail}</p><button type="button" className="mt-5 rounded-full border border-[#173b4d]/15 px-4 py-2 text-sm font-semibold text-[#173b4d] hover:bg-[#173b4d]/5">{action}</button></article>)}</div></section>
  </div>;
}

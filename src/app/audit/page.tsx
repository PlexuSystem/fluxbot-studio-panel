import { AuditStudio } from "@/components/audit-studio";

export default function AuditPage() {
  return <div className="space-y-8"><header className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6c8b74]">Trazabilidad</p><h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">Auditoría de operaciones.</h1><p className="mt-4 leading-7 text-[#526a76]">Consulta únicamente eventos que existen para la cuenta conectada. Si no hay datos, el panel lo indica de forma explícita.</p></header><AuditStudio /></div>;
}

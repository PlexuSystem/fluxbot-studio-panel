"use client";

import { FormEvent, useState } from "react";

type AuditRow = { id?: string; action?: string; createdAt?: string; [key: string]: unknown };

export function AuditStudio() {
  const [tenantId, setTenantId] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [rows, setRows] = useState<AuditRow[] | null>(null);
  const [status, setStatus] = useState("");

  const loadAudit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!tenantId.trim() || !adminKey.trim()) { setStatus("Introduce un tenant y una credencial de administración."); return; }
    setStatus("Cargando eventos…");
    const response = await fetch(`/api/v1/widget/admin/audit?tenantId=${encodeURIComponent(tenantId.trim())}&limit=50`, { headers: { "x-admin-key": adminKey } });
    if (!response.ok) { setRows(null); setStatus(`No fue posible cargar la auditoría (${response.status}).`); return; }
    const data = await response.json() as { rows?: AuditRow[] };
    setRows(data.rows ?? []);
    setStatus("");
  };

  return <section className="card"><form className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end" onSubmit={loadAudit}><label className="space-y-1"><span className="text-sm font-medium text-[#526a76]">Tenant ID</span><input value={tenantId} onChange={(event) => setTenantId(event.target.value)} className="w-full rounded-xl border border-[#173b4d]/15 bg-[#fffdf8] px-3 py-2.5" /></label><label className="space-y-1"><span className="text-sm font-medium text-[#526a76]">Credencial de administración</span><input type="password" value={adminKey} onChange={(event) => setAdminKey(event.target.value)} className="w-full rounded-xl border border-[#173b4d]/15 bg-[#fffdf8] px-3 py-2.5" /></label><button className="rounded-full bg-[#173b4d] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#264f63]">Cargar auditoría</button></form>{status ? <p className="mt-5 rounded-xl bg-[#fff1eb] p-4 text-sm text-[#6a463c]">{status}</p> : null}{rows ? rows.length === 0 ? <div className="mt-6 rounded-2xl border border-dashed border-[#173b4d]/20 p-8 text-center"><p className="font-semibold">Todavía no hay eventos para esta consulta.</p><p className="mt-2 text-sm text-[#526a76]">No se muestran datos de ejemplo.</p></div> : <ul className="mt-6 divide-y divide-[#173b4d]/10">{rows.map((row, index) => <li className="py-4 text-sm" key={row.id ?? index}><p className="font-semibold text-[#173b4d]">{row.action ?? "Evento de auditoría"}</p><p className="mt-1 text-[#526a76]">{row.createdAt ?? "Sin fecha disponible"}</p></li>)}</ul> : null}</section>;
}

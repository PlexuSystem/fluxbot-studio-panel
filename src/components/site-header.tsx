import Link from "next/link";

const navItems = [
  { href: "/", label: "Panel" },
  { href: "/training", label: "Entrenamiento" },
  { href: "/audit", label: "Auditoría" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-[#173b4d]/10 bg-[#fffdf8]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight text-[#173b4d]">
          FluxBot · Operaciones
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#526a76]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#d9654b]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

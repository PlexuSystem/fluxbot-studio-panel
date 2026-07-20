export function SiteFooter() {
  return (
    <footer className="border-t border-[#173b4d]/10 bg-[#fffdf8]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-[#526a76] md:px-10">
        <p>© {new Date().getFullYear()} Fluxbot Panel</p>
        <p>Gestión operativa, entrenamiento y auditoría del chatbot.</p>
      </div>
    </footer>
  );
}

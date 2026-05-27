export function Footer() {
  return (
    <footer className="border-t border-[#E0DDD8] px-6 md:px-12 lg:px-16 py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <span className="font-[family-name:var(--font-canela)] text-lg font-light tracking-widest text-[#111111]">Horst&Co</span>
        <p className="font-[family-name:var(--font-suisse)] text-[11px] text-[#888888]">© {new Date().getFullYear()} Horst&Co Arquitetura — São Paulo</p>
        <div className="flex gap-8">
          {["CAU/SP", "Instagram", "LinkedIn"].map(l => (
            <span key={l} className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.15em] text-[#888888] uppercase">{l}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

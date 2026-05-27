export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 md:px-12 lg:px-16 py-10"
      style={{ borderTop: "1px solid #E0DDD8" }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <span className="font-display text-lg font-light tracking-[0.15em] text-[#111111]">
          Horst&amp;Co
        </span>
        <p className="font-body text-[11px] text-[#888888]">
          © {year} Horst&amp;Co Arquitetura — São Paulo
        </p>
        <div className="flex gap-8">
          {["CAU/SP", "Instagram", "LinkedIn"].map((l) => (
            <span
              key={l}
              className="font-body text-[10px] tracking-[0.15em] text-[#888888] uppercase"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

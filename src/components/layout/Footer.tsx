import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="px-6 md:px-16 lg:px-20 py-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          href="/"
          className="font-body text-[11px] tracking-[0.22em] uppercase text-[var(--fg)] hover:opacity-40 transition-opacity duration-300"
        >
          Horst·Co
        </Link>
        <p className="font-body text-[11px] text-[var(--muted)] tracking-[0.04em]">
          © {new Date().getFullYear()} Horst·Co Arquitetura · São Paulo
        </p>
        <div className="flex gap-7">
          {["Instagram", "LinkedIn", "CAU/SP"].map((l) => (
            <a
              key={l}
              href="#"
              className="font-body text-[11px] tracking-[0.08em] text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

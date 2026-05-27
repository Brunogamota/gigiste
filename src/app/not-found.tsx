import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-8">
      <p className="font-body text-[10px] tracking-[0.25em] text-[#3A3A3A] uppercase mb-6">
        404
      </p>
      <h1 className="font-display text-6xl md:text-8xl font-light text-[#F2EFE8] tracking-[-0.05em] mb-6 text-center">
        Não encontrado.
      </h1>
      <p className="font-body text-[14px] font-light text-[#6B6B6B] mb-12 text-center">
        A página que você procura não existe ou foi movida.
      </p>
      <Link href="/" className="btn-premium">
        <span>Voltar ao início</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </main>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] flex flex-col items-center justify-center px-8">
      <p className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.25em] text-[#888888] uppercase mb-6">
        404
      </p>
      <h1 className="font-[family-name:var(--font-canela)] text-6xl md:text-8xl font-light text-[#111111] tracking-[-0.05em] mb-6 text-center">
        Não encontrado.
      </h1>
      <p className="font-[family-name:var(--font-suisse)] text-[14px] font-light text-[#888888] mb-12 text-center">
        A página que você procura não existe ou foi movida.
      </p>
      <Link href="/"
        className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.2em] uppercase text-[#111111] border-b border-[#111111] pb-1 hover:opacity-50 transition-opacity duration-300">
        Voltar ao início
      </Link>
    </main>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "#F8F7F4" }}
    >
      <p className="font-body text-[10px] tracking-[0.25em] text-[#888888] uppercase mb-6">
        404
      </p>
      <h1
        className="font-display font-light text-[#111111] tracking-[-0.04em] mb-6"
        style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
      >
        Não encontrado.
      </h1>
      <p className="font-body text-sm font-light text-[#888888] mb-12">
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="font-body text-[10px] tracking-[0.2em] uppercase text-[#111111] pb-1 hover:opacity-40 transition-opacity duration-300"
        style={{ borderBottom: "1px solid #111111" }}
      >
        Voltar ao início
      </Link>
    </main>
  );
}

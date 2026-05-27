"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-16 md:pt-20 min-h-screen flex flex-col md:flex-row">
      {/* Texto — left col */}
      <div className="flex flex-col justify-end px-6 md:px-12 lg:px-16 py-16 md:py-24 md:w-[42%] order-2 md:order-1">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}>
          <p className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.25em] text-[#888888] uppercase mb-8">
            Arquitetura Contemporânea — São Paulo
          </p>
          <h1 className="font-[family-name:var(--font-canela)] font-light text-[#111111] leading-[1.02] tracking-[-0.02em] mb-10"
            style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}>
            Arquitetura que<br />
            transforma espaço<br />
            <span className="italic text-[#888888]">em legado.</span>
          </h1>
          <div className="w-10 h-[1px] bg-[#E0DDD8] mb-8" />
          <p className="font-[family-name:var(--font-suisse)] text-[13px] font-light text-[#888888] leading-relaxed max-w-[300px]">
            Projetamos experiências arquitetônicas que unem permanência, estética e emoção.
          </p>
          <div className="mt-12">
            <a href="#projetos" className="inline-flex items-center gap-3 font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.2em] text-[#111111] uppercase border-b border-[#111111] pb-1 hover:opacity-50 transition-opacity duration-300">
              Ver projetos
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </motion.div>
      </div>
      {/* Imagem — right col */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative md:w-[58%] order-1 md:order-2"
        style={{ minHeight: "55vw" }}
      >
        <img
          src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=85"
          alt="Horst&Co Arquitetura"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}

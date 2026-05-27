"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="flex flex-col md:flex-row" style={{ paddingTop: "4rem", minHeight: "100svh" }}>
      {/* Image — shown first on mobile */}
      <motion.div
        className="relative w-full md:w-[58%] md:order-2 bg-[#E8E5E0]"
        style={{ minHeight: "56vw" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1400&q=85"
          alt="Horst&Co Arquitetura"
          className="w-full h-full object-cover"
          style={{ position: "absolute", inset: 0 }}
          fetchPriority="high"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className="flex flex-col justify-end w-full md:w-[42%] md:order-1 px-6 md:px-12 lg:px-16 py-14 md:py-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-body text-[10px] tracking-[0.25em] text-[#888888] uppercase mb-8">
          Arquitetura Contemporânea — São Paulo
        </p>

        <h1
          className="font-display font-light text-[#111111] leading-[1.05] tracking-[-0.02em] mb-8"
          style={{ fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)" }}
        >
          Arquitetura que<br />
          transforma espaço<br />
          <em className="not-italic italic text-[#888888]">em legado.</em>
        </h1>

        <div className="w-8 h-px bg-[#E0DDD8] mb-8" />

        <p className="font-body text-sm font-light text-[#888888] leading-relaxed" style={{ maxWidth: 280 }}>
          Projetamos experiências arquitetônicas que unem
          permanência, estética e emoção.
        </p>

        <div className="mt-10">
          <a
            href="#projetos"
            className="inline-flex items-center gap-3 font-body text-[10px] tracking-[0.2em] text-[#111111] uppercase border-b border-[#111111] pb-1 hover:opacity-40 transition-opacity duration-300"
          >
            Ver projetos
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden>
              <path d="M1 3.5h10M7.5 1l3 2.5-3 2.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

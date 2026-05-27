"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: 600 }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=2000&q=80"
          alt=""
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Multi-layer overlay for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,12,10,0.55) 0%, rgba(15,12,10,0.3) 40%, rgba(15,12,10,0.65) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between px-6 md:px-14 lg:px-20 py-28 md:py-32">
        {/* Top label */}
        <motion.p
          className="font-body text-[10px] tracking-[0.28em] uppercase"
          style={{ color: "rgba(247,245,242,0.5)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          Arquitetura Contemporânea — São Paulo
        </motion.p>

        {/* Main headline */}
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-3">
            <motion.h1
              className="font-display font-light leading-[1.0] tracking-[-0.03em]"
              style={{
                color: "#F7F5F2",
                fontSize: "clamp(2.8rem, 7vw, 7.5rem)",
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Espaços desenhados
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-3">
            <motion.h1
              className="font-display font-light leading-[1.0] tracking-[-0.03em] italic"
              style={{
                color: "rgba(247,245,242,0.6)",
                fontSize: "clamp(2.8rem, 7vw, 7.5rem)",
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              para permanecer.
            </motion.h1>
          </div>

          <motion.div
            className="mt-10 flex items-center gap-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
          >
            <div className="w-8 h-px" style={{ background: "rgba(247,245,242,0.35)" }} />
            <p
              className="font-body text-[11px] font-light leading-relaxed tracking-[0.04em]"
              style={{ color: "rgba(247,245,242,0.5)", maxWidth: 300 }}
            >
              Horst&amp;Co — projetando experiências arquitetônicas desde 2010.
            </p>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          className="flex items-end justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <a
            href="#projetos"
            className="group flex items-center gap-3 font-body text-[10px] tracking-[0.22em] uppercase transition-opacity duration-300 hover:opacity-60"
            style={{ color: "rgba(247,245,242,0.7)" }}
          >
            Ver projetos
            <svg width="28" height="1" viewBox="0 0 28 1" fill="none" aria-hidden>
              <line x1="0" y1="0.5" x2="28" y2="0.5" stroke="currentColor" strokeOpacity="0.6" />
            </svg>
          </a>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-px overflow-hidden"
              style={{ height: 40, background: "rgba(247,245,242,0.15)" }}
            >
              <motion.div
                className="w-full h-full"
                style={{ background: "rgba(247,245,242,0.5)" }}
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span
              className="font-body text-[9px] tracking-[0.2em] uppercase"
              style={{ color: "rgba(247,245,242,0.35)", writingMode: "vertical-rl" }}
            >
              Scroll
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

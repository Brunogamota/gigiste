"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section>
      {/* Full-bleed image — Norm-style: image is EVERYTHING */}
      <motion.div
        className="relative w-full overflow-hidden bg-[#D4CFC9]"
        style={{ height: "88svh", minHeight: 480 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=2400&q=85"
          alt="Horst·Co — Arquitetura Contemporânea"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Very subtle top gradient — ensures white nav text is readable */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: 140,
            background: "linear-gradient(to bottom, rgba(15,14,12,0.32) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Caption below image — Norm signature */}
      <motion.div
        className="flex items-center justify-between px-6 md:px-16 lg:px-20 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">
          Arquitetura Contemporânea — São Paulo
        </span>
        <span className="font-body text-[10px] tracking-[0.14em] text-[var(--muted)]">
          Est. 2010
        </span>
      </motion.div>
    </section>
  );
}

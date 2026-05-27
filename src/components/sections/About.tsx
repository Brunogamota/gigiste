"use client";
import { motion } from "framer-motion";

const stats = [
  { n: "14", label: "Anos" },
  { n: "87", label: "Projetos" },
  { n: "12", label: "Prêmios" },
  { n: "4", label: "Países" },
];

export function About() {
  return (
    <section id="sobre" className="border-t border-[#E0DDD8] px-6 md:px-12 lg:px-16 py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }} viewport={{ once: true }}
          >
            <p className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.25em] text-[#888888] uppercase mb-10">
              Sobre
            </p>
            <h2 className="font-[family-name:var(--font-canela)] font-light text-[#111111] leading-[1.1] tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Acreditamos que a<br />arquitetura é o único campo<br />
              <span className="italic text-[#888888]">onde arte encontra necessidade.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22,1,0.36,1] }} viewport={{ once: true }}
            className="flex flex-col justify-between h-full gap-12"
          >
            <p className="font-[family-name:var(--font-suisse)] text-[13px] font-light text-[#888888] leading-relaxed">
              Fundado em 2010 por Rafael Andrade e Marina Sotto, o Horst&Co é um escritório de arquitetura contemporânea com sede em São Paulo. Nossa prática é construída sobre a escuta radical do lugar, do cliente e do tempo.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-[#E0DDD8]">
              {stats.map(s => (
                <div key={s.label}>
                  <div className="font-[family-name:var(--font-canela)] text-4xl font-light text-[#111111]">{s.n}</div>
                  <div className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.15em] text-[#888888] uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

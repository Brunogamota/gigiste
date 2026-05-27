"use client";

import { motion } from "framer-motion";

const stats = [
  { n: "14", label: "Anos de prática" },
  { n: "87", label: "Projetos realizados" },
  { n: "12", label: "Prêmios nacionais" },
  { n: "4", label: "Países de atuação" },
];

export function About() {
  return (
    <section
      id="sobre"
      className="px-6 md:px-12 lg:px-16 py-24 md:py-36"
      style={{ borderTop: "1px solid #E0DDD8" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-[10px] tracking-[0.25em] text-[#888888] uppercase mb-10">
              Sobre
            </p>
            <h2
              className="font-display font-light text-[#111111] leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 3.5rem)" }}
            >
              Acreditamos que a arquitetura é o único campo onde arte encontra{" "}
              <span className="italic text-[#888888]">necessidade.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between gap-12"
          >
            <p className="font-body text-sm font-light text-[#888888] leading-relaxed">
              Fundado em 2010 por Rafael Andrade e Marina Sotto, o Horst&amp;Co
              é um escritório de arquitetura contemporânea com sede em São Paulo.
              Nossa prática é construída sobre a escuta radical do lugar, do
              cliente e do tempo.
            </p>

            <div
              className="grid grid-cols-2 gap-8 pt-8"
              style={{ borderTop: "1px solid #E0DDD8" }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="font-display font-light text-[#111111]"
                    style={{ fontSize: "2.5rem", lineHeight: 1 }}
                  >
                    {s.n}
                  </div>
                  <div className="font-body text-[10px] tracking-[0.12em] text-[#888888] uppercase mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

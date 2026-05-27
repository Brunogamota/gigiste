"use client";

import { motion } from "framer-motion";

export function Studio() {
  return (
    <section
      id="estudio"
      className="px-6 md:px-16 lg:px-20 py-24 md:py-36"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-12 md:gap-16">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-[var(--muted)]">
            Estúdio
          </p>
        </motion.div>

        {/* Column 1 */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-[13px] font-light text-[var(--fg)] leading-[1.75] mb-6">
            Horst·Co é um escritório de arquitetura contemporânea fundado em 2010 por
            Rafael Andrade e Marina Sotto. Sede em São Paulo, Brasil.
          </p>
          <p className="font-body text-[13px] font-light text-[var(--muted)] leading-[1.75]">
            Nossa prática é construída sobre a escuta radical do lugar, do cliente
            e do tempo. Não seguimos tendências — seguimos a essência de cada projeto.
          </p>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-[13px] font-light text-[var(--muted)] leading-[1.75] mb-8">
            Após anos de prática em escritórios de referência em São Paulo, Nova York e
            Copenhague, a equipe de 18 profissionais do Horst·Co continua comprometida
            com um único ideal: a permanência através da precisão.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {[
              { n: "14", l: "Anos" },
              { n: "87", l: "Projetos" },
              { n: "12", l: "Prêmios" },
              { n: "4", l: "Países" },
            ].map((s) => (
              <div key={s.l}>
                <p
                  className="font-display font-light text-[var(--fg)] leading-none mb-1"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
                >
                  {s.n}
                </p>
                <p className="font-body text-[10px] tracking-[0.12em] text-[var(--muted)] uppercase">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

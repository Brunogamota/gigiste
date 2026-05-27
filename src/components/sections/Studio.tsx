"use client";

import { motion } from "framer-motion";

export function Studio() {
  return (
    <section
      className="px-6 md:px-14 lg:px-20 py-28 md:py-40"
      style={{ background: "#F0EDE8", borderTop: "1px solid #DEDAD4" }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-[10px] tracking-[0.25em] text-[#8A867F] uppercase mb-10">
              Estúdio
            </p>
            <h2
              className="font-display font-light text-[#0C0C0B] leading-[1.1] tracking-[-0.025em] mb-8"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)" }}
            >
              Fundado em 2010, o Horst&amp;Co é um escritório com{" "}
              <span className="italic text-[#8A867F]">identidade singular.</span>
            </h2>
            <p className="font-body text-sm font-light text-[#8A867F] leading-relaxed mb-6">
              Com sede em São Paulo, nossa prática é construída sobre a escuta
              radical do lugar, do cliente e do tempo. Não seguimos tendências —
              seguimos a essência de cada projeto.
            </p>
            <p className="font-body text-sm font-light text-[#8A867F] leading-relaxed">
              Rafael Andrade e Marina Sotto fundaram o estúdio após anos de prática
              em escritórios de referência em São Paulo, Nova York e Copenhague.
              Hoje a equipe conta com 18 profissionais comprometidos com a excelência.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between gap-12"
          >
            {/* Team image */}
            <div
              className="relative overflow-hidden bg-[#D8D3CC]"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                alt="Equipe Horst&Co"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Recognition */}
            <div
              className="grid grid-cols-2 gap-6 pt-8"
              style={{ borderTop: "1px solid #D4D0CB" }}
            >
              {[
                { n: "4", label: "Países de atuação" },
                { n: "18", label: "Profissionais" },
                { n: "12", label: "Prêmios" },
                { n: "87", label: "Projetos concluídos" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-display font-light text-[#0C0C0B] leading-none mb-1.5"
                    style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}
                  >
                    {s.n}
                  </div>
                  <p className="font-body text-[10px] tracking-[0.12em] text-[#8A867F] uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

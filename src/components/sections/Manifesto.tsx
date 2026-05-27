"use client";

import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section
      className="px-6 md:px-14 lg:px-20 py-28 md:py-44"
      style={{ borderBottom: "1px solid #DEDAD4" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-[10px] tracking-[0.25em] text-[#8A867F] uppercase">
              Manifesto
            </p>
          </motion.div>

          <div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display font-light text-[#0C0C0B] leading-[1.15] tracking-[-0.025em]"
                style={{ fontSize: "clamp(1.7rem, 3.2vw, 3.2rem)" }}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                Não construímos espaços.
                <br />
                <span className="italic text-[#8A867F]">
                  Construímos o silêncio entre as paredes,
                </span>
                <br />
                a luz que atravessa o concreto,
                <br />
                <span className="italic text-[#8A867F]">
                  o tempo depositado sobre a pedra.
                </span>
              </motion.h2>
            </div>

            <motion.div
              className="mt-10 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8"
              style={{ borderTop: "1px solid #DEDAD4" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { n: "14", label: "Anos de prática" },
                { n: "87", label: "Projetos realizados" },
                { n: "12", label: "Prêmios nacionais" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-display font-light text-[#0C0C0B] leading-none mb-2"
                    style={{ fontSize: "clamp(2.2rem, 3.5vw, 3rem)" }}
                  >
                    {s.n}
                  </div>
                  <p className="font-body text-[10px] tracking-[0.14em] text-[#8A867F] uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

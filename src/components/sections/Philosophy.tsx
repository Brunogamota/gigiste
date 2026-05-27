"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section
      id="sobre"
      className="px-6 md:px-14 lg:px-20 py-28 md:py-44"
      style={{ background: "#F0EDE8" }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden bg-[#D8D3CC]"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80"
              alt="Estúdio Horst&Co"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              className="font-body text-[10px] tracking-[0.25em] text-[#8A867F] uppercase mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Filosofia
            </motion.p>

            <motion.h2
              className="font-display font-light text-[#0C0C0B] leading-[1.12] tracking-[-0.025em] mb-8"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Cada projeto começa com{" "}
              <em className="italic text-[#8A867F]">uma escuta radical</em>{" "}
              — do lugar, do cliente, do silêncio que existe antes de qualquer forma.
            </motion.h2>

            <motion.div
              className="space-y-6 mt-10 pt-10"
              style={{ borderTop: "1px solid #D4D0CB" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                {
                  title: "Permanência",
                  text: "Projetamos para resistir ao tempo. Materiais honestos, formas atemporais, espaços que envelhecem com dignidade.",
                },
                {
                  title: "Precisão",
                  text: "Cada detalhe é intencional. O encontro entre duas superfícies, a espessura de uma junta, a direção de uma sombra.",
                },
                {
                  title: "Presença",
                  text: "Arquitetura que se faz sentir antes de ser compreendida. Espaços que criam emoção, não apenas função.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div
                    className="w-px flex-shrink-0 mt-1"
                    style={{ height: "auto", background: "#D4D0CB", minHeight: 40 }}
                  />
                  <div>
                    <p className="font-body text-[10px] tracking-[0.14em] text-[#8A867F] uppercase mb-1.5">
                      {item.title}
                    </p>
                    <p className="font-body text-sm font-light text-[#8A867F] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

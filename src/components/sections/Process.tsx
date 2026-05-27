"use client";

import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Escuta", text: "Imersão no contexto, no lugar e no cliente. Visitas, análise e conversas profundas antes de qualquer forma." },
  { n: "02", title: "Conceito", text: "Desenvolvimento do partido arquitetônico. A narrativa espacial e material que guiará todo o projeto." },
  { n: "03", title: "Projeto", text: "Detalhamento técnico completo, especificações e coordenação com engenharia estrutural e instalações." },
  { n: "04", title: "Obra", text: "Supervisão técnica continuada. Presença constante para garantir fidelidade ao projeto original." },
];

export function Process() {
  return (
    <section
      id="processo"
      className="px-6 md:px-16 lg:px-20 py-24 md:py-36"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-[var(--muted)]">
            Processo
          </p>
        </motion.div>

        <div>
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="flex gap-10 py-7"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <span className="font-body text-[10px] tracking-[0.1em] text-[var(--border)] pt-0.5 flex-shrink-0 w-6">
                {step.n}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 flex-1">
                <h3
                  className="font-display font-light text-[var(--fg)] leading-tight flex-shrink-0"
                  style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", minWidth: "8rem" }}
                >
                  {step.title}
                </h3>
                <p className="font-body text-[13px] font-light text-[var(--muted)] leading-[1.7] mt-2 sm:mt-0">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

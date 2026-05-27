"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Escuta & Diagnóstico",
    duration: "2–4 semanas",
    text: "Imersão no contexto do cliente, do lugar e do programa. Visitas, análise e conversas.",
  },
  {
    n: "02",
    title: "Conceito & Narrativa",
    duration: "3–6 semanas",
    text: "Desenvolvimento do partido arquitetônico e da narrativa espacial e material do projeto.",
  },
  {
    n: "03",
    title: "Projeto Executivo",
    duration: "8–16 semanas",
    text: "Detalhamento técnico completo, especificações e coordenação com engenharia.",
  },
  {
    n: "04",
    title: "Obra & Acompanhamento",
    duration: "Conforme cronograma",
    text: "Supervisão técnica continuada. Presença constante para garantir fidelidade ao projeto.",
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="px-6 md:px-12 lg:px-16 py-24 md:py-36"
      style={{ borderTop: "1px solid #E0DDD8" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="font-body text-[10px] tracking-[0.25em] text-[#888888] uppercase mb-16">
          Processo
        </p>

        <div>
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 py-8"
              style={{
                gridTemplateColumns: "2.5rem 1fr",
                borderBottom: "1px solid #E0DDD8",
              }}
            >
              <span className="font-body text-[11px] tracking-[0.1em] text-[#888888] pt-1">
                {step.n}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <h3
                    className="font-display font-light text-[#111111] leading-tight mb-2"
                    style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body text-sm font-light text-[#888888] leading-relaxed max-w-lg">
                    {step.text}
                  </p>
                </div>
                <p className="font-body text-[11px] text-[#888888] sm:text-right sm:flex-shrink-0 sm:ml-8 sm:pt-1">
                  {step.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

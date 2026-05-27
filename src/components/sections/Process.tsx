"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Escuta & Diagnóstico",
    duration: "2–4 semanas",
    text: "Imersão no contexto do cliente, do lugar e do programa. Visitas, análise e conversas profundas.",
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
    text: "Detalhamento técnico completo, especificações e coordenação com engenharia estrutural e instalações.",
  },
  {
    n: "04",
    title: "Obra & Acompanhamento",
    duration: "Conforme cronograma",
    text: "Supervisão técnica continuada. Presença constante para garantir fidelidade ao projeto original.",
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="px-6 md:px-14 lg:px-20 py-28 md:py-40"
      style={{ borderTop: "1px solid #DEDAD4" }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 md:gap-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-[10px] tracking-[0.25em] text-[#8A867F] uppercase mb-6">
              Processo
            </p>
            <p className="font-body text-sm font-light text-[#8A867F] leading-relaxed">
              Um método construído ao longo de 14 anos de prática arquitetônica rigorosa.
            </p>
          </motion.div>

          <div>
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-4 py-8"
                style={{
                  gridTemplateColumns: "2.5rem 1fr",
                  borderBottom: "1px solid #DEDAD4",
                }}
              >
                <span className="font-body text-[11px] tracking-[0.08em] text-[#C4BFB9] pt-1">
                  {step.n}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1">
                    <h3
                      className="font-display font-light text-[#0C0C0B] leading-tight mb-3"
                      style={{ fontSize: "clamp(1.2rem, 2.4vw, 1.65rem)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="font-body text-sm font-light text-[#8A867F] leading-relaxed max-w-lg">
                      {step.text}
                    </p>
                  </div>
                  <p className="font-body text-[10px] tracking-[0.06em] text-[#C4BFB9] sm:text-right sm:flex-shrink-0 sm:ml-8 sm:mt-1 whitespace-nowrap">
                    {step.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

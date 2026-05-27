"use client";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Escuta & Diagnóstico", duration: "2–4 semanas", text: "Imersão completa no contexto do cliente, do lugar e do programa." },
  { n: "02", title: "Conceito & Narrativa", duration: "3–6 semanas", text: "Desenvolvimento do partido arquitetônico e da narrativa do projeto." },
  { n: "03", title: "Projeto Executivo", duration: "8–16 semanas", text: "Detalhamento técnico completo com coordenação de engenharia." },
  { n: "04", title: "Obra & Acompanhamento", duration: "Conforme cronograma", text: "Supervisão técnica continuada durante toda a construção." },
];

export function Process() {
  return (
    <section id="processo" className="border-t border-[#E0DDD8] px-6 md:px-12 lg:px-16 py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.25em] text-[#888888] uppercase mb-16">Processo</p>
        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }} viewport={{ once: true }}
              className="grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4rem_1fr_12rem] gap-6 md:gap-12 py-8 border-b border-[#E0DDD8] items-start"
            >
              <span className="font-[family-name:var(--font-suisse)] text-[11px] tracking-[0.1em] text-[#888888] pt-1">{step.n}</span>
              <div>
                <h3 className="font-[family-name:var(--font-canela)] text-2xl md:text-3xl font-light text-[#111111] leading-tight mb-2">{step.title}</h3>
                <p className="font-[family-name:var(--font-suisse)] text-[13px] font-light text-[#888888] leading-relaxed">{step.text}</p>
              </div>
              <p className="font-[family-name:var(--font-suisse)] text-[11px] text-[#888888] text-right pt-1">{step.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

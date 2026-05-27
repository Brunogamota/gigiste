"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    index: "01",
    phase: "Escuta & Diagnóstico",
    duration: "2-4 semanas",
    description:
      "Imersão completa no contexto do cliente, do lugar e do programa. Conversas profundas. Visitas. Análise do território e da memória.",
    detail:
      "Nenhum projeto começa na prancha. Começa na escuta. Visitamos o lugar em diferentes horas do dia, observamos a luz, o vento, a relação com o entorno.",
  },
  {
    index: "02",
    phase: "Conceito & Narrativa",
    duration: "3-6 semanas",
    description:
      "Desenvolvimento do partido arquitetônico e da narrativa do projeto. Definição da lógica espacial e material.",
    detail:
      "O conceito não é uma ideia bonita. É a resposta mais precisa às perguntas levantadas na fase anterior. É o fio que costura todas as decisões subsequentes.",
  },
  {
    index: "03",
    phase: "Projeto Executivo",
    duration: "8-16 semanas",
    description:
      "Detalhamento técnico completo. Especificações de materiais. Coordenação com engenharia estrutural e instalações.",
    detail:
      "A poesia precisa de rigor técnico para existir no mundo. Esta fase é onde a ideia se torna realidade construtiva, com toda a precisão que isso exige.",
  },
  {
    index: "04",
    phase: "Obra & Acompanhamento",
    duration: "Conforme cronograma",
    description:
      "Supervisão técnica continuada durante toda a construção. Presença nas visitas de obra. Soluções in loco para imprevistos.",
    detail:
      "Não entregamos projetos. Entregamos obras. Permanecemos ao lado do cliente e da equipe de construção do início ao fim, garantindo fidelidade ao projeto.",
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const { ref, isVisible } = useReveal({ threshold: 0.1 });
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressLine = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      id="processo"
      ref={containerRef}
      className="relative bg-[#0A0A0A] overflow-hidden"
    >
      {/* Top divider */}
      <div className="h-[1px] bg-[rgba(42,42,42,0.6)]" />

      <div className="px-8 md:px-14 py-32 md:py-48">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-end"
        >
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="font-body text-[9px] tracking-[0.25em] text-[#3A3A3A] uppercase">
                Como trabalhamos
              </span>
              <div className="w-8 h-[1px] bg-[#3A3A3A]" />
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isVisible ? { y: 0 } : {}}
                transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
                className="font-display font-light text-[#F2EFE8] tracking-[-0.04em] leading-[0.95]"
                style={{ fontSize: "clamp(3rem, 7vw, 7.5rem)" }}
              >
                Processo
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-[14px] font-light text-[#6B6B6B] leading-relaxed max-w-md"
          >
            Cada projeto é único e segue seu próprio ritmo. Mas todos compartilham
            a mesma rigorosa metodologia de escuta, invenção e execução.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Steps list */}
          <div className="lg:col-span-2 space-y-0">
            {steps.map((step, i) => (
              <motion.button
                key={step.index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                viewport={{ once: true }}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left px-0 py-8 border-b transition-all duration-500 group ${
                  activeStep === i
                    ? "border-[rgba(107,107,107,0.4)]"
                    : "border-[rgba(42,42,42,0.4)] hover:border-[rgba(107,107,107,0.2)]"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span
                    className={`font-body text-[10px] tracking-[0.2em] mt-1 transition-colors duration-300 ${
                      activeStep === i ? "text-[#9A9A9A]" : "text-[#3A3A3A]"
                    }`}
                  >
                    {step.index}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`font-display text-xl md:text-2xl font-light tracking-[-0.02em] transition-colors duration-300 ${
                          activeStep === i ? "text-[#F2EFE8]" : "text-[#6B6B6B] group-hover:text-[#C8C8C8]"
                        }`}
                      >
                        {step.phase}
                      </h3>
                      <motion.div
                        animate={{ rotate: activeStep === i ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex-shrink-0 transition-colors duration-300 ${
                          activeStep === i ? "text-[#9A9A9A]" : "text-[#3A3A3A]"
                        }`}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                        </svg>
                      </motion.div>
                    </div>
                    <p className="font-body text-[11px] tracking-[0.1em] text-[#3A3A3A]">
                      {step.duration}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3 lg:pl-20 pt-12 lg:pt-0 flex items-start lg:items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              >
                <span className="font-body text-[10px] tracking-[0.25em] text-[#3A3A3A] uppercase mb-8 block">
                  Fase {steps[activeStep].index}
                </span>
                <h3 className="font-display text-4xl md:text-5xl font-light text-[#F2EFE8] tracking-[-0.04em] leading-[1.05] mb-8">
                  {steps[activeStep].phase}
                </h3>
                <p className="font-body text-[15px] font-light text-[#9A9A9A] leading-relaxed mb-6 max-w-md">
                  {steps[activeStep].description}
                </p>
                <p className="font-body text-[13px] font-light italic text-[#6B6B6B] leading-relaxed max-w-md border-l border-[rgba(42,42,42,0.6)] pl-6">
                  {steps[activeStep].detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    text: "O Horst&Co não apenas construiu nossa casa — criou o espaço onde nossa família vai crescer e criar memórias por décadas. É impossível entrar nela sem sentir algo profundo.",
    author: "Luisa & Marcos Figueiredo",
    project: "Casa Caetetuba — Ubatuba, SP",
    year: "2024",
  },
  {
    text: "Trabalhar com o Rafael e a Marina foi uma experiência transformadora. Eles entenderam nossa empresa melhor do que nós mesmos. O resultado é um espaço que atrai talentos.",
    author: "Fernanda Torres",
    project: "Sede VELA — Rio de Janeiro, RJ",
    year: "2022",
  },
  {
    text: "A Capella Serrana superou tudo que imaginamos. A luz às 15h de um domingo de verão é simplesmente transcendente. É uma obra de arte que serve ao sagrado.",
    author: "Dom Paulo Rezende",
    project: "Capella Serrana — Campos do Jordão, SP",
    year: "2022",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative bg-[#111111] px-8 md:px-14 py-32 md:py-48 overflow-hidden"
    >
      {/* Background large quote mark */}
      <div
        className="absolute top-12 left-8 md:left-14 font-display text-[20rem] text-[rgba(42,42,42,0.3)] leading-none select-none pointer-events-none"
        aria-hidden
      >
        "
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="font-body text-[9px] tracking-[0.25em] text-[#3A3A3A] uppercase">
            Depoimentos
          </span>
          <div className="w-8 h-[1px] bg-[#3A3A3A]" />
        </motion.div>

        {/* Testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            <blockquote className="font-display font-light text-[#C8C8C8] leading-[1.25] tracking-[-0.02em] mb-12"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              "{testimonials[current].text}"
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div className="w-12 h-[1px] bg-[#3A3A3A]" />
              <div>
                <p className="font-body text-[13px] font-light text-[#9A9A9A]">
                  {testimonials[current].author}
                </p>
                <p className="font-body text-[11px] tracking-[0.08em] text-[#6B6B6B]">
                  {testimonials[current].project}
                </p>
              </div>
              <div className="sm:ml-auto">
                <span className="font-body text-[10px] tracking-[0.15em] text-[#3A3A3A]">
                  {testimonials[current].year}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center gap-6 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group flex items-center gap-2"
            >
              <motion.div
                animate={{
                  width: i === current ? 32 : 8,
                  background: i === current ? "#9A9A9A" : "#3A3A3A",
                }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="h-[1px]"
              />
              <span
                className={`font-body text-[10px] tracking-[0.15em] transition-colors duration-300 ${
                  i === current ? "text-[#9A9A9A]" : "text-[#3A3A3A] group-hover:text-[#6B6B6B]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "O Horst&Co não projetou apenas nossa casa. Projetou uma forma de viver que não sabíamos que precisávamos.",
    author: "Ana e Paulo Ribeiro",
    project: "Casa Caetetuba, Ubatuba",
  },
  {
    quote:
      "Trabalhar com o Rafael e a Marina é uma experiência de confiança total. Eles escutam de uma forma que poucos arquitetos sabem fazer.",
    author: "Eduardo Monteiro",
    project: "Instituto Horizonte, São Paulo",
  },
  {
    quote:
      "A Vila Minerva é mais do que uma casa. É um argumento sobre como uma família pode habitar o espaço com elegância e generosidade.",
    author: "Família Alves Costa",
    project: "Vila Minerva, Brasília",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="px-6 md:px-14 lg:px-20 py-28 md:py-40"
      style={{ borderTop: "1px solid #DEDAD4" }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-[10px] tracking-[0.25em] text-[#8A867F] uppercase mb-8">
              Clientes
            </p>
            {/* Navigation dots */}
            <div className="flex flex-row lg:flex-col gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-2 group"
                  aria-label={`Depoimento ${i + 1}`}
                >
                  <span
                    className="block h-px transition-all duration-400"
                    style={{
                      width: active === i ? 24 : 12,
                      background: active === i ? "#0C0C0B" : "#DEDAD4",
                      transitionDuration: "400ms",
                    }}
                  />
                  <span
                    className="font-body text-[10px] tracking-[0.08em] transition-colors duration-300"
                    style={{ color: active === i ? "#0C0C0B" : "#C4BFB9" }}
                  >
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="relative" style={{ minHeight: 220 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote
                  className="font-display font-light text-[#0C0C0B] leading-[1.2] tracking-[-0.02em] mb-8"
                  style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)" }}
                >
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-[#DEDAD4]" />
                  <div>
                    <p className="font-body text-sm font-light text-[#0C0C0B]">
                      {testimonials[active].author}
                    </p>
                    <p className="font-body text-[11px] text-[#8A867F] mt-0.5">
                      {testimonials[active].project}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

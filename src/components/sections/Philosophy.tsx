"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

export function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);

  return (
    <section
      id="filosofia"
      ref={containerRef}
      className="relative overflow-hidden bg-[#0A0A0A]"
    >
      {/* Full-width image with text overlay */}
      <div className="relative h-[80vh] md:h-screen overflow-hidden">
        <motion.div className="absolute inset-0 scale-110" style={{ y: imageY }}>
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
            alt="Arquitetura FORMA"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[rgba(10,10,10,0.65)]" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(10,10,10,0.8) 0%, transparent 60%, rgba(10,10,10,0.4) 100%)",
          }}
        />

        {/* Overlaid text */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="absolute inset-0 flex flex-col justify-center px-8 md:px-14 lg:px-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="font-body text-[9px] tracking-[0.25em] text-[#6B6B6B] uppercase">
              Filosofia
            </span>
            <div className="w-8 h-[1px] bg-[#3A3A3A]" />
          </motion.div>

          <div className="max-w-3xl">
            {[
              "Não construímos para o",
              "presente. Construímos",
              "para o tempo.",
            ].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.p
                  initial={{ y: "110%" }}
                  animate={isVisible ? { y: 0 } : {}}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.12,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className={`font-display font-light leading-[1.05] tracking-[-0.04em] ${
                    i === 2 ? "italic text-[#9A9A9A]" : "text-[#F2EFE8]"
                  }`}
                  style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)" }}
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Principles section */}
      <div className="px-8 md:px-14 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
          >
            <p className="font-body text-[9px] tracking-[0.25em] text-[#3A3A3A] uppercase mb-8">
              Nossa abordagem
            </p>
            <div className="space-y-8">
              {[
                {
                  n: "01",
                  title: "Escuta Radical",
                  text: "Antes de qualquer traço, escutamos. O cliente, o lugar, a história, o clima. O projeto emerge dessa escuta.",
                },
                {
                  n: "02",
                  title: "Materialidade Honesta",
                  text: "Cada material é escolhido pelo que é, não pelo que aparenta. O concreto envelhece como concreto. A madeira como madeira.",
                },
                {
                  n: "03",
                  title: "Luz como Matéria",
                  text: "A luz não ilumina o espaço — ela o constitui. Cada projeto é, antes de tudo, um estudo de luz.",
                },
                {
                  n: "04",
                  title: "Tempo como Programa",
                  text: "Projetamos para como os espaços serão vividos daqui a 20, 50, 100 anos. A arquitetura deve melhorar com o tempo.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                  viewport={{ once: true }}
                  className="group flex gap-6 pb-8 border-b border-[rgba(42,42,42,0.4)] last:border-0 hover:border-[rgba(107,107,107,0.3)] transition-colors duration-500"
                >
                  <span className="font-body text-[10px] tracking-[0.15em] text-[#3A3A3A] mt-1 flex-shrink-0">
                    {item.n}
                  </span>
                  <div>
                    <h4 className="font-display text-xl font-light text-[#C8C8C8] tracking-[-0.01em] mb-2 group-hover:text-[#F2EFE8] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="font-body text-[13px] font-light text-[#6B6B6B] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right image stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-[4/3] overflow-hidden border-4 border-[#0A0A0A]">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80"
                alt="Detalhe"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

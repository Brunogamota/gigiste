"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

export function Manifesto() {
  const containerRef = useRef<HTMLElement>(null);
  const { ref: titleRef, isVisible: titleVisible } = useReveal({ threshold: 0.2 });
  const { ref: textRef, isVisible: textVisible } = useReveal({ threshold: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  const sentences = [
    "Acreditamos que a arquitetura é o único",
    "campo onde a arte encontra a necessidade.",
  ];

  const manifestoText = [
    {
      index: "I",
      title: "Permanência",
      text: "Cada projeto nasce da pergunta: o que restará daqui a cem anos? Construímos para o tempo, não para a aprovação imediata.",
    },
    {
      index: "II",
      title: "Emoção",
      text: "Espaços são memórias antes de serem plantas. Projetamos experiências que o corpo guarda antes que a mente processe.",
    },
    {
      index: "III",
      title: "Integridade",
      text: "Nenhum material é traído. O concreto envelhece como concreto. O aço oxida como aço. A beleza vem da honestidade construtiva.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative px-8 md:px-14 py-32 md:py-48 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(200,200,200,0.5) 79px, rgba(200,200,200,0.5) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(200,200,200,0.5) 79px, rgba(200,200,200,0.5) 80px)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Section label */}
        <motion.div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, x: -20 }}
          animate={titleVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="font-body text-[9px] tracking-[0.25em] text-[#3A3A3A] uppercase">
            Manifesto — 2010
          </span>
          <div className="flex-1 h-[1px] bg-[rgba(42,42,42,0.6)]" />
        </motion.div>

        {/* Main quote */}
        <div className="mb-24 md:mb-36">
          {sentences.map((sentence, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                initial={{ y: "110%", opacity: 0 }}
                animate={titleVisible ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 1.2,
                  delay: i * 0.15,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="font-display font-light text-[#F2EFE8] leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)" }}
              >
                {sentence}
              </motion.p>
            </div>
          ))}
          <div className="overflow-hidden mt-2">
            <motion.p
              initial={{ y: "110%", opacity: 0 }}
              animate={titleVisible ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="font-display font-light italic text-[#6B6B6B] leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)" }}
            >
              Projetamos a interseção.
            </motion.p>
          </div>
        </div>

        {/* Divider line */}
        <div className="relative mb-24">
          <div className="h-[1px] bg-[rgba(42,42,42,0.4)] w-full" />
          <motion.div
            className="absolute top-0 left-0 h-[1px] bg-[#3A3A3A] origin-left"
            style={{ scaleX: lineScale, width: "100%" }}
          />
        </div>

        {/* Principles */}
        <div
          ref={textRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {manifestoText.map((item, i) => (
            <motion.div
              key={item.index}
              initial={{ opacity: 0, y: 40 }}
              animate={textVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="group"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="font-body text-[10px] tracking-[0.2em] text-[#3A3A3A] mt-1">
                  {item.index}
                </span>
                <div className="flex-1 h-[1px] bg-[rgba(42,42,42,0.6)] mt-3 group-hover:bg-[rgba(107,107,107,0.4)] transition-colors duration-500" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-light text-[#C8C8C8] tracking-[-0.02em] mb-4 group-hover:text-[#F2EFE8] transition-colors duration-500">
                {item.title}
              </h3>
              <p className="font-body text-[13px] font-light text-[#6B6B6B] leading-relaxed group-hover:text-[#9A9A9A] transition-colors duration-500">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={textVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 pt-12 border-t border-[rgba(42,42,42,0.4)] grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "14", label: "Anos de prática" },
            { value: "87", label: "Projetos realizados" },
            { value: "12", label: "Premiações nacionais" },
            { value: "4", label: "Países de atuação" },
          ].map((stat, i) => (
            <div key={stat.label}>
              <div className="font-display text-5xl md:text-6xl font-light text-[#F2EFE8] tracking-[-0.04em] mb-2">
                {stat.value}
              </div>
              <div className="font-body text-[11px] tracking-[0.1em] text-[#3A3A3A] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

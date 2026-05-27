"use client";

import { motion } from "framer-motion";

const items = [
  "Arquitetura Contemporânea",
  "Concreto & Luz",
  "Permanência",
  "São Paulo",
  "Brasil",
  "Est. 2010",
  "87 Projetos",
  "Matéria & Emoção",
];

export function Marquee() {
  const doubled = [...items, ...items, ...items];

  return (
    <div className="relative bg-[#111111] border-y border-[rgba(42,42,42,0.4)] py-5 overflow-hidden">
      <div className="marquee-container">
        <motion.div
          className="marquee-track"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-body text-[11px] tracking-[0.2em] text-[#6B6B6B] uppercase whitespace-nowrap px-8">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#3A3A3A] flex-shrink-0" />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

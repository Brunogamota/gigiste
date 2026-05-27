"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = ["transforma", "redefine", "eleva", "revela"];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#0A0A0A]"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* Video / image layer */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: videoY }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=80"
        >
          <source
            src="https://player.vimeo.com/external/434045526.hd.mp4?s=c27eecc69a27dbc4ff2b87d38aacb90d3b408bf3&profile_id=175"
            type="video/mp4"
          />
        </video>
        {/* Fallback bg */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=80')",
          }}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0A0A0A]/50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.0) 40%, rgba(10,10,10,0.0) 55%, rgba(10,10,10,0.88) 100%)",
        }}
      />

      {/* Text content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="absolute inset-0 flex flex-col justify-end px-6 sm:px-10 md:px-14 pb-16 sm:pb-20 md:pb-28"
      >
        {/* Eyebrow */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.2, ease: [0.19, 1, 0.22, 1] }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <div className="w-6 sm:w-8 h-[1px] bg-[#6B6B6B]" />
            <span className="font-body text-[10px] tracking-[0.2em] text-[#6B6B6B] uppercase">
              Arquitetura Contemporânea
            </span>
          </motion.div>
        )}

        {/* Headline — linha 1 */}
        <div className="overflow-hidden mb-1">
          {mounted && (
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 3.4, ease: [0.19, 1, 0.22, 1] }}
              className="font-display font-light text-[#F2EFE8] leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.6rem, 10vw, 10rem)" }}
            >
              Arquitetura que
            </motion.h1>
          )}
        </div>

        {/* Headline — linha 2 com palavra animada */}
        <div className="overflow-hidden mb-1">
          {mounted && (
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 3.55, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-4"
            >
              {/* Container da palavra animada com largura fixa */}
              <span
                className="relative inline-block overflow-hidden"
                style={{
                  fontSize: "clamp(2.6rem, 10vw, 10rem)",
                  lineHeight: "0.92",
                  minWidth: "clamp(8rem, 30vw, 30rem)",
                  height: "clamp(2.4rem, 9.5vw, 9.5rem)",
                  verticalAlign: "bottom",
                }}
              >
                {words.map((word, i) => (
                  <motion.span
                    key={word}
                    className="font-display font-light italic text-[#9A9A9A] tracking-[-0.04em] absolute left-0 bottom-0 whitespace-nowrap"
                    style={{ fontSize: "clamp(2.6rem, 10vw, 10rem)", lineHeight: "0.92" }}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{
                      y: i === wordIndex ? "0%" : i < wordIndex ? "-110%" : "110%",
                      opacity: i === wordIndex ? 1 : 0,
                    }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span
                className="font-display font-light text-[#F2EFE8] tracking-[-0.04em]"
                style={{ fontSize: "clamp(2.6rem, 10vw, 10rem)", lineHeight: "0.92" }}
              >
                espaço
              </span>
            </motion.div>
          )}
        </div>

        {/* Headline — linha 3 */}
        <div className="overflow-hidden">
          {mounted && (
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 3.7, ease: [0.19, 1, 0.22, 1] }}
              className="font-display font-light text-[#F2EFE8] leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.6rem, 10vw, 10rem)" }}
            >
              em legado.
            </motion.h1>
          )}
        </div>

        {/* Subline + CTA */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4.0, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-8 sm:mt-12 gap-6"
          >
            <p className="font-body text-[13px] sm:text-[15px] font-light text-[#6B6B6B] max-w-xs sm:max-w-md leading-relaxed">
              Projetamos experiências arquitetônicas que unem
              permanência, estética e emoção.
            </p>
            <a href="#projetos" className="btn-premium self-start sm:self-auto flex-shrink-0">
              <span>Ver Projetos</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator — hidden on very small screens */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3"
        >
          <span className="font-body text-[9px] tracking-[0.25em] text-[#3A3A3A] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#3A3A3A] to-transparent overflow-hidden">
            <motion.div
              className="w-full h-1/2 bg-[#6B6B6B]"
              animate={{ y: ["0%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}

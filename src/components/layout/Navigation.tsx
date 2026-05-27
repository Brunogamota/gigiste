"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Projetos", href: "#projetos", index: "01" },
  { label: "Filosofia", href: "#filosofia", index: "02" },
  { label: "Processo", href: "#processo", index: "03" },
  { label: "Studio", href: "#studio", index: "04" },
  { label: "Contato", href: "#contato", index: "05" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-6 md:py-8 transition-all duration-700 ${
          scrolled ? "bg-[rgba(10,10,10,0.8)] backdrop-blur-[20px]" : ""
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.8, ease: [0.19, 1, 0.22, 1] }}
      >
        <Link href="/" className="group">
          <span className="font-display text-2xl font-light tracking-[0.25em] text-[#F2EFE8] transition-opacity duration-300 group-hover:opacity-60">
            Horst&Co
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-2 font-body text-[11px] tracking-[0.18em] text-[#6B6B6B] uppercase transition-colors duration-300 hover:text-[#C8C8C8]"
            >
              <span className="text-[9px] tracking-[0.15em] text-[#3A3A3A] group-hover:text-[#6B6B6B] transition-colors duration-300">
                {link.index}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex flex-col items-end justify-center gap-[6px] w-10 h-10"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="block h-[1px] bg-[#C8C8C8] origin-center"
            style={{ width: isOpen ? "28px" : "28px" }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-[1px] bg-[#6B6B6B] w-[18px]"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="block h-[1px] bg-[#C8C8C8] w-[28px] origin-center"
          />
        </button>
      </motion.header>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#0A0A0A]" />
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 20% 50%, rgba(42,42,42,0.4) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 flex flex-col h-full px-8 md:px-14 pt-32 pb-12">
              {/* Links */}
              <nav className="flex-1 flex flex-col justify-center gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + i * 0.08,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-6 py-3 border-b border-[rgba(42,42,42,0.5)]"
                    >
                      <span className="text-[10px] tracking-[0.2em] text-[#3A3A3A] font-body transition-colors duration-300 group-hover:text-[#6B6B6B]">
                        {link.index}
                      </span>
                      <span className="font-display text-6xl sm:text-7xl md:text-8xl font-light text-[#F2EFE8] tracking-[-0.04em] leading-none transition-all duration-500 group-hover:text-[#9A9A9A] group-hover:translate-x-3">
                        {link.label}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Footer info */}
              <motion.div
                className="flex items-end justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <div>
                  <p className="font-body text-[10px] tracking-[0.2em] text-[#3A3A3A] uppercase mb-2">
                    Localização
                  </p>
                  <p className="font-body text-sm font-light text-[#6B6B6B]">
                    São Paulo, Brasil
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-body text-[10px] tracking-[0.2em] text-[#3A3A3A] uppercase mb-2">
                    Contato
                  </p>
                  <a
                    href="mailto:contato@horstandco.arq.br"
                    className="font-body text-sm font-light text-[#6B6B6B] hover:text-[#C8C8C8] transition-colors duration-300"
                  >
                    contato@horstandco.arq.br
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

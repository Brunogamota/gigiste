"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export function Footer() {
  const { ref, isVisible } = useReveal();

  return (
    <footer
      ref={ref}
      className="relative bg-[#0A0A0A] border-t border-[rgba(42,42,42,0.6)] px-8 md:px-14 pt-20 pb-10"
    >
      {/* Top grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="col-span-2 md:col-span-1"
        >
          <span className="font-display text-3xl font-light tracking-[0.2em] text-[#F2EFE8] block mb-6">
            Horst&Co
          </span>
          <p className="font-body text-[13px] font-light text-[#6B6B6B] leading-relaxed max-w-[200px]">
            Arquitetura que transforma espaço em legado permanente.
          </p>
        </motion.div>

        {/* Nav */}
        {[
          {
            title: "Navegação",
            links: [
              { label: "Projetos", href: "#projetos" },
              { label: "Filosofia", href: "#filosofia" },
              { label: "Processo", href: "#processo" },
              { label: "Studio", href: "#studio" },
            ],
          },
          {
            title: "Serviços",
            links: [
              { label: "Residencial", href: "#" },
              { label: "Comercial", href: "#" },
              { label: "Institucional", href: "#" },
              { label: "Interiores", href: "#" },
            ],
          },
          {
            title: "Contato",
            links: [
              { label: "contato@horstandco.arq.br", href: "mailto:contato@horstandco.arq.br" },
              { label: "+55 11 9999-0000", href: "tel:+5511999900000" },
              { label: "São Paulo, SP", href: "#" },
            ],
          },
        ].map((col, colIndex) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1 + colIndex * 0.1,
              ease: [0.19, 1, 0.22, 1],
            }}
          >
            <p className="font-body text-[9px] tracking-[0.25em] text-[#3A3A3A] uppercase mb-6">
              {col.title}
            </p>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[13px] font-light text-[#6B6B6B] hover:text-[#C8C8C8] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[rgba(42,42,42,0.6)] mb-8" />

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-body text-[11px] tracking-[0.1em] text-[#3A3A3A]">
          © {new Date().getFullYear()} Horst&Co Arquitetura. Todos os direitos reservados.
        </p>
        <p className="font-body text-[11px] tracking-[0.1em] text-[#3A3A3A]">
          CAU/SP — A0000000-0
        </p>
      </div>
    </footer>
  );
}

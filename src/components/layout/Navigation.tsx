"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-[#F8F7F4] transition-all duration-300 ${scrolled ? "border-b border-[#E0DDD8]" : ""}`}>
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 h-16 md:h-20">
          <Link href="/" className="font-[family-name:var(--font-canela)] text-xl font-light tracking-widest text-[#111111] hover:opacity-60 transition-opacity duration-300">
            Horst&Co
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className="font-[family-name:var(--font-suisse)] text-[10px] font-light tracking-[0.2em] text-[#888888] uppercase hover:text-[#111111] transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </nav>
          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px] w-8 h-8 items-end justify-center" aria-label="Menu">
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="block w-6 h-[1px] bg-[#111111] origin-center" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-4 h-[1px] bg-[#888888]" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="block w-6 h-[1px] bg-[#111111] origin-center" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#F8F7F4] border-b border-[#E0DDD8] px-6 py-8"
          >
            <nav className="flex flex-col gap-6">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-suisse)] text-[11px] tracking-[0.2em] text-[#888888] uppercase hover:text-[#111111] transition-colors duration-200">
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

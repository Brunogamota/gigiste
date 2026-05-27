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
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: "#F7F5F2",
          borderBottom: scrolled ? "1px solid #DEDAD4" : "1px solid transparent",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-14 lg:px-20" style={{ height: 64 }}>
          <Link
            href="/"
            className="font-display font-light tracking-[0.18em] text-[#0F0F0F] hover:opacity-50 transition-opacity duration-300"
            style={{ fontSize: "1.1rem" }}
          >
            Horst&amp;Co
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-[10px] tracking-[0.22em] text-[#8A8A8A] uppercase hover:text-[#0F0F0F] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-6 h-5 flex flex-col justify-between"
            aria-label={open ? "Fechar" : "Menu"}
          >
            <motion.span
              className="block w-full h-px bg-[#0F0F0F] origin-center"
              animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-px bg-[#8A8A8A]"
              style={{ width: "60%" }}
              animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-full h-px bg-[#0F0F0F] origin-center"
              animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
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
            transition={{ duration: 0.22 }}
            className="fixed z-40 left-0 right-0 bg-[#F7F5F2]"
            style={{ top: 64, borderBottom: "1px solid #DEDAD4" }}
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-[11px] tracking-[0.22em] text-[#8A8A8A] uppercase hover:text-[#0F0F0F] transition-colors duration-200 py-1"
                >
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

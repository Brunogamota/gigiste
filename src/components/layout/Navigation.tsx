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
    const fn = () => setScrolled(window.scrollY > 80);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isLight = scrolled || open;
  const textColor = isLight ? "#0C0C0B" : "#F7F5F2";
  const mutedColor = isLight ? "#8A867F" : "rgba(247,245,242,0.6)";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          background: scrolled ? "#F7F5F2" : "transparent",
          borderBottom: scrolled ? "1px solid #DEDAD4" : "1px solid transparent",
        }}
      >
        <div
          className="flex items-center justify-between px-6 md:px-14 lg:px-20"
          style={{ height: 68 }}
        >
          <Link
            href="/"
            className="font-display font-light tracking-[0.2em] transition-all duration-500 hover:opacity-50"
            style={{ fontSize: "1.05rem", color: textColor }}
          >
            Horst&amp;Co
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-[10px] tracking-[0.22em] uppercase transition-all duration-300 hover:opacity-100"
                style={{ color: mutedColor, opacity: 0.8 }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-6 h-4 flex flex-col justify-between"
            aria-label={open ? "Fechar" : "Menu"}
          >
            <motion.span
              className="block w-full h-px origin-center"
              style={{ background: textColor }}
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="block h-px"
              style={{ width: "65%", background: mutedColor }}
              animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-full h-px origin-center"
              style={{ background: textColor }}
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-40 left-0 right-0 bg-[#F7F5F2]"
            style={{ top: 68, borderBottom: "1px solid #DEDAD4" }}
          >
            <nav className="flex flex-col px-6 py-10 gap-7">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                  className="font-body text-[11px] tracking-[0.25em] uppercase py-1 transition-colors duration-200"
                  style={{ color: "#8A867F" }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

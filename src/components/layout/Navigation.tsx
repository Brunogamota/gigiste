"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Projetos", href: "#projetos" },
  { label: "Estúdio", href: "#estudio" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const overHero = !scrolled && !menuOpen;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          height: "var(--nav-h)",
          background: overHero ? "transparent" : "rgba(249,248,246,0.97)",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="flex items-center justify-between h-full px-6 md:px-16 lg:px-20">
          {/* Brand */}
          <Link
            href="/"
            className="font-body font-light tracking-[0.28em] uppercase transition-opacity duration-300 hover:opacity-40 text-[11px]"
            style={{ color: overHero ? "#F9F8F6" : "var(--fg)" }}
          >
            Horst·Co
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-[11px] tracking-[0.08em] font-light transition-opacity duration-200 hover:opacity-40"
                style={{ color: overHero ? "rgba(249,248,246,0.75)" : "var(--muted)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile — menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden font-body text-[11px] tracking-[0.12em] uppercase transition-opacity duration-200 hover:opacity-40"
            style={{ color: overHero ? "rgba(249,248,246,0.75)" : "var(--muted)" }}
            aria-label={menuOpen ? "Fechar" : "Menu"}
          >
            {menuOpen ? "Fechar" : "Menu"}
          </button>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-between"
            style={{ background: "#F9F8F6", paddingTop: "var(--nav-h)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Links */}
            <nav className="flex flex-col justify-center flex-1 px-6 md:px-16 gap-0">
              {links.map((l, i) => (
                <div
                  key={l.href}
                  className="overflow-hidden"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <motion.a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-7 group"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span
                      className="font-display font-light leading-none tracking-[-0.02em] transition-colors duration-300 group-hover:text-[var(--muted)]"
                      style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)", color: "var(--fg)" }}
                    >
                      {l.label}
                    </span>
                    <span className="font-body text-[11px] tracking-[0.1em] text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      ↗
                    </span>
                  </motion.a>
                </div>
              ))}
            </nav>

            {/* Bottom info */}
            <motion.div
              className="px-6 md:px-16 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.42 }}
            >
              <p className="font-body text-[11px] text-[var(--muted)] tracking-[0.06em]">
                contato@horstandco.arq.br
              </p>
              <p className="font-body text-[11px] text-[var(--muted)] tracking-[0.06em]">
                São Paulo, Brasil — Est. 2010
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

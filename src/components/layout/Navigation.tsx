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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-[#F8F7F4]"
        style={{ borderBottom: scrolled ? "1px solid #E0DDD8" : "1px solid transparent" }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-light tracking-[0.15em] text-[#111111] hover:opacity-50 transition-opacity duration-300"
          >
            Horst&amp;Co
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-[10px] tracking-[0.2em] text-[#888888] uppercase hover:text-[#111111] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[6px] items-end justify-center w-8 h-8"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 9, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="block h-[1px] bg-[#111111] origin-center"
              style={{ width: 24 }}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-[1px] bg-[#888888]"
              style={{ width: 16 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -9, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="block h-[1px] bg-[#111111] origin-center"
              style={{ width: 24 }}
            />
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#F8F7F4] border-b border-[#E0DDD8] px-6 py-8"
          >
            <nav className="flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-[11px] tracking-[0.2em] text-[#888888] uppercase hover:text-[#111111] transition-colors duration-200 py-1"
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

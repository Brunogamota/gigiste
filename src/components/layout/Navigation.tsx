"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Projetos", href: "#projetos" },
  { label: "Escritório", href: "#escritorio" },
  { label: "Sobre", href: "#sobre" },
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

  const handleNavClick = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <>
      {/* 8px black top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[60]"
        style={{ height: 8, background: "#000000" }}
        aria-hidden
      />

      {/* Main header */}
      <header
        className="fixed left-0 right-0 z-50 transition-all duration-700"
        style={{
          top: 8,
          background: scrolled && !open ? "rgba(250,248,245,0.96)" : "transparent",
          backdropFilter: scrolled && !open ? "blur(8px)" : "none",
          borderBottom: scrolled && !open ? "1px solid var(--khaki)" : "1px solid transparent",
        }}
      >
        <div className="flex items-center justify-between px-8 md:px-12 lg:px-16" style={{ height: 64 }}>
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none transition-opacity duration-400 hover:opacity-50"
            onClick={() => setOpen(false)}
          >
            <span
              className="font-display font-light tracking-[0.12em]"
              style={{
                fontSize: "1.25rem",
                color: open ? "var(--white)" : scrolled ? "var(--leather)" : "var(--white)",
                transition: "color 0.5s ease",
              }}
            >
              H&amp;C
            </span>
            <span
              className="font-body tracking-[0.22em] uppercase"
              style={{
                fontSize: "0.45rem",
                color: open ? "rgba(255,255,255,0.5)" : scrolled ? "var(--taupe)" : "rgba(255,255,255,0.5)",
                transition: "color 0.5s ease",
                letterSpacing: "0.25em",
              }}
            >
              Beyond Architecture
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center items-end gap-[5px] w-8 h-8"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <span
              className="block h-px transition-all duration-400 origin-right"
              style={{
                width: open ? "100%" : "100%",
                background: open ? "var(--white)" : scrolled ? "var(--leather)" : "var(--white)",
                transform: open ? "rotate(-45deg) translateY(3px)" : "none",
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: open ? "0%" : "65%",
                background: open ? "var(--white)" : scrolled ? "var(--taupe)" : "rgba(255,255,255,0.55)",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-px transition-all duration-400 origin-right"
              style={{
                width: open ? "100%" : "100%",
                background: open ? "var(--white)" : scrolled ? "var(--leather)" : "var(--white)",
                transform: open ? "rotate(45deg) translateY(-3px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-between px-8 md:px-16 py-32 transition-all duration-700"
        style={{
          background: "var(--cacao)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          top: 8,
        }}
      >
        <nav className="flex flex-col gap-1 mt-8">
          {links.map((l, i) => (
            <div
              key={l.href}
              className="overflow-hidden"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <button
                onClick={() => handleNavClick(l.href)}
                className="group flex items-center justify-between w-full py-6 transition-all duration-300"
                style={{
                  transform: open ? "translateY(0)" : "translateY(40px)",
                  opacity: open ? 1 : 0,
                  transition: `transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08}s, opacity 0.6s ease ${i * 0.08}s`,
                }}
              >
                <span
                  className="font-display font-light italic leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                    color: "var(--pearl)",
                  }}
                >
                  {l.label}
                </span>
                <span
                  className="font-body text-xs tracking-[0.3em] uppercase transition-transform duration-300 group-hover:translate-x-2"
                  style={{ color: "var(--taupe)" }}
                >
                  →
                </span>
              </button>
            </div>
          ))}
        </nav>

        <div className="flex items-end justify-between">
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: "var(--taupe)" }}>
              Contato
            </p>
            <a
              href="mailto:contato@horstandco.com.br"
              className="font-display font-light text-sm transition-opacity duration-200 hover:opacity-60"
              style={{ color: "var(--pearl)" }}
            >
              contato@horstandco.com.br
            </a>
          </div>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-body text-[10px] tracking-[0.2em] uppercase transition-opacity duration-200 hover:opacity-60"
                style={{ color: "var(--taupe)" }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

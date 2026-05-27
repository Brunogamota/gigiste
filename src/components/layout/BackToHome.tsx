"use client";

import { useState, useEffect } from "react";

export function BackToHome() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fn = () => setShow(window.scrollY > window.innerHeight * 0.5);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed left-0 top-1/2 z-30 -translate-y-1/2 transition-all duration-500 hidden md:block"
      style={{
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        writingMode: "vertical-rl",
        transform: "translateY(-50%) rotate(180deg)",
        padding: "1rem 0.6rem",
      }}
      aria-label="Voltar ao início"
    >
      <span
        className="font-body tracking-[0.3em] uppercase text-[9px] transition-colors duration-300 hover:opacity-60"
        style={{ color: "var(--taupe)", letterSpacing: "0.3em" }}
      >
        Back to Home
      </span>
    </button>
  );
}

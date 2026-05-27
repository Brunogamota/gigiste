"use client";

import { useState, useEffect } from "react";

const previews = [
  { id: "projetos", label: "Projetos", img: "https://picsum.photos/seed/arch1/320/200" },
  { id: "escritorio", label: "Escritório", img: "https://picsum.photos/seed/arch2/320/200" },
  { id: "sobre", label: "Sobre", img: "https://picsum.photos/seed/arch3/320/200" },
  { id: "contato", label: "Contato", img: "https://picsum.photos/seed/arch4/320/200" },
];

export function SectionPreview() {
  const [current, setCurrent] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    previews.forEach((p, i) => {
      const el = document.getElementById(p.id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const next = i + 1 < previews.length ? i + 1 : null;
            setCurrent(next);
            setVisible(next !== null);
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrent(0);
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );
    const hero = document.getElementById("hero");
    if (hero) heroObs.observe(hero);

    return () => {
      observers.forEach((o) => o.disconnect());
      heroObs.disconnect();
    };
  }, []);

  if (current === null) return null;

  const preview = previews[current];

  return (
    <div
      className="fixed bottom-8 right-8 z-30 hidden md:block transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(10px)" }}
    >
      <div className="relative overflow-hidden" style={{ width: 140, height: 90 }}>
        <img
          src={preview.img}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden
        />
        <div
          className="absolute inset-0 flex items-end p-2"
          style={{ background: "linear-gradient(to top, rgba(38,38,38,0.8) 0%, transparent 100%)" }}
        >
          <span
            className="font-body text-white tracking-[0.2em] uppercase"
            style={{ fontSize: "0.55rem" }}
          >
            {preview.label} →
          </span>
        </div>
      </div>
    </div>
  );
}

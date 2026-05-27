"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Sobre() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.from(leftRef.current, {
      x: -50,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out",
    })
      .from(
        photoRef.current,
        {
          scale: 0.94,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1"
      )
      .from(
        rightRef.current,
        {
          x: 50,
          opacity: 0,
          duration: 1.3,
          ease: "power3.out",
        },
        "-=1.1"
      );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="py-32 md:py-44 overflow-hidden"
      style={{ background: "var(--pearl)" }}
    >
      {/* Label */}
      <div className="px-8 md:px-14 lg:px-20 mb-16 flex items-center gap-4">
        <p
          className="font-body tracking-[0.35em] uppercase"
          style={{ fontSize: "0.55rem", color: "var(--taupe)" }}
        >
          + Sobre Horst
        </p>
        <div className="flex-1 h-px" style={{ background: "var(--khaki)" }} />
      </div>

      {/* Split layout */}
      <div className="flex items-center justify-between gap-6 px-8 md:px-14 lg:px-20">
        {/* Left text */}
        <div
          ref={leftRef}
          className="flex-1 flex flex-col justify-center gap-8"
          style={{ minWidth: 0 }}
        >
          <h2
            className="font-display font-light leading-[0.88] tracking-[-0.04em] uppercase"
            style={{
              fontSize: "clamp(3rem, 6vw, 7rem)",
              color: "var(--leather)",
            }}
          >
            O<br />Olhar
          </h2>
          <p
            className="font-body font-light leading-relaxed"
            style={{ fontSize: "0.8rem", color: "var(--taupe)", maxWidth: "22ch" }}
          >
            Rafael Horst fundou o escritório com a convicção de que cada espaço carrega uma alma própria.
          </p>
        </div>

        {/* Center photo */}
        <div
          ref={photoRef}
          className="flex-shrink-0 overflow-hidden"
          style={{ width: "clamp(200px, 28vw, 380px)", aspectRatio: "3/4" }}
        >
          <img
            src="https://picsum.photos/seed/arquiteto/600/800"
            alt="Rafael Horst — Fundador"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right text */}
        <div
          ref={rightRef}
          className="flex-1 flex flex-col items-end justify-center gap-8 text-right"
          style={{ minWidth: 0 }}
        >
          <h2
            className="font-display font-light leading-[0.88] tracking-[-0.04em]"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 5.5rem)",
              color: "var(--leather)",
            }}
          >
            <em className="font-display" style={{ color: "var(--taupe)" }}>que recria</em><br />
            O Novo
          </h2>
          <a
            href="#contato"
            className="group font-body tracking-[0.25em] uppercase flex items-center gap-3 justify-end transition-opacity duration-300 hover:opacity-60"
            style={{ fontSize: "0.6rem", color: "var(--taupe)" }}
          >
            Falar com o estúdio
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>

      {/* Stats row */}
      <div
        className="mt-24 px-8 md:px-14 lg:px-20 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
        style={{ borderTop: "1px solid var(--khaki)" }}
      >
        {[
          { n: "14", label: "Anos de prática" },
          { n: "87+", label: "Projetos realizados" },
          { n: "12", label: "Prêmios nacionais" },
          { n: "4", label: "Países de atuação" },
        ].map((s) => (
          <div key={s.label}>
            <div
              className="font-display font-light leading-none mb-2"
              style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", color: "var(--leather)" }}
            >
              {s.n}
            </div>
            <p
              className="font-body tracking-[0.15em] uppercase"
              style={{ fontSize: "0.55rem", color: "var(--taupe)" }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

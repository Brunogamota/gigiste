"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { label: "Residencial", img: "https://picsum.photos/seed/res1/800/600", count: "24" },
  { label: "Comercial", img: "https://picsum.photos/seed/com1/800/600", count: "18" },
  { label: "Hospitalidade", img: "https://picsum.photos/seed/hosp1/800/600", count: "09" },
  { label: "Urban Design", img: "https://picsum.photos/seed/urb1/800/600", count: "12" },
  { label: "Mostras", img: "https://picsum.photos/seed/mos1/800/600", count: "24" },
];

export function Projetos() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const centerImgRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Split text cinematic entrance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.from(leftTextRef.current, {
      x: -80,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
    })
      .from(
        centerImgRef.current,
        {
          scale: 0.92,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1"
      )
      .from(
        rightTextRef.current,
        {
          x: 80,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=1.2"
      );

    // Grid items staggered
    gsap.from(gridRef.current?.children ?? [], {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className="py-32 md:py-44 overflow-hidden"
      style={{ background: "var(--pearl)" }}
    >
      {/* Section label */}
      <div className="px-8 md:px-14 lg:px-20 mb-20">
        <p
          className="font-body tracking-[0.35em] uppercase"
          style={{ fontSize: "0.55rem", color: "var(--taupe)" }}
        >
          + Projetos
        </p>
      </div>

      {/* Cinematic split title */}
      <div className="flex items-center justify-between gap-0 mb-20 overflow-hidden">
        {/* Left text */}
        <div
          ref={leftTextRef}
          className="flex-1 pl-8 md:pl-14 lg:pl-20 flex items-end"
          style={{ minWidth: 0 }}
        >
          <h2
            className="font-display font-light leading-[0.9] tracking-[-0.03em] uppercase"
            style={{
              fontSize: "clamp(3rem, 7vw, 8rem)",
              color: "var(--leather)",
            }}
          >
            Criando
          </h2>
        </div>

        {/* Center image */}
        <div
          ref={centerImgRef}
          className="flex-shrink-0 overflow-hidden"
          style={{ width: "clamp(160px, 22vw, 320px)", aspectRatio: "3/4" }}
        >
          <img
            src="https://picsum.photos/seed/projcenter/600/800"
            alt="Projetos Horst&Co"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right text */}
        <div
          ref={rightTextRef}
          className="flex-1 pr-8 md:pr-14 lg:pr-20 flex flex-col items-end justify-end"
          style={{ minWidth: 0 }}
        >
          <h2
            className="font-display font-light leading-[0.9] tracking-[-0.03em] text-right"
            style={{
              fontSize: "clamp(2rem, 5vw, 6rem)",
              color: "var(--taupe)",
              fontStyle: "italic",
            }}
          >
            obras
          </h2>
          <h2
            className="font-display font-light leading-[0.9] tracking-[-0.03em] uppercase text-right"
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 5.5rem)",
              color: "var(--leather)",
            }}
          >
            Inimagináveis
          </h2>
        </div>
      </div>

      {/* Categories grid */}
      <div
        ref={gridRef}
        className="px-8 md:px-14 lg:px-20"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1px",
          background: "var(--khaki)",
        }}
      >
        {categories.map((cat, i) => (
          <div
            key={cat.label}
            className="relative overflow-hidden group"
            style={{ background: "var(--pearl)", aspectRatio: "4/5", cursor: "pointer" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Photo (revealed on hover) */}
            <div
              className="absolute inset-0 transition-all duration-700"
              style={{
                opacity: hovered === i ? 1 : 0,
                transform: hovered === i ? "scale(1)" : "scale(1.04)",
              }}
            >
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "rgba(38,38,38,0.3)" }} />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <span
                className="font-body tracking-[0.2em] uppercase"
                style={{
                  fontSize: "0.5rem",
                  color: hovered === i ? "rgba(255,255,255,0.6)" : "var(--taupe)",
                  transition: "color 0.5s ease",
                }}
              >
                {cat.count} projetos
              </span>
              <h3
                className="font-display font-light leading-tight"
                style={{
                  fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)",
                  color: hovered === i ? "var(--white)" : "var(--leather)",
                  transition: "color 0.5s ease",
                }}
              >
                {cat.label}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

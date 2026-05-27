"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.from(headlineRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(detailsRef.current?.children ?? [], {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: detailsRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="py-36 md:py-52"
      style={{ background: "var(--leather)" }}
    >
      <div className="px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto">
        {/* Section label */}
        <p
          className="font-body tracking-[0.35em] uppercase mb-16"
          style={{ fontSize: "0.55rem", color: "var(--taupe)" }}
        >
          + Contato
        </p>

        {/* Main headline */}
        <div ref={headlineRef} className="mb-24">
          <h2
            className="font-display font-light leading-[0.88] tracking-[-0.04em]"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 12rem)",
              color: "var(--white)",
            }}
          >
            Vamos criar<br />
            <em>algo</em><br />
            extraordinário?
          </h2>
        </div>

        {/* Contact details */}
        <div ref={detailsRef} className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Email */}
          <div>
            <p
              className="font-body tracking-[0.25em] uppercase mb-4"
              style={{ fontSize: "0.5rem", color: "var(--taupe)" }}
            >
              Email
            </p>
            <a
              href="mailto:contato@horstandco.com.br"
              className="font-display font-light transition-opacity duration-300 hover:opacity-60"
              style={{
                fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
                color: "var(--white)",
                borderBottom: "1px solid rgba(163,150,141,0.3)",
                paddingBottom: "0.3rem",
              }}
            >
              contato@horstandco.com.br
            </a>
          </div>

          {/* Phone */}
          <div>
            <p
              className="font-body tracking-[0.25em] uppercase mb-4"
              style={{ fontSize: "0.5rem", color: "var(--taupe)" }}
            >
              Telefone
            </p>
            <a
              href="tel:+551130001000"
              className="font-display font-light transition-opacity duration-300 hover:opacity-60"
              style={{
                fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
                color: "var(--white)",
                borderBottom: "1px solid rgba(163,150,141,0.3)",
                paddingBottom: "0.3rem",
              }}
            >
              +55 11 3000-1000
            </a>
          </div>

          {/* Social */}
          <div>
            <p
              className="font-body tracking-[0.25em] uppercase mb-4"
              style={{ fontSize: "0.5rem", color: "var(--taupe)" }}
            >
              Redes Sociais
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Instagram", href: "#" },
                { label: "Pinterest", href: "#" },
                { label: "LinkedIn", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group flex items-center gap-2 font-body tracking-[0.15em] uppercase transition-opacity duration-300 hover:opacity-60"
                  style={{ fontSize: "0.6rem", color: "var(--white)" }}
                >
                  {s.label}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

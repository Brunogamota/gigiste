"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Image zoom on scroll
    gsap.to(imgRef.current, {
      scale: 1.06,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Monogram parallax
    gsap.to(monogramRef.current, {
      y: -120,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Content fade out on scroll
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "40% top",
        scrub: 1,
      },
    });

    // Entry animations
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from(monogramRef.current, {
      opacity: 0,
      scale: 1.04,
      duration: 2,
      ease: "power2.out",
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: 600 }}
    >
      {/* Background image with zoom */}
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <img
          src="https://picsum.photos/seed/horstarch/2000/1200"
          alt="Horst&Co Architecture"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(38,38,38,0.5) 0%, rgba(38,38,38,0.2) 50%, rgba(38,38,38,0.7) 100%)",
          }}
        />
      </div>

      {/* Giant H&C monogram */}
      <div
        ref={monogramRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none will-change-transform"
      >
        <span
          className="font-display font-light leading-none tracking-[-0.04em]"
          style={{
            fontSize: "clamp(8rem, 28vw, 32rem)",
            color: "rgba(255,255,255,0.08)",
            letterSpacing: "-0.06em",
          }}
          aria-hidden
        >
          H&amp;C
        </span>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative h-full flex flex-col justify-between px-8 md:px-14 lg:px-20"
        style={{ paddingTop: 88, paddingBottom: 48 }}
      >
        {/* Top label */}
        <p
          className="font-body tracking-[0.28em] uppercase"
          style={{ fontSize: "0.6rem", color: "rgba(250,248,245,0.45)" }}
        >
          Arquitetura Contemporânea — São Paulo
        </p>

        {/* Center / main headline */}
        <div>
          <p
            className="font-body tracking-[0.22em] uppercase mb-6"
            style={{ fontSize: "0.55rem", color: "rgba(250,248,245,0.4)" }}
          >
            Est. 2010
          </p>
          <h1
            className="font-display font-light leading-[0.95] tracking-[-0.03em]"
            style={{
              fontSize: "clamp(3rem, 8vw, 9rem)",
              color: "var(--white)",
              maxWidth: "14ch",
            }}
          >
            Arquitetura<br />
            <em>além do</em><br />
            imaginário.
          </h1>
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between">
          <div>
            <p
              className="font-display font-light tracking-[0.06em]"
              style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)", color: "rgba(250,248,245,0.7)" }}
            >
              Horst &amp; Co
            </p>
            <p
              className="font-body tracking-[0.2em] uppercase"
              style={{ fontSize: "0.5rem", color: "rgba(250,248,245,0.35)", marginTop: 2 }}
            >
              Beyond Architecture
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-px overflow-hidden"
              style={{ height: 48, background: "rgba(250,248,245,0.12)" }}
            >
              <div
                className="w-full"
                style={{
                  height: "100%",
                  background: "rgba(250,248,245,0.45)",
                  animation: "scrollBar 1.8s ease-in-out infinite",
                }}
              />
            </div>
            <span
              className="font-body tracking-[0.25em] uppercase"
              style={{ fontSize: "0.45rem", color: "rgba(250,248,245,0.3)", writingMode: "vertical-rl" }}
            >
              Scroll
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollBar {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}

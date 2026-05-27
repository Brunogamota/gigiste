"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Escritorio() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const centerPhotoRef = useRef<HTMLDivElement>(null);
  const photo1Ref = useRef<HTMLDivElement>(null);
  const photo3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Split text entrance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.from(leftTextRef.current, {
      x: -60,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out",
    }).from(
      rightTextRef.current,
      {
        x: 60,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
      },
      "-=1.1"
    );

    // Center photo grows on scroll
    gsap.to(centerPhotoRef.current, {
      scale: 1.04,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.5,
      },
    });

    // Side photos fade in
    gsap.from([photo1Ref.current, photo3Ref.current], {
      opacity: 0,
      y: 30,
      duration: 1.1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: centerPhotoRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="escritorio"
      className="py-32 md:py-44 overflow-hidden"
      style={{ background: "var(--khaki)" }}
    >
      {/* Section label */}
      <div className="px-8 md:px-14 lg:px-20 mb-16">
        <p
          className="font-body tracking-[0.35em] uppercase"
          style={{ fontSize: "0.55rem", color: "var(--taupe)" }}
        >
          + Escritório
        </p>
      </div>

      {/* Split title with photos */}
      <div className="px-8 md:px-14 lg:px-20">
        {/* Title row */}
        <div className="flex items-end justify-between mb-12 gap-8">
          <div ref={leftTextRef} style={{ flex: "0 0 auto" }}>
            <h2
              className="font-display font-light leading-[0.88] tracking-[-0.04em] uppercase"
              style={{ fontSize: "clamp(3.5rem, 8vw, 10rem)", color: "var(--leather)" }}
            >
              Arqui-<br />tetura
            </h2>
          </div>

          <div ref={rightTextRef} className="text-right" style={{ flex: "0 0 auto" }}>
            <p
              className="font-display font-light italic leading-[1.0]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 3.5rem)", color: "var(--taupe)" }}
            >
              em constante
            </p>
            <h2
              className="font-display font-light leading-[0.88] tracking-[-0.04em] uppercase"
              style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)", color: "var(--leather)" }}
            >
              Evolução
            </h2>
          </div>
        </div>

        {/* Asymmetric photo gallery */}
        <div className="flex gap-4 md:gap-6 items-end">
          {/* Left photo — shorter */}
          <div
            ref={photo1Ref}
            className="flex-1 overflow-hidden"
            style={{ aspectRatio: "3/4", maxHeight: "clamp(220px, 35vw, 480px)" }}
          >
            <img
              src="https://picsum.photos/seed/esc1/600/800"
              alt="Escritório Horst&Co"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center photo — tallest, grows on scroll */}
          <div
            ref={centerPhotoRef}
            className="flex-[1.4] overflow-hidden will-change-transform"
            style={{ aspectRatio: "2/3" }}
          >
            <img
              src="https://picsum.photos/seed/esc2/800/1200"
              alt="Escritório Horst&Co"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right photo — medium */}
          <div
            ref={photo3Ref}
            className="flex-[0.85] overflow-hidden"
            style={{ aspectRatio: "4/5", maxHeight: "clamp(200px, 32vw, 440px)" }}
          >
            <img
              src="https://picsum.photos/seed/esc3/600/750"
              alt="Escritório Horst&Co"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

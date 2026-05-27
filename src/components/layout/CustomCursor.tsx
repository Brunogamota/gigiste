"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const animate = () => {
      dotX += (mouseX - dotX) * 0.1;
      dotY += (mouseY - dotY) * 0.1;
      if (dot) {
        dot.style.transform = `translate(${dotX - 5}px, ${dotY - 5}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden
    >
      <div
        className="w-[10px] h-[10px] rounded-full"
        style={{
          background: "var(--leather)",
          mixBlendMode: "difference",
          filter: "invert(1)",
        }}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useParallax(strength = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const y = useMotionValue(0);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const relativePos = (rect.top + rect.height / 2 - viewHeight / 2) / viewHeight;
      y.set(relativePos * strength * 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [y, strength]);

  return { ref: ref as React.RefObject<HTMLElement>, y: smoothY };
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40 });

  const ringX = useSpring(mouseX, { stiffness: 120, damping: 28 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverTarget =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "hover";
      const isTextTarget =
        target.dataset.cursor === "text";

      setIsHovering(!!isHoverTarget);
      setIsText(!!isTextTarget);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleElementHover);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleElementHover);
    };
  }, [isVisible, mouseX, mouseY]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={cursorDotRef}
        className="cursor fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="rounded-full bg-[#F2EFE8]"
          animate={{
            width: isText ? 60 : isHovering ? 20 : 8,
            height: isText ? 60 : isHovering ? 20 : 8,
            x: isText ? -30 : isHovering ? -10 : -4,
            y: isText ? -30 : isHovering ? -10 : -4,
            opacity: isVisible ? 1 : 0,
            background: isText ? "rgba(242,239,232,0.08)" : "#F2EFE8",
          }}
          transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="cursor fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="rounded-full border border-[rgba(242,239,232,0.4)]"
          animate={{
            width: isText ? 0 : isHovering ? 64 : 40,
            height: isText ? 0 : isHovering ? 64 : 40,
            x: isText ? 0 : isHovering ? -32 : -20,
            y: isText ? 0 : isHovering ? -32 : -20,
            opacity: isVisible ? 1 : 0,
            borderColor: isHovering
              ? "rgba(242,239,232,0.8)"
              : "rgba(242,239,232,0.3)",
          }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        />
      </motion.div>
    </>
  );
}

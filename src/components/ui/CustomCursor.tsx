"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true); // assume touch until proven otherwise

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40 });
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 28 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 28 });

  useEffect(() => {
    // Only enable on true pointer devices
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (hasCoarsePointer) return;
    setIsTouch(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button");
      setIsHovering(hoverable);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleHover);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleHover);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="rounded-full bg-[#F2EFE8]"
          animate={{
            width: isHovering ? 20 : 8,
            height: isHovering ? 20 : 8,
            x: isHovering ? -10 : -4,
            y: isHovering ? -10 : -4,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="rounded-full border border-[rgba(242,239,232,0.4)]"
          animate={{
            width: isHovering ? 64 : 40,
            height: isHovering ? 64 : 40,
            x: isHovering ? -32 : -20,
            y: isHovering ? -32 : -20,
            opacity: isVisible ? 1 : 0,
            borderColor: isHovering ? "rgba(242,239,232,0.8)" : "rgba(242,239,232,0.3)",
          }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        />
      </motion.div>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"counting" | "reveal" | "done">("counting");

  useEffect(() => {
    // Lock scroll during load
    document.body.style.overflow = "hidden";

    const duration = 2200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(p));

      if (p < 100) {
        requestAnimationFrame(animate);
      } else {
        setPhase("reveal");
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
          setPhase("done");
        }, 1200);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9000] bg-[#0A0A0A] flex items-end justify-between p-10 md:p-14"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] },
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="font-display text-3xl font-light tracking-[0.2em] text-[#F2EFE8]">
              FORMA
            </span>
          </motion.div>

          {/* Progress */}
          <div className="flex items-end gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-end gap-3"
            >
              <div className="w-48 h-[1px] bg-[#1A1A1A] relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#6B6B6B]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.05 }}
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="font-body text-[10px] tracking-[0.2em] text-[#3A3A3A] uppercase">
                  Carregando
                </span>
                <span className="font-body text-sm font-light text-[#6B6B6B] font-[feature-settings:'tnum']">
                  {String(progress).padStart(3, "0")}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Center large number */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "counting" ? 0.04 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-[30vw] font-light text-[#F2EFE8] leading-none select-none">
              {String(progress).padStart(2, "0")}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
